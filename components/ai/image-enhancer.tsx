"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Download, RotateCcw, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { useImageEnhancement } from "@/hooks/use-image-enhancement"

interface ImageEnhancerProps {
  originalImage: File
  onEnhancedImage: (enhancedImageUrl: string, originalFile: File) => void
  className?: string
}

export function ImageEnhancer({ originalImage, onEnhancedImage, className }: ImageEnhancerProps) {
  const [enhancedImageUrl, setEnhancedImageUrl] = useState<string | null>(null)
  const [originalImageUrl, setOriginalImageUrl] = useState<string>(() => URL.createObjectURL(originalImage))
  const [showComparison, setShowComparison] = useState(false)

  const { enhanceImage, isEnhancing, error } = useImageEnhancement()

  const handleEnhance = async () => {
    const result = await enhanceImage(originalImage)

    if (result) {
      // Convert base64 to blob URL for display
      const enhancedUrl = `data:image/jpeg;base64,${result.enhancedImage}`
      setEnhancedImageUrl(enhancedUrl)
      setShowComparison(true)

      // Call the parent callback with the enhanced image
      onEnhancedImage(enhancedUrl, originalImage)
    }
  }

  const handleUseEnhanced = () => {
    if (enhancedImageUrl) {
      onEnhancedImage(enhancedImageUrl, originalImage)
    }
  }

  const handleUseOriginal = () => {
    onEnhancedImage(originalImageUrl, originalImage)
  }

  const downloadEnhancedImage = () => {
    if (enhancedImageUrl) {
      const link = document.createElement("a")
      link.href = enhancedImageUrl
      link.download = `enhanced_${originalImage.name}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className={className}>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Image Enhancement
              </h3>
              <Badge variant="secondary">Beta</Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              Our AI can enhance blurry or low-quality images to help rescuers better identify the animal.
            </p>

            {!showComparison ? (
              <div className="space-y-4">
                <div className="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-lg border">
                  <img
                    src={originalImageUrl || "/placeholder.svg"}
                    alt="Original uploaded image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex justify-center">
                  <Button onClick={handleEnhance} disabled={isEnhancing} className="flex items-center gap-2">
                    {isEnhancing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enhancing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Enhance Image
                      </>
                    )}
                  </Button>
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-center">Original</h4>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                      <img
                        src={originalImageUrl || "/placeholder.svg"}
                        alt="Original image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button variant="outline" size="sm" onClick={handleUseOriginal} className="w-full bg-transparent">
                      Use Original
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-center flex items-center justify-center gap-1">
                      Enhanced
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </h4>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                      <img src={enhancedImageUrl || ""} alt="Enhanced image" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleUseEnhanced} className="flex-1">
                        Use Enhanced
                      </Button>
                      <Button variant="outline" size="sm" onClick={downloadEnhancedImage}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowComparison(false)}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
