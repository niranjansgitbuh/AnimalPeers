"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Camera, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { LocationPicker } from "@/components/location-picker"
import { ImageEnhancer } from "@/components/ai/image-enhancer"

const formSchema = z.object({
  animalType: z.string().min(1, { message: "Please select the type of animal" }),
  condition: z.string().min(1, { message: "Please select the condition" }),
  color: z.string().min(1, { message: "Please enter the color" }),
  features: z.string().optional(),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string().min(1, { message: "Please select a location" }),
  }),
  notes: z.string().optional(),
  contactName: z.string().min(1, { message: "Please enter your name" }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
})

interface ImageData {
  file: File
  url: string
  isEnhanced?: boolean
}

export function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [images, setImages] = useState<ImageData[]>([])
  const [enhancingImageIndex, setEnhancingImageIndex] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      animalType: "",
      condition: "",
      color: "",
      features: "",
      location: {
        lat: 0,
        lng: 0,
        address: "",
      },
      notes: "",
      contactName: "",
      contactPhone: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      console.log(images)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
        isEnhanced: false,
      }))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].url)
      newImages.splice(index, 1)
      return newImages
    })
  }

  const handleEnhanceImage = (index: number) => {
    setEnhancingImageIndex(index)
  }

  const handleEnhancedImage = (enhancedImageUrl: string, originalFile: File) => {
    if (enhancingImageIndex !== null) {
      setImages((prev) => {
        const newImages = [...prev]
        // Create a new file from the enhanced image URL
        fetch(enhancedImageUrl)
          .then((res) => res.blob())
          .then((blob) => {
            const enhancedFile = new File([blob], `enhanced_${originalFile.name}`, {
              type: originalFile.type,
            })
            newImages[enhancingImageIndex] = {
              file: enhancedFile,
              url: enhancedImageUrl,
              isEnhanced: true,
            }
            setImages([...newImages])
          })
        return newImages
      })
      setEnhancingImageIndex(null)
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Report Submitted Successfully!</h2>
          <p className="text-muted-foreground">
            Your report has been sent to nearby animal hospitals and NGOs. You will receive updates about the rescue
            operation.
          </p>
          <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Animal Information</h3>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="animalType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Animal Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select animal type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="cow">Cow</SelectItem>
                          <SelectItem value="buffalo">Buffalo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="condition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condition</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="injured">Injured</SelectItem>
                          <SelectItem value="sick">Sick</SelectItem>
                          <SelectItem value="malnourished">Malnourished</SelectItem>
                          <SelectItem value="abandoned">Abandoned</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Brown and white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identifying Features</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Collar, limp, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormLabel>Photos</FormLabel>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-md border">
                          <img
                            src={image.url || "/placeholder.svg"}
                            alt={`Uploaded image ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          {image.isEnhanced && (
                            <div className="absolute top-1 left-1">
                              <Sparkles className="h-3 w-3 text-yellow-500" />
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute right-1 top-1 rounded-full bg-black/70 p-1 text-white hover:bg-black"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleEnhanceImage(index)}
                          className="mt-1 w-full text-xs"
                          disabled={image.isEnhanced}
                        >
                          {image.isEnhanced ? "Enhanced" : "Enhance"}
                        </Button>
                      </div>
                    ))}

                    <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-muted/50">
                      <Camera className="h-4 w-4" />
                      <span>Add Photo</span>
                      <Input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                    </label>
                  </div>
                  <FormDescription className="mt-2">
                    Upload clear photos of the animal. Use AI enhancement for blurry images.
                  </FormDescription>
                </div>
              </div>

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <LocationPicker value={field.value} onChange={(location) => field.onChange(location)} />
                    </FormControl>
                    <FormDescription>
                      Drag the marker to the exact location of the animal or search for an address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide any additional information that might help rescuers"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Your Contact Information</h3>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormDescription>We may contact you for additional information.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Image Enhancement Modal */}
        {enhancingImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="max-w-4xl w-full mx-4">
              <ImageEnhancer
                originalImage={images[enhancingImageIndex].file}
                onEnhancedImage={handleEnhancedImage}
                className="bg-background"
              />
              <div className="flex justify-center mt-4">
                <Button variant="outline" onClick={() => setEnhancingImageIndex(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
