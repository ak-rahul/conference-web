"use client";

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section className="py-24 lg:py-32 overflow-hidden relative">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                            Vision & Mission
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                            Shaping the Future of <span className="text-primary">Global Research</span>
                        </h2>
                        <p className="text-muted-foreground text-lg/relaxed">
                            The International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare (ICAM 2026) is a premier forum for presenting innovations in science, engineering, and technology.
                            Our mission is to bring together leading academicians, scientists, researchers, and scholars to exchange specific experiences and share results.
                        </p>

                        <ul className="space-y-3">
                            {["Global Networking Opportunities", "Cutting-edge Research Presentations", "Workshops & Technical Sessions"].map((item, i) => (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    key={i}
                                    className="flex items-center gap-2 text-muted-foreground"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button asChild variant="outline" className="group h-12 px-6 text-base rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                                <Link href="/about">
                                    Read our Vision & Mission <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-2xl" />
                        <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
                                alt="Conference Audience"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-white">
                                        <p className="font-bold text-2xl">1,200+</p>
                                        <p className="text-sm text-zinc-300">Attendees Last Year</p>
                                    </div>
                                    <div className="h-10 w-px bg-white/20" />
                                    <div className="text-white">
                                        <p className="font-bold text-2xl">50+</p>
                                        <p className="text-sm text-zinc-300">Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
