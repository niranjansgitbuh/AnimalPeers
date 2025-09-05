import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Heart, Stethoscope, Utensils, GraduationCap, Home } from "lucide-react"

export function UpcomingCampaigns() {
  const campaigns = [
    {
      id: "winter-rescue",
      title: "Winter Rescue Drive – Pune",
      date: "Dec 15, 2025",
      time: "10 AM – 2 PM",
      location: "Pune, Maharashtra",
      description: "Help rescue and provide warm shelter to stray animals during the winter season.",
      volunteers: 45,
      maxVolunteers: 60,
      category: "Emergency",
      icon: Heart,
      urgency: "high",
      skills: ["Animal Handling", "First Aid", "Transportation"],
    },
    {
      id: "vaccination",
      title: "Stray Dog Vaccination Camp – Mumbai",
      date: "Jan 5, 2026",
      time: "9 AM – 1 PM",
      location: "Mumbai, Maharashtra",
      description: "Assist in vaccinating stray dogs against rabies and other diseases.",
      volunteers: 32,
      maxVolunteers: 40,
      category: "Healthcare",
      icon: Stethoscope,
      urgency: "medium",
      skills: ["Animal Restraint", "Record Keeping", "Community Outreach"],
    },
    {
      id: "food-distribution",
      title: "Street Animal Food Distribution – Delhi",
      date: "Jan 10, 2026",
      time: "5 PM – 8 PM",
      location: "Delhi",
      description: "Distribute food to stray animals in various parts of the city.",
      volunteers: 28,
      maxVolunteers: 50,
      category: "Welfare",
      icon: Utensils,
      urgency: "medium",
      skills: ["Food Handling", "Route Planning", "Animal Interaction"],
    },
    {
      id: "awareness",
      title: "Animal Awareness Campaign – Bangalore",
      date: "Jan 15, 2026",
      time: "10 AM – 4 PM",
      location: "Bangalore, Karnataka",
      description: "Educate communities about responsible pet ownership and animal welfare.",
      volunteers: 18,
      maxVolunteers: 30,
      category: "Education",
      icon: GraduationCap,
      urgency: "low",
      skills: ["Public Speaking", "Content Creation", "Community Engagement"],
    },
    {
      id: "adoption",
      title: "Pet Adoption Drive – Chennai",
      date: "Jan 20, 2026",
      time: "11 AM – 5 PM",
      location: "Chennai, Tamil Nadu",
      description: "Help connect rescued animals with loving families through adoption events.",
      volunteers: 22,
      maxVolunteers: 35,
      category: "Adoption",
      icon: Home,
      urgency: "medium",
      skills: ["Customer Service", "Animal Care", "Documentation"],
    },
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Emergency":
        return "bg-red-500"
      case "Healthcare":
        return "bg-blue-500"
      case "Welfare":
        return "bg-green-500"
      case "Education":
        return "bg-purple-500"
      case "Adoption":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Calendar className="mr-2 h-4 w-4" />
          Active Campaigns
        </Badge>
        <h2 className="text-3xl font-bold">
          Upcoming{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Campaigns</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Join our active campaigns and make a direct impact on animal welfare in your community.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {campaigns.map((campaign) => {
          const IconComponent = campaign.icon
          const progressPercentage = (campaign.volunteers / campaign.maxVolunteers) * 100

          return (
            <Card
              key={campaign.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10 hover:border-primary/20"
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/3 border-b border-primary/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-2 ${getCategoryColor(campaign.category)}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {campaign.title}
                      </CardTitle>
                      <Badge variant="outline" className={getUrgencyColor(campaign.urgency)}>
                        {campaign.urgency.charAt(0).toUpperCase() + campaign.urgency.slice(1)} Priority
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{campaign.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{campaign.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{campaign.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <CardDescription className="text-base leading-relaxed">{campaign.description}</CardDescription>

                {/* Volunteer Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Volunteers Registered
                    </span>
                    <span className="font-medium">
                      {campaign.volunteers}/{campaign.maxVolunteers}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Skills Required */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Skills Helpful:</span>
                  <div className="flex flex-wrap gap-2">
                    {campaign.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                    disabled={campaign.volunteers >= campaign.maxVolunteers}
                  >
                    {campaign.volunteers >= campaign.maxVolunteers ? "Campaign Full" : "Join Campaign"}
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-primary/3 rounded-2xl p-8 border border-primary/10">
        <h3 className="text-2xl font-bold mb-4">Don't see a campaign in your area?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We're always looking to expand our reach. Contact us to start a new campaign in your city or suggest new
          initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white">
            Start New Campaign
          </Button>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
