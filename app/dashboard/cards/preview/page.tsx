"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardPreview } from "@/components/card-preview"

// Default card data (same as in card-customizer.tsx)
const defaultCardData = {
  template: "professional",
  layout: "standard",
  primaryColor: "#3b82f6",
  secondaryColor: "#1e40af",
  accentColor: "#60a5fa",
  backgroundColor: "#ffffff",
  backgroundType: "solid",
  backgroundPattern: null,
  backgroundImage: null,
  font: "inter",
  profilePhoto: null,
  logo: null,
  name: "John Doe",
  title: "Software Developer",
  company: "Anzoro",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  website: "www.johndoe.com",
  address: "123 Tech Street, San Francisco, CA",
  bio: "Passionate software developer with expertise in web technologies and user experience design.",
  socialLinks: {
    linkedin: "johndoe",
    twitter: "johndoe",
    github: "johndoe",
    instagram: "johndoe",
    facebook: "",
    youtube: "",
    tiktok: "",
  },
  effects: {
    shadow: "medium",
    rounded: "medium",
    border: true,
    glassmorphism: false,
    animation: "none",
  }
}

export default function CardPreviewPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cardData, setCardData] = useState(defaultCardData)
  
  useEffect(() => {
    // In a real app, we would fetch the card data from the API using the card ID
    // For demo purposes, we'll try to get it from localStorage if available
    try {
      const storedCardData = localStorage.getItem('previewCardData')
      if (storedCardData) {
        setCardData(JSON.parse(storedCardData))
      }
    } catch (error) {
      console.error('Error loading card data:', error)
    }
  }, [])
  
  const handleBack = () => {
    router.back()
  }
  
  const handleShare = () => {
    alert('Sharing functionality would be implemented here')
  }
  
  const handleDownload = () => {
    alert('Download functionality would be implemented here')
  }
  
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      {/* Header */}
      <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="max-w-sm">
          <CardPreview cardData={cardData} />
        </div>
      </div>
    </div>
  )
}