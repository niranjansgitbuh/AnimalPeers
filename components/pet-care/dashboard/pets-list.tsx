"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus } from "lucide-react"
import Link from "next/link"

export function PetsList() {
  // This would come from an API in a real application
  const [pets, setPets] = useState([
    {
      id: "pet-1",
      name: "Max",
      type: "Dog",
      breed: "Labrador",
      age: "3 years",
      image: "/placeholder.svg?height=100&width=100&text=Max",
      status: "healthy",
    },
    {
      id: "pet-2",
      name: "Whiskers",
      type: "Cat",
      breed: "Persian",
      age: "2 years",
      image: "/placeholder.svg?height=100&width=100&text=Whiskers",
      status: "needs-checkup",
    },
    {
      id: "pet-3",
      name: "Tweety",
      type: "Bird",
      breed: "Budgerigar",
      age: "1 year",
      image: "/placeholder.svg?height=100&width=100&text=Tweety",
      status: "healthy",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-500">Healthy</Badge>
      case "needs-checkup":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Needs Checkup
          </Badge>
        )
      case "under-treatment":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Under Treatment
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Pets</CardTitle>
        <CardDescription>Manage your pets' profiles and health records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pets.map((pet) => (
            <div key={pet.id} className="flex items-start gap-4 rounded-lg border p-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={pet.image || "/placeholder.svg"} alt={pet.name} />
                <AvatarFallback>{pet.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{pet.name}</h3>
                  {getStatusBadge(pet.status)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pet.type} • {pet.breed}
                </p>
                <p className="text-sm text-muted-foreground">Age: {pet.age}</p>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/pet-care/dashboard/pets/${pet.id}`}>View Profile</Link>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Button asChild variant="outline" className="w-full">
            <Link href="/pet-care/dashboard/add-pet">
              <Plus className="mr-2 h-4 w-4" />
              Add Another Pet
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
