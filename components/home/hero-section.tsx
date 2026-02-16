"use client";

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/home/countdown-timer"

export function HeroSection() {
    // Set target date to March 05, 2026 at 12:00 PM
    const conferenceDate = new Date("2026-03-05T12:00:00")

    return (
        <section className="relative overflow-hidden py-32 lg:py-48 min-h-screen flex items-center justify-center">
            {/* Background Grid & Spotlight */}
            <div className="absolute inset-0 w-full h-full bg-background bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none -z-10 animate-spotlight" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-6"
                        >


                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                                International Conference on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400">Advanced Functional Materials</span> for Clean Energy, Environment, and Healthcare
                            </h1>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>March 05-06, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>CUSAT, Kochi</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfupJ69J9vTLpca45aYIz0_OwRe74ZUnkU79CTmgzjq-eFqnw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1xIBOEtkVRBvvUrAvGB13JQ9X4ysftep7/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted transition-all hover:scale-105">
                                    Download Brochure
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-full"
                    >
                        <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/0 dark:from-white/10 dark:to-white/0 backdrop-blur-2xl border border-white/10 shadow-2xl">
                            <div className="bg-background/80 dark:bg-black/80 rounded-[22px] p-8 md:p-10 border border-white/5 space-y-8">
                                <div className="space-y-2 text-center">
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                        Time Remaining
                                    </h3>
                                    <p className="text-muted-foreground text-sm">Until the conference begins</p>
                                </div>

                                <CountdownTimer targetDate={conferenceDate} />

                                <div className="space-y-3 pt-6 border-t border-border/50">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Abstract Submission</span>
                                        <span className="font-mono font-medium text-primary">Open Now</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[75%] rounded-full animate-pulse" />
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Starts: Feb 03</span>
                                        <span>Ends: Feb 23</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
