"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, X, Check, Video } from "lucide-react"
import Link from "next/link"

export function UpcomingAppointments() {
  // This would come from an API in a real application
  const appointments = [
    {
      id: "appt-1",
      petName: "Max",
      service: "General Checkup",
      date: "May 15, 2023",
      time: "10:00 AM - 12:00 PM",
      vet: "Dr. Priya Sharma",
      location: "Home Visit",
      status: "confirmed",
    },
    {
      id: "appt-2",
      petName: "Whiskers",
      service: "Vaccination",
      date: "May 20, 2023",
      time: "2:00 PM - 4:00 PM",
      vet: "Dr. Rahul Verma",
      location: "Home Visit",
      status: "pending",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pending
          </Badge>
        )
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>Your scheduled pet care appointments</CardDescription>
      </CardHeader>
      <CardContent>
        {appointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-muted-foreground">No upcoming appointments</p>
            <Button asChild className="mt-4">
              <Link href="/pet-care/schedule">Schedule an Appointment</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="rounded-lg border p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">
                        {appointment.service} for {appointment.petName}
                      </h3>
                      {getStatusBadge(appointment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">Veterinarian: {appointment.vet}</p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {appointment.status === "confirmed" && (
                      <Button variant="outline" size="sm" className="gap-1">
                        <Video className="h-4 w-4" />
                        <span>Video Call</span>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/pet-care/appointments/${appointment.id}`}>View Details</Link>
                    </Button>
                    {appointment.status === "pending" && (
                      <Button variant="ghost" size="icon" className="text-green-500">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button asChild className="w-full">
              <Link href="/pet-care/schedule">Schedule New Appointment</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
