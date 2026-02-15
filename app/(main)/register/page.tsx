"use client"

import { useState, useEffect } from "react"
import { Check, CreditCard, User, Building, QrCode, Link as LinkIcon, Loader2 } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/layout/page-header"
import { registerParticipant } from "./actions"

const pricingTiers = [
    {
        name: "Postgraduate Student",
        price: "₹2,000",
        description: "For Masters and PhD students.",
        features: ["Access to all sessions", "Conference kit", "Lunch & Refreshments", "Certificate of Participation"],
        value: "Postgraduate Student"
    },
    {
        name: "Research Scholar",
        price: "₹3,000",
        description: "For full-time research scholars.",
        features: ["Paper Presentation", "Publication in Proceedings", "Networking Session", "Gala Dinner"],
        value: "Research Scholar",
        popular: true
    },
    {
        name: "Academician",
        price: "₹4,000",
        description: "For faculty and professors.",
        features: ["Keynote Access", "Chairing Opportunities", "VIP Lounge Access", "Extended Abstract Publication"],
        value: "Academician"
    },
    {
        name: "Industry Professional",
        price: "₹5,000",
        description: "For corporate delegates.",
        features: ["Company Branding", "Exhibition Stall Discount", "B2B Networking", "Industry Panel Access"],
        value: "Industry Professional"
    }
]

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [pageLoading, setPageLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    const supabase = createClient()

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
            setPageLoading(false)
        }
        checkUser()
    }, [])

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const result = await registerParticipant(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
        }
    }

    if (pageLoading) {
        return <div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
    }

    if (!user) {
        return (
            <div className="flex flex-col min-h-screen">
                <PageHeader
                    title="Registration"
                    description="Secure your spot at ICAR 2026."
                />
                <div className="container py-24 px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mx-auto max-w-md"
                    >
                        <Card className="border-muted/50 shadow-2xl">
                            <CardHeader className="space-y-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Account Required</CardTitle>
                                <CardDescription className="text-base">
                                    Please sign in to register for the conference.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button asChild className="w-full h-12 text-base">
                                    <Link href="/login">Login or Create Account</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Registration"
                description="Secure your spot at ICAR 2026."
            />

            <div className="container py-12 px-4 md:px-6 space-y-16">

                {/* Pricing Selection */}
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose Your Pass</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Select the category that best describes you. This will automatically select your registration type below.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card
                                    className={`relative h-full flex flex-col cursor-pointer transition-all border-2 ${selectedCategory === tier.value ? "border-primary shadow-2xl scale-105" : "border-border hover:border-primary/50 hover:shadow-lg"}`}
                                    onClick={() => setSelectedCategory(tier.value)}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-3 left-0 right-0 mx-auto w-max px-3 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold rounded-full">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                                        <div className="text-3xl font-bold mt-2">{tier.price}</div>
                                        <CardDescription>{tier.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-3 text-sm">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant={selectedCategory === tier.value ? "default" : "outline"}
                                            className="w-full"
                                        >
                                            {selectedCategory === tier.value ? "Selected" : "Select Plan"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Registration Form */}
                <div className="mx-auto max-w-[800px]">
                    <Card className="border-muted/50 shadow-xl overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-primary to-purple-600" />
                        <CardHeader>
                            <CardTitle>Complete Registration</CardTitle>
                            <CardDescription>
                                Please verify your details and upload the payment proof.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="flex items-center gap-2"><User className="h-4 w-4" /> Full Name</Label>
                                        <Input id="fullName" name="fullName" defaultValue={user.user_metadata?.full_name} required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="affiliation" className="flex items-center gap-2"><Building className="h-4 w-4" /> Affiliation</Label>
                                        <Input id="affiliation" name="affiliation" placeholder="University / Organization" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Registration Category</Label>
                                    <Select name="category" value={selectedCategory} onValueChange={setSelectedCategory} required>
                                        <SelectTrigger className="h-12">
                                            <SelectValue placeholder="Select from pricing above" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {pricingTiers.map(tier => (
                                                <SelectItem key={tier.value} value={tier.value}>{tier.name} - {tier.price}</SelectItem>
                                            ))}
                                            <SelectItem value="Foreign Delegate">Foreign Delegate ($100)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-xl border border-dashed border-primary/20 space-y-6">
                                    <h3 className="font-semibold flex items-center gap-2"><CreditCard className="h-5 w-5 text-primary" /> Payment Details</h3>

                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border space-y-2">
                                            {/* Placeholder for QR Code */}
                                            <div className="w-32 h-32 bg-zinc-100 flex items-center justify-center">
                                                <QrCode className="h-16 w-16 text-zinc-300" />
                                            </div>
                                            <p className="text-xs font-mono text-muted-foreground">UPI: conference@upi</p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-sm text-muted-foreground">Scan the QR code to pay via GPay/PhonePe or use the UPI ID.</p>
                                            <div className="space-y-2">
                                                <Label htmlFor="paymentProof" className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Payment Proof URL</Label>
                                                <Input id="paymentProof" name="paymentProof" type="url" placeholder="https://drive.google.com/..." required />
                                                <p className="text-xs text-muted-foreground">Upload receipt to Drive and paste the link.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-12 text-lg" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                                        </>
                                    ) : (
                                        "Confirm Registration"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
