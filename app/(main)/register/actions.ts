'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { registrationSchema } from '@/lib/validations/schemas'

export async function registerParticipant(formData: FormData) {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: 'You must be logged in to register.' }
    }

    const rawData = {
        fullName: formData.get('fullName'),
        affiliation: formData.get('affiliation'),
        category: formData.get('category'),
        paymentProofUrl: formData.get('paymentProof'),
    }

    const validatedFields = registrationSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: 'Invalid registration data. Please check your inputs.' }
    }

    const { fullName, affiliation, category, paymentProofUrl } = validatedFields.data

    // Save registration details
    const { error: insertError } = await supabase
        .from('registrations')
        .insert({
            user_id: user.id,
            full_name: fullName,
            affiliation,
            category,
            payment_proof_url: paymentProofUrl,
            status: 'pending' // pending verification
        })

    if (insertError) {
        return { error: `Registration failed: ${insertError.message}` }
    }

    revalidatePath('/dashboard')
    return { success: 'Registration submitted successfully! We will verify your payment and notify you.' }
}
