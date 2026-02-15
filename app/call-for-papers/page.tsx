import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, Send } from "lucide-react"
import Link from "next/link"

export default function CallForPapersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Call for Papers"
                description="We invite original research contributions for ICAR 2025."
            />

            <div className="container py-12 px-4 md:px-6 space-y-16">

                {/* Introduction & Tracks */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter">Submission Guidelines</h2>
                        <p className="text-lg text-muted-foreground">
                            ICAR 2025 accepts submissions of original, unpublished research papers. All submissions will be double-blind peer-reviewed by at least three members of the International Program Committee.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Accepted papers will be published in the Conference Proceedings (indexed by Scopus and Web of Science) and selected extended papers will be recommended for publication in partnering high-impact journals.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button size="lg" asChild>
                                <Link href="/submit-paper">
                                    <Send className="w-4 h-4 mr-2" /> Submit Paper
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg">
                                <FileText className="w-4 h-4 mr-2" /> Download Template
                            </Button>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Conference Tracks</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <span className="font-semibold block">Track 1: AI & Machine Learning</span>
                                    <span className="text-sm text-muted-foreground">Deep Learning, NLP, Computer Vision, XAI.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <span className="font-semibold block">Track 2: Data Science & Big Data</span>
                                    <span className="text-sm text-muted-foreground">Data Mining, Analytics, Visualization, Warehousing.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <span className="font-semibold block">Track 3: IoT & Cloud Computing</span>
                                    <span className="text-sm text-muted-foreground">Edge Computing, 5G/6G, Smart Cities, Distributed Systems.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <span className="font-semibold block">Track 4: Cybersecurity & Privacy</span>
                                    <span className="text-sm text-muted-foreground">Cryptography, Network Security, Blockchain, Privacy-preserving AI.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <span className="font-semibold block">Track 5: Software Engineering</span>
                                    <span className="text-sm text-muted-foreground">Agile, DevOps, Testing, Software Architecture.</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Important Dates (Brief) */}
                <section className="bg-muted/50 rounded-xl p-8 md:p-12 text-center space-y-8">
                    <h2 className="text-2xl font-bold">Key Deadlines</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Abstract Submission</p>
                            <p className="text-2xl font-bold mt-2">Jan 15, 2025</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Full Paper Submission</p>
                            <p className="text-2xl font-bold mt-2">Feb 1, 2025</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Acceptance Notification</p>
                            <p className="text-2xl font-bold mt-2">Feb 20, 2025</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Camera Ready</p>
                            <p className="text-2xl font-bold mt-2">March 1, 2025</p>
                        </div>
                    </div>
                </section>

                {/* Requirements */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter">Submission Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Formatting</h3>
                            <p className="text-muted-foreground">
                                Papers must be formatted according to the IEEE two-column format. The length of the paper should not exceed 8 pages, including figures and references.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Originality</h3>
                            <p className="text-muted-foreground">
                                Papers must present original work that has not been published or submitted for publication elsewhere. Plagiarism checks will be conducted for all submissions.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
