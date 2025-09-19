import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, TrendingUp, Users, Calendar } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
              <BookOpen className="mr-2 h-4 w-4" />
              Animal Welfare Blog
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Stories, Tips &
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Expert Advice
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover inspiring rescue stories, expert pet care advice, and the latest updates from the animal
                welfare community. Join thousands of animal lovers staying informed and making a difference.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Weekly</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Reading
              </Button>
              <Button variant="outline" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src="/placeholder.svg?height=600&width=600&text=Animal+Welfare+Blog+Hero+Image"
                alt="Animal welfare blog hero"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 w-48 backdrop-blur-sm bg-background/80 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Trending Now</div>
                    <div className="text-sm text-muted-foreground">Pet Care Tips</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 w-44 backdrop-blur-sm bg-background/80 border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Daily Posts</div>
                    <div className="text-sm text-muted-foreground">Fresh Content</div>
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
