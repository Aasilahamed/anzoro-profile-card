"use client"

import React from "react"
import Image from "next/image"
import { Check, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/color-picker"

interface BackgroundSelectorProps {
  backgroundType: string
  backgroundColor: string
  backgroundPattern: string | null
  backgroundImage: string | null
  onBackgroundTypeChange: (type: string) => void
  onBackgroundColorChange: (color: string) => void
  onBackgroundPatternChange: (pattern: string | null) => void
  onBackgroundImageChange: (image: string | null) => void
}

const patterns = [
  {
    id: "dots",
    name: "Dots",
    image: "/patterns/dots.png"
  },
  {
    id: "lines",
    name: "Lines",
    image: "/patterns/lines.png"
  },
  {
    id: "grid",
    name: "Grid",
    image: "/patterns/grid.png"
  },
  {
    id: "waves",
    name: "Waves",
    image: "/patterns/waves.png"
  },
  {
    id: "triangles",
    name: "Triangles",
    image: "/patterns/triangles.png"
  },
  {
    id: "hexagons",
    name: "Hexagons",
    image: "/patterns/hexagons.png"
  }
]

export function BackgroundSelector({
  backgroundType,
  backgroundColor,
  backgroundPattern,
  backgroundImage,
  onBackgroundTypeChange,
  onBackgroundColorChange,
  onBackgroundPatternChange,
  onBackgroundImageChange
}: BackgroundSelectorProps) {
  // Function to handle image upload
  const handleImageUpload = async () => {
    try {
      // In a real app, this would use a file input and FormData
      // For demo purposes, we'll just call our mock API
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'background' }),
      })

      const data = await response.json()

      if (data.success) {
        onBackgroundImageChange(data.url)
      } else {
        console.error('Upload failed')
        // Fallback to mock image for demo
        onBackgroundImageChange("/backgrounds/sample-bg.jpg")
      }
    } catch (error) {
      console.error('Upload error:', error)
      // Fallback to mock image for demo
      onBackgroundImageChange("/backgrounds/sample-bg.jpg")
    }
  }
  
  return (
    <Tabs value={backgroundType} onValueChange={onBackgroundTypeChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="solid">Solid</TabsTrigger>
        <TabsTrigger value="gradient">Gradient</TabsTrigger>
        <TabsTrigger value="pattern">Pattern</TabsTrigger>
        <TabsTrigger value="image">Image</TabsTrigger>
      </TabsList>
      
      {/* Solid Color Tab */}
      <TabsContent value="solid" className="space-y-4 py-4">
        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPicker
            color={backgroundColor}
            onChange={onBackgroundColorChange}
            presets={[
              "#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", 
              "#cbd5e1", "#94a3b8", "#64748b", "#334155", 
              "#1e293b", "#0f172a", "#020617"
            ]}
          />
        </div>
      </TabsContent>
      
      {/* Gradient Tab */}
      <TabsContent value="gradient" className="space-y-4 py-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <ColorPicker
              color={backgroundColor}
              onChange={onBackgroundColorChange}
              presets={[
                "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
                "#ec4899", "#06b6d4", "#84cc16", "#6366f1", "#14b8a6"
              ]}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <ColorPicker
              color={backgroundColor}
              onChange={onBackgroundColorChange}
              presets={[
                "#1e40af", "#b91c1c", "#047857", "#b45309", "#6d28d9",
                "#be185d", "#0e7490", "#4d7c0f", "#4338ca", "#0f766e"
              ]}
            />
          </div>
        </div>
      </TabsContent>
      
      {/* Pattern Tab */}
      <TabsContent value="pattern" className="space-y-4 py-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Background Color</Label>
            <ColorPicker
              color={backgroundColor}
              onChange={onBackgroundColorChange}
              presets={[
                "#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", 
                "#cbd5e1", "#94a3b8", "#64748b", "#334155", 
                "#1e293b", "#0f172a", "#020617"
              ]}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Pattern</Label>
            <RadioGroup
              value={backgroundPattern || ""}
              onValueChange={onBackgroundPatternChange}
              className="grid grid-cols-3 gap-2"
            >
              {patterns.map((pattern) => (
                <div
                  key={pattern.id}
                  className={cn(
                    "relative cursor-pointer rounded-lg border-2 p-1 transition-all hover:border-primary aspect-square",
                    backgroundPattern === pattern.image ? "border-primary" : "border-muted"
                  )}
                  onClick={() => onBackgroundPatternChange(pattern.image)}
                >
                  <RadioGroupItem value={pattern.image} id={pattern.id} className="sr-only" />
                  <div className="relative h-full w-full overflow-hidden rounded-md">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    {backgroundPattern === pattern.image && (
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </TabsContent>
      
      {/* Image Tab */}
      <TabsContent value="image" className="space-y-4 py-4">
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-6">
            {backgroundImage ? (
              <div className="relative aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-md">
                <Image
                  src={backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => onBackgroundImageChange(null)}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop an image, or click to browse
                </p>
                <Button onClick={handleImageUpload}>Upload Image</Button>
              </>
            )}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}