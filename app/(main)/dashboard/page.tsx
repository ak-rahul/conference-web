import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, User, LogOut } from 'lucide-react'
import { signOut } from '@/app/(auth)/login/actions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch registration details
    const { data: registration } = await supabase
        .from('registrations')
        .select('*')
        .eq('user_id', user.id)
        .single()

    // Fetch submissions
    const { data: submissions } = await supabase
        .from('submissions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container py-6 px-4 md:px-6 flex justify-between items-center">
                <PageHeader
                    title="Dashboard"
                    description={`Welcome back, ${user.user_metadata.full_name || 'User'}`}
                    className="pb-0"
                />
                <form action={signOut}>
                    <Button variant="outline" size="sm">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </form>
            </div>

            <div className="container py-8 px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {/* Registration Status */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Registration
                            </CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            {registration ? (
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold capitalize">{registration.status}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Category: {registration.category}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm text-muted-foreground">Not registered yet</p>
                                    <Button asChild size="sm">
                                        <Link href="/register">Register Now</Link>
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Paper Submission Stats */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Submitted Papers
                            </CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{submissions?.length || 0}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Submissions */}
                <h2 className="text-2xl font-bold tracking-tight mb-4">Your Submissions</h2>
                {submissions && submissions.length > 0 ? (
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Track</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {submissions.map((paper) => (
                                    <TableRow key={paper.id}>
                                        <TableCell className="font-medium">{paper.title}</TableCell>
                                        <TableCell>{paper.track}</TableCell>
                                        <TableCell className="capitalize">{paper.status}</TableCell>
                                        <TableCell className="text-right">
                                            {new Date(paper.created_at).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-8">
                            <p className="text-muted-foreground mb-4">You haven't submitted any papers yet.</p>
                            <Button asChild>
                                <Link href="/submit-paper">Submit New Paper</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
