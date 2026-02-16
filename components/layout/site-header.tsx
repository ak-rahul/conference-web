"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/speakers", label: "Speakers" },
    { href: "/committees", label: "Committees" },
    { href: "/call-for-papers", label: "Call for Papers" },
    { href: "/important-dates", label: "Dates" },
    { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { scrollY } = useScroll()
    const pathname = usePathname()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20)
    })

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm supports-[backdrop-filter]:bg-background/60 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">

                    <span className="font-bold text-xl tracking-tight hidden sm:inline-block group-hover:text-primary transition-colors duration-300">
                        ICAM 2026
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    <div className="flex items-center rounded-full bg-background/50 border border-border/40 px-2 py-1 shadow-sm backdrop-blur-sm mr-4">
                        {routes.map((route) => {
                            const isActive = pathname === route.href
                            return (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-full",
                                        isActive ? "text-primary" : "text-foreground/80"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-muted rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {route.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-2 pl-4 border-l border-border/40">
                        <ModeToggle />
                        <Button asChild size="sm" className="rounded-full px-6 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfupJ69J9vTLpca45aYIz0_OwRe74ZUnkU79CTmgzjq-eFqnw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                Register
                            </Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-4">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-border/40 backdrop-blur-xl bg-background/80">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-8 mt-8">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                    onClick={() => setIsOpen(false)}
                                >

                                    <span className="font-bold text-2xl">ICAM 2026</span>
                                </Link>

                                <div className="flex flex-col gap-2">
                                    {routes.map((route) => {
                                        const isActive = pathname === route.href
                                        return (
                                            <Link
                                                key={route.href}
                                                href={route.href}
                                                className={cn(
                                                    "px-4 py-3 text-lg font-medium rounded-xl transition-all",
                                                    isActive
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                )}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {route.label}
                                            </Link>
                                        )
                                    })}
                                </div>

                                <Button asChild className="w-full text-lg h-12 rounded-xl shadow-lg shadow-primary/20">
                                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfupJ69J9vTLpca45aYIz0_OwRe74ZUnkU79CTmgzjq-eFqnw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                        Register Now
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}
