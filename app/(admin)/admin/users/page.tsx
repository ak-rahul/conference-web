import { createClient } from "@/lib/supabase/server"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function UsersPage() {
    const supabase = await createClient()
    const { data: users } = await supabase.from('profiles').select('*').order('full_name', { ascending: true })

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Users</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Affiliation</TableHead>
                            <TableHead>Country</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.full_name || 'N/A'}</TableCell>
                                <TableCell className="capitalize">{user.role}</TableCell>
                                <TableCell>{user.affiliation || '-'}</TableCell>
                                <TableCell>{user.country || '-'}</TableCell>
                            </TableRow>
                        ))}
                        {users?.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
