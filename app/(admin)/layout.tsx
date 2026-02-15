import { AdminHeader } from "@/components/layout/admin-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { createClient } from "@/lib/supabase/server"
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <AdminHeader user={user} />
            <div className="flex-1 bg-muted/10">
                <div className="container py-8 px-4 md:px-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-8">Admin Console</h1>
                    {children}
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}
