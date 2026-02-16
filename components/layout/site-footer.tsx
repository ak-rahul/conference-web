import Link from "next/link"
import { Globe, Twitter, Linkedin, Facebook, Mail } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-xl">
                            <Globe className="h-6 w-6 text-primary" />
                            <span>ICAM 2026</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare.
                        </p>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:sparccusat26@gmail.com" className="hover:text-primary transition-colors">sparccusat26@gmail.com</a>
                        </div>
                        <p>
                            Mini Seminar Hall, Seminar Complex, CUSAT
                        </p>
                    </div>

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

                <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ICAM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
