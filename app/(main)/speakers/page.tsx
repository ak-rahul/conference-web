"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Globe } from "lucide-react"

const speakers = [
    {
        name: "Adjunct Prof. Jorge Beltramini",
        role: "Queensland University of Technology, Australia",
        topic: "Keynote Speaker",
        bio: "Distinguished researcher from Queensland University of Technology, Australia.",
        image: "https://i.pravatar.cc/150?u=jorge",
        initials: "JB",
    },
    {
        name: "Prof. K. George Thomas",
        role: "Department of Chemistry, IISER-Thiruvananthapuram",
        topic: "Keynote Speaker",
        bio: "Renowned professor from the Department of Chemistry at IISER-Thiruvananthapuram.",
        image: "https://i.pravatar.cc/150?u=george",
        initials: "GT",
    },
    {
        name: "Prof. Parasuraman Selvam",
        role: "Department of Chemistry, IIT-Madras, Chennai",
        topic: "Keynote Speaker",
        bio: "Expert academic from the Department of Chemistry, IIT-Madras.",
        image: "https://i.pravatar.cc/150?u=selvam",
        initials: "PS",
    },
    {
        name: "Dr. Vijayakumar Chakkooth",
        role: "Senior Principal Scientist, CSIR-NIIST, Thiruvananthapuram",
        topic: "Keynote Speaker",
        bio: "Senior Principal Scientist contributing to research at CSIR-NIIST.",
        image: "https://i.pravatar.cc/150?u=vijay",
        initials: "VC",
    },
    {
        name: "Prof. N. K. Renuka",
        role: "Department of Chemistry, University of Calicut",
        topic: "Keynote Speaker",
        bio: "Distinguished faculty member from the Department of Chemistry, University of Calicut.",
        image: "https://i.pravatar.cc/150?u=renuka",
        initials: "NR",
    },
    {
        name: "Dr. Santanu Chaudhuri",
        role: "Chief Technology Officer, Thermax Limited, Pune",
        topic: "Keynote Speaker",
        bio: "Technology leader and CTO at Thermax Limited, Pune.",
        image: "https://i.pravatar.cc/150?u=santanu",
        initials: "SC",
    },
    {
        name: "Prof. A. Sakthivel",
        role: "Department of Chemistry, Central University of Kerala",
        topic: "Keynote Speaker",
        bio: "Professor at the Department of Chemistry, Central University of Kerala, Kasaragod.",
        image: "https://i.pravatar.cc/150?u=sakthivel",
        initials: "AS",
    },
    {
        name: "Prof. Sushanta Kumar Badamali",
        role: "Department of Chemistry, Utkal University, Bhubaneswar",
        topic: "Keynote Speaker",
        bio: "Academic leader from the Department of Chemistry, Utkal University.",
        image: "https://i.pravatar.cc/150?u=sushanta",
        initials: "SB",
    },
    {
        name: "Prof. Kandalam Ramanujachary",
        role: "Department of Chemistry & Biochemistry, Rowan University, USA",
        topic: "Keynote Speaker",
        bio: "International expert from the Department of Chemistry & Biochemistry, Rowan University.",
        image: "https://i.pravatar.cc/150?u=kandalam",
        initials: "KR",
    },
    {
        name: "Prof. Ida Tiwari",
        role: "Department of Chemistry, Banaras Hindu University, Varanasi",
        topic: "Keynote Speaker",
        bio: "Distinguished professor from the Department of Chemistry, BHU.",
        image: "https://i.pravatar.cc/150?u=ida",
        initials: "IT",
    },
    {
        name: "Dr. Swathi Mukundan",
        role: "Department of Chemical Engineering, Loughborough University, U.K.",
        topic: "Keynote Speaker",
        bio: "Researcher from the Department of Chemical Engineering, Loughborough University.",
        image: "https://i.pravatar.cc/150?u=swathi",
        initials: "SM",
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
