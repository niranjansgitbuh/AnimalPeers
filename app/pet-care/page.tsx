import type { Metadata } from "next"
import { PetCareHero } from "@/components/pet-care/hero"
import { ServicesList } from "@/components/pet-care/services-list"
import { VeterinarianShowcase } from "@/components/pet-care/veterinarian-showcase"
import { PetCareTestimonials } from "@/components/pet-care/testimonials"
import { PetCareCallToAction } from "@/components/pet-care/call-to-action"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pet Care Services - AnimalPeers",
  description: "Professional veterinary care for your pets at home",
}

export default function PetCarePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PetCareHero />
      <ServicesList />
      <VeterinarianShowcase />
      <PetCareTestimonials />
      <PetCareCallToAction />
      <Footer />
    </div>
  )
}
