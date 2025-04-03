import type React from "react"
import { Metadata } from "next"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MobileDashboardHeader } from "@/components/mobile-dashboard-header"

export const metadata: Metadata = {
  title: "Dashboard | Anzoro",
  description: "Manage your digital profile cards with Anzoro",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <MobileDashboardHeader />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 p-6 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

