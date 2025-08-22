import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BarChart4, BookOpen } from "lucide-react"

export function AboutContent() {
  const services = [
    {
      icon: MapPin,
      title: "Real-time rescue alerts",
      description: "Instant notifications to nearby NGOs and volunteers when an animal in need is reported.",
    },
    {
      icon: MapPin,
      title: "Location-based rescue coordination",
      description: "Efficient coordination between reporters, rescuers, and veterinary services based on location.",
    },
    {
      icon: BarChart4,
      title: "NGO & volunteer dashboard",
      description: "Comprehensive dashboard for organizations and volunteers to manage rescue operations.",
    },
    {
      icon: BookOpen,
      title: "Public education initiatives",
      description: "Resources and programs to educate the public about animal welfare and first aid.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">What is AnimalPeers?</h2>
            <p className="text-muted-foreground">
              AnimalPeers is a platform to report injured or sick stray animals and instantly alert nearby hospitals or
              NGOs. We connect people who spot animals in need with those who can help, creating a network of compassion
              and action.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">What We Serve</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                      <service.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Build a connected and compassionate network for animal welfare, leveraging technology to bridge the gap
              between those who spot animals in need and those who can provide help.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              Create safer, kinder streets for animals through tech-powered care. We envision a world where no stray
              animal suffers without help, where communities are empowered to act, and where technology enables rapid
              response to animals in distress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
