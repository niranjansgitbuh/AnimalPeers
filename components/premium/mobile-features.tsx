"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Bell, Wifi, Map, Zap } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function MobilePremiumFeatures() {
  const appFeatures = [
    {
      id: "app-feature-1",
      title: "Priority Notifications",
      description: "Get instant alerts for animal emergencies in your area before anyone else",
      icon: Bell,
      image: "/placeholder.svg?height=300&width=150&text=Notifications+Screen",
    },
    {
      id: "app-feature-2",
      title: "Offline First Aid Guides",
      description: "Access comprehensive first aid guides even without internet connection",
      icon: Wifi,
      image: "/placeholder.svg?height=300&width=150&text=First+Aid+Screen",
    },
    {
      id: "app-feature-3",
      title: "Advanced Case Tracking",
      description: "Follow the complete journey of animals you've reported with detailed updates",
      icon: Map,
      image: "/placeholder.svg?height=300&width=150&text=Tracking+Screen",
    },
    {
      id: "app-feature-4",
      title: "Ad-Free Experience",
      description: "Enjoy a clean, distraction-free interface without advertisements",
      icon: Zap,
      image: "/placeholder.svg?height=300&width=150&text=Ad+Free+Screen",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Smartphone className="h-4 w-4" />
          Mobile App Premium
        </div>
        <h2 className="mt-4 text-3xl font-bold">Enhanced Mobile Experience</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Upgrade your AnimalPeers mobile app for exclusive features that help you save more animals
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">AnimalPeers Premium</h3>
            <p className="text-muted-foreground">
              Unlock the full potential of the AnimalPeers mobile app with our premium subscription.
            </p>

            <ul className="space-y-3">
              {appFeatures.map((feature) => (
                <li key={feature.id} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-4 pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">₹199</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  Get Premium Now
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>

              <p className="text-xs text-muted-foreground">7-day free trial available. Cancel anytime.</p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="relative">
                <div className="absolute -left-24 top-0 z-10">
                  <AnimatedImage
                    src={appFeatures[0].image}
                    alt={appFeatures[0].title}
                    effect="3d-float"
                    className="h-64 w-32 rounded-2xl border-4 border-white shadow-xl"
                  />
                </div>
                <div className="absolute -right-24 top-0 z-10">
                  <AnimatedImage
                    src={appFeatures[1].image}
                    alt={appFeatures[1].title}
                    effect="3d-float"
                    className="h-64 w-32 rounded-2xl border-4 border-white shadow-xl"
                  />
                </div>
                <AnimatedImage
                  src="/placeholder.svg?height=300&width=150&text=Premium+App"
                  alt="AnimalPeers Premium App"
                  effect="3d-tilt"
                  className="h-72 w-36 rounded-2xl border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {appFeatures.map((feature) => (
          <Card key={feature.id}>
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/30 p-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="rounded-full bg-primary/10 p-3">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">Download the AnimalPeers App</h3>
            <p className="text-muted-foreground">
              Get started with our free app and upgrade to premium for enhanced features. Available on iOS and Android.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">App Store</Button>
            <Button variant="outline">Google Play</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
