"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CardEditor } from "@/components/card-editor"
import { CardPreview } from "@/components/card-preview"

export default function NewCardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [cardData, setCardData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    bio: "",
    theme: "default",
    socialLinks: {
      linkedin: "",
      twitter: "",
      github: "",
      instagram: "",
    },
  })

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/cards")
    }, 1500)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Create New Card" text="Design your new profile card.">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/cards">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </Link>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Card
          </Button>
        </div>
      </DashboardHeader>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <CardEditor cardData={cardData} setCardData={setCardData} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-medium">Preview</h3>
            <CardPreview cardData={cardData} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

