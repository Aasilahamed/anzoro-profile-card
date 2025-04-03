"use client"

import React from "react"
import Image from "next/image"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfilePhotoUploaderProps {
  profilePhoto: string | null
  onUpload: (photo: string | null) => void
}

export function ProfilePhotoUploader({ profilePhoto, onUpload }: ProfilePhotoUploaderProps) {
  // Function to handle image upload
  const handleImageUpload = async () => {
    try {
      // In a real app, this would use a file input and FormData
      // For demo purposes, we'll just call our mock API
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'profile' }),
      })

      const data = await response.json()

      if (data.success) {
        onUpload(data.url)
      } else {
        console.error('Upload failed')
        // Fallback to mock image for demo
        onUpload("/avatars/profile-sample.jpg")
      }
    } catch (error) {
      console.error('Upload error:', error)
      // Fallback to mock image for demo
      onUpload("/avatars/profile-sample.jpg")
    }
  }
  
  return (
    <div className="flex flex-col items-center gap-4">
      {profilePhoto ? (
        <div className="relative">
          <Avatar className="h-32 w-32">
            <AvatarImage src={profilePhoto} alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
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
            Drag and drop your profile photo, or click to browse
          </p>
          <Button onClick={handleImageUpload}>Upload Photo</Button>
        </div>
      )}
      
      <div className="text-sm text-muted-foreground text-center">
        Recommended: Square image, at least 500x500 pixels
      </div>
    </div>
  )
}