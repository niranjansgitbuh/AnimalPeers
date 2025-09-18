import type { Metadata } from "next"
import { SuccessHero } from "@/components/success-stories/hero"
import { FeaturedStories } from "@/components/success-stories/featured-stories"
import { StoryCategories } from "@/components/success-stories/story-categories"
import { ImpactMetrics } from "@/components/success-stories/impact-metrics"
import { CallToAction } from "@/components/success-stories/call-to-action"

export const metadata: Metadata = {
  title: "Success Stories - AnimalPeers",
  description:
    "Real stories of animals rescued and lives transformed through our platform. See the impact of community-driven animal welfare.",
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen">
      <SuccessHero />
      <ImpactMetrics />
      <FeaturedStories />
      <StoryCategories />
      <CallToAction />
    </div>
  )
}
