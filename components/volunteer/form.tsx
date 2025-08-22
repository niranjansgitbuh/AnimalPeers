"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
    // Here you would typically send the data to your backend
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
    <Card>
      <CardHeader>
        <CardTitle>Volunteer Registration</CardTitle>
        <CardDescription>Join our team of dedicated volunteers helping animals in need</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              min="18"
              max="100"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Availability</Label>
            <RadioGroup
              value={formData.availability}
              onValueChange={(value) => handleSelectChange("availability", value)}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekdays" id="weekdays" />
                <Label htmlFor="weekdays">Weekdays</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekends" id="weekends" />
                <Label htmlFor="weekends">Weekends</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">Both</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="campaign">Preferred Campaign</Label>
            <Select value={formData.campaign} onValueChange={(value) => handleSelectChange("campaign", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="winter-rescue">Winter Rescue Drive – Pune</SelectItem>
                <SelectItem value="vaccination">Stray Dog Vaccination Camp – Mumbai</SelectItem>
                <SelectItem value="food-distribution">Street Animal Food Distribution – Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Register as Volunteer
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
