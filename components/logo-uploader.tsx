"use client"

import React from "react"
import Image from "next/image"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LogoUploaderProps {
  logo: string | null
  onUpload: (logo: string | null) => void
}

export function LogoUploader({ logo, onUpload }: LogoUploaderProps) {
  // Function to handle logo upload
  const handleLogoUpload = async () => {
    try {
      // In a real app, this would use a file input and FormData
      // For demo purposes, we'll just call our mock API
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'logo' }),
      })

      const data = await response.json()

      if (data.success) {
        onUpload(data.url)
      } else {
        console.error('Upload failed')
        // Fallback to mock image for demo
        onUpload("/logos/company-logo.png")
      }
    } catch (error) {
      console.error('Upload error:', error)
      // Fallback to mock image for demo
      onUpload("/logos/company-logo.png")
    }
  }
  
  return (
    <div className="flex flex-col items-center gap-4">
      {logo ? (
        <div className="relative flex items-center justify-center p-4 rounded-lg border w-full">
          <div className="relative h-16 w-48">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <Button
            variant="destructive"
            size="icon"
            className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
            onClick={() => onUpload(null)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-6 w-full">
          <Upload className="h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            Drag and drop your company logo, or click to browse
          </p>
          <Button onClick={handleLogoUpload}>Upload Logo</Button>
        </div>
      )}
      
      <div className="text-sm text-muted-foreground text-center">
        Recommended: PNG or SVG with transparent background
      </div>
    </div>
  )
}