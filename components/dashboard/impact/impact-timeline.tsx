"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, DollarSign, Clock, MapPin } from "lucide-react"

interface TimelineEvent {
  id: string
  date: string
  type: "rescue" | "donation" | "volunteer" | "milestone"
  title: string
  description: string
  location?: string
  amount?: number
  impact?: string
}

export function ImpactTimeline() {
  const timelineEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "2024-06-15",
      type: "rescue",
      title: "Reported Injured Dog",
      description: "Successfully reported and helped rescue Charlie, a street dog with a broken leg",
      location: "Bangalore, Karnataka",
      impact: "Charlie is now fully recovered and adopted",
    },
    {
      id: "2",
      date: "2024-06-10",
      type: "milestone",
      title: "Reached 20 Animals Rescued!",
      description: "Achieved milestone of helping rescue 20 animals through the platform",
      impact: "Unlocked 'Animal Guardian' badge",
    },
    {
      id: "3",
      date: "2024-06-05",
      type: "donation",
      title: "Monthly Donation",
      description: "Contributed to emergency medical fund",
      amount: 2500,
      impact: "Helped fund 3 emergency surgeries",
    },
    {
      id: "4",
      date: "2024-05-28",
      type: "volunteer",
      title: "Volunteer Drive Participation",
      description: "Participated in weekend animal awareness drive",
      location: "Mumbai, Maharashtra",
      impact: "Reached 200+ people with animal welfare awareness",
    },
    {
      id: "5",
      date: "2024-05-15",
      type: "rescue",
      title: "Cat Rescue Operation",
      description: "Helped coordinate rescue of Whiskers from construction site",
      location: "Delhi, NCR",
      impact: "Whiskers safely returned to territory",
    },
    {
      id: "6",
      date: "2024-05-01",
      type: "donation",
      title: "First Donation",
      description: "Made first contribution to AnimalPeers platform",
      amount: 1000,
      impact: "Funded vaccination for 5 street dogs",
    },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "rescue":
        return <Heart className="h-4 w-4 text-red-500" />
      case "donation":
        return <DollarSign className="h-4 w-4 text-green-500" />
      case "volunteer":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "milestone":
        return <Calendar className="h-4 w-4 text-purple-500" />
      default:
        return <Calendar className="h-4 w-4 text-gray-500" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "rescue":
        return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
      case "donation":
        return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
      case "volunteer":
        return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20"
      case "milestone":
        return "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20"
      default:
        return "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/20"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">📅 Your Impact Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-4">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                  {getEventIcon(event.type)}
                </div>

                {/* Event content */}
                <div className={`flex-1 rounded-lg border p-4 ${getEventColor(event.type)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{event.description}</p>

                  <div className="space-y-2">
                    {event.location && (
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    )}

                    {event.amount && (
                      <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                        <DollarSign className="h-3 w-3" />₹{event.amount.toLocaleString()} donated
                      </div>
                    )}

                    {event.impact && (
                      <div className="bg-white/50 dark:bg-gray-800/50 rounded p-2">
                        <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                          💚 Impact: {event.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
