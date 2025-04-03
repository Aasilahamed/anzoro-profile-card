"use client"

import React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface FontSelectorProps {
  selectedFont: string
  onSelect: (font: string) => void
}

const fonts = [
  {
    id: "inter",
    name: "Inter",
    description: "Clean and modern sans-serif font",
    className: "font-sans"
  },
  {
    id: "serif",
    name: "Serif",
    description: "Classic and elegant serif font",
    className: "font-serif"
  },
  {
    id: "mono",
    name: "Monospace",
    description: "Technical fixed-width font",
    className: "font-mono"
  },
  {
    id: "handwriting",
    name: "Handwriting",
    description: "Casual handwritten style font",
    className: "font-serif italic"
  },
  {
    id: "display",
    name: "Display",
    description: "Bold and attention-grabbing font",
    className: "font-sans font-bold"
  }
]

export function FontSelector({ selectedFont, onSelect }: FontSelectorProps) {
  return (
    <RadioGroup
      value={selectedFont}
      onValueChange={onSelect}
      className="space-y-3"
    >
      {fonts.map((font) => (
        <div
          key={font.id}
          className={cn(
            "flex items-center space-x-2 rounded-md border p-3 cursor-pointer transition-all hover:border-primary",
            selectedFont === font.id ? "border-primary" : "border-muted"
          )}
          onClick={() => onSelect(font.id)}
        >
          <RadioGroupItem value={font.id} id={font.id} className="sr-only" />
          <div className="flex-1">
            <Label
              htmlFor={font.id}
              className={cn("text-base font-medium", font.className)}
            >
              {font.name}
            </Label>
            <p className="text-sm text-muted-foreground">{font.description}</p>
          </div>
          {selectedFont === font.id && (
            <Check className="h-5 w-5 text-primary" />
          )}
        </div>
      ))}
    </RadioGroup>
  )
}