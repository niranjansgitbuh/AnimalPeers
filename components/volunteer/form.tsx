"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, User, Mail, Clock, Calendar } from "lucide-react"

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    availability: "",
    campaign: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for registering as a volunteer! We'll contact you soon.")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      age: "",
      availability: "",
      campaign: "",
    })
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          <User className="mr-2 h-4 w-4" />
          Registration Form
        </Badge>
        <h2 className="text-3xl font-bold">
          Join Our{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Volunteer Network
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Fill out the form below to become part of our compassionate community dedicated to animal welfare.
        </p>
      </div>

      <Card className="border-primary/10 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/3 border-b border-primary/10">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Volunteer Registration
          </CardTitle>
          <CardDescription>Join our team of dedicated volunteers helping animals in need across India</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="Enter your age"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                  City *
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary"
                  placeholder="Enter your city"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Availability
              </h3>

              <div className="space-y-3">
                <Label className="text-sm font-medium">When are you available? *</Label>
                <RadioGroup
                  value={formData.availability}
                  onValueChange={(value) => handleSelectChange("availability", value)}
                  required
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border border-primary/20 rounded-lg p-3 hover:bg-primary/5">
                    <RadioGroupItem value="weekdays" id="weekdays" />
                    <Label htmlFor="weekdays" className="cursor-pointer">
                      Weekdays
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-primary/20 rounded-lg p-3 hover:bg-primary/5">
                    <RadioGroupItem value="weekends" id="weekends" />
                    <Label htmlFor="weekends" className="cursor-pointer">
                      Weekends
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-primary/20 rounded-lg p-3 hover:bg-primary/5">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="cursor-pointer">
                      Both
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Campaign Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Campaign Preference
              </h3>

              <div className="space-y-2">
                <Label htmlFor="campaign" className="text-sm font-medium">
                  Preferred Campaign *
                </Label>
                <Select
                  value={formData.campaign}
                  onValueChange={(value) => handleSelectChange("campaign", value)}
                  required
                >
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select a campaign to join" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="winter-rescue">Winter Rescue Drive – Pune</SelectItem>
                    <SelectItem value="vaccination">Stray Dog Vaccination Camp – Mumbai</SelectItem>
                    <SelectItem value="food-distribution">Street Animal Food Distribution – Delhi</SelectItem>
                    <SelectItem value="awareness">Animal Awareness Campaign – Bangalore</SelectItem>
                    <SelectItem value="adoption">Pet Adoption Drive – Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
              size="lg"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Register as Volunteer
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
