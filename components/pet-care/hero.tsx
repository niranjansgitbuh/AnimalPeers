import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PetCareHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Professional Pet Care <span className="text-primary">At Your Doorstep</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Schedule home visits from qualified veterinarians for checkups, vaccinations, and treatments for your
                beloved pets.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/pet-care/schedule">Schedule a Home Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pet-care/services">View All Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800&text=Professional+Veterinarian+Examining+Pet+at+Home"
                alt="Professional veterinarian examining a pet at home - doorstep pet care service"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
