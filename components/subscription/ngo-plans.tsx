"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NGOSubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: { monthly: "Free", annual: "Free" },
      description: "For small NGOs just getting started",
      features: [
        "Up to 10 case assignments per month",
        "Basic case management",
        "Community forum access",
        "Email support",
      ],
      limitations: ["Limited visibility in search results", "No analytics dashboard", "Standard response priority"],
    },
    {
      id: "standard",
      name: "Standard",
      price: { monthly: "₹2,000", annual: "₹20,000" },
      description: "For growing NGOs with regular rescue operations",
      features: [
        "Unlimited case assignments",
        "Priority in nearby case assignments",
        "Basic analytics dashboard",
        "Featured in search results",
        "Priority email support",
        "Volunteer management tools",
        "Donation collection tools",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: { monthly: "₹5,000", annual: "₹50,000" },
      description: "For established NGOs with high rescue volume",
      features: [
        "All Standard features",
        "Highest priority in case assignments",
        "Advanced analytics and reporting",
        "Dedicated support representative",
        "Featured on homepage rotation",
        "Custom branding options",
        "API access for integration",
        "Training webinars for staff",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Tabs defaultValue="monthly" className="w-full max-w-md" onValueChange={setBillingCycle}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="annual">
              Annual Billing{" "}
              <Badge variant="outline" className="ml-2 bg-green-100 text-green-800">
                Save 15%
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
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
                <span className="text-3xl font-bold">{plan.price[billingCycle as keyof typeof plan.price]}</span>
                {plan.id !== "basic" && (
                  <span className="text-muted-foreground"> / {billingCycle === "monthly" ? "month" : "year"}</span>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Features:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <>
                    <h4 className="text-sm font-medium">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.id === "basic" ? "outline" : plan.popular ? "default" : "secondary"}
              >
                {plan.id === "basic" ? "Sign Up Free" : "Subscribe Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
