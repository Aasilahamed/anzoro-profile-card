"use client"

import React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

interface CardEffectsSelectorProps {
  effects: {
    shadow: string
    rounded: string
    border: boolean
    glassmorphism: boolean
    animation: string
  }
  onChange: (effect: string, value: any) => void
}

export function CardEffectsSelector({ effects, onChange }: CardEffectsSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Shadow Options */}
      <div className="space-y-3">
        <Label>Shadow</Label>
        <RadioGroup
          value={effects.shadow}
          onValueChange={(value) => onChange("shadow", value)}
          className="grid grid-cols-3 gap-2"
        >
          {["none", "small", "medium", "large", "xl"].map((shadow) => (
            <div
              key={shadow}
              className={cn(
                "flex items-center justify-center rounded-md border-2 p-2 cursor-pointer transition-all hover:border-primary",
                effects.shadow === shadow ? "border-primary" : "border-muted"
              )}
              onClick={() => onChange("shadow", shadow)}
            >
              <RadioGroupItem value={shadow} id={`shadow-${shadow}`} className="sr-only" />
              <div 
                className={cn(
                  "h-12 w-full rounded-md bg-background",
                  shadow === "none" ? "" : `shadow-${shadow}`
                )}
              />
            </div>
          ))}
        </RadioGroup>
      </div>
      
      {/* Border Radius Options */}
      <div className="space-y-3">
        <Label>Rounded Corners</Label>
        <RadioGroup
          value={effects.rounded}
          onValueChange={(value) => onChange("rounded", value)}
          className="grid grid-cols-3 gap-2"
        >
          {["none", "small", "medium", "large", "xl", "full"].map((rounded) => (
            <div
              key={rounded}
              className={cn(
                "flex items-center justify-center rounded-md border-2 p-2 cursor-pointer transition-all hover:border-primary",
                effects.rounded === rounded ? "border-primary" : "border-muted"
              )}
              onClick={() => onChange("rounded", rounded)}
            >
              <RadioGroupItem value={rounded} id={`rounded-${rounded}`} className="sr-only" />
              <div 
                className={cn(
                  "h-12 w-full bg-primary",
                  rounded === "none" ? "rounded-none" :
                  rounded === "small" ? "rounded-sm" :
                  rounded === "medium" ? "rounded-md" :
                  rounded === "large" ? "rounded-lg" :
                  rounded === "xl" ? "rounded-xl" :
                  "rounded-3xl"
                )}
              />
            </div>
          ))}
        </RadioGroup>
      </div>
      
      {/* Border Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="border-toggle">Border</Label>
        <Switch
          id="border-toggle"
          checked={effects.border}
          onCheckedChange={(checked) => onChange("border", checked)}
        />
      </div>
      
      {/* Glassmorphism Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="glassmorphism-toggle">Glassmorphism Effect</Label>
        <Switch
          id="glassmorphism-toggle"
          checked={effects.glassmorphism}
          onCheckedChange={(checked) => onChange("glassmorphism", checked)}
        />
      </div>
      
      {/* Animation Options */}
      <div className="space-y-3">
        <Label>Animation</Label>
        <RadioGroup
          value={effects.animation}
          onValueChange={(value) => onChange("animation", value)}
          className="space-y-2"
        >
          {["none", "fade", "slide", "bounce", "pulse"].map((animation) => (
            <div
              key={animation}
              className={cn(
                "flex items-center justify-between rounded-md border-2 p-3 cursor-pointer transition-all hover:border-primary",
                effects.animation === animation ? "border-primary" : "border-muted"
              )}
              onClick={() => onChange("animation", animation)}
            >
              <RadioGroupItem value={animation} id={`animation-${animation}`} className="sr-only" />
              <Label htmlFor={`animation-${animation}`} className="cursor-pointer">
                {animation.charAt(0).toUpperCase() + animation.slice(1)}
              </Label>
              {effects.animation === animation && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}