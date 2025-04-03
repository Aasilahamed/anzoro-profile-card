import React from "react"
import Image from "next/image"
import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Youtube,
  MapPin
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface CardData {
  template?: string
  layout?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  backgroundColor?: string
  backgroundType?: string
  backgroundPattern?: string | null
  backgroundImage?: string | null
  font?: string
  profilePhoto?: string | null
  logo?: string | null
  name: string
  title: string
  company: string
  email: string
  phone: string
  website: string
  address?: string
  bio: string
  theme?: string
  socialLinks: {
    linkedin: string
    twitter: string
    github: string
    instagram: string
    facebook?: string
    youtube?: string
    tiktok?: string
  }
  effects?: {
    shadow?: string
    rounded?: string
    border?: boolean
    glassmorphism?: boolean
    animation?: string
  }
}

interface CardPreviewProps {
  cardData: CardData
  className?: string
}

export function CardPreview({ cardData, className }: CardPreviewProps) {
  // Backward compatibility for older theme property
  const getThemeClasses = () => {
    // If using the new template system, don't use the old theme classes
    if (cardData.template || cardData.backgroundType) {
      return ""
    }

    switch (cardData.theme) {
      case "dark":
        return "bg-slate-900 text-white"
      case "light":
        return "bg-white text-slate-900 border"
      case "blue":
        return "bg-blue-600 text-white"
      case "green":
        return "bg-green-600 text-white"
      case "purple":
        return "bg-purple-600 text-white"
      default:
        return "bg-slate-50 text-slate-900 border"
    }
  }

  const getInitials = (name: string) => {
    if (!name) return "JD"
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Generate background style based on background type
  const getBackgroundStyle = () => {
    // If using old theme system, return empty object
    if (!cardData.backgroundType && cardData.theme) {
      return {}
    }

    const primaryColor = cardData.primaryColor || "#3b82f6"
    const secondaryColor = cardData.secondaryColor || "#1e40af"
    const backgroundColor = cardData.backgroundColor || "#ffffff"

    switch (cardData.backgroundType) {
      case "solid":
        return { backgroundColor }
      case "gradient":
        return { background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }
      case "pattern":
        return cardData.backgroundPattern
          ? {
              backgroundColor,
              backgroundImage: `url(${cardData.backgroundPattern})`,
              backgroundSize: "cover"
            }
          : { backgroundColor }
      case "image":
        return cardData.backgroundImage
          ? {
              backgroundImage: `url(${cardData.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
          : { backgroundColor }
      default:
        return { backgroundColor }
    }
  }

  // Generate shadow style based on effects
  const getShadowStyle = () => {
    if (!cardData.effects?.shadow) return ""

    switch (cardData.effects.shadow) {
      case "none":
        return ""
      case "small":
        return "shadow-sm"
      case "medium":
        return "shadow-md"
      case "large":
        return "shadow-lg"
      case "xl":
        return "shadow-xl"
      default:
        return "shadow-md"
    }
  }

  // Generate border radius style based on effects
  const getBorderRadiusStyle = () => {
    if (!cardData.effects?.rounded) return ""

    switch (cardData.effects.rounded) {
      case "none":
        return "rounded-none"
      case "small":
        return "rounded-sm"
      case "medium":
        return "rounded-md"
      case "large":
        return "rounded-lg"
      case "xl":
        return "rounded-xl"
      case "full":
        return "rounded-3xl"
      default:
        return "rounded-md"
    }
  }

  // Generate border style
  const getBorderStyle = () => {
    return cardData.effects?.border ? "border border-gray-200 dark:border-gray-800" : ""
  }

  // Generate glassmorphism style
  const getGlassmorphismStyle = () => {
    return cardData.effects?.glassmorphism
      ? "bg-opacity-20 backdrop-blur-lg backdrop-filter"
      : ""
  }

  // Generate animation style
  const getAnimationStyle = () => {
    if (!cardData.effects?.animation) return ""

    switch (cardData.effects.animation) {
      case "none":
        return ""
      case "fade":
        return "animate-fade-in"
      case "slide":
        return "animate-slide-in-bottom"
      case "bounce":
        return "animate-bounce-in"
      case "pulse":
        return "animate-pulse"
      default:
        return ""
    }
  }

  // Generate font style
  const getFontStyle = () => {
    if (!cardData.font) return ""

    switch (cardData.font) {
      case "inter":
        return "font-sans"
      case "serif":
        return "font-serif"
      case "mono":
        return "font-mono"
      case "handwriting":
        return "font-handwriting"
      case "display":
        return "font-display"
      default:
        return "font-sans"
    }
  }

  // If using the new template system, render based on layout
  if (cardData.layout) {
    const primaryColor = cardData.primaryColor || "#3b82f6"
    const secondaryColor = cardData.secondaryColor || "#1e40af"
    const accentColor = cardData.accentColor || "#60a5fa"

    // Render different layouts
    const renderCardContent = () => {
      switch (cardData.layout) {
        case "standard":
          return (
            <div className="flex flex-col items-center text-center p-6 w-full h-full">
              {/* Logo */}
              {cardData.logo && (
                <div className="mb-4">
                  <Image
                    src={cardData.logo}
                    alt="Logo"
                    width={80}
                    height={40}
                    className="h-10 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              )}

              {/* Profile Photo */}
              <div className="mb-4">
                {cardData.profilePhoto ? (
                  <Image
                    src={cardData.profilePhoto}
                    alt={cardData.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-24 h-24 border-2"
                    style={{ borderColor: primaryColor }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      // Show the fallback
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.add('fallback-active')
                      }
                    }}
                  />
                ) : (
                  <div
                    className="rounded-full w-24 h-24 flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {getInitials(cardData.name)}
                  </div>
                )}
              </div>

              {/* Name and Title */}
              <h2 className="text-xl font-bold mb-1" style={{ color: primaryColor }}>{cardData.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cardData.title}</p>
              {cardData.company && <p className="text-sm mb-4">{cardData.company}</p>}

              {/* Contact Info */}
              <div className="flex flex-col gap-2 mb-4 w-full">
                {cardData.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} style={{ color: accentColor }} />
                    <span>{cardData.email}</span>
                  </div>
                )}
                {cardData.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} style={{ color: accentColor }} />
                    <span>{cardData.phone}</span>
                  </div>
                )}
                {cardData.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={16} style={{ color: accentColor }} />
                    <span>{cardData.website}</span>
                  </div>
                )}
                {cardData.address && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} style={{ color: accentColor }} />
                    <span>{cardData.address}</span>
                  </div>
                )}
              </div>

              {/* Bio */}
              {cardData.bio && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cardData.bio}</p>
              )}

              {/* Social Links */}
              <div className="flex gap-3 mt-auto">
                {cardData.socialLinks.linkedin && (
                  <Linkedin size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.twitter && (
                  <Twitter size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.github && (
                  <Github size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.instagram && (
                  <Instagram size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.facebook && (
                  <Facebook size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.youtube && (
                  <Youtube size={20} style={{ color: primaryColor }} />
                )}
              </div>
            </div>
          )
        case "horizontal":
          return (
            <div className="flex flex-row p-6 w-full h-full">
              {/* Left Column - Photo and Logo */}
              <div className="flex flex-col items-center w-1/3">
                {/* Profile Photo */}
                <div className="mb-4">
                  {cardData.profilePhoto ? (
                    <Image
                      src={cardData.profilePhoto}
                      alt={cardData.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-24 h-24 border-2"
                      style={{ borderColor: primaryColor }}
                    />
                  ) : (
                    <div
                      className="rounded-full w-24 h-24 flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {getInitials(cardData.name)}
                    </div>
                  )}
                </div>

                {/* Logo */}
                {cardData.logo && (
                  <div className="mt-auto">
                    <Image
                      src={cardData.logo}
                      alt="Logo"
                      width={80}
                      height={40}
                      className="h-10 object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Right Column - Info */}
              <div className="flex flex-col w-2/3 pl-4">
                {/* Name and Title */}
                <h2 className="text-xl font-bold mb-1" style={{ color: primaryColor }}>{cardData.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cardData.title}</p>
                {cardData.company && <p className="text-sm mb-4">{cardData.company}</p>}

                {/* Contact Info */}
                <div className="flex flex-col gap-2 mb-4">
                  {cardData.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} style={{ color: accentColor }} />
                      <span>{cardData.email}</span>
                    </div>
                  )}
                  {cardData.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={16} style={{ color: accentColor }} />
                      <span>{cardData.phone}</span>
                    </div>
                  )}
                  {cardData.website && (
                    <div className="flex items-center gap-2 text-sm">
                      <Globe size={16} style={{ color: accentColor }} />
                      <span>{cardData.website}</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-auto">
                  {cardData.socialLinks.linkedin && (
                    <Linkedin size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.twitter && (
                    <Twitter size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.github && (
                    <Github size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.instagram && (
                    <Instagram size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.facebook && (
                    <Facebook size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.youtube && (
                    <Youtube size={20} style={{ color: primaryColor }} />
                  )}
                </div>
              </div>
            </div>
          )
        case "minimal":
          return (
            <div className="flex flex-col p-6 w-full h-full">
              {/* Name and Title */}
              <h2 className="text-xl font-bold mb-1" style={{ color: primaryColor }}>{cardData.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cardData.title}</p>

              {/* Contact Info - Minimal */}
              <div className="flex flex-wrap gap-4 mb-4">
                {cardData.email && (
                  <Mail size={18} style={{ color: accentColor }} />
                )}
                {cardData.phone && (
                  <Phone size={18} style={{ color: accentColor }} />
                )}
                {cardData.website && (
                  <Globe size={18} style={{ color: accentColor }} />
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-auto">
                {cardData.socialLinks.linkedin && (
                  <Linkedin size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.twitter && (
                  <Twitter size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.github && (
                  <Github size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.instagram && (
                  <Instagram size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.facebook && (
                  <Facebook size={20} style={{ color: primaryColor }} />
                )}
                {cardData.socialLinks.youtube && (
                  <Youtube size={20} style={{ color: primaryColor }} />
                )}
              </div>
            </div>
          )
        case "creative":
          return (
            <div className="flex flex-col w-full h-full">
              {/* Top Section with Background */}
              <div
                className="h-1/3 w-full flex items-center justify-center"
                style={{ backgroundColor: primaryColor }}
              >
                {cardData.logo && (
                  <Image
                    src={cardData.logo}
                    alt="Logo"
                    width={100}
                    height={50}
                    className="h-12 object-contain"
                  />
                )}
              </div>

              {/* Profile Photo - Overlapping */}
              <div className="relative -mt-10 flex justify-center">
                {cardData.profilePhoto ? (
                  <Image
                    src={cardData.profilePhoto}
                    alt={cardData.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-20 h-20 border-4 border-white dark:border-gray-900"
                  />
                ) : (
                  <div
                    className="rounded-full w-20 h-20 flex items-center justify-center text-white text-xl font-bold border-4 border-white dark:border-gray-900"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    {getInitials(cardData.name)}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-center text-center p-6 pt-2">
                {/* Name and Title */}
                <h2 className="text-xl font-bold mb-1" style={{ color: primaryColor }}>{cardData.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cardData.title}</p>
                {cardData.company && <p className="text-sm mb-4">{cardData.company}</p>}

                {/* Contact Info */}
                <div className="flex flex-col gap-2 mb-4 w-full">
                  {cardData.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} style={{ color: accentColor }} />
                      <span>{cardData.email}</span>
                    </div>
                  )}
                  {cardData.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={16} style={{ color: accentColor }} />
                      <span>{cardData.phone}</span>
                    </div>
                  )}
                  {cardData.website && (
                    <div className="flex items-center gap-2 text-sm">
                      <Globe size={16} style={{ color: accentColor }} />
                      <span>{cardData.website}</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-auto">
                  {cardData.socialLinks.linkedin && (
                    <Linkedin size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.twitter && (
                    <Twitter size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.github && (
                    <Github size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.instagram && (
                    <Instagram size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.facebook && (
                    <Facebook size={20} style={{ color: primaryColor }} />
                  )}
                  {cardData.socialLinks.youtube && (
                    <Youtube size={20} style={{ color: primaryColor }} />
                  )}
                </div>
              </div>
            </div>
          )
        default:
          return null
      }
    }

    return (
      <div className={cn("relative w-full", className)}>
        <div className="aspect-[9/16] w-full max-w-[320px] mx-auto">
          <div
            className={cn(
              "w-full h-full overflow-hidden",
              getFontStyle(),
              getShadowStyle(),
              getBorderRadiusStyle(),
              getBorderStyle(),
              getGlassmorphismStyle(),
              getAnimationStyle()
            )}
            style={getBackgroundStyle()}
          >
            {renderCardContent()}
          </div>
        </div>
      </div>
    )
  }

  // Fallback to the original card preview for backward compatibility
  return (
    <Card className={cn(`w-full max-w-md mx-auto overflow-hidden ${getThemeClasses()}`, className)}>
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={cardData.profilePhoto || ""} alt={cardData.name} />
          <AvatarFallback className="text-lg">{getInitials(cardData.name)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{cardData.name || "Your Name"}</h2>
          <p className="text-sm opacity-80">
            {cardData.title ? `${cardData.title}${cardData.company ? ` at ${cardData.company}` : ""}` : "Job Title"}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {cardData.bio && <p className="mb-4 text-sm">{cardData.bio}</p>}
        <div className="space-y-2">
          {cardData.email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>{cardData.email}</span>
            </div>
          )}
          {cardData.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>{cardData.phone}</span>
            </div>
          )}
          {cardData.website && (
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>{cardData.website}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div className="flex gap-2">
          {cardData.socialLinks.linkedin && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          )}
          {cardData.socialLinks.twitter && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          )}
          {cardData.socialLinks.github && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          )}
          {cardData.socialLinks.instagram && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          )}
        </div>
        <Button size="sm">Connect</Button>
      </CardFooter>
    </Card>
  )
}

