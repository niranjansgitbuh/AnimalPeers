import type { Metadata } from "next"
import { AboutHero } from "@/components/about/hero"
import { AboutContent } from "@/components/about/content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About AnimalPeers - Our Mission and Vision",
  description:
    "Learn about AnimalPeers, our mission, vision, and how we're building a connected network for animal welfare.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  )
}
