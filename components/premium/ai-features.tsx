"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Check, AlertTriangle } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function AIPremiumFeatures() {
  const [selectedTab, setSelectedTab] = useState("features")

  const aiFeatures = [
    {
      id: "feature-1",
      title: "Smart Animal-NGO Matching",
      description: "Our AI matches animals with the most suitable NGOs based on expertise, location, and availability",
      freeFeatures: ["Basic matching algorithm", "Standard response time", "Limited to 5 NGOs per case"],
      premiumFeatures: [
        "Advanced matching with 98% accuracy",
        "Priority response time (up to 50% faster)",
        "Unlimited NGO matching",
        "Specialized expertise matching",
      ],
      image: "/placeholder.svg?height=200&width=300&text=AI+Matching",
    },
    {
      id: "feature-2",
      title: "AI Image Analysis",
      description: "Upload photos of injured animals for instant analysis of conditions and treatment recommendations",
      freeFeatures: ["Basic condition detection", "Limited to 3 analyses per day", "General recommendations"],
      premiumFeatures: [
        "Advanced injury detection",
        "Unlimited analyses",
        "Detailed treatment recommendations",
        "Severity assessment",
        "Follow-up analysis",
      ],
      image: "/placeholder.svg?height=200&width=300&text=Image+Analysis",
    },
    {
      id: "feature-3",
      title: "Predictive Analytics Dashboard",
      description: "For NGOs and hospitals to predict rescue needs and optimize resources",
      freeFeatures: ["Basic monthly statistics", "Limited historical data (30 days)", "Standard reports"],
      premiumFeatures: [
        "Real-time predictive analytics",
        "Resource optimization recommendations",
        "Unlimited historical data",
        "Custom reports and exports",
        "Trend analysis and forecasting",
      ],
      image: "/placeholder.svg?height=200&width=300&text=Analytics+Dashboard",
    },
  ]

  const pricingPlans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      description: "Basic access to animal rescue tools",
      features: [
        "Basic AI matching",
        "Limited image analysis (3/day)",
        "Standard response times",
        "Basic analytics (30 days)",
        "Community forum access",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹499",
      period: "month",
      description: "Full access to all AI-powered features",
      popular: true,
      features: [
        "Advanced AI matching algorithm",
        "Unlimited image analysis",
        "Priority response times",
        "Full predictive analytics",
        "Unlimited historical data",
        "Custom reports and exports",
        "Priority support",
      ],
    },
    {
      id: "annual",
      name: "Annual Premium",
      price: "₹4,999",
      period: "year",
      description: "Save 15% with annual billing",
      features: [
        "All Premium features",
        "15% savings compared to monthly",
        "Early access to new AI features",
        "Quarterly strategy consultation",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Brain className="h-4 w-4" />
          AI-Powered Features
        </div>
        <h2 className="mt-4 text-3xl font-bold">Advanced Technology for Animal Rescue</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Our AI-powered tools help rescuers, NGOs, and hospitals save more animals with greater efficiency
        </p>
      </div>

      <Tabs defaultValue="features" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="features">AI Features</TabsTrigger>
          <TabsTrigger value="pricing">Premium Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="space-y-6 pt-6">
          {aiFeatures.map((feature) => (
            <Card key={feature.id} className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <AnimatedImage
                    src={feature.image}
                    alt={feature.title}
                    effect="parallax"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <Badge variant="outline">Free</Badge>
                          <span className="text-sm font-medium">Features</span>
                        </div>
                        <ul className="space-y-2">
                          {feature.freeFeatures.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Check className="mt-0.5 h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <Badge className="bg-primary">Premium</Badge>
                          <span className="text-sm font-medium">Features</span>
                        </div>
                        <ul className="space-y-2">
                          {feature.premiumFeatures.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Check className="mt-0.5 h-4 w-4 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setSelectedTab("pricing")}>Upgrade to Premium</Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pricing" className="pt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 ${plan.id === "free" ? "text-muted-foreground" : "text-primary"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {plan.id === "free" ? (
                    <Button variant="outline" className="w-full">
                      Current Plan
                    </Button>
                  ) : (
                    <Button className="w-full">
                      {plan.id === "premium" ? "Upgrade to Premium" : "Get Annual Plan"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-lg border bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
              <div>
                <h3 className="font-medium">Important Note</h3>
                <p className="text-sm text-muted-foreground">
                  All premium subscription revenue is reinvested into our animal rescue operations and AI technology
                  improvements. We're committed to using technology to save more animal lives.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
