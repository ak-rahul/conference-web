import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Protected routes
    if (
        !user &&
        (request.nextUrl.pathname.startsWith('/dashboard') ||
            request.nextUrl.pathname.startsWith('/submit-paper') ||
            request.nextUrl.pathname.startsWith('/admin') ||
            request.nextUrl.pathname.startsWith('/register'))
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    // Redirect Admins away from user dashboard
    if (user && request.nextUrl.pathname.startsWith('/dashboard')) {
        const role = user.user_metadata?.role
        const email = user.email

        if (role === 'admin' || email === 'admin@icar2026.org') {
            const url = request.nextUrl.clone()
            url.pathname = '/admin'
            return NextResponse.redirect(url)
        }
    }

    // Role-based protection: Admin
    if (user && request.nextUrl.pathname.startsWith('/admin')) {
        // We can check metadata. Ideally, use a custom claim or DB check, 
        // but for this implementation we'll check user_metadata.role or email.
        const role = user.user_metadata?.role
        const email = user.email

        // Hardcoded admin email check as per plan or role check if set manually in DB
        const isAdmin = role === 'admin' || email === 'admin@icar2026.org'

        if (!isAdmin) {
            const url = request.nextUrl.clone()
            url.pathname = '/dashboard' // Redirect unauthorized users to dashboard
            return NextResponse.redirect(url)
        }
    }

    // Role-based protection: Presenter
    if (user && request.nextUrl.pathname.startsWith('/submit-paper')) {
        const role = user.user_metadata?.role
        // Only presenters (authors) can submit papers. Admins can too for testing.
        if (role !== 'presenter' && role !== 'admin' && user.email !== 'admin@icar2026.org') {
            const url = request.nextUrl.clone()
            url.pathname = '/dashboard'
            return NextResponse.redirect(url)
        }
    }

    return supabaseResponse
}
