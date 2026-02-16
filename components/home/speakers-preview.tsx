"use client";

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Speaker1 from "@/assets/speakers/1.jpeg"
import Speaker2 from "@/assets/speakers/2.jpeg"
import Speaker3 from "@/assets/speakers/3.jpeg"
import Speaker4 from "@/assets/speakers/4.jpeg"
import Speaker5 from "@/assets/speakers/5.jpeg"
import Speaker6 from "@/assets/speakers/6.jpeg"
import Speaker7 from "@/assets/speakers/7.jpeg"
import Speaker8 from "@/assets/speakers/8.jpeg"
import Speaker9 from "@/assets/speakers/9.jpeg"
import Speaker10 from "@/assets/speakers/10.jpeg"

import Speaker11 from "@/assets/speakers/11.jpeg"

const speakers = [
    {
        name: "Adjunct Prof. Jorge Beltramini",
        role: "Queensland University of Technology, Australia",
        topic: "Keynote Speaker",
        image: Speaker1.src,
        initials: "JB",
    },
    {
        name: "Prof. K. George Thomas",
        role: "Department of Chemistry, IISER-Thiruvananthapuram",
        topic: "Keynote Speaker",
        image: Speaker2.src,
        initials: "GT",
    },
    {
        name: "Prof. Parasuraman Selvam",
        role: "Department of Chemistry, IIT-Madras, Chennai",
        topic: "Keynote Speaker",
        image: Speaker3.src,
        initials: "PS",
    },
    {
        name: "Dr. Vijayakumar Chakkooth",
        role: "Senior Principal Scientist, CSIR-NIIST, Thiruvananthapuram",
        topic: "Keynote Speaker",
        image: Speaker4.src,
        initials: "VC",
    },
    {
        name: "Prof. N. K. Renuka",
        role: "Department of Chemistry, University of Calicut",
        topic: "Keynote Speaker",
        image: Speaker5.src,
        position: "35% 5%",
        initials: "NR",
    },
    {
        name: "Dr. Santanu Chaudhuri",
        role: "Chief Technology Officer, Thermax Limited, Pune",
        topic: "Keynote Speaker",
        image: Speaker6.src,
        initials: "SC",
    },
    {
        name: "Prof. A. Sakthivel",
        role: "Department of Chemistry, Central University of Kerala",
        topic: "Keynote Speaker",
        image: Speaker7.src,
        initials: "AS",
    },
    {
        name: "Prof. Sushanta Kumar Badamali",
        role: "Department of Chemistry, Utkal University, Bhubaneswar",
        topic: "Keynote Speaker",
        image: Speaker8.src,
        position: "center 25%",
        initials: "SB",
    },
    {
        name: "Prof. Kandalam Ramanujachary",
        role: "Department of Chemistry & Biochemistry, Rowan University, USA",
        topic: "Keynote Speaker",
        image: Speaker9.src,
        position: "center 25%",
        initials: "KR",
    },
    {
        name: "Prof. Ida Tiwari",
        role: "Department of Chemistry, Banaras Hindu University, Varanasi",
        topic: "Keynote Speaker",
        image: Speaker10.src,
        position: "center 25%",
        initials: "IT",
    },
    {
        name: "Dr. Swathi Mukundan",
        role: "Department of Chemical Engineering, Loughborough University, U.K.",
        topic: "Keynote Speaker",
        image: Speaker11.src,
        initials: "SM",
        scale: 1.5,
    },
]

export function SpeakersPreview() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6 mb-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
                            Speakers
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                            Hear from world-renowned experts shaping the future of research.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Continuous Marquee Carousel */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden select-none">
                    <motion.div
                        className="flex gap-6 py-4 flex-nowrap"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...speakers, ...speakers].map((speaker, index) => (
                            <div key={`${speaker.name}-${index}`} className="w-[350px] flex-shrink-0">
                                <Card className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <CardHeader className="flex flex-col items-center gap-6 relative z-10 pt-10">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                            <Avatar className="h-28 w-28 border-4 border-background relative">
                                                <AvatarImage
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    style={{
                                                        objectPosition: speaker.position,
                                                        transform: speaker.scale ? `scale(${speaker.scale})` : undefined
                                                    }}
                                                />
                                                <AvatarFallback className="text-xl">{speaker.initials}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="space-y-2 text-center">
                                            <CardTitle className="text-lg leading-tight min-h-[3.5rem] flex items-center justify-center">{speaker.name}</CardTitle>
                                            <CardDescription className="text-primary font-medium text-sm line-clamp-2 h-[2.5rem]">
                                                {speaker.role}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="relative z-10 text-center pb-8">
                                        <Badge variant="secondary" className="bg-muted/50 hover:bg-primary/10">
                                            {speaker.topic}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
