import { Heart, MapPin, Bell, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Report an Animal",
      description:
        "Fill out a simple form with details about the animal in need, including location, condition, and photos.",
      icon: MapPin,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      image: "/placeholder.svg?height=200&width=200&text=Report+Form",
    },
    {
      number: "02",
      title: "Alert Sent to Nearby NGOs",
      description:
        "Our system automatically notifies the nearest animal hospitals and NGOs about the case in real-time.",
      icon: Bell,
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
      image: "/placeholder.svg?height=200&width=200&text=Alert+Notification",
    },
    {
      number: "03",
      title: "NGO Accepts the Case",
      description:
        "Available organizations can accept the rescue request and coordinate the rescue operation efficiently.",
      icon: CheckCircle,
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
      image: "/placeholder.svg?height=200&width=200&text=Case+Acceptance",
    },
    {
      number: "04",
      title: "Rescue Confirmation",
      description: "Once rescued, you receive updates about the animal's condition and treatment progress.",
      icon: Heart,
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-600",
      image: "/placeholder.svg?height=200&width=200&text=Rescue+Confirmation",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Heart className="h-4 w-4" />
            How It Works
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple Steps to{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Save Lives
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Our streamlined process connects animal lovers with rescue organizations to ensure every animal in need gets
            immediate help and care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="group relative h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm border-gray-200 flex flex-col overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between gap-4">
                    {/* Step Number */}
                    <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`rounded-xl bg-gradient-to-br ${step.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${step.iconColor}`} />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4 flex-1 flex flex-col">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>

                  <div className="pt-2">
                    <Badge variant="secondary" className="text-xs font-medium bg-muted/80">
                      Step {index + 1} of {steps.length}
                    </Badge>
                  </div>
                </CardContent>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">You Don't Need to Transport the Animal</h3>
              <p className="text-muted-foreground">
                Simply report the animal's location and condition. Our network of NGOs and veterinary professionals will
                handle the rescue and care. Your role is to be the eyes and voice for animals in need.
              </p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <Link href="/report">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
