"use client"

import React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TemplateSelectorProps {
  selectedTemplate: string
  onSelect: (template: string) => void
}

const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "Clean and professional design for business use",
    image: "/templates/professional.png"
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold and artistic design for creatives",
    image: "/templates/creative.png"
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant design with minimal elements",
    image: "/templates/minimal.png"
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Formal design for corporate professionals",
    image: "/templates/corporate.png"
  },
  {
    id: "modern",
    name: "Modern",
    description: "Contemporary design with modern aesthetics",
    image: "/templates/modern.png"
  },
  {
    id: "tech",
    name: "Tech",
    description: "Digital-focused design for tech professionals",
    image: "/templates/tech.png"
  }
]

export function TemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className={cn(
            "relative cursor-pointer rounded-lg border-2 p-1 transition-all hover:border-primary",
            selectedTemplate === template.id ? "border-primary" : "border-muted"
          )}
          onClick={() => onSelect(template.id)}
        >
          <div className="aspect-[9/16] w-full overflow-hidden rounded-md bg-muted">
            {/* Placeholder for template preview image */}
            <div className="relative h-full w-full">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Always show the template name as a fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <span className="text-lg font-medium">{template.name}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 p-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{template.name}</h3>
              {selectedTemplate === template.id && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{template.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}