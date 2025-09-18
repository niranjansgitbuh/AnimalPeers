"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, ArrowRight, Play } from "lucide-react"

export function SuccessHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Lives{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Transformed
                </span>
                <br />
                Through Compassion
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Every rescue tells a story of hope, resilience, and the power of community. Discover how AnimalPeers has
                helped transform thousands of lives across India.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,847</div>
                <div className="text-sm text-muted-foreground">Animals Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,234</div>
                <div className="text-sm text-muted-foreground">Successful Adoptions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Recovery Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Stories
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                Share Your Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=500&text=Happy+Rescued+Dog+with+New+Family"
                alt="Happy rescued dog with new family"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <Card className="absolute -left-6 top-20 w-48 backdrop-blur-sm bg-white/90 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Max's Recovery</div>
                    <div className="text-xs text-muted-foreground">100% Healed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -right-6 bottom-20 w-48 backdrop-blur-sm bg-white/90 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">New Family</div>
                    <div className="text-xs text-muted-foreground">Forever Home</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
