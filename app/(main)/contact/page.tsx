"use client"

import { useState } from "react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { firstName, lastName, email, subject, message } = formData

        if (!firstName || !email || !message) {
            toast.error("Please fill in all required fields.")
            return
        }

        const mailtoLink = `mailto:sparccusat26@gmail.com?subject=${encodeURIComponent(subject || "Conference Inquiry")}&body=${encodeURIComponent(
            `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`

        window.location.href = mailtoLink
        toast.success("Opening your email client...")
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Contact Us"
                description="Have questions? We're here to help."
            />

            <div className="container py-16 px-4 md:px-6 space-y-20">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Get in Touch</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Whether you have questions about registration, paper submission, or partnership opportunities, our team is ready to assist you.
                            </p>

                            <div className="grid gap-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-muted">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Conference Venue</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Mini Seminar Hall,<br />
                                            Seminar Complex,<br />
                                            CUSAT, Kochi, Kerala
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-muted">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                                        <p className="text-muted-foreground">sparccusat26@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-muted">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+91 8075071886</p>
                                        <p className="text-muted-foreground">Mon-Fri, 9am - 5pm IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden border border-muted shadow-2xl group">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Seminar%20Complex,%20Cochin%20University%20of%20Science%20and%20Technology,%20Kochi,%20Kerala&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                className="w-full h-full filter grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                            >
                            </iframe>
                            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border shadow-sm pointer-events-none">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary" /> Seminar Complex, CUSAT
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="border-muted/50 shadow-2xl h-full flex flex-col">
                            <CardHeader className="space-y-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                    <CardDescription>We typically respond within 24 hours.</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                                            <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="h-11 bg-muted/30" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                                            <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="h-11 bg-muted/30" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" type="email" className="h-11 bg-muted/30" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="General Inquiry" className="h-11 bg-muted/30" />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="min-h-[150px] bg-muted/30 resize-none" required />
                                    </div>
                                    <Button type="submit" className="w-full h-12 text-base shadow-lg shadow-primary/20">
                                        <Send className="w-4 h-4 mr-2" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}
