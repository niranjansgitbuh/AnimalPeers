import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function UpcomingCampaigns() {
  const campaigns = [
    {
      id: "winter-rescue",
      title: "Winter Rescue Drive – Pune",
      date: "Dec 15, 2025",
      time: "10 AM – 2 PM",
      location: "Pune, Maharashtra",
      description: "Help rescue and provide warm shelter to stray animals during the winter season.",
    },
    {
      id: "vaccination",
      title: "Stray Dog Vaccination Camp – Mumbai",
      date: "Jan 5, 2026",
      time: "9 AM – 1 PM",
      location: "Mumbai, Maharashtra",
      description: "Assist in vaccinating stray dogs against rabies and other diseases.",
    },
    {
      id: "food-distribution",
      title: "Street Animal Food Distribution – Delhi",
      date: "Jan 10, 2026",
      time: "5 PM – 8 PM",
      location: "Delhi",
      description: "Distribute food to stray animals in various parts of the city.",
    },
  ]

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Upcoming Campaigns</h2>
      <div className="space-y-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardHeader className="bg-secondary/10 pb-2">
              <CardTitle>{campaign.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 pt-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {campaign.date}, {campaign.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{campaign.location}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground">{campaign.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
