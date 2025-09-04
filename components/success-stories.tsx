
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      title: "From Hurt to Healed – Max the Street Dog",
      description:
        "Max was found with a broken leg after being hit by a car. Thanks to a quick report, he was rescued within an hour and is now fully recovered.",
      image: "/placeholder.svg?height=300&width=400&text=Max+Before",
      afterImage: "/placeholder.svg?height=300&width=400&text=Max+After",
      location: "Mumbai, Maharashtra",
      date: "March 15, 2025",
    },
    {
      title: "A New Home for Mittens",
      description:
        "Abandoned and malnourished, Mittens was spotted by a college student who reported her. Now she's healthy and has been adopted into a loving home.",
      image: "/placeholder.svg?height=300&width=400&text=Mittens+Before",
      afterImage: "/placeholder.svg?height=300&width=400&text=Mittens+After",
      location: "Bangalore, Karnataka",
      date: "April 22, 2025",
    },
    {
      title: "Raja's Recovery Journey",
      description:
        "Raja was suffering from a severe infection. After treatment at a local gaushala, he made a full recovery and now lives peacefully at a sanctuary.",
      image: "/placeholder.svg?height=300&width=400&text=Raja+Before",
      afterImage: "/placeholder.svg?height=300&width=400&text=Raja+After",
      location: "Jaipur, Rajasthan",
      date: "May 10, 2025",
    },
  ]

  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-muted-foreground">Real animals helped through our platform</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="absolute inset-0 transition-all duration-700 group-hover:opacity-0">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.title} - Before`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <img
                    src={story.afterImage || "/placeholder.svg"}
                    alt={`${story.title} - After`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3 text-xl font-semibold line-clamp-2">{story.title}</h3>
                <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>{story.date}</span>
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground flex-grow line-clamp-3">{story.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto transition-colors hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
