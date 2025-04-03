"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  className?: string
}

export function FloatingCard({ className }: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    
    // Animation parameters
    let startTime = Date.now()
    let animationFrameId: number
    
    // Floating animation function
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      // Calculate position based on time
      const floatY = Math.sin(elapsed / 1500) * 15 // Vertical floating
      const floatX = Math.sin(elapsed / 2000) * 10 // Horizontal floating
      const rotateX = Math.sin(elapsed / 2500) * 5 // Tilt forward/backward
      const rotateY = Math.sin(elapsed / 3000) * 5 // Tilt left/right
      
      // Apply transforms
      card.style.transform = `
        translate3d(${floatX}px, ${floatY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "floating-card relative transform-gpu transition-transform duration-1000 ease-in-out",
        className
      )}
    >
      <div className="card-content w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 shadow-xl p-6">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-full bg-primary/20 mb-4"></div>
          <div className="h-3 w-24 bg-primary/20 rounded mb-2"></div>
          <div className="h-3 w-32 bg-primary/20 rounded mb-4"></div>
          <div className="flex-1 grid grid-cols-3 gap-2">
            <div className="h-8 bg-primary/10 rounded"></div>
            <div className="h-8 bg-primary/10 rounded"></div>
            <div className="h-8 bg-primary/10 rounded"></div>
          </div>
          <div className="mt-4 h-10 w-full bg-primary/15 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}