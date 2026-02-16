
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
        <div className="flex flex-col min-h-screen bg-background">
            <PageHeader
                title="Contact Us"
                description="Have questions? We're here to help."
            />

            <div className="container py-16 md:py-24 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    Get in Touch
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    Whether you have questions about registration, paper submission, or partnership opportunities, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                <Card className="border-muted hover:border-primary/20 transition-colors overflow-hidden group">
                                    <div className="flex items-start gap-6 p-6">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-lg">Conference Venue</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Mini Seminar Hall,<br />
                                                Seminar Complex,<br />
                                                CUSAT, Kochi, Kerala
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="border-muted hover:border-primary/20 transition-colors overflow-hidden group">
                                    <div className="flex items-start gap-6 p-6">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-lg">Email Support</h3>
                                            <p className="text-muted-foreground transition-colors hover:text-primary">
                                                <a href="mailto:sparccusat26@gmail.com">sparccusat26@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="border-muted hover:border-primary/20 transition-colors overflow-hidden group">
                                    <div className="flex items-start gap-6 p-6">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-lg">Phone</h3>
                                            <p className="text-muted-foreground">+91 8075071886</p>
                                            <p className="text-sm text-muted-foreground/80 mt-1">Mon-Fri, 9am - 5pm IST</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden border border-border shadow-2xl group">
                            <div className="absolute inset-0 bg-muted/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Seminar%20Complex,%20Cochin%20University%20of%20Science%20and%20Technology,%20Kochi,%20Kerala&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                            >
                            </iframe>
                            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-xl p-4 rounded-2xl border shadow-lg z-20 pointer-events-none transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium">Seminar Complex, CUSAT</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full"
                    >
                        <Card className="border-border/50 shadow-2xl h-full flex flex-col bg-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />

                            <CardHeader className="space-y-4 p-8 md:p-12 pb-4 md:pb-6 border-b border-border/40">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                        <CardDescription className="text-base mt-1">We typically respond within 24 hours.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-8 md:p-12 pt-8">
                                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <label htmlFor="firstName" className="text-sm font-medium pl-1">First name</label>
                                            <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="h-12 bg-background/50 border-input/50 focus:bg-background transition-colors" required />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label htmlFor="lastName" className="text-sm font-medium pl-1">Last name</label>
                                            <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="h-12 bg-background/50 border-input/50 focus:bg-background transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label htmlFor="email" className="text-sm font-medium pl-1">Email</label>
                                        <Input id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" type="email" className="h-12 bg-background/50 border-input/50 focus:bg-background transition-colors" required />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label htmlFor="subject" className="text-sm font-medium pl-1">Subject</label>
                                        <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="General Inquiry" className="h-12 bg-background/50 border-input/50 focus:bg-background transition-colors" />
                                    </div>
                                    <div className="space-y-2.5 flex-1">
                                        <label htmlFor="message" className="text-sm font-medium pl-1">Message</label>
                                        <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="min-h-[160px] bg-background/50 border-input/50 focus:bg-background transition-colors resize-none p-4" required />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full h-14 text-base font-medium shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 rounded-xl mt-4">
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
