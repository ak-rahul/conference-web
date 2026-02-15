import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { SpeakersPreview } from "@/components/home/speakers-preview"
import { SponsorsPreview } from "@/components/home/sponsors-preview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <SpeakersPreview />
      <SponsorsPreview />
    </main>
  )
}
