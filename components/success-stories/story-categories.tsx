"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Home, Stethoscope, Users, Zap, ArrowRight } from "lucide-react"

export function StoryCategories() {
  const categories = [
    {
      icon: Heart,
      title: "Emergency Rescues",
      description: "Life-saving interventions for animals in critical condition",
      count: "847 stories",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      image: "/placeholder.svg?height=200&width=300&text=Emergency+Rescue+Scene",
    },
    {
      icon: Home,
      title: "Adoption Success",
      description: "Heartwarming tales of animals finding their forever families",
      count: "1,234 stories",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: "/placeholder.svg?height=200&width=300&text=Happy+Adoption+Family",
    },
    {
      icon: Stethoscope,
      title: "Medical Miracles",
      description: "Incredible recoveries through dedicated veterinary care",
      count: "623 stories",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: "/placeholder.svg?height=200&width=300&text=Veterinary+Treatment+Success",
    },
    {
      icon: Shield,
      title: "Abuse Recovery",
      description: "Stories of healing from trauma and finding trust again",
      count: "289 stories",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: "/placeholder.svg?height=200&width=300&text=Animal+Rehabilitation+Center",
    },
    {
      icon: Users,
      title: "Community Heroes",
      description: "Volunteers and rescuers making extraordinary differences",
      count: "456 stories",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      image: "/placeholder.svg?height=200&width=300&text=Community+Volunteers+Helping",
    },
    {
      icon: Zap,
      title: "Quick Saves",
      description: "Rapid response rescues that made all the difference",
      count: "378 stories",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      image: "/placeholder.svg?height=200&width=300&text=Rapid+Response+Team",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Story Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Story{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different types of rescue stories and find inspiration in every category
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-2 ${category.borderColor} hover:border-primary/30 overflow-hidden`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-gray-700">{category.count}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300 bg-transparent"
                >
                  Explore Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
