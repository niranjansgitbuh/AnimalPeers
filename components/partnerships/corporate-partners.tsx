"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, HandHeart, Calendar } from "lucide-react"

export function CorporatePartners() {
  const partners = [
    {
      id: "partner-1",
      name: "TechCorp India",
      logo: "/placeholder.svg?height=80&width=80&text=TechCorp",
      contribution: "₹15 Lakhs",
      program: "Rescue Vehicle Sponsorship",
      description: "Sponsored 3 rescue vehicles fully equipped with medical supplies",
    },
    {
      id: "partner-2",
      name: "GreenEnergy Ltd",
      logo: "/placeholder.svg?height=80&width=80&text=GreenEnergy",
      contribution: "₹8 Lakhs",
      program: "Medical Treatment Fund",
      description: "Funds dedicated to emergency surgeries and treatments",
    },
    {
      id: "partner-3",
      name: "Foodie Delivery",
      logo: "/placeholder.svg?height=80&width=80&text=Foodie",
      contribution: "₹5 Lakhs",
      program: "Feeding Program",
      description: "Monthly food supplies for shelters across 5 cities",
    },
  ]

  const programs = [
    {
      id: "program-1",
      title: "Sponsored Rescue Vehicles",
      description: "Brand a rescue vehicle with your company logo that helps animals in need",
      investment: "₹5 Lakhs per year",
      benefits: [
        "Company branding on rescue vehicle",
        "Monthly impact reports",
        "Featured in rescue stories",
        "Tax benefits under 80G",
      ],
      icon: Building2,
    },
    {
      id: "program-2",
      title: "Employee Volunteer Program",
      description: "Engage your employees in meaningful animal welfare activities",
      investment: "₹2 Lakhs per year",
      benefits: [
        "Organized volunteer days for employees",
        "Team building through animal care",
        "CSR reporting and documentation",
        "Social media recognition",
      ],
      icon: Users,
    },
    {
      id: "program-3",
      title: "Matching Donation Program",
      description: "Match your employees' donations to amplify your impact",
      investment: "Based on employee participation",
      benefits: [
        "Customized donation portal for employees",
        "Real-time tracking of contributions",
        "Recognition for participating employees",
        "Quarterly impact newsletter",
      ],
      icon: HandHeart,
    },
    {
      id: "program-4",
      title: "Sponsored Events",
      description: "Support adoption drives and awareness campaigns",
      investment: "₹1 Lakh per event",
      benefits: [
        "Brand presence at high-visibility events",
        "Media coverage opportunities",
        "Direct engagement with animal lovers",
        "Product sampling opportunities",
      ],
      icon: Calendar,
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="partners">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="partners">Current Partners</TabsTrigger>
          <TabsTrigger value="programs">Partnership Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="partners" className="space-y-6 pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Corporate Partners</h2>
            <p className="text-muted-foreground">Organizations making a difference for animals in need</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.id}>
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle>{partner.name}</CardTitle>
                  <CardDescription>{partner.program}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Badge className="bg-primary/10 text-primary">{partner.contribution} Contributed</Badge>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">View All Partners</Button>
          </div>
        </TabsContent>

        <TabsContent value="programs" className="space-y-6 pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Corporate Partnership Programs</h2>
            <p className="text-muted-foreground">Join us in making a difference for animals in need</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <program.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.investment}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="select-none">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-lg font-medium">Custom Partnership Opportunities</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                We can create tailored partnership programs that align with your company's values and CSR goals.
              </p>
              <Button>Contact Our Partnership Team</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
