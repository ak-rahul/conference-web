'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { paperSubmissionSchema } from '@/lib/validations/schemas'

export async function submitPaper(formData: FormData) {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: 'You must be logged in to submit a paper.' }
    }

    const rawData = {
        title: formData.get('title'),
        abstract: formData.get('abstract'),
        track: formData.get('track'),
        paperUrl: formData.get('paperUrl'),
    }

    const validatedFields = paperSubmissionSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: 'Invalid submission data. Please check your inputs.' }
    }

    const { title, abstract, track, paperUrl } = validatedFields.data

    // Save paper details
    const { error: insertError } = await supabase
        .from('submissions')
        .insert({
            user_id: user.id,
            title,
            abstract,
            track,
            file_url: paperUrl,
            status: 'submitted',
            authors: user.user_metadata.full_name // simplified for MVP, just the submitter
        })

    if (insertError) {
        return { error: `Submission failed: ${insertError.message}` }
    }

    revalidatePath('/dashboard')
    return { success: 'Paper submitted successfully!' }
}
