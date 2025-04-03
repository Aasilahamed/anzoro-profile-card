import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for profile cards
const profileCards = [
  {
    id: "1",
    name: "Business Card",
    views: 245,
    scans: 56,
    lastUpdated: "2 days ago",
    status: "Active",
  },
  {
    id: "2",
    name: "Personal Portfolio",
    views: 189,
    scans: 32,
    lastUpdated: "1 week ago",
    status: "Active",
  },
  {
    id: "3",
    name: "Conference Card",
    views: 78,
    scans: 12,
    lastUpdated: "3 weeks ago",
    status: "Inactive",
  },
]

export function ProfileCardList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {profileCards.map((card) => (
        <Card key={card.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{card.name}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href={`/dashboard/cards/${card.id}`} className="flex w-full items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Status:{" "}
              <span className={card.status === "Active" ? "text-green-500" : "text-gray-500"}>{card.status}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Views</p>
                <p className="text-xl font-bold">{card.views}</p>
              </div>
              <div>
                <p className="text-muted-foreground">NFC Scans</p>
                <p className="text-xl font-bold">{card.scans}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">Last updated: {card.lastUpdated}</p>
          </CardFooter>
        </Card>
      ))}
      <Card className="flex h-full flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-primary/10 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </div>
          <CardTitle className="text-xl">Create New Card</CardTitle>
          <CardDescription className="text-center">
            Create a new profile card to share with your network.
          </CardDescription>
          <div className="flex flex-col gap-2 w-full">
            <Link href="/dashboard/cards/new">
              <Button className="w-full">Create Simple Card</Button>
            </Link>
            <Link href="/dashboard/cards/customize">
              <Button variant="outline" className="w-full">Create Custom Card</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

