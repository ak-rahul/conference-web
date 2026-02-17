"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"


import { speakers } from "@/lib/speakers"



export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Speakers"
                description="Renowned experts sharing their insights."
            />
            <div className="container py-12 md:py-16 px-4 md:px-6">
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
                                        <AvatarImage
                                            src={speaker.image.src}
                                            alt={speaker.name}
                                            style={{
                                                objectPosition: speaker.position,
                                                transform: speaker.scale ? `scale(${speaker.scale})` : undefined
                                            }}
                                        />
                                        <AvatarFallback className="text-2xl">{speaker.initials}</AvatarFallback>
                                    </Avatar>

                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <div className="space-y-1 mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{speaker.name}</h3>
                                        <p className="text-sm font-medium text-muted-foreground">{speaker.role}</p>
                                    </div>
                                    <div className="space-y-2">
                                        {speaker.topic && (
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                                                Keynote: {speaker.topic}
                                            </div>
                                        )}
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
