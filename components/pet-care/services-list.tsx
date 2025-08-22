import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Syringe, Scissors, Heart, Shield, Clock, Calendar, Star, CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

const services = [
  {
    id: "health-checkup",
    icon: Stethoscope,
    title: "Comprehensive Health Checkups",
    description: "Complete physical examination and health assessment by certified veterinarians at your doorstep",
    features: [
      "Full physical examination",
      "Vital signs monitoring",
      "Health report & recommendations",
      "Follow-up consultation",
    ],
    price: "₹599",
    originalPrice: "₹799",
    duration: "45 mins",
    rating: 4.9,
    reviews: 234,
    popular: true,
    category: "Essential Care",
  },
  {
    id: "vaccinations",
    icon: Syringe,
    title: "Vaccination Services",
    description: "Complete vaccination schedule with premium vaccines to protect your pet from diseases",
    features: [
      "Core & non-core vaccines",
      "Vaccination certificates",
      "Digital health records",
      "Reminder notifications",
    ],
    price: "₹449",
    originalPrice: "₹599",
    duration: "20 mins",
    rating: 4.8,
    reviews: 189,
    popular: false,
    category: "Preventive Care",
  },
  {
    id: "grooming",
    icon: Scissors,
    title: "Professional Grooming",
    description: "Complete grooming services including bathing, nail trimming, and hygiene care",
    features: ["Professional bathing", "Nail trimming & filing", "Ear cleaning", "Coat brushing & styling"],
    price: "₹699",
    originalPrice: "₹899",
    duration: "60 mins",
    rating: 4.7,
    reviews: 156,
    popular: false,
    category: "Wellness Care",
  },
  {
    id: "emergency-care",
    icon: Heart,
    title: "Emergency Care",
    description: "24/7 emergency veterinary services for critical situations and urgent medical needs",
    features: ["24/7 availability", "Emergency treatment", "Critical care support", "Immediate response"],
    price: "₹1,299",
    originalPrice: "₹1,599",
    duration: "Immediate",
    rating: 4.9,
    reviews: 98,
    popular: false,
    category: "Emergency",
  },
  {
    id: "preventive-care",
    icon: Shield,
    title: "Preventive Healthcare",
    description: "Comprehensive preventive care program to maintain your pet's optimal health",
    features: ["Parasite prevention", "Dental care & cleaning", "Nutrition consultation", "Health monitoring"],
    price: "₹799",
    originalPrice: "₹999",
    duration: "40 mins",
    rating: 4.8,
    reviews: 167,
    popular: true,
    category: "Preventive Care",
  },
  {
    id: "regular-monitoring",
    icon: Clock,
    title: "Health Monitoring",
    description: "Regular health monitoring and management for pets with chronic conditions",
    features: ["Regular health tracking", "Medication management", "Progress monitoring", "Specialist consultations"],
    price: "₹899",
    originalPrice: "₹1,199",
    duration: "35 mins",
    rating: 4.6,
    reviews: 123,
    popular: false,
    category: "Specialized Care",
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Stethoscope className="h-4 w-4" />
            Professional Pet Care Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expert Care at Your{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Doorstep
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Professional veterinary services delivered to your home by qualified veterinarians. Convenient, reliable,
            and stress-free care for your beloved pets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm overflow-visible border-gray-200"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg px-3 py-1.5 text-xs font-semibold border-0">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="text-xs font-medium bg-muted/80 backdrop-blur-sm">
                    {service.category}
                  </Badge>
                </div>

                <CardHeader className="pb-4 pt-8">
                  {/* Service Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{service.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{service.originalPrice}</span>
                        <Badge variant="outline" className="text-xs border-primary/20">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground/90">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 space-y-3">
                    <Button
                      asChild
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Link href={`/pet-care/schedule?service=${service.id}&name=${encodeURIComponent(service.title)}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Not sure which service is right for your pet?</h3>
              <p className="text-muted-foreground text-lg">
                Get a free consultation with our veterinary experts to determine the best care plan for your furry
                friend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/pet-care/consultation">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    Get Free Consultation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <Link href="/pet-care/emergency">
                    <Heart className="h-5 w-5 mr-2" />
                    Emergency Care
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
