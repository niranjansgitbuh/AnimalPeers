import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VeterinarianShowcase() {
  const veterinarians = [
    {
      id: "vet-1",
      name: "Dr. Priya Sharma",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Priya+Sharma",
      specialization: "Small Animals Specialist",
      experience: "8 years",
      rating: 4.9,
      reviews: 124,
      availability: "Mon, Wed, Fri",
      areas: ["Koramangala", "Indiranagar", "HSR Layout"],
    },
    {
      id: "vet-2",
      name: "Dr. Rahul Verma",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Rahul+Verma",
      specialization: "Feline Specialist",
      experience: "6 years",
      rating: 4.8,
      reviews: 98,
      availability: "Tue, Thu, Sat",
      areas: ["Jayanagar", "JP Nagar", "Banashankari"],
    },
    {
      id: "vet-3",
      name: "Dr. Ananya Patel",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Ananya+Patel",
      specialization: "Canine Specialist",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      availability: "Mon, Tue, Thu, Sat",
      areas: ["Whitefield", "Marathahalli", "Brookefield"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Veterinarians</h2>
          <p className="mt-4 text-muted-foreground">Experienced professionals who care for your pets like family</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {veterinarians.map((vet) => (
            <Card key={vet.id} className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img src={vet.image || "/placeholder.svg"} alt={vet.name} className="h-full w-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{vet.name}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {vet.experience} exp
                  </Badge>
                </div>
                <CardDescription>{vet.specialization}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{vet.rating}</span>
                  <span className="text-xs text-muted-foreground">({vet.reviews} reviews)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Available: {vet.availability}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {vet.areas.map((area, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full mt-2">
                  <Link href={`/pet-care/schedule?vet=${vet.id}`}>Book Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
