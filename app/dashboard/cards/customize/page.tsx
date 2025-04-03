import { Metadata } from "next"
import { CardCustomizer } from "@/components/card-customizer"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export const metadata: Metadata = {
  title: "Customize Card | Anzoro",
  description: "Customize your digital profile card with Anzoro",
}

export default function CardCustomizePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Customize Your Card"
        text="Design your perfect digital profile card with our customization tools"
      />

      <div className="mt-8">
        <CardCustomizer />
      </div>
    </DashboardShell>
  )
}