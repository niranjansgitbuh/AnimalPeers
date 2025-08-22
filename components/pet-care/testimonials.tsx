import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function PetCareTestimonials() {
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Aditya Mehta",
      avatar: "/placeholder.svg?height=40&width=40&text=AM",
      pet: "Bruno (Dog)",
      rating: 5,
      text: "The home checkup service was incredibly convenient. Dr. Sharma was gentle with my anxious dog and provided excellent care.",
      location: "Koramangala, Bangalore",
    },
    {
      id: "testimonial-2",
      name: "Sneha Reddy",
      avatar: "/placeholder.svg?height=40&width=40&text=SR",
      pet: "Whiskers (Cat)",
      rating: 5,
      text: "My cat hates going to the vet, so having a vet come home was perfect. Professional service and thorough examination.",
      location: "Indiranagar, Bangalore",
    },
    {
      id: "testimonial-3",
      name: "Vikram Singh",
      avatar: "/placeholder.svg?height=40&width=40&text=VS",
      pet: "Max (Dog)",
      rating: 4,
      text: "Great service for my senior dog who has mobility issues. The vet was knowledgeable and took time to explain everything.",
      location: "HSR Layout, Bangalore",
    },
    {
      id: "testimonial-4",
      name: "Priyanka Joshi",
      avatar: "/placeholder.svg?height=40&width=40&text=PJ",
      pet: "Bella (Cat)",
      rating: 5,
      text: "The nutrition consultation was eye-opening. My cat's health has improved significantly with the recommended diet changes.",
      location: "Whitefield, Bangalore",
    },
  ]

  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Pet Parents Say</h2>
          <p className="mt-4 text-muted-foreground">Hear from pet owners who've experienced our home care services</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Pet: {testimonial.pet}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{testimonial.text}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
