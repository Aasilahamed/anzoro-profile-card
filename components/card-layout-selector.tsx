"use client"

import React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CardLayoutSelectorProps {
  selectedLayout: string
  onSelect: (layout: string) => void
}

const layouts = [
  {
    id: "standard",
    name: "Standard",
    description: "Classic vertical layout with all information",
    image: "/layouts/standard.png"
  },
  {
    id: "horizontal",
    name: "Horizontal",
    description: "Side-by-side layout with photo and information",
    image: "/layouts/horizontal.png"
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simplified layout with essential information only",
    image: "/layouts/minimal.png"
  },
  {
    id: "creative",
    name: "Creative",
    description: "Unique layout with overlapping elements",
    image: "/layouts/creative.png"
  }
]

export function CardLayoutSelector({ selectedLayout, onSelect }: CardLayoutSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {layouts.map((layout) => (
        <div
          key={layout.id}
          className={cn(
            "relative cursor-pointer rounded-lg border-2 p-1 transition-all hover:border-primary",
            selectedLayout === layout.id ? "border-primary" : "border-muted"
          )}
          onClick={() => onSelect(layout.id)}
        >
          <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-muted">
            {/* Placeholder for layout preview image */}
            <div className="relative h-full w-full">
              <Image
                src={layout.image}
                alt={layout.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Always show the layout name as a fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <span className="text-lg font-medium">{layout.name}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 p-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{layout.name}</h3>
              {selectedLayout === layout.id && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{layout.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}