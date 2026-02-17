"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Logo1 from "@/assets/logo/logo-1.png"
import Logo2 from "@/assets/logo/logo-2.png"
import Logo3 from "@/assets/logo/logo-3.png"
import Logo4 from "@/assets/logo/logo-4.png"

const logos = [
    { src: Logo1, alt: "Organizer Logo 1" },
    { src: Logo3, alt: "Organizer Logo 3" },
    { src: Logo4, alt: "Organizer Logo 4" },
    { src: Logo2, alt: "Organizer Logo 2" },
]

export function LogoSection() {
    return (
        <section className="py-10 relative overflow-hidden bg-muted/20">
            {/* Background decoration matching hero/about */}
            <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] -z-10" />
            <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h3 className="text-sm font-bold text-primary tracking-widest uppercase">
                        Organized By
                    </h3>
                    <div className="w-12 h-1 bg-primary/20 mx-auto mt-2 rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(var(--primary), 0.05)",
                                borderColor: "rgba(var(--primary), 0.2)"
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center p-6 bg-background/40 backdrop-blur-sm rounded-2xl border border-border/40 shadow-sm hover:shadow-xl transition-colors group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="object-contain w-full h-full drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                                width={200}
                                height={200}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
