"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/speakers", label: "Speakers" },
    { href: "/committees", label: "Committees" },
    { href: "/call-for-papers", label: "Call for Papers" },
    { href: "/important-dates", label: "Important Dates" },
    { href: "/contact", label: "Contact" },
]

// Removed User import since we are going static
// import { User } from "@supabase/supabase-js"

interface SiteHeaderProps {
    // user: User | null // Removed user prop
}

export function SiteHeader({ }: SiteHeaderProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center px-6 md:px-8">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            ICAM 2026
                        </span>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {routes.map((route) => (
                                <NavigationMenuItem key={route.href}>
                                    <NavigationMenuLink asChild>
                                        <Link href={route.href} className={navigationMenuTriggerStyle()}>
                                            {route.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <div className="px-7">
                            <Link
                                href="/"
                                className="flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="font-bold">ICAM 2026</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 mt-4 px-7">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className="text-muted-foreground hover:text-foreground block px-2 py-1 text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or other items */}
                    </div>
                    <nav className="flex items-center gap-2">
                        <Button asChild variant="default" size="sm">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfupJ69J9vTLpca45aYIz0_OwRe74ZUnkU79CTmgzjq-eFqnw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                Register Now
                            </Link>
                        </Button>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
