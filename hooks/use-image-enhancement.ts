"use client"

import { useState } from "react"

interface EnhancementResult {
  enhancedImage: string
  originalSize: number
  enhancedSize?: number
}

export function useImageEnhancement() {
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const enhanceImage = async (file: File): Promise<EnhancementResult | null> => {
    setIsEnhancing(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("image", file)

      const response = await fetch("/api/enhance-image", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Enhancement failed")
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error("Enhancement was not successful")
      }

      return {
        enhancedImage: result.enhancedImage,
        originalSize: result.originalSize,
        enhancedSize: result.enhancedSize,
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
      setError(errorMessage)
      return null
    } finally {
      setIsEnhancing(false)
    }
  }

  return {
    enhanceImage,
    isEnhancing,
    error,
  }
}
