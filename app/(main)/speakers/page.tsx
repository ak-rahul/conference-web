"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Globe } from "lucide-react"

const speakers = [
    {
        name: "Dr. Sarah Johnson",
        role: "Professor of AI, MIT",
        topic: "The Future of Generative AI",
        bio: "Dr. Sarah Johnson is a pioneer in the field of Generative Adversarial Networks. Her research focuses on the ethical implications of AI and its application in creative industries.",
        image: "https://i.pravatar.cc/150?u=sarah",
        initials: "SJ",
    },
    {
        name: "Prof. David Chen",
        role: "Director, Quantum Institute",
        topic: "Quantum Computing Breakthroughs",
        bio: "Prof. Chen leads the Quantum Institute's research on error correction in quantum systems. He has published over 100 papers in top-tier physics and computing journals.",
        image: "https://i.pravatar.cc/150?u=david",
        initials: "DC",
    },
    {
        name: "Dr. Emily Wong",
        role: "Chief Scientist, BioTech Corp",
        topic: "CRISPR & Genetic Engineering",
        bio: "Dr. Wong oversees the R&D department at BioTech Corp, working on revolutionary gene-editing therapies. She is a strong advocate for open science.",
        image: "https://i.pravatar.cc/150?u=emily",
        initials: "EW",
    },
    {
        name: "James Anderson",
        role: "CTO, CloudScale",
        topic: "Scalable Cloud Architectures",
        bio: "James has over 20 years of experience in building distributed systems. He currently leads the engineering team at CloudScale, serving millions of users globally.",
        image: "https://i.pravatar.cc/150?u=james",
        initials: "JA",
    },
]

export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Keynote Speakers"
                description="Renowned experts sharing their insights."
            />
            <div className="container py-16 px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col md:flex-row overflow-hidden h-full border-muted/50 hover:border-primary/50 transition-all hover:shadow-xl group">
                                <div className="md:w-1/3 bg-muted/30 relative flex flex-col items-center justify-center p-6 border-r border-border/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Avatar className="h-32 w-32 border-4 border-background shadow-lg z-10">
                                        <AvatarImage src={speaker.image} alt={speaker.name} />
                                        <AvatarFallback className="text-2xl">{speaker.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex gap-3 mt-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                                        <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-4 w-4" /></a>
                                        <a href="#" className="text-muted-foreground hover:text-primary"><Globe className="h-4 w-4" /></a>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <div className="space-y-1 mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{speaker.name}</h3>
                                        <p className="text-sm font-medium text-muted-foreground">{speaker.role}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                                            Keynote: {speaker.topic}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                            {speaker.bio}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
