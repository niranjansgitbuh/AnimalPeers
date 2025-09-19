import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, BookOpen, Users, AlertTriangle, Award } from "lucide-react"

const categories = [
  {
    name: "Pet Care",
    description: "Expert advice on keeping your pets healthy and happy",
    icon: Heart,
    count: 125,
    color: "bg-red-100 text-red-600",
    gradient: "from-red-500/10 to-red-500/5",
  },
  {
    name: "Veterinary Tips",
    description: "Professional insights from certified veterinarians",
    icon: Stethoscope,
    count: 89,
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    name: "Success Stories",
    description: "Inspiring rescue and adoption stories",
    icon: Award,
    count: 156,
    color: "bg-green-100 text-green-600",
    gradient: "from-green-500/10 to-green-500/5",
  },
  {
    name: "Education",
    description: "Learn about animal welfare and rights",
    icon: BookOpen,
    count: 78,
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500/10 to-purple-500/5",
  },
  {
    name: "Community",
    description: "Stories from our volunteer community",
    icon: Users,
    count: 92,
    color: "bg-orange-100 text-orange-600",
    gradient: "from-orange-500/10 to-orange-500/5",
  },
  {
    name: "Emergency Care",
    description: "First aid and emergency response guides",
    icon: AlertTriangle,
    count: 45,
    color: "bg-yellow-100 text-yellow-600",
    gradient: "from-yellow-500/10 to-yellow-500/5",
  },
]

export function BlogCategories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <BookOpen className="mr-2 h-4 w-4" />
            Browse Categories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Explore by
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Topic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for with our organized content categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.name}
                className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br ${category.gradient} border-0`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`rounded-lg p-3 ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-background/50">
                      {category.count} posts
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
