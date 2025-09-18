"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Calendar, ArrowRight, Star } from "lucide-react"

export function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: "Max's Miraculous Recovery",
      category: "Medical Rescue",
      location: "Mumbai, Maharashtra",
      date: "March 2024",
      image: "/placeholder.svg?height=300&width=400&text=Golden+Retriever+Recovery+Story",
      beforeImage: "/placeholder.svg?height=300&width=400&text=Injured+Dog+Before+Treatment",
      description:
        "Found with a severe leg injury after a road accident, Max underwent emergency surgery and months of rehabilitation. Today, he runs freely in his new home with a loving family.",
      impact: "Full recovery in 3 months",
      rating: 4.9,
      rescuer: "Mumbai Animal Rescue",
      tags: ["Emergency", "Surgery", "Adoption"],
    },
    {
      id: 2,
      title: "Mittens' New Beginning",
      category: "Abandonment Rescue",
      location: "Bangalore, Karnataka",
      date: "February 2024",
      image: "/placeholder.svg?height=300&width=400&text=Happy+Cat+in+New+Home",
      beforeImage: "/placeholder.svg?height=300&width=400&text=Abandoned+Kitten+Rescue",
      description:
        "Abandoned as a kitten and malnourished, Mittens was nursed back to health by dedicated volunteers. She now brings joy to a family with two children who adore her.",
      impact: "Healthy weight gained",
      rating: 4.8,
      rescuer: "Bangalore Cat Welfare",
      tags: ["Kitten", "Malnutrition", "Family"],
    },
    {
      id: 3,
      title: "Raja's Sanctuary Life",
      category: "Wildlife Rescue",
      location: "Pune, Maharashtra",
      date: "January 2024",
      image: "/placeholder.svg?height=300&width=400&text=Rescued+Street+Dog+at+Sanctuary",
      beforeImage: "/placeholder.svg?height=300&width=400&text=Sick+Street+Dog+Before+Rescue",
      description:
        "Raja was suffering from a severe skin infection when found. After treatment and care, he now lives peacefully at a sanctuary, helping other rescued animals adjust to their new lives.",
      impact: "Complete skin recovery",
      rating: 4.7,
      rescuer: "Pune Animal Sanctuary",
      tags: ["Skin Treatment", "Sanctuary", "Recovery"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Star className="w-4 h-4 mr-2" />
            Featured Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stories of{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hope & Healing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each story represents a life transformed through compassion, dedication, and community support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={story.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Before/After Image Animation */}
                <div className="absolute inset-0 transition-all duration-700 group-hover:opacity-0">
                  <img
                    src={story.beforeImage || "/placeholder.svg"}
                    alt={`${story.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">Before</Badge>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">After</Badge>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {story.category}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{story.rating}</span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{story.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{story.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{story.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{story.impact}</span>
                      <span className="text-sm text-muted-foreground">{story.rescuer}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    size="sm"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Read Full Story
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 bg-transparent">
            View All Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
