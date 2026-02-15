import Link from "next/link"
import { Globe, Twitter, Linkedin, Facebook, Mail } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <Globe className="h-6 w-6 text-primary" />
                            <span>ICAR 2026</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            The premier international forum for researchers, scientists, and industry experts to discuss the latest advancements in technology and science.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
                            <li><Link href="/register" className="hover:text-primary transition-colors">Registration</Link></li>
                            <li><Link href="/program" className="hover:text-primary transition-colors">Program Schedule</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/authors" className="hover:text-primary transition-colors">Author Guidelines</Link></li>
                            <li><Link href="/reviewers" className="hover:text-primary transition-colors">Reviewer Portal</Link></li>
                            <li><Link href="/venue" className="hover:text-primary transition-colors">Venue & Travel</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:info@icar2026.org" className="hover:text-primary transition-colors">info@icar2026.org</a>
                            </li>
                            <li>
                                123 Conference Center Blvd,<br />
                                New York, NY 10001
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ICAR. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
