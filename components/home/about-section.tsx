"use client";

import Link from "next/link"
import { ArrowRight, CheckCircle2, FlaskConical, Globe2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-primary shadow-sm hover:bg-background/80 transition-colors">
                                <Sparkles className="mr-2 h-4 w-4" />
                                Vision & Mission
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
                                Shaping the Future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Global Research</span>
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-lg/relaxed leading-relaxed border-l-4 border-primary/20 pl-6">
                            The International Conference on Advanced Functional Materials (ICAM 2026) is a premier forum for presenting innovations in science, engineering, and technology.
                            We bridge the gap between academic research and industrial application.
                        </p>

                        <div className="grid gap-6">
                            {[
                                { icon: Globe2, text: "Global Networking Opportunities" },
                                { icon: FlaskConical, text: "Cutting-edge Research Presentations" },
                                { icon: Sparkles, text: "Workshops & Technical Sessions" }
                            ].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    key={i}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/40 shadow-sm hover:shadow-md transition-all hover:border-primary/20"
                                >
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-medium text-foreground">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                <Link href="/about">
                                    About the Conference <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-3xl overflow-hidden border-8 border-background shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
                                alt="Conference Audience"
                                className="object-cover w-full h-[400px] md:h-[600px] hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] -z-20 opacity-30 mask-image:radial-gradient(ellipse_at_center,black,transparent)" />
                    </div>
                </div>
            </div>
        </section>
    )
}
