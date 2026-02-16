"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const committeeMembers = [
    {
        role: "Patron",
        members: [
            { name: "Prof. Junaid Bushiri", affiliation: "Vice Chancellor, CUSAT", image: "https://i.pravatar.cc/150?u=junaid" }
        ]
    },
    {
        role: "Conference Chairs",
        members: [
            { name: "Prof. Yoosaf Karuvath", affiliation: "Head, DAC, CUSAT", image: "https://i.pravatar.cc/150?u=yoosaf" },
            { name: "Emeritus Prof. K. Girish Kumar", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=girish" },
            { name: "Prof. Jorge Beltramini", affiliation: "Queensland University of Technology, Australia", image: "https://i.pravatar.cc/150?u=jorge" }
        ]
    },
    {
        role: "Convener",
        members: [
            { name: "Dr. Leena R.", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=leena" }
        ]
    },
    {
        role: "Co-Convener",
        members: [
            { name: "Dr. Swathi Mukundan", affiliation: "Department of Chemical Engineering, Loughborough University, U.K.", image: "https://i.pravatar.cc/150?u=swathi" }
        ]
    },
    {
        role: "Local Organizing Committee",
        members: [
            { name: "Prof. N. Manoj", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=manoj" },
            { name: "Prof. P. M. Sabura Begum", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=sabura" },
            { name: "Prof. Jayashree E. G.", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=jayashree" },
            { name: "Prof. Suja Haridas", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=suja" },
            { name: "Dr. Manoj E.", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=manoj_e" },
            { name: "Dr. Kala R.", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=kala" },
            { name: "Dr. Sindhu Mathai", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=sindhu" },
            { name: "Dr. Sebastian Nybin Remello", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=sebastian" },
            { name: "Dr. Shandev P. P", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=shandev" },
            { name: "Emeritus Prof. S. Prathapan", affiliation: "DAC, CUSAT", image: "https://i.pravatar.cc/150?u=prathapan" }
        ]
    }
]

export default function CommitteesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <PageHeader
                title="Organizing Committee"
                description="The dedicated team responsible for ICAM 2026."
            />

            <div className="container py-16 md:py-24 px-4 md:px-6 space-y-20">
                {committeeMembers.map((section, index) => (
                    <div key={index} className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6"
                        >
                            <h2 className="text-3xl font-bold text-foreground text-nowrap">{section.role}</h2>
                            <div className="h-px bg-border flex-1" />
                        </motion.div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {section.members.map((member, mIndex) => (
                                <motion.div
                                    key={mIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: mIndex * 0.05 }}
                                >
                                    <Card className="h-full border-muted hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-2">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
                                                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 rounded-3xl bg-muted/30 border border-primary/10 text-center space-y-6 max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold">Join the Committee</h3>
                    <p className="text-muted-foreground text-lg">
                        We are always looking for volunteers to help organize future editions of ICAM. If you are interested in contributing, please reach out to us.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
