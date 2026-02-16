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
        <section className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 md:px-6 mb-16">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                            Renowned <span className="text-primary">Speakers</span>
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We are honored to host world-class experts who are shaping the future of functional materials and clean energy.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Continuous Marquee Carousel */}
            <div className="relative w-full overflow-hidden">


                <div className="flex overflow-hidden select-none py-10">
                    <motion.div
                        className="flex gap-8 flex-nowrap will-change-transform"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...speakers, ...speakers].map((speaker, index) => (
                            <div key={`${speaker.name}-${index}`} className="w-[300px] md:w-[340px] flex-shrink-0 group perspective-1000">
                                <Card className="relative overflow-hidden border-border/40 bg-background/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 h-[420px] flex flex-col items-center justify-between p-0 rounded-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative w-full h-[60%] overflow-hidden bg-muted">

                                        <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className="w-full h-full object-cover"
                                                style={{
                                                    objectPosition: speaker.position || 'center',
                                                    transform: speaker.scale ? `scale(${speaker.scale})` : undefined
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative z-20 -mt-16 flex flex-col items-center w-full px-6 pb-8 text-center space-y-3 flex-grow justify-end">
                                        <div className="h-16 w-16 rounded-full border-4 border-background shadow-lg overflow-hidden bg-muted mb-2">
                                            <img
                                                src={speaker.image}
                                                alt={speaker.initials}
                                                className="w-full h-full object-cover"
                                                style={{
                                                    objectPosition: speaker.position || 'center',
                                                    transform: speaker.scale ? `scale(${speaker.scale})` : undefined
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg leading-tight mb-1">{speaker.name}</h3>
                                            <p className="text-primary text-xs font-medium uppercase tracking-wider">{speaker.topic}</p>
                                        </div>

                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {speaker.role}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
