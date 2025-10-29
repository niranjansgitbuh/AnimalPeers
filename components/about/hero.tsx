import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, MapPin } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="h-4 w-4" />
                About AnimalPeers
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Building a{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Connected Network
                </span>{" "}
                for Animal Welfare
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                We're creating a compassionate ecosystem where technology bridges the gap between those who spot animals
                in need and those who can provide immediate help and care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Animals Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">NGO Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/report">
                  <MapPin className="h-5 w-5 mr-2" />
                  Report an Animal
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/5 bg-transparent"
              >
                <Link href="/volunteer">
                  <Users className="h-5 w-5 mr-2" />
                  Join as Volunteer
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border shadow-2xl bg-gradient-to-br from-primary/10 to-background">
              <img
                src="/placeholder.svg?height=600&width=800&text=Team+helping+rescued+animals+with+veterinary+care"
                alt="AnimalPeers team helping rescued animals with professional veterinary care"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">24/7 Emergency</div>
                  <div className="text-xs text-muted-foreground">Always Available</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Community Driven</div>
                  <div className="text-xs text-muted-foreground">Powered by You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

