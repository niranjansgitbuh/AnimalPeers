"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, Star } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function CoursesShowcase() {
  const [filter, setFilter] = useState("all")

  const courses = [
    {
      id: "course-1",
      title: "Animal First Aid Certification",
      description: "Learn essential first aid techniques for injured animals",
      image: "/placeholder.svg?height=200&width=300&text=First+Aid+Course",
      price: 1999,
      duration: "8 hours",
      level: "Beginner",
      category: "certification",
      rating: 4.8,
      reviews: 124,
      popular: true,
    },
    {
      id: "course-2",
      title: "Animal Behavior Understanding",
      description: "Understand animal body language and behavior patterns",
      image: "/placeholder.svg?height=200&width=300&text=Animal+Behavior",
      price: 1499,
      duration: "6 hours",
      level: "Intermediate",
      category: "workshop",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: "course-3",
      title: "Volunteer Training Program",
      description: "Comprehensive training for animal rescue volunteers",
      image: "/placeholder.svg?height=200&width=300&text=Volunteer+Training",
      price: 999,
      duration: "12 hours",
      level: "Beginner",
      category: "training",
      rating: 4.9,
      reviews: 156,
      popular: true,
    },
    {
      id: "course-4",
      title: "Advanced Veterinary First Response",
      description: "For veterinary professionals and serious rescuers",
      image: "/placeholder.svg?height=200&width=300&text=Advanced+Veterinary",
      price: 3999,
      duration: "16 hours",
      level: "Advanced",
      category: "certification",
      rating: 4.7,
      reviews: 72,
    },
  ]

  const filteredCourses = filter === "all" ? courses : courses.filter((course) => course.category === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Educational Programs</h2>
          <p className="text-muted-foreground">Learn essential skills to help animals in need</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
            All Programs
          </Button>
          <Button
            variant={filter === "certification" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("certification")}
          >
            Certifications
          </Button>
          <Button
            variant={filter === "workshop" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("workshop")}
          >
            Workshops
          </Button>
          <Button
            variant={filter === "training" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("training")}
          >
            Training
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredCourses.map((course) => (
          <Card key={course.id} className={`overflow-hidden ${course.popular ? "border-primary" : ""}`}>
            <div className="relative">
              <AnimatedImage
                src={course.image}
                alt={course.title}
                effect="3d-tilt"
                className="aspect-video w-full object-cover"
              />
              {course.popular && <Badge className="absolute right-2 top-2 bg-primary">Popular</Badge>}
            </div>

            <CardHeader className="p-4 pb-0">
              <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-4">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-xs text-muted-foreground">({course.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{course.level}</span>
                </div>
                <div className="col-span-2 mt-1">
                  <Badge variant="outline" className="w-full justify-center">
                    {course.category === "certification"
                      ? "Certification"
                      : course.category === "workshop"
                        ? "Workshop"
                        : "Training"}
                  </Badge>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="font-bold">₹{course.price}</div>
              <Button size="sm">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg border bg-muted/30 p-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="rounded-full bg-primary/10 p-3">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">Corporate Training Programs</h3>
            <p className="text-muted-foreground">
              We offer customized training programs for corporate teams as part of CSR initiatives. Train your employees
              in animal welfare and first aid.
            </p>
          </div>
          <Button>Request Information</Button>
        </div>
      </div>
    </div>
  )
}
