import { Suspense } from "react"
import { ScheduleForm } from "@/components/pet-care/schedule-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Star, Shield, CheckCircle } from 'lucide-react'

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Clock className="h-4 w-4" />
            Book Your Appointment
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Schedule Pet Care Service</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a convenient home visit from our qualified veterinarians. Professional care delivered to your doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Appointment Details</CardTitle>
                <CardDescription>
                  Fill in the details below to schedule your pet care appointment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading form...</div>}>
                  <ScheduleForm />
                </Suspense>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Info */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Certified veterinarians</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Home visit convenience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Digital health records</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Follow-up support</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Rating */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  Customer Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 1,200+ reviews</p>
                </div>
              </CardContent>
            </Card>

            {/* Service Hours */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Service Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-red-600">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">24/7 Emergency Care Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Area */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Coverage Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Badge variant="outline" className="justify-center">Mumbai</Badge>
                  <Badge variant="outline" className="justify-center">Delhi</Badge>
                  <Badge variant="outline" className="justify-center">Bangalore</Badge>
                  <Badge variant="outline" className="justify-center">Pune</Badge>
                  <Badge variant="outline" className="justify-center">Chennai</Badge>
                  <Badge variant="outline" className="justify-center">Hyderabad</Badge>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  Don't see your city? Contact us to check availability in your area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
