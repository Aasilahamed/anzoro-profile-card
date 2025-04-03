"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function SplitText({ text, className, tag = "h1" }: SplitTextProps) {
  const Tag = tag as keyof JSX.IntrinsicElements
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chars = entry.target.querySelectorAll('.split-text-char')
            chars.forEach((char) => {
              char.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Split the text into individual characters
  const characters = text.split('').map((char, index) => (
    <span key={index} className="split-text-char">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <Tag ref={containerRef} className={cn("text-container", className)}>
      {characters}
    </Tag>
  )
}