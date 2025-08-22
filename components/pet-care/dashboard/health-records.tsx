"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Plus } from "lucide-react"
import Link from "next/link"

export function PetHealthRecords() {
  // This would come from an API in a real application
  const healthRecords = {
    "pet-1": [
      {
        id: "record-1",
        type: "Vaccination",
        date: "Jan 15, 2023",
        description: "Rabies Vaccination",
        vet: "Dr. Priya Sharma",
        notes: "Next due in Jan 2024",
        documents: ["rabies_certificate.pdf"],
      },
      {
        id: "record-2",
        type: "Checkup",
        date: "Mar 10, 2023",
        description: "Annual Health Checkup",
        vet: "Dr. Rahul Verma",
        notes: "All vitals normal, slight tartar buildup on teeth",
        documents: ["health_report.pdf"],
      },
    ],
    "pet-2": [
      {
        id: "record-3",
        type: "Treatment",
        date: "Apr 5, 2023",
        description: "Ear Infection Treatment",
        vet: "Dr. Ananya Patel",
        notes: "Prescribed ear drops for 7 days",
        documents: ["prescription.pdf"],
      },
    ],
    "pet-3": [],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Records</CardTitle>
        <CardDescription>Medical history and documents for your pets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pet-1">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pet-1">Max</TabsTrigger>
            <TabsTrigger value="pet-2">Whiskers</TabsTrigger>
            <TabsTrigger value="pet-3">Tweety</TabsTrigger>
          </TabsList>
          {Object.entries(healthRecords).map(([petId, records]) => (
            <TabsContent key={petId} value={petId} className="space-y-4 pt-4">
              {records.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-muted-foreground">No health records found</p>
                  <Button asChild className="mt-4">
                    <Link href={`/pet-care/dashboard/pets/${petId}/add-record`}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Health Record
                    </Link>
                  </Button>
                </div>
              ) : (
                <>
                  {records.map((record) => (
                    <div key={record.id} className="rounded-lg border p-4">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{record.description}</h3>
                            <Badge variant="outline">{record.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {record.date} • {record.vet}
                          </p>
                          <p className="text-sm">{record.notes}</p>
                          {record.documents.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {record.documents.map((doc, index) => (
                                <Button key={index} variant="outline" size="sm" className="gap-1">
                                  <FileText className="h-4 w-4" />
                                  <span>{doc}</span>
                                  <Download className="ml-1 h-3 w-3" />
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/pet-care/dashboard/records/${record.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/pet-care/dashboard/pets/${petId}/add-record`}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Health Record
                    </Link>
                  </Button>
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
