"use client";

import { Handshake } from "lucide-react"
import { motion } from "framer-motion"

const sponsors = [
    { name: "TechCorp", color: "text-blue-500" },
    { name: "InnovateLabs", color: "text-green-500" },
    { name: "FutureSystems", color: "text-purple-500" },
    { name: "GlobalScience", color: "text-red-500" },
    { name: "DeepMind AI", color: "text-teal-500" },
    { name: "OpenScale", color: "text-orange-500" },
    { name: "QuantumLeap", color: "text-indigo-500" },
    { name: "BioGen", color: "text-emerald-500" },
]

export function SponsorsPreview() {
    return (
        <section className="py-24 border-t bg-muted/20 overflow-hidden">
            <div className="container px-4 md:px-6 mb-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-muted-foreground">
                        Supported by organizations driving the future of technology.
                    </p>
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden bg-background/50 py-12 border-y">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex min-w-full shrink-0 gap-16 items-center justify-around px-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                    {[...sponsors, ...sponsors].map((sponsor, i) => (
                        <div key={`${sponsor.name}-${i}`} className="flex items-center gap-3 group cursor-default">
                            <Handshake className={`h-8 w-8 ${sponsor.color} text-muted-foreground/50 transition-colors group-hover:text-${sponsor.color.split('-')[1]}-500`} />
                            <span className="text-xl font-bold text-muted-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
                                {sponsor.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex min-w-full shrink-0 gap-16 items-center justify-around px-8 absolute top-12 left-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                    {[...sponsors, ...sponsors].map((sponsor, i) => (
                        <div key={`${sponsor.name}-${i}-duplicate`} className="flex items-center gap-3 group cursor-default">
                            <Handshake className={`h-8 w-8 ${sponsor.color} text-muted-foreground/50 transition-colors group-hover:text-${sponsor.color.split('-')[1]}-500`} />
                            <span className="text-xl font-bold text-muted-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
                                {sponsor.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container px-4 md:px-6 mt-12 text-center">
                <p className="text-sm text-muted-foreground">
                    Interested in sponsoring? Contact us at <a href="mailto:sponsors@icar2026.org" className="underline hover:text-primary transition-colors">sponsors@icar2026.org</a>
                </p>
            </div>
        </section>
    )
}
