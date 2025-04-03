"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CardData {
  name: string
  title: string
  company: string
  email: string
  phone: string
  website: string
  bio: string
  theme: string
  socialLinks: {
    linkedin: string
    twitter: string
    github: string
    instagram: string
  }
}

interface CardEditorProps {
  cardData: CardData
  setCardData: React.Dispatch<React.SetStateAction<CardData>>
}

export function CardEditor({ cardData, setCardData }: CardEditorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCardData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }))
  }

  const handleThemeChange = (value: string) => {
    setCardData((prev) => ({ ...prev, theme: value }))
  }

  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="basic">Basic Info</TabsTrigger>
        <TabsTrigger value="social">Social Links</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="space-y-4 pt-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={cardData.name} onChange={handleChange} placeholder="John Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            name="title"
            value={cardData.title}
            onChange={handleChange}
            placeholder="Software Engineer"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={cardData.company} onChange={handleChange} placeholder="Acme Inc." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={cardData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={cardData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={cardData.website}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={cardData.bio}
            onChange={handleChange}
            placeholder="Write a short bio..."
            className="min-h-[100px]"
          />
        </div>
      </TabsContent>
      <TabsContent value="social" className="space-y-4 pt-4">
        <div className="grid gap-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={cardData.socialLinks.linkedin}
            onChange={handleSocialChange}
            placeholder="https://linkedin.com/in/username"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            name="twitter"
            value={cardData.socialLinks.twitter}
            onChange={handleSocialChange}
            placeholder="https://twitter.com/username"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            name="github"
            value={cardData.socialLinks.github}
            onChange={handleSocialChange}
            placeholder="https://github.com/username"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            name="instagram"
            value={cardData.socialLinks.instagram}
            onChange={handleSocialChange}
            placeholder="https://instagram.com/username"
          />
        </div>
      </TabsContent>
      <TabsContent value="appearance" className="space-y-4 pt-4">
        <div className="grid gap-2">
          <Label htmlFor="theme">Theme</Label>
          <Select value={cardData.theme} onValueChange={handleThemeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </TabsContent>
    </Tabs>
  )
}

