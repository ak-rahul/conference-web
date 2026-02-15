import { createClient } from "@/lib/supabase/server"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, ExternalLink } from "lucide-react"

export default async function RegistrationsPage() {
    const supabase = await createClient()

    // Fetch all registrations with user details
    const { data: registrations } = await supabase
        .from('registrations')
        .select(`
            *,
            user:user_id (
                full_name,
                email
            )
        `)
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Manage Registrations</h2>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Payment Proof</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {registrations?.map((reg) => (
                            <TableRow key={reg.id}>
                                <TableCell>
                                    <div className="font-medium">{reg.user?.full_name || 'Unknown'}</div>
                                    <div className="text-sm text-muted-foreground">{reg.user?.email}</div>
                                </TableCell>
                                <TableCell className="capitalize">{reg.category}</TableCell>
                                <TableCell>
                                    <Badge variant={reg.status === 'verified' ? 'default' : 'secondary'}>
                                        {reg.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {reg.payment_proof_url ? (
                                        <a href={reg.payment_proof_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                                            View Proof <ExternalLink className="h-3 w-3" />
                                        </a>
                                    ) : (
                                        <span className="text-muted-foreground text-sm">No proof</span>
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="icon" variant="outline" className="h-8 w-8 text-green-600">
                                            <Check className="h-4 w-4" />
                                        </Button>
                                        <Button size="icon" variant="outline" className="h-8 w-8 text-red-600">
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
