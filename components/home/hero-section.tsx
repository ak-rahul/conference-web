"use client";

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/ui/shimmer-button"
import { CountdownTimer } from "@/components/home/countdown-timer"

export function HeroSection() {
    // Set target date to March 16, 2026 at 12:00 PM
    const conferenceDate = new Date("2026-03-16T12:00:00")

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 xl:py-40">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                🎉 Registration Open for 2026
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-7xl text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                                International Conference on <span className="text-primary">Advanced Research</span> 2026
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join leading researchers, innovators, and industry experts sharing the latest breakthroughs in AI, Data Science, and sustainable technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-5 w-5 text-primary" />
                                <span className="font-medium">March 16-17, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="font-medium">Grand Convention Center, New York</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col gap-4 min-[400px]:flex-row items-center"
                        >
                            <Link href="/register">
                                <ShimmerButton className="h-12 px-8 text-lg font-medium shadow-2xl">
                                    Register Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </ShimmerButton>
                            </Link>

                            <Button asChild variant="ghost" size="lg" className="h-12 px-8 text-lg hover:bg-transparent hover:underline underline-offset-4">
                                <Link href="/call-for-papers">Submit Paper</Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-3xl -z-10 rounded-full" />
                        <div className="flex flex-col items-center justify-center space-y-6 lg:bg-background/40 lg:backdrop-blur-xl lg:p-12 lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-2xl">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-bold">Conference starts in</h3>
                                <p className="text-muted-foreground">Don&apos;t miss the submission deadline!</p>
                            </div>
                            <CountdownTimer targetDate={conferenceDate} />
                            <div className="w-full max-w-sm space-y-4 pt-6">
                                <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/50">
                                    <span className="text-muted-foreground">Paper Submission:</span>
                                    <span className="font-bold font-mono">Feb 1, 2026</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/50">
                                    <span className="text-muted-foreground">Early Bird Reg:</span>
                                    <span className="font-bold font-mono">Feb 15, 2026</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
