import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Pet Owners",
    excerpt:
      "Everything you need to know before bringing your new furry friend home. From preparation to the first week together.",
    category: "Pet Care",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=400&text=Pet+Care+Tips+Article",
    featured: true,
  },
  {
    id: 2,
    title: "Rescue Success: How Max Found His Forever Home",
    excerpt: "Follow the incredible journey of Max, a street dog who overcame injuries to find a loving family.",
    category: "Success Stories",
    author: "Maria Rodriguez",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=400&text=Dog+Rescue+Success+Story",
    featured: true,
  },
  {
    id: 3,
    title: "Understanding Animal Behavior: Signs of Distress",
    excerpt: "Learn to recognize when animals need help and how to respond appropriately in emergency situations.",
    category: "Education",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=400&text=Animal+Behavior+Guide",
    featured: true,
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Calendar className="mr-2 h-4 w-4" />
            Featured Articles
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Latest from Our
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and impactful stories from our animal welfare community
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
