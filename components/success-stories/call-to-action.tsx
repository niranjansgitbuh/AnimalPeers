"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2, PenTool, Camera, ArrowRight, Sparkles } from "lucide-react"

export function CallToAction() {
  const actions = [
    {
      icon: PenTool,
      title: "Share Your Story",
      description: "Tell us about a rescue you've been part of",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Camera,
      title: "Submit Photos",
      description: "Before and after photos make stories powerful",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Share these stories to inspire others",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-white/80 text-primary border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Join the Movement
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Story Could{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Inspire Thousands
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every rescue story has the power to motivate others to act. Share your experience and be part of the
              change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {actions.map((action, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl ${action.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className={`w-8 h-8 ${action.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Heart className="w-5 h-5 mr-2" />
                Share Your Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                Browse All Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join over 2,000+ people who have shared their rescue stories
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
