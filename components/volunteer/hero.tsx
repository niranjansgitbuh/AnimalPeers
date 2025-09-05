import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, MapPin } from "lucide-react"

export function VolunteerHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-primary/3 to-background py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            <Heart className="mr-2 h-4 w-4" />
            Join Our Mission
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Volunteer with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AnimalPeers
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Join our network of compassionate volunteers and make a real difference in the lives of animals. Every
            action counts, every moment matters.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Animals Helped</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Register as Volunteer
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              View Campaigns
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">Impact Today</div>
                <div className="text-xs text-muted-foreground">23 animals rescued</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-10 hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">Active Now</div>
                <div className="text-xs text-muted-foreground">156 volunteers online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
