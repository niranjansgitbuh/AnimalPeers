import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight, Eye } from "lucide-react"

const recentPosts = [
  {
    id: 4,
    title: "How to Create a Pet-Friendly Home Environment",
    excerpt: "Simple changes you can make to ensure your home is safe and comfortable for your pets.",
    category: "Pet Care",
    author: "Lisa Thompson",
    date: "March 8, 2024",
    readTime: "5 min read",
    views: "2.3K",
    image: "/placeholder.svg?height=200&width=300&text=Pet+Friendly+Home",
  },
  {
    id: 5,
    title: "The Importance of Regular Vet Checkups",
    excerpt: "Why preventive care is crucial for your pet's long-term health and wellbeing.",
    category: "Veterinary Tips",
    author: "Dr. James Wilson",
    date: "March 6, 2024",
    readTime: "7 min read",
    views: "1.8K",
    image: "/placeholder.svg?height=200&width=300&text=Vet+Checkup+Guide",
  },
  {
    id: 6,
    title: "Volunteer Spotlight: Making a Difference in Mumbai",
    excerpt: "Meet Priya, a dedicated volunteer who has helped rescue over 50 animals in the past year.",
    category: "Community",
    author: "Rahul Sharma",
    date: "March 4, 2024",
    readTime: "6 min read",
    views: "3.1K",
    image: "/placeholder.svg?height=200&width=300&text=Volunteer+Spotlight",
  },
  {
    id: 7,
    title: "Understanding Pet Nutrition: A Complete Guide",
    excerpt: "Everything you need to know about feeding your pets the right nutrients for optimal health.",
    category: "Pet Care",
    author: "Dr. Anjali Patel",
    date: "March 2, 2024",
    readTime: "10 min read",
    views: "4.2K",
    image: "/placeholder.svg?height=200&width=300&text=Pet+Nutrition+Guide",
  },
  {
    id: 8,
    title: "Emergency First Aid for Injured Animals",
    excerpt: "Step-by-step guide on how to provide immediate care to injured animals before professional help arrives.",
    category: "Emergency Care",
    author: "Dr. Vikram Singh",
    date: "February 28, 2024",
    readTime: "9 min read",
    views: "5.7K",
    image: "/placeholder.svg?height=200&width=300&text=Animal+First+Aid",
  },
  {
    id: 9,
    title: "Building Stronger Animal Welfare Communities",
    excerpt: "How local communities can work together to create better environments for street animals.",
    category: "Community",
    author: "Meera Krishnan",
    date: "February 26, 2024",
    readTime: "8 min read",
    views: "2.9K",
    image: "/placeholder.svg?height=200&width=300&text=Community+Building",
  },
]

export function RecentPosts() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Calendar className="mr-2 h-4 w-4" />
            Recent Posts
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Latest
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with our newest content and insights
          </p>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground bg-transparent">
            Load More Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
