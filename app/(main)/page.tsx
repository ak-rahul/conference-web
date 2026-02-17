import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { SpeakersPreview } from "@/components/home/speakers-preview"
import { LogoSection } from "@/components/home/logo-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <LogoSection />
      <AboutSection />
      <SpeakersPreview />
    </main>
  )
}
