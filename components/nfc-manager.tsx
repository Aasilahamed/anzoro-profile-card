"use client"

import { useState } from "react"
import { Copy, Download, Loader2, Nfc, QrCode, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Sample data for NFC links
const nfcLinks = [
  {
    id: "1",
    cardName: "Business Card",
    url: "https://profilecard.com/john-doe/business",
    scans: 56,
    lastScanned: "2 days ago",
    status: "Active",
  },
  {
    id: "2",
    cardName: "Personal Portfolio",
    url: "https://profilecard.com/john-doe/personal",
    scans: 32,
    lastScanned: "1 week ago",
    status: "Active",
  },
  {
    id: "3",
    cardName: "Conference Card",
    url: "https://profilecard.com/john-doe/conference",
    scans: 12,
    lastScanned: "3 weeks ago",
    status: "Inactive",
  },
]

export function NfcManager() {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedCard, setSelectedCard] = useState("")

  const handleGenerateLink = () => {
    if (!selectedCard) {
      toast({
        title: "Error",
        description: "Please select a profile card",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "Success",
        description: "NFC link generated successfully",
      })
    }, 1500)
  }

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Copied",
      description: "Link copied to clipboard",
    })
  }

  return (
    <Tabs defaultValue="links" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="links">My NFC Links</TabsTrigger>
        <TabsTrigger value="generate">Generate New Link</TabsTrigger>
      </TabsList>
      <TabsContent value="links" className="space-y-4 pt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {nfcLinks.map((link) => (
            <Card key={link.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{link.cardName}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <span className={link.status === "Active" ? "text-green-500" : "text-gray-500"}>●</span>
                  {link.status}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between gap-2 rounded-md border p-2 text-sm">
                  <span className="truncate">{link.url}</span>
                  <Button variant="ghost" size="icon" onClick={() => handleCopyLink(link.url)}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Scans</p>
                    <p className="text-xl font-bold">{link.scans}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Scanned</p>
                    <p>{link.lastScanned}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <QrCode className="mr-2 h-4 w-4" />
                  QR Code
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="generate" className="space-y-4 pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Generate NFC Link</CardTitle>
            <CardDescription>Create a new NFC link for your profile card</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="card">Select Profile Card</Label>
              <Select value={selectedCard} onValueChange={setSelectedCard}>
                <SelectTrigger id="card">
                  <SelectValue placeholder="Select a profile card" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Business Card</SelectItem>
                  <SelectItem value="2">Personal Portfolio</SelectItem>
                  <SelectItem value="3">Conference Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="custom-url">Custom URL Suffix (Optional)</Label>
              <Input id="custom-url" placeholder="e.g., my-business-card" />
              <p className="text-xs text-muted-foreground">
                Your link will be: https://profilecard.com/john-doe/
                <span className="font-medium">custom-suffix</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" onClick={handleGenerateLink} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Nfc className="mr-2 h-4 w-4" />
                  Generate NFC Link
                </>
              )}
            </Button>
            <div className="flex w-full items-center justify-between rounded-md border p-2 text-sm">
              <span className="text-muted-foreground">Your generated link will appear here</span>
              <Button variant="ghost" size="icon" disabled>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              <Button variant="outline" disabled={isGenerating}>
                <QrCode className="mr-2 h-4 w-4" />
                Generate QR
              </Button>
              <Button variant="outline" disabled={isGenerating}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

