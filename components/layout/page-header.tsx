"use client";

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PageHeaderProps {
    title: string
    description?: string
    className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <section className={cn("relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24", className)}>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] -z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full opacity-30 -z-10" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="block text-foreground">{title}</span>
                        </h1>
                    </motion.div>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl/relaxed leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    )
}
