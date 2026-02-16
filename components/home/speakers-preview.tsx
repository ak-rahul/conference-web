"use client";

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const speakers = [
    {
        name: "Adjunct Prof. Jorge Beltramini",
        role: "Queensland University of Technology, Australia",
        topic: "Keynote Speaker",
        image: "https://i.pravatar.cc/150?u=jorge",
        initials: "JB",
        tags: ["Materials", "Energy"]
    },
    {
        name: "Prof. K. George Thomas",
        role: "IISER-Thiruvananthapuram",
        topic: "Keynote Speaker",
        image: "https://i.pravatar.cc/150?u=george",
        initials: "GT",
        tags: ["Chemistry", "Research"]
    },
    {
        name: "Prof. Parasuraman Selvam",
        role: "IIT-Madras, Chennai",
        topic: "Keynote Speaker",
        image: "https://i.pravatar.cc/150?u=selvam",
        initials: "PS",
        tags: ["Nanotech", "Materials"]
    },
]

export function SpeakersPreview() {
    return (
        <section className="py-24 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-4">
                            World-Class Experts
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Keynote Speakers
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                            Hear from world-renowned experts shaping the future of research.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <CardHeader className="flex flex-col items-center gap-6 relative z-10 pt-10">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                        <Avatar className="h-32 w-32 border-4 border-background relative">
                                            <AvatarImage src={speaker.image} alt={speaker.name} />
                                            <AvatarFallback className="text-2xl">{speaker.initials}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <CardTitle className="text-xl">{speaker.name}</CardTitle>
                                        <CardDescription className="text-primary font-medium">
                                            {speaker.role}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="relative z-10 text-center space-y-4">
                                    <p className="text-sm text-foreground/80 italic">
                                        "{speaker.topic}"
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        {speaker.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-muted/50 hover:bg-primary/10">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
