import type { Metadata } from "next"
import { VolunteerHero } from "@/components/volunteer/hero"
import { VolunteerForm } from "@/components/volunteer/form"
import { UpcomingCampaigns } from "@/components/volunteer/upcoming-campaigns"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Volunteer with AnimalPeers - Make a Difference",
  description: "Join our volunteer network and help make a difference in the lives of stray animals.",
}

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <VolunteerHero />
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <VolunteerForm />
          <UpcomingCampaigns />
        </div>
      </div>
      <Footer />
    </div>
  )
}
