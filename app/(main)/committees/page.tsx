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
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Organizing Committee"
                description="The dedicated team responsible for ICAM 2026."
            />

            <div className="container py-16 px-4 md:px-6 space-y-16">
                {committeeMembers.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{section.role}</h2>
                            <div className="h-px bg-border flex-1" />
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {section.members.map((member, mIndex) => (
                                <Card key={mIndex} className="group overflow-hidden border-muted/50 hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col p-6 space-y-2">
                                        <p className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">{member.name}</p>
                                        <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="mt-16 p-8 rounded-2xl bg-muted/30 border border-primary/10 text-center space-y-4">
                    <h3 className="text-xl font-semibold">Join the Committee</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We are always looking for volunteers to help organize future editions of ICAM. If you are interested in contributing, please reach out to us.
                    </p>
                </div>
            </div>
        </div>
    )
}
