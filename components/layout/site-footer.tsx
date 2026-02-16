import Link from "next/link"
import { Globe, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t border-border/40 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-2xl">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                                <Globe className="h-5 w-5" />
                            </div>
                            <span>ICAM 2026</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:sparccusat26@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                                    <Mail className="h-4 w-4" />
                                    sparccusat26@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                                <span>
                                    Mini Seminar Hall, Seminar Complex,<br />
                                    CUSAT, Kochi, Kerala
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/speakers" className="hover:text-primary transition-colors">Speakers</Link></li>
                            <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
                            <li><Link href="/committees" className="hover:text-primary transition-colors">Committees</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ICAM 2026. All rights reserved.</p>
                    <p>Designed for the Future of Science.</p>
                </div>
            </div>
        </footer>
    )
}
