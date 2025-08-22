"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin, Phone, User, PawPrint } from 'lucide-react'
import { format } from "date-fns"

const services = [
  { id: "health-checkup", name: "Comprehensive Health Checkups", price: "₹599", duration: "45 mins" },
  { id: "vaccinations", name: "Vaccination Services", price: "₹449", duration: "20 mins" },
  { id: "grooming", name: "Professional Grooming", price: "₹699", duration: "60 mins" },
  { id: "emergency-care", name: "Emergency Care", price: "₹1,299", duration: "Immediate" },
  { id: "preventive-care", name: "Preventive Healthcare", price: "₹799", duration: "40 mins" },
  { id: "regular-monitoring", name: "Health Monitoring", price: "₹899", duration: "35 mins" },
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
]

export function ScheduleForm() {
  const searchParams = useSearchParams()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    petName: "",
    petType: "",
    petAge: "",
    petBreed: "",
    healthConcerns: "",
    emergencyContact: "",
    specialInstructions: "",
    agreedToTerms: false,
  })

  useEffect(() => {
    const serviceParam = searchParams?.get("service")
    if (serviceParam) {
      setSelectedService(serviceParam)
    }
  }, [searchParams])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", {
      ...formData,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    })
    // Handle form submission here
  }

  const selectedServiceInfo = services.find(s => s.id === selectedService)

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Service Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PawPrint className="h-5 w-5 text-primary" />
          <Label className="text-lg font-semibold">Select Service</Label>
        </div>
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose a service for your pet" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                <div className="flex items-center justify-between w-full">
                  <span>{service.name}</span>
                  <div className="flex items-center gap-2 ml-4">
                    <Badge variant="secondary">{service.price}</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </Badge>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedServiceInfo && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{selectedServiceInfo.name}</h4>
                  <p className="text-sm text-muted-foreground">Duration: {selectedServiceInfo.duration}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{selectedServiceInfo.price}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Owner Information */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          <Label className="text-lg font-semibold">Owner Information</Label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ownerName">Full Name *</Label>
            <Input
              id="ownerName"
              placeholder="Enter your full name"
              value={formData.ownerName}
              onChange={(e) => handleInputChange("ownerName", e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Complete Address *</Label>
          <Textarea
            id="address"
            placeholder="Enter your complete address including landmark"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            required
            className="min-h-[80px]"
          />
        </div>
      </div>

      {/* Pet Information */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PawPrint className="h-5 w-5 text-primary" />
          <Label className="text-lg font-semibold">Pet Information</Label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="petName">Pet Name *</Label>
            <Input
              id="petName"
              placeholder="Enter your pet's name"
              value={formData.petName}
              onChange={(e) => handleInputChange("petName", e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="petType">Pet Type *</Label>
            <Select value={formData.petType} onValueChange={(value) => handleInputChange("petType", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select pet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="bird">Bird</SelectItem>
                <SelectItem value="rabbit">Rabbit</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="petAge">Pet Age</Label>
            <Input
              id="petAge"
              placeholder="e.g., 2 years, 6 months"
              value={formData.petAge}
              onChange={(e) => handleInputChange("petAge", e.target.value)}
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="petBreed">Breed</Label>
            <Input
              id="petBreed"
              placeholder="Enter pet breed"
              value={formData.petBreed}
              onChange={(e) => handleInputChange("petBreed", e.target.value)}
              className="h-12"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="healthConcerns">Health Concerns or Symptoms</Label>
          <Textarea
            id="healthConcerns"
            placeholder="Describe any health concerns, symptoms, or specific issues you've noticed"
            value={formData.healthConcerns}
            onChange={(e) => handleInputChange("healthConcerns", e.target.value)}
            className="min-h-[80px]"
          />
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <Label className="text-lg font-semibold">Select Date & Time</Label>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label>Preferred Time *</Label>
            <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <div key={time} className="flex items-center space-x-2">
                  <RadioGroupItem value={time} id={time} />
                  <Label htmlFor={time} className="text-sm cursor-pointer">
                    {time}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Additional Information</Label>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <Input
              id="emergencyContact"
              placeholder="Emergency contact number"
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
              className="h-12"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialInstructions">Special Instructions</Label>
          <Textarea
            id="specialInstructions"
            placeholder="Any special instructions for the veterinarian (e.g., pet behavior, access instructions, etc.)"
            value={formData.specialInstructions}
            onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
            className="min-h-[80px]"
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreedToTerms}
          onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={!formData.agreedToTerms || !selectedService || !selectedDate || !selectedTime}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        Book Appointment
      </Button>
    </form>
  )
}
