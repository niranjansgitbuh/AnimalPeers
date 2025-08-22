"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<string[]>([])

  const products = [
    {
      id: "collar-1",
      name: "AnimalPeers Safety Collar",
      price: 599,
      description: "Reflective collar with AnimalPeers emergency contact tag",
      image: "/placeholder.svg?height=300&width=300&text=Safety+Collar",
      category: "Accessories",
      badge: "Bestseller",
      stock: 45,
    },
    {
      id: "tshirt-1",
      name: "Animal Rescuer T-Shirt",
      price: 799,
      description: "100% cotton t-shirt with rescue mission statement",
      image: "/placeholder.svg?height=300&width=300&text=Rescue+Tshirt",
      category: "Apparel",
      stock: 32,
    },
    {
      id: "petfood-1",
      name: "Premium Dog Food (5kg)",
      price: 1299,
      description: "High-quality dog food with natural ingredients",
      image: "/placeholder.svg?height=300&width=300&text=Dog+Food",
      category: "Pet Food",
      badge: "New",
      stock: 18,
    },
    {
      id: "firstaid-1",
      name: "Pet First Aid Kit",
      price: 899,
      description: "Essential first aid supplies for pet emergencies",
      image: "/placeholder.svg?height=300&width=300&text=First+Aid+Kit",
      category: "Healthcare",
      stock: 27,
    },
  ]

  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link href="/store" className="text-primary hover:underline">
          View all products
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <AnimatedImage
                src={product.image}
                alt={product.name}
                effect="3d-tilt"
                className="aspect-square w-full object-cover"
              />
              {product.badge && <Badge className="absolute left-2 top-2 bg-primary">{product.badge}</Badge>}
              <button
                className={`absolute right-2 top-2 rounded-full p-1.5 ${
                  wishlist.includes(product.id)
                    ? "bg-red-100 text-red-500"
                    : "bg-white/80 text-gray-500 hover:text-red-500"
                }`}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart className="h-5 w-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            <CardHeader className="p-4 pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </div>
                <p className="font-bold">₹{product.price}</p>
              </div>
            </CardHeader>

            <CardContent className="p-4 pt-2">
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <p className="mt-2 text-xs">
                {product.stock > 20 ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-amber-600">Only {product.stock} left</span>
                )}
              </p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-muted p-4 text-center">
        <p className="text-sm text-muted-foreground">
          30% of all proceeds from our store go directly to animal rescue operations.
        </p>
      </div>
    </div>
  )
}
