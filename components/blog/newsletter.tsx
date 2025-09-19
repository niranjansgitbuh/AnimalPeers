import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Bell, Gift, Users } from "lucide-react"

export function BlogNewsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-primary/5 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    <Mail className="mr-2 h-4 w-4" />
                    Newsletter
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Stay Updated with
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      {" "}
                      AnimalPeers
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get the latest rescue stories, pet care tips, and community updates delivered straight to your inbox
                    every week.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Weekly Updates</h3>
                    <p className="text-sm text-muted-foreground text-center">Never miss important news and stories</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-full bg-green-100 p-3">
                      <Gift className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold">Exclusive Content</h3>
                    <p className="text-sm text-muted-foreground text-center">Subscriber-only articles and resources</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">Community Access</h3>
                    <p className="text-sm text-muted-foreground text-center">Join our private community discussions</p>
                  </div>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <Input type="email" placeholder="Enter your email address" className="flex-1" />
                    <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Join 10,000+ animal lovers. Unsubscribe anytime.</p>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>10,000+ subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Weekly delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>No spam, ever</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
