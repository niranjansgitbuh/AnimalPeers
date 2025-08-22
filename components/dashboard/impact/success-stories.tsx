"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Calendar, Share2 } from "lucide-react"

interface SuccessStory {
  id: string
  animalName: string
  animalType: string
  location: string
  rescueDate: string
  status: "Recovered" | "Adopted" | "Rehabilitated"
  beforeImage: string
  afterImage: string
  description: string
  impact: string
}

export function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null)

  const successStories: SuccessStory[] = [
    {
      id: "1",
      animalName: "Buddy",
      animalType: "Dog",
      location: "Mumbai, Maharashtra",
      rescueDate: "2024-05-15",
      status: "Adopted",
      beforeImage: "/placeholder.svg?height=200&width=300",
      afterImage: "/placeholder.svg?height=200&width=300",
      description:
        "Buddy was found injured on the street with a broken leg. After reporting through AnimalPeers, he received immediate medical attention and found a loving home.",
      impact: "Your donation of ₹2,500 helped cover Buddy's medical expenses and rehabilitation.",
    },
    {
      id: "2",
      animalName: "Whiskers",
      animalType: "Cat",
      location: "Delhi, NCR",
      rescueDate: "2024-04-22",
      status: "Recovered",
      beforeImage: "/placeholder.svg?height=200&width=300",
      afterImage: "/placeholder.svg?height=200&width=300",
      description:
        "Whiskers was rescued from a construction site where she was trapped for days. She's now healthy and back in her territory.",
      impact: "Your volunteer hours helped in the rescue operation and post-care monitoring.",
    },
    {
      id: "3",
      animalName: "Charlie",
      animalType: "Dog",
      location: "Bangalore, Karnataka",
      rescueDate: "2024-06-01",
      status: "Rehabilitated",
      beforeImage: "/placeholder.svg?height=200&width=300",
      afterImage: "/placeholder.svg?height=200&width=300",
      description:
        "Charlie was severely malnourished when found. Through proper care and nutrition, he's now a healthy, playful dog.",
      impact: "Your recurring sponsorship provided ongoing medical care and nutrition support.",
    },
  ]

  const handleShare = (story: SuccessStory) => {
    if (navigator.share) {
      navigator.share({
        title: `${story.animalName}'s Success Story`,
        text: `I helped rescue ${story.animalName} through AnimalPeers! ${story.description}`,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Your Success Stories</h2>
        <p className="text-gray-600 dark:text-gray-400">Animals you've directly helped through your contributions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {successStories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={story.afterImage || "/placeholder.svg"}
                alt={`${story.animalName} after rescue`}
                className="w-full h-48 object-cover"
              />
              <Badge
                className={`absolute top-2 right-2 ${
                  story.status === "Adopted"
                    ? "bg-green-500"
                    : story.status === "Recovered"
                      ? "bg-blue-500"
                      : "bg-purple-500"
                }`}
              >
                {story.status}
              </Badge>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>{story.animalName}</span>
                <Button variant="ghost" size="sm" onClick={() => handleShare(story)} className="h-8 w-8 p-0">
                  <Share2 className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                {story.location}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                {new Date(story.rescueDate).toLocaleDateString()}
              </div>

              <p className="text-sm line-clamp-2">{story.description}</p>

              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">💚 {story.impact}</p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      {story.animalName}'s Journey
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Before Rescue</h4>
                        <img
                          src={story.beforeImage || "/placeholder.svg"}
                          alt={`${story.animalName} before rescue`}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">After Recovery</h4>
                        <img
                          src={story.afterImage || "/placeholder.svg"}
                          alt={`${story.animalName} after rescue`}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{story.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{new Date(story.rescueDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">{story.description}</p>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Your Impact</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">{story.impact}</p>
                    </div>

                    <Button onClick={() => handleShare(story)} className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share This Success Story
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
