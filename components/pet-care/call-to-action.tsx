import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Calendar, Clock } from "lucide-react"

export function PetCareCallToAction() {
  return (
    <section className="py-20">
      <div className="container">
        <Card className="overflow-hidden bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Schedule a Home Visit Today</h2>
                <p className="text-muted-foreground">
                  Give your pet the care they deserve without the stress of travel. Our qualified veterinarians come to
                  you.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/pet-care/schedule">Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/pet-care/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from morning, afternoon, or evening slots that work best for you and your pet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Same-Day Appointments</h3>
                    <p className="text-sm text-muted-foreground">
                      Need urgent care? We offer same-day appointments for emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
