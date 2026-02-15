"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const committeeMembers = [
    {
        role: "General Chairs",
        members: [
            { name: "Prof. Alan Turing", affiliation: "University of Cambridge, UK", image: "https://i.pravatar.cc/150?u=alan" },
            { name: "Dr. Grace Hopper", affiliation: "Yale University, USA", image: "https://i.pravatar.cc/150?u=grace" }
        ]
    },
    {
        role: "Program Chairs",
        members: [
            { name: "Dr. Ada Lovelace", affiliation: "University of Oxford, UK", image: "https://i.pravatar.cc/150?u=ada" },
            { name: "Prof. John von Neumann", affiliation: "Princeton University, USA", image: "https://i.pravatar.cc/150?u=john" },
            { name: "Dr. Claude Shannon", affiliation: "MIT, USA", image: "https://i.pravatar.cc/150?u=claude" }
        ]
    },
    {
        role: "Publication Chairs",
        members: [
            { name: "Dr. Tim Berners-Lee", affiliation: "CERN, Switzerland", image: "https://i.pravatar.cc/150?u=tim" },
            { name: "Prof. Barbara Liskov", affiliation: "MIT, USA", image: "https://i.pravatar.cc/150?u=barbara" }
        ]
    },
    {
        role: "Local Organizing Committee",
        members: [
            { name: "Alice Smith", affiliation: "NY Tech Hub", image: "https://i.pravatar.cc/150?u=alice" },
            { name: "Bob Johnson", affiliation: "Event Coordinators Inc.", image: "https://i.pravatar.cc/150?u=bob" },
            { name: "Charlie Brown", affiliation: "City University of New York", image: "https://i.pravatar.cc/150?u=charlie" }
        ]
    }
]

export default function CommitteesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Organizing Committee"
                description="The dedicated team responsible for ICAR 2025."
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
                                    <div className="flex items-center p-4 space-x-4">
                                        <Avatar className="h-16 w-16 border-2 border-primary/20 group-hover:border-primary transition-colors">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-lg leading-none mb-1 group-hover:text-primary transition-colors">{member.name}</p>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{member.affiliation}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="mt-16 p-8 rounded-2xl bg-muted/30 border border-primary/10 text-center space-y-4">
                    <h3 className="text-xl font-semibold">Join the Committee</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We are always looking for volunteers to help organize future editions of ICAR. If you are interested in contributing, please reach out to us.
                    </p>
                </div>
            </div>
        </div>
    )
}
