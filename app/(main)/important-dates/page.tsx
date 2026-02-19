"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Calendar, Clock, AlertCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

    const events = [
        {
            event: "Abstract Submission Starts",
            dateStr: "February 03, 2026",
            date: new Date("2026-02-03"),
            description: "Portal opens for abstract and full paper submissions.",
        },
        {
            event: "Abstract Submission Ends",
            dateStr: "February 23, 2026",
            date: new Date("2026-02-23"),
            description: "Deadline for submitting broad abstracts and papers.",
        },
        {
            event: "Registration Deadline",
            dateStr: "February 25, 2026",
            date: new Date("2026-02-25"),
            description: "Last date to register for the conference.",
        },
        {
            event: "Notification of Acceptance",
            dateStr: "February 28, 2026",
            date: new Date("2026-02-28"),
            description: "Authors will be notified of review results.",
        },
        {
            event: "Conference Dates",
            dateStr: "March 05-06, 2026",
            date: new Date("2026-03-05"), // Using start date for comparison
            description: "The main event at CUSAT.",
        }
    ];

    return events.map(item => {
        const isPast = item.date < today;
        const isToday = item.date.toDateString() === today.toDateString();

        let status = "Upcoming";
        let color = "text-blue-500";
        let bg = "bg-blue-500/10";
        let border = "border-blue-500/20";

        if (isPast) {
            status = "Closed";
            color = "text-muted-foreground";
            bg = "bg-muted";
            border = "border-muted";
        } else if (isToday) {
            status = "Open Now";
            color = "text-green-500";
            bg = "bg-green-500/10";
            border = "border-green-500/20";
        } else if (item.event.includes("Starts") && !isPast) {
            status = "Upcoming";
            color = "text-orange-500";
            bg = "bg-orange-500/10";
            border = "border-orange-500/20";
        } else {
            status = "Open";
            color = "text-green-500";
            bg = "bg-green-500/10";
            border = "border-green-500/20";
        }

        if (item.event === "Conference Dates") {
            if (isPast) {
                status = "Completed";
            } else {
                status = "Upcoming";
                color = "text-purple-500";
                bg = "bg-purple-500/10";
                border = "border-purple-500/20";
            }
        }

        return {
            ...item,
            status,
            color,
            bg,
            border,
            date: item.dateStr // Keep original string for display
        };
    });
};

export default function ImportantDatesPage() {
    const dates = getDates();
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <PageHeader
                title="Important Dates"
                description="Mark your calendar for these key deadlines."
            />
            <div className="container py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-16">

                    <div className="relative border-l-2 border-border/60 ml-4 md:ml-0 space-y-12 md:space-y-0">
                        {dates.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative md:pl-16 pb-16 last:pb-0"
                            >
                                {/* Timeline Dot */}
                                <div className={cn(
                                    "absolute -left-[9px] top-6 h-5 w-5 rounded-full border-4 ring-4 ring-background transition-all duration-500",
                                    item.status === "Closed" ? "bg-muted border-muted md:ring-muted/20" : "bg-primary border-primary md:ring-primary/10"
                                )} />

                                <div className={cn(
                                    "flex flex-col md:flex-row gap-6 p-8 rounded-2xl border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-x-1",
                                    item.border
                                )}>
                                    <div className="md:w-56 shrink-0 flex flex-col justify-between">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold text-lg">
                                                <Calendar className="h-5 w-5" />
                                                <span>{item.date}</span>
                                            </div>
                                            <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide", item.bg, item.color)}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <h3 className="text-2xl font-bold text-foreground">{item.event}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                                    </div>

                                    <div className="hidden md:flex items-center justify-center pl-4 border-l border-border/40">
                                        <div className="p-3 rounded-full bg-muted/30 text-muted-foreground group-hover:text-primary transition-colors">
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
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
                        className="flex items-start p-6 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/20"
                    >
                        <AlertCircle className="h-6 w-6 mr-4 mt-0.5 flex-shrink-0" />
                        <p className="text-base leading-relaxed">
                            <strong>Note:</strong> All deadlines are at 11:59 PM Indian Standard Time (IST). Deadlines are strict and no extensions will be granted.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
