import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export function PetDashboardHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pet Dashboard</h1>
          <p className="text-muted-foreground">Manage your pets and appointments</p>
        </div>
        <div className="mt-4 flex gap-2 sm:mt-0">
          <Button asChild>
            <Link href="/pet-care/schedule">
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pet-care/dashboard/add-pet">Add Pet</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
