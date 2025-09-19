import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogCategories } from "@/components/blog/categories"
import { RecentPosts } from "@/components/blog/recent-posts"
import { BlogNewsletter } from "@/components/blog/newsletter"

export const metadata: Metadata = {
  title: "Blog - AnimalPeers",
  description:
    "Stay updated with the latest animal welfare news, rescue stories, pet care tips, and expert advice from the AnimalPeers community.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <RecentPosts />
      <BlogNewsletter />
    </div>
  )
}
