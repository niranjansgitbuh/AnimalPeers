"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  width?: number
  height?: number
}

export function AnimatedImage({ src, alt, width, height, className, ...props }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
      }}
      {...props}
    >
      <div
        className={cn("h-full w-full", {
          "transition-opacity duration-300": !isLoaded,
          "opacity-0": !isLoaded,
          "opacity-100": isLoaded,
        })}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}
