"use client";

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Target, Clock, History, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About ICAR 2026"
                description="Fostering innovation and collaboration across borders."
            />

            <div className="container py-12 px-4 md:px-6 space-y-24">

                {/* Mission & Vision */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance mb-4">Our Core Values</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground">Driving the future of research through three fundamental pillars.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Our Mission",
                                text: "To provide a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations.",
                                color: "text-blue-500",
                                bg: "bg-blue-500/10"
                            },
                            {
                                icon: Globe,
                                title: "Global Reach",
                                text: "Connecting over 50 countries, facilitating a truly global exchange of ideas and fostering international collaborations.",
                                color: "text-purple-500",
                                bg: "bg-purple-500/10"
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                text: "Celebrating high-quality research through rigorous peer review and recognizing outstanding contributions with awards.",
                                color: "text-amber-500",
                                bg: "bg-amber-500/10"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-background/50 border-muted/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                                    <CardContent className="pt-8 flex flex-col items-center text-center space-y-4">
                                        <div className={`p-4 rounded-full ${item.bg}`}>
                                            <item.icon className={`w-8 h-8 ${item.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.text}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* History & Timeline */}
                <section className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                            <History className="mr-2 h-4 w-4" /> Our Journey
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Legacy of Innovation</h2>
                        <div className="prose dark:prose-invert">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The International Conference on Advanced Research (ICAR) began in 2010 as a small symposium in London, UK. Over the past decade, it has grown into one of the most respected annual gatherings in the scientific community.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From 50 attendees to over 1,000 delegates, ICAR has traveled to Tokyo, Berlin, San Francisco, and Singapore, uniting diverse minds to solve global challenges.
                            </p>
                        </div>
                    </motion.div>

                    <div className="relative border-l-2 border-primary/20 pl-8 space-y-12 py-4">
                        {[
                            { year: "2024", city: "Sydney, Australia", desc: "Focus on Climate Tech & Sustainability.", icon: Globe },
                            { year: "2023", city: "Paris, France", desc: 'Theme: "The Age of AI". Record attendance.', icon: Trophy },
                            { year: "2022", city: "Virtual", desc: "Successful transition to online format during global challenges.", icon: Clock },
                        ].map((event, i) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                                <h4 className="text-xl font-bold text-primary">{event.year}</h4>
                                <h5 className="text-lg font-semibold">{event.city}</h5>
                                <p className="text-muted-foreground mt-1">{event.desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
                            <h3 className="text-2xl font-semibold text-primary mb-2">Grand Convention Center, NY</h3>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Located in the heart of Manhattan, the Grand Convention Center offers state-of-the-art facilities, world-class catering, and easy access to New York City's famous landmarks.
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
