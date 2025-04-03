"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { SplitText } from "@/components/split-text"

interface AnimatedHeroTitleProps {
  text: string
  className?: string
}

export function AnimatedHeroTitle({ text, className }: AnimatedHeroTitleProps) {
  return (
    <div className={cn("hero-title-wrapper relative", className)}>
      {/* Main title */}
      <div className="hero-title-container relative">
        <SplitText
          text={text}
          className="hero-title text-3xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl"
        />
      </div>
    </div>
  )
}