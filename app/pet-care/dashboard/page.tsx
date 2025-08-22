import type { Metadata } from "next"
import { PetDashboardHeader } from "@/components/pet-care/dashboard/header"
import { PetsList } from "@/components/pet-care/dashboard/pets-list"
import { UpcomingAppointments } from "@/components/pet-care/dashboard/upcoming-appointments"
import { PetHealthRecords } from "@/components/pet-care/dashboard/health-records"

export const metadata: Metadata = {
  title: "Pet Dashboard - AnimalPeers",
  description: "Manage your pets and appointments",
}

export default function PetDashboardPage() {
  return (
    <div className="container mx-auto py-12">
      <PetDashboardHeader />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <PetsList />
        </div>
        <div className="md:col-span-2 space-y-8">
          <UpcomingAppointments />
          <PetHealthRecords />
        </div>
      </div>
    </div>
  )
}
