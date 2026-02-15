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
import { Download, Check, X } from "lucide-react"

export default async function SubmissionsPage() {
    const supabase = await createClient()

    const { data: submissions } = await supabase
        .from('submissions')
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
            <h2 className="text-2xl font-bold tracking-tight">Manage Submissions</h2>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Paper Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Track</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {submissions?.map((paper) => (
                            <TableRow key={paper.id}>
                                <TableCell className="font-medium">{paper.title}</TableCell>
                                <TableCell>
                                    <div>{paper.user?.full_name || 'Unknown'}</div>
                                    <div className="text-sm text-muted-foreground">{paper.user?.email}</div>
                                </TableCell>
                                <TableCell>{paper.track}</TableCell>
                                <TableCell>
                                    <Badge variant={paper.status === 'accepted' ? 'default' : 'secondary'}>
                                        {paper.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        {paper.file_url && (
                                            <a href={paper.file_url} target="_blank" rel="noopener noreferrer">
                                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        )}
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
