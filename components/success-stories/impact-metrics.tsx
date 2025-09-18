"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Home, Award, TrendingUp, Clock } from "lucide-react"

export function ImpactMetrics() {
  const metrics = [
    {
      icon: Heart,
      label: "Lives Saved",
      value: "2,847",
      change: "+23%",
      description: "Animals rescued this year",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Home,
      label: "Forever Homes",
      value: "1,234",
      change: "+18%",
      description: "Successful adoptions",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      label: "Active Rescuers",
      value: "456",
      change: "+31%",
      description: "Volunteers helping",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "12 min",
      change: "-15%",
      description: "Average rescue time",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      label: "Recovery Rate",
      value: "89%",
      change: "+5%",
      description: "Successful treatments",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingUp,
      label: "Impact Score",
      value: "9.2/10",
      change: "+0.3",
      description: "Community rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Impact Metrics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Measuring Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers that showcase the difference we're making in animal welfare across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    {metric.change}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="font-medium text-gray-900">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
