"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { User, Mail, Phone, Globe, Linkedin, Twitter, Instagram } from "lucide-react"

interface ProfileCardPreviewProps {
  className?: string
  variant?: "primary" | "blue" | "amber" | "green"
}

export function ProfileCardPreview({ className, variant = "primary" }: ProfileCardPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Get color classes based on variant
  const getColorClasses = () => {
    switch (variant) {
      case "blue":
        return "from-blue-500/20 to-blue-500/5 border-blue-500/20"
      case "amber":
        return "from-amber-500/20 to-amber-500/5 border-amber-500/20"
      case "green":
        return "from-green-500/20 to-green-500/5 border-green-500/20"
      default:
        return "from-primary/20 to-primary/5 border-primary/20"
    }
  }
  
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    
    // Animation parameters
    let startTime = Date.now()
    let animationFrameId: number
    
    // Floating animation function with different timing
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      // Calculate position based on time with different parameters
      const floatY = Math.sin(elapsed / 1800) * 12 // Vertical floating
      const floatX = Math.sin(elapsed / 2200) * 8 // Horizontal floating
      const rotateX = Math.sin(elapsed / 2800) * 4 // Tilt forward/backward
      const rotateY = Math.sin(elapsed / 3200) * 4 // Tilt left/right
      
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
        "profile-card-preview relative transform-gpu transition-transform duration-1000 ease-in-out",
        className
      )}
    >
      <div className={cn(
        "card-content w-full h-full rounded-xl bg-gradient-to-br backdrop-blur-sm border shadow-xl p-6",
        getColorClasses()
      )}>
        <div className="flex flex-col h-full">
          {/* Profile header */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 mr-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white/70" />
            </div>
            <div>
              <div className="h-4 w-32 bg-white/30 rounded mb-2"></div>
              <div className="h-3 w-24 bg-white/20 rounded"></div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-white/50" />
              <div className="h-3 w-40 bg-white/20 rounded"></div>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-white/50" />
              <div className="h-3 w-32 bg-white/20 rounded"></div>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-white/50" />
              <div className="h-3 w-36 bg-white/20 rounded"></div>
            </div>
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-3 mt-auto">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white/70" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Twitter className="w-4 h-4 text-white/70" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}