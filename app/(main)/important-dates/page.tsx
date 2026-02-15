"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Calendar, Clock, AlertCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const dates = [
    {
        event: "Paper Submission Deadline",
        date: "February 1, 2026",
        description: "Submit your full paper for review.",
        status: "Upcoming",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    {
        event: "Notification of Acceptance",
        date: "February 20, 2026",
        description: "Authors will be notified of the review results.",
        status: "Upcoming",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        event: "Camera-Ready Paper Submission",
        date: "March 1, 2026",
        description: "Final version of accepted papers due.",
        status: "Upcoming",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        event: "Early Bird Registration Ends",
        date: "February 15, 2026",
        description: "Last day to register at a discounted rate.",
        status: "Upcoming",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        event: "Conference Dates",
        date: "March 16-17, 2026",
        description: "The main event in New York City.",
        status: "Upcoming",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    }
]

export default function ImportantDatesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Important Dates"
                description="Mark your calendar for these key deadlines."
            />
            <div className="container py-16 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12 md:space-y-0">
                        {dates.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative md:pl-12 pb-12 last:pb-0"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

                                <div className={cn(
                                    "flex flex-col md:flex-row gap-6 p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all",
                                    item.border
                                )}>
                                    <div className="md:w-48 shrink-0">
                                        <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{item.date}</span>
                                        </div>
                                        <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", item.bg, item.color)}>
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-xl font-bold">{item.event}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>

                                    <div className="hidden md:flex items-center justify-center">
                                        <div className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors">
                                            <ArrowRight className="h-5 w-5 text-muted-foreground hover:text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start p-6 bg-blue-50/50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-200 rounded-xl border border-blue-200 dark:border-blue-900"
                    >
                        <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm leading-relaxed">
                            <strong>Note:</strong> All deadlines are at 11:59 PM Eastern Standard Time (EST). Deadlines are strict and no extensions will be granted.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
