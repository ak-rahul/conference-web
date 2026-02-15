"use client"

import { useState } from "react"
import { toast } from "sonner"
import { FileText, Link as LinkIcon, UploadCloud, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/layout/page-header"
import { submitPaper } from "./actions"

export default function SubmitPaperPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const result = await submitPaper(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Paper Submission"
                description="Submit your research work for review."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="mx-auto max-w-[800px]">
                    <Card className="border-muted/50 shadow-xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <UploadCloud className="h-6 w-6 text-primary" />
                                New Submission
                            </CardTitle>
                            <CardDescription>
                                Please ensure your paper follows the conference formatting guidelines before uploading.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title" className="text-base">Paper Title</Label>
                                        <Input id="title" name="title" placeholder="Enter the full title of your paper" className="h-11" required />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="abstract" className="text-base">Abstract</Label>
                                        <Textarea id="abstract" name="abstract" placeholder="Paste your abstract here (max 500 words)..." className="min-h-[150px] resize-y" required />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="track" className="text-base">Conference Track</Label>
                                        <Select name="track" required>
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Select a track" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                                                <SelectItem value="Data Science & Big Data">Data Science & Big Data</SelectItem>
                                                <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                                <SelectItem value="IoT & Cloud Computing">IoT & Cloud Computing</SelectItem>
                                                <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid gap-2 pt-4">
                                        <Label htmlFor="paperUrl" className="text-base flex items-center gap-2">
                                            <LinkIcon className="h-4 w-4" /> Paper Link (Google Drive / Cloud)
                                        </Label>
                                        <div className="p-6 border-2 border-dashed rounded-xl bg-muted/20 flex flex-col items-center justify-center space-y-4 transition-colors hover:bg-muted/40 hover:border-primary/50">
                                            <div className="p-4 rounded-full bg-background shadow-sm">
                                                <FileText className="h-8 w-8 text-primary" />
                                            </div>
                                            <div className="text-center space-y-1">
                                                <p className="text-sm font-medium">Upload your PDF/DOCX to a cloud storage</p>
                                                <p className="text-xs text-muted-foreground">and paste the public shareable link below.</p>
                                            </div>
                                            <Input
                                                id="paperUrl"
                                                name="paperUrl"
                                                type="url"
                                                placeholder="https://drive.google.com/file/d/..."
                                                className="max-w-md"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-12 text-lg" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Uploading...
                                        </>
                                    ) : (
                                        "Submit Paper"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
