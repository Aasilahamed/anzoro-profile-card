import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ProfileCardList } from "@/components/profile-card-list"

export default function CardsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Profile Cards" text="Create and manage your profile cards.">
        <Link href="/dashboard/cards/customize">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Custom Card
          </Button>
        </Link>
      </DashboardHeader>
      <ProfileCardList />
    </DashboardShell>
  )
}

