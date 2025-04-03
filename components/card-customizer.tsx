"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CardPreview } from "@/components/card-preview"
import { ColorPicker } from "@/components/color-picker"
import { TemplateSelector } from "@/components/template-selector"
import { ProfilePhotoUploader } from "@/components/profile-photo-uploader"
import { LogoUploader } from "@/components/logo-uploader"
import { FontSelector } from "@/components/font-selector"
import { SocialLinksEditor } from "@/components/social-links-editor"
import { CardLayoutSelector } from "@/components/card-layout-selector"
import { BackgroundSelector } from "@/components/background-selector"
import { ContactInfoEditor } from "@/components/contact-info-editor"
import { CardEffectsSelector } from "@/components/card-effects-selector"

// Default card data
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

export function CardCustomizer() {
  const router = useRouter()
  const [cardData, setCardData] = useState(defaultCardData)
  const [activeTab, setActiveTab] = useState("template")
  const [isSaving, setIsSaving] = useState(false)

  // Save card data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cardCustomizerData', JSON.stringify(cardData))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }, [cardData])

  // Load card data from localStorage on initial render
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('cardCustomizerData')
      if (savedData) {
        setCardData(JSON.parse(savedData))
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error)
    }
  }, [])

  const updateCardData = (key: string, value: any) => {
    setCardData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const updateNestedCardData = (parentKey: string, key: string, value: any) => {
    setCardData(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [key]: value
      }
    }))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)

      // Call our API to save the card
      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
      })

      const data = await response.json()

      if (data.success) {
        alert(`Card saved successfully! Card ID: ${data.cardId}`)
      } else {
        alert('Failed to save card: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Save error:', error)
      alert('An error occurred while saving the card')
    } finally {
      setIsSaving(false)
    }
  }
  
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Card Preview */}
      <div className="col-span-1 flex flex-col gap-4">
        <div className="sticky top-24 flex flex-col gap-4">
          <CardPreview cardData={cardData} />
          
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleSave}
              className="w-full"
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Card'}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={isSaving}
              onClick={() => {
                // Save the current card data to localStorage for the preview page
                try {
                  localStorage.setItem('previewCardData', JSON.stringify(cardData))
                } catch (error) {
                  console.error('Error saving preview data:', error)
                }
                // Navigate to the preview page
                router.push('/dashboard/cards/preview')
              }}
            >
              Preview Full Card
            </Button>
          </div>
        </div>
      </div>
      
      {/* Customization Options */}
      <div className="col-span-1 lg:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="template">Template</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
          </TabsList>
          
          {/* Template Tab */}
          <TabsContent value="template" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Choose a Template</h3>
              <TemplateSelector 
                selectedTemplate={cardData.template}
                onSelect={(template) => updateCardData("template", template)}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Font Style</h3>
              <FontSelector 
                selectedFont={cardData.font}
                onSelect={(font) => updateCardData("font", font)}
              />
            </div>
          </TabsContent>
          
          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Primary Color</h3>
              <ColorPicker 
                color={cardData.primaryColor}
                onChange={(color) => updateCardData("primaryColor", color)}
                presets={[
                  "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
                  "#ec4899", "#06b6d4", "#84cc16", "#6366f1", "#14b8a6"
                ]}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Secondary Color</h3>
              <ColorPicker 
                color={cardData.secondaryColor}
                onChange={(color) => updateCardData("secondaryColor", color)}
                presets={[
                  "#1e40af", "#b91c1c", "#047857", "#b45309", "#6d28d9",
                  "#be185d", "#0e7490", "#4d7c0f", "#4338ca", "#0f766e"
                ]}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Accent Color</h3>
              <ColorPicker 
                color={cardData.accentColor}
                onChange={(color) => updateCardData("accentColor", color)}
                presets={[
                  "#60a5fa", "#f87171", "#34d399", "#fbbf24", "#a78bfa",
                  "#f472b6", "#22d3ee", "#a3e635", "#818cf8", "#2dd4bf"
                ]}
              />
            </div>
          </TabsContent>
          
          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Card Layout</h3>
              <CardLayoutSelector 
                selectedLayout={cardData.layout}
                onSelect={(layout) => updateCardData("layout", layout)}
              />
            </div>
          </TabsContent>
          
          {/* Background Tab */}
          <TabsContent value="background" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Background Style</h3>
              <BackgroundSelector 
                backgroundType={cardData.backgroundType}
                backgroundColor={cardData.backgroundColor}
                backgroundPattern={cardData.backgroundPattern}
                backgroundImage={cardData.backgroundImage}
                onBackgroundTypeChange={(type) => updateCardData("backgroundType", type)}
                onBackgroundColorChange={(color) => updateCardData("backgroundColor", color)}
                onBackgroundPatternChange={(pattern) => updateCardData("backgroundPattern", pattern)}
                onBackgroundImageChange={(image) => updateCardData("backgroundImage", image)}
              />
            </div>
          </TabsContent>
          
          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Profile Photo</h3>
              <ProfilePhotoUploader 
                profilePhoto={cardData.profilePhoto}
                onUpload={(photo) => updateCardData("profilePhoto", photo)}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Logo</h3>
              <LogoUploader 
                logo={cardData.logo}
                onUpload={(logo) => updateCardData("logo", logo)}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <ContactInfoEditor 
                name={cardData.name}
                title={cardData.title}
                company={cardData.company}
                email={cardData.email}
                phone={cardData.phone}
                website={cardData.website}
                address={cardData.address}
                bio={cardData.bio}
                onChange={(field, value) => updateCardData(field, value)}
              />
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Social Links</h3>
              <SocialLinksEditor 
                socialLinks={cardData.socialLinks}
                onChange={(platform, value) => updateNestedCardData("socialLinks", platform, value)}
              />
            </div>
          </TabsContent>
          
          {/* Effects Tab */}
          <TabsContent value="effects" className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-4">Card Effects</h3>
              <CardEffectsSelector 
                effects={cardData.effects}
                onChange={(effect, value) => updateNestedCardData("effects", effect, value)}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}