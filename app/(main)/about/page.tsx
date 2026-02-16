"use client";

import { PageHeader } from "@/components/layout/page-header"
import { History, FlaskConical } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About ICAM 2026"
                description="Fostering innovation and collaboration across borders."
            />

            <div className="container py-12 px-4 md:px-6 space-y-24">

                {/* Conference Overview */}
                <section className="space-y-8 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                            <History className="mr-2 h-4 w-4" /> About the Event
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">Conference Overview</h2>
                        <div className="prose dark:prose-invert mx-auto text-left">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                This two-day international conference is supported by the Scheme for Promotion of Academic and Research Collaboration (SPARC) through a joint project between Cochin University of Science & Technology (CUSAT) and Queensland University of Technology (QUT).
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The programme brings together researchers from India and abroad to share advances in functional materials for clean energy, energy storage, biomass conversion, carbon circularity, and healthcare, with a focus on interdisciplinary collaboration.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Department of Applied Chemistry */}
                <section className="space-y-8 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                            <FlaskConical className="mr-2 h-4 w-4" /> Host Department
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">Department of Applied Chemistry</h2>
                        <div className="prose dark:prose-invert mx-auto text-left">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                DEPT. OF APPLIED CHEMISTRY of CUSAT was established in 1976 to play an important role in the further development of the industrial belt in the greater Cochin area by providing scientific support and trained personnel to the industries and by acting as a catalyst for the establishment of new industries.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Department has now grown and has emerged as one of the best centers in Chemistry in the State of Kerala. The Department currently offers M.Sc. programme and Ph.D. Programme in Chemistry.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Venue */}
                <section className="relative overflow-hidden rounded-3xl bg-zinc-900">
                    <div className="absolute inset-0 opacity-40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1000&auto=format&fit=crop"
                            alt="Grand Convention Center"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 p-12 md:p-16 lg:max-w-2xl space-y-6 text-white"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter">The Venue</h2>
                        <div>
                            <h3 className="text-2xl font-semibold text-primary mb-2">Mini Seminar Hall, Seminar Complex, CUSAT</h3>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Located in the beautiful campus of Cochin University of Science and Technology (CUSAT), the venue offers excellent facilities for academic exchange and networking.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" /> 200,000 sq ft space
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" /> 50+ Breakout Rooms
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" /> Fiber Optic WiFi
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" /> LEED Gold Certified
                            </div>
                        </div>
                    </motion.div>
                </section>

            </div>
        </div>
    )
}
