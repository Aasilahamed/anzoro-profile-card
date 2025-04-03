"use client"

import React from "react"
import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface SocialLinksEditorProps {
  socialLinks: {
    linkedin: string
    twitter: string
    github: string
    instagram: string
    facebook: string
    youtube: string
    tiktok: string
  }
  onChange: (platform: string, value: string) => void
}

export function SocialLinksEditor({ socialLinks, onChange }: SocialLinksEditorProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="linkedin" className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Label>
          <Input
            id="linkedin"
            value={socialLinks.linkedin}
            onChange={(e) => onChange("linkedin", e.target.value)}
            placeholder="username"
            className="flex-1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="twitter" className="flex items-center gap-2">
            <Twitter className="h-4 w-4" />
            Twitter
          </Label>
          <Input
            id="twitter"
            value={socialLinks.twitter}
            onChange={(e) => onChange("twitter", e.target.value)}
            placeholder="username"
            className="flex-1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="github" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </Label>
          <Input
            id="github"
            value={socialLinks.github}
            onChange={(e) => onChange("github", e.target.value)}
            placeholder="username"
            className="flex-1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="instagram" className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            Instagram
          </Label>
          <Input
            id="instagram"
            value={socialLinks.instagram}
            onChange={(e) => onChange("instagram", e.target.value)}
            placeholder="username"
            className="flex-1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="facebook" className="flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            Facebook
          </Label>
          <Input
            id="facebook"
            value={socialLinks.facebook}
            onChange={(e) => onChange("facebook", e.target.value)}
            placeholder="username"
            className="flex-1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="youtube" className="flex items-center gap-2">
            <Youtube className="h-4 w-4" />
            YouTube
          </Label>
          <Input
            id="youtube"
            value={socialLinks.youtube}
            onChange={(e) => onChange("youtube", e.target.value)}
            placeholder="channel"
            className="flex-1"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="tiktok" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
          TikTok
        </Label>
        <Input
          id="tiktok"
          value={socialLinks.tiktok}
          onChange={(e) => onChange("tiktok", e.target.value)}
          placeholder="username"
          className="flex-1"
        />
      </div>
    </div>
  )
}