import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, ClipboardList, TrendingUp } from "lucide-react"
import Link from 'next/link'
import { createClient } from "@/lib/supabase/server"

export default async function AdminDashboard() {
    const supabase = await createClient()

    // Fetch stats
    const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true })
    const { count: registrationCount } = await supabase.from('registrations').select('*', { count: 'exact', head: true })
    const { count: submissionCount } = await supabase.from('submissions').select('*', { count: 'exact', head: true })

    const stats = [
        {
            title: "Total Users",
            value: userCount || 0,
            icon: Users,
            href: "/admin/users",
            color: "text-blue-500"
        },
        {
            title: "Registrations",
            value: registrationCount || 0,
            icon: ClipboardList,
            href: "/admin/registrations",
            color: "text-green-500"
        },
        {
            title: "Paper Submissions",
            value: submissionCount || 0,
            icon: FileText,
            href: "/admin/submissions",
            color: "text-purple-500"
        },
        {
            title: "Revenue (Est)",
            value: "$0", // Placeholder
            icon: TrendingUp,
            href: "#",
            color: "text-yellow-500"
        }
    ]

    return (
        <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Link href={stat.href} key={index}>
                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Chart Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        System initialized
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Admin dashboard ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
