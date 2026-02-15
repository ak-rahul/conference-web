"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { User } from "@supabase/supabase-js"
import { signOut } from "@/app/(auth)/login/actions"

interface AdminHeaderProps {
    user: User | null
}

export function AdminHeader({ user }: AdminHeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center px-4">
                <div className="mr-8 flex items-center">
                    <Link href="/admin" className="flex items-center space-x-2">
                        <ShieldCheck className="h-6 w-6" />
                        <span className="font-bold sm:inline-block">
                            ICAR Admin
                        </span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-2">
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/">View Site</Link>
                        </Button>
                        <form action={signOut}>
                            <Button variant="outline" size="sm">
                                Logout
                            </Button>
                        </form>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
