import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  BarChart4,
  BookOpen,
  Heart,
  Shield,
  Zap,
  Users,
  Globe,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export function AboutContent() {
  const services = [
    {
      icon: MapPin,
      title: "Real-time Rescue Alerts",
      description:
        "Instant notifications to nearby NGOs and volunteers when an animal in need is reported through our platform.",
      features: ["GPS-based matching", "Instant notifications", "Priority routing", "Response tracking"],
      category: "Core Service",
    },
    {
      icon: BarChart4,
      title: "NGO & Volunteer Dashboard",
      description:
        "Comprehensive management system for organizations and volunteers to coordinate rescue operations efficiently.",
      features: ["Case management", "Team coordination", "Analytics & reports", "Resource planning"],
      category: "Management",
    },
    {
      icon: BookOpen,
      title: "Public Education Initiatives",
      description:
        "Educational resources and programs to raise awareness about animal welfare and emergency first aid.",
      features: ["First aid guides", "Awareness campaigns", "Training programs", "Community workshops"],
      category: "Education",
    },
    {
      icon: Heart,
      title: "Emergency Response Network",
      description:
        "24/7 emergency response system connecting critical cases with immediate veterinary care and support.",
      features: ["24/7 availability", "Emergency protocols", "Vet network", "Critical care support"],
      category: "Emergency",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every decision we make is guided by our commitment to animal welfare and reducing suffering.",
    },
    {
      icon: Users,
      title: "Community Powered",
      description: "We believe in the power of collective action and community-driven solutions for animal care.",
    },
    {
      icon: Zap,
      title: "Technology for Good",
      description: "Leveraging cutting-edge technology to create meaningful impact in animal rescue and care.",
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description:
        "Building inclusive solutions that work for everyone, regardless of technical expertise or resources.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container max-w-7xl">
        {/* What is AnimalPeers */}
        <div className="mb-20">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Heart className="h-4 w-4" />
              What is AnimalPeers?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              A Platform That{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Saves Lives
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              AnimalPeers is a comprehensive platform designed to report injured or sick stray animals and instantly
              alert nearby hospitals, NGOs, and volunteers. We connect compassionate individuals who spot animals in
              need with those who have the resources and expertise to help, creating a powerful network of care and
              action.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">What We Serve</h3>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Comprehensive solutions for animal rescue, care coordination, and community education
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm border-gray-200 flex flex-col"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs font-medium bg-muted/80">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <p className="text-base leading-relaxed text-foreground/80 flex-grow">{service.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground/90">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-12 lg:grid-cols-2 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build a connected and compassionate network for animal welfare, leveraging technology to bridge the gap
              between those who spot animals in need and those who can provide immediate help. We strive to reduce
              response times, improve coordination, and ensure no animal suffers without access to care.
            </p>
            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/report">
                  Start Making a Difference
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create safer, kinder streets for animals through technology-powered care. We envision a world where no
              stray animal suffers without help, where communities are empowered to act swiftly and effectively, and
              where technology enables rapid, coordinated responses to animals in distress.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                <Link href="/volunteer">
                  Join Our Community
                  <Users className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">Our Values</h3>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              The principles that guide everything we do at AnimalPeers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gray-200"
                >
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground text-lg">
                Join thousands of compassionate individuals who are already making a difference in animal welfare
                through our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/register">
                    <Heart className="h-5 w-5 mr-2" />
                    Get Started Today
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <Link href="/donate">
                    <Shield className="h-5 w-5 mr-2" />
                    Support Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

