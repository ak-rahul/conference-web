import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/home/countdown-timer"

export function HeroSection() {
    // Set target date to March 16, 2025 at 12:00 PM
    const conferenceDate = new Date("2025-03-16T12:00:00")

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 xl:py-40">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                                🎉 Registration Open for 2025
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl text-balance">
                                International Conference on <span className="text-primary">Advanced Research</span> 2025
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join leading researchers, innovators, and industry experts sharing the latest breakthroughs in AI, Data Science, and sustainable technology.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-5 w-5 text-primary" />
                                <span className="font-medium">March 16-17, 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="font-medium">Grand Convention Center, New York</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button asChild size="lg" className="h-12 px-8 text-lg">
                                <Link href="/register">
                                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
                                <Link href="/call-for-papers">Submit Paper</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-6 lg:bg-muted/30 lg:p-12 lg:rounded-2xl lg:border">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold">Conference starts in</h3>
                            <p className="text-muted-foreground">Don&apos;t miss the submission deadline!</p>
                        </div>
                        <CountdownTimer targetDate={conferenceDate} />
                        <div className="w-full max-w-sm space-y-2 pt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Paper Submission:</span>
                                <span className="font-medium">Feb 1, 2025</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Early Bird Reg:</span>
                                <span className="font-medium">Feb 15, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50 pointer-events-none"></div>
        </section>
    )
}
