"use client"

import React from "react"
import Link from "next/link"
import { Menu, Nfc, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExitButton } from "@/components/exit-button"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

interface MobileDashboardHeaderProps {
  className?: string
}

export function MobileDashboardHeader({ className }: MobileDashboardHeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:hidden",
      className
    )}>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => {
            // This will be handled by the Sheet component from the sidebar
            const event = new CustomEvent("toggle-sidebar")
            window.dispatchEvent(event)
          }}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Nfc className="h-5 w-5" />
          <span>Anzoro</span>
        </Link>
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New message</DropdownMenuItem>
            <DropdownMenuItem>Card shared</DropdownMenuItem>
            <DropdownMenuItem>Profile viewed</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <UserProfileDropdown />

        <ExitButton
          backUrl="/"
          tooltip="Exit Dashboard"
          className="h-9 w-9"
        />
      </div>
    </header>
  )
}