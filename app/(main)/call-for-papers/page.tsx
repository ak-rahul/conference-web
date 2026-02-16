"use client";

import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, Send, Brain, Database, Cloud, Shield, Code, Calendar, Zap, Battery, Leaf, Recycle, Activity, Dna, FlaskConical, Sun, BookOpen } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CallForPapersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Call for Papers"
                description="We invite original research contributions for ICAM 2026."
            />

            <div className="container py-12 px-4 md:px-6 space-y-24">

                {/* Introduction & Tracks */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter mb-4">Submission Guidelines</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The conference will feature oral and poster presentation sessions for students, researchers, and research scholars, showcasing ongoing and emerging research aligned with the conference themes.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="outline" size="lg" className="h-12 px-6" asChild>
                                <Link href="https://docs.google.com/document/d/1Q1pJylWkMjjoT_8zEyCgXOoM5HZ63fEF/edit?usp=drive_link&ouid=101924620980532609618&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-4 h-4 mr-2" /> Download Abstract Template
                                </Link>
                            </Button>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-2xl border border-primary/10">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" /> Submission Requirements
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>Original, unpublished work is mandatory.</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>Word format (.doc/.docx) only (max 10MB).</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tighter"
                        >
                            Theme Areas
                        </motion.h2>
                        <div className="grid gap-4">
                            {[
                                { title: "Clean Energy", desc: "Renewable sources, hydrogen energy, and fuel cells.", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                                { title: "Energy Storage", desc: "Batteries, supercapacitors, and thermal storage.", icon: Battery, color: "text-green-500", bg: "bg-green-500/10" },
                                { title: "Biomass Conversion", desc: "Biofuels, biochemicals, and waste-to-energy.", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                { title: "Carbon Circularity", desc: "CO2 capture, utilization, and circular economy.", icon: Recycle, color: "text-blue-500", bg: "bg-blue-500/10" },
                                { title: "Sensor Materials", desc: "Smart sensors, biosensors, and environmental monitoring.", icon: Activity, color: "text-red-500", bg: "bg-red-500/10" },
                                { title: "Biofunctional Materials", desc: "Biomaterials, tissue engineering, and drug delivery.", icon: Dna, color: "text-purple-500", bg: "bg-purple-500/10" },
                                { title: "Sustainable Catalysis", desc: "Green chemistry, nanocatalysis, and electrocatalysis.", icon: FlaskConical, color: "text-cyan-500", bg: "bg-cyan-500/10" },
                                { title: "Photocatalytic Materials", desc: "Solar fuels, water splitting, and pollutant degradation.", icon: Sun, color: "text-orange-500", bg: "bg-orange-500/10" },
                                { title: "Energy Policy", desc: "Sustainability frameworks, regulations, and economics.", icon: BookOpen, color: "text-slate-500", bg: "bg-slate-500/10" },
                            ].map((track, i) => (
                                <motion.div
                                    key={track.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    <Card className="hover:border-primary/20 transition-colors">
                                        <CardContent className="p-4 flex items-start gap-4">
                                            <div className={`p-3 rounded-lg ${track.bg} shrink-0`}>
                                                <track.icon className={`w-6 h-6 ${track.color}`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{track.title}</h4>
                                                <p className="text-sm text-muted-foreground">{track.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Important Dates (Visual Dashboard) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 text-white"
                >
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

                    <div className="relative z-10 text-center space-y-12">
                        <h2 className="text-3xl font-bold">Key Deadlines</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { label: "Abstract Submission Start", date: "Feb 3, 2026", passed: true },
                                { label: "Abstract Submission End", date: "Feb 23, 2026", passed: false, highlight: true },
                                { label: "Acceptance Notification", date: "Feb 28, 2026", passed: false },
                            ].map((item, i) => (
                                <div key={i} className={`space-y-2 ${item.passed ? "opacity-50" : "opacity-100"}`}>
                                    <div className="mx-auto w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">{item.label}</p>
                                    <p className={`text-2xl font-bold ${item.highlight ? "text-primary" : "text-white"}`}>{item.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    )
}
