"use client"

import { useState } from "react"
import Link from "next/link"
import { ShieldCheck, Sparkles, Globe } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { login, signup } from "./actions"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(formData: FormData) {
        setIsLoading(true)
        const result = await login(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        }
    }

    async function handleSignup(formData: FormData) {
        setIsLoading(true)
        const result = await signup(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
        }
    }

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            {/* Left Side - Visuals */}
            <div className="hidden bg-muted lg:block relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="relative z-20 flex flex-col justify-between h-full p-10 text-white">
                    <div className="flex items-center text-lg font-medium">
                        <Globe className="mr-2 h-6 w-6" />
                        ICAR 2026
                    </div>
                    <div className="space-y-6 max-w-lg">
                        <blockquote className="space-y-2">
                            <p className="text-3xl font-bold leading-tight">
                                "Advancing the frontiers of science and technology through global collaboration."
                            </p>
                            <footer className="text-sm text-zinc-400">
                                &mdash; The International Research Committee
                            </footer>
                        </blockquote>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <ShieldCheck className="h-4 w-4" /> Secure Registration
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <Sparkles className="h-4 w-4" /> Premium Experience
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-zinc-500">
                        &copy; 2026 ICAR. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <p className="text-balance text-muted-foreground">
                            Login or create an account to start your journey.
                        </p>
                    </div>

                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>

                        <TabsContent value="login">
                            <Card className="border-0 shadow-none">
                                <CardContent className="p-0 space-y-4">
                                    <form action={handleLogin} className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <Input id="password" name="password" type="password" required />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                            {isLoading ? "Logging in..." : "Login"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="signup">
                            <Card className="border-0 shadow-none">
                                <CardContent className="p-0 space-y-4">
                                    <form action={handleSignup} className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="fullName">Full Name</Label>
                                            <Input id="fullName" name="fullName" placeholder="John Doe" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="signup-email">Email</Label>
                                            <Input id="signup-email" name="email" type="email" placeholder="m@example.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="signup-password">Password</Label>
                                            <Input id="signup-password" name="password" type="password" required />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                            {isLoading ? "Creating account..." : "Create Account"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
