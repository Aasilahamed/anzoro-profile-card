"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface HeroBackgroundProps {
  className?: string
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Floating 3D cards */}
      <div className="card-3d card-1 bg-primary/10 dark:bg-primary/20"></div>
      <div className="card-3d card-2 bg-blue-500/10 dark:bg-blue-500/20"></div>
      <div className="card-3d card-3 bg-amber-500/10 dark:bg-amber-500/20"></div>
      <div className="card-3d card-4 bg-green-500/10 dark:bg-green-500/20"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      {/* NFC waves */}
      <div className="nfc-wave wave-1"></div>
      <div className="nfc-wave wave-2"></div>
      <div className="nfc-wave wave-3"></div>
    </div>
  )
}