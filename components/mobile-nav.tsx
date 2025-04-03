"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CreditCard, Nfc, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const pathname = usePathname()
  
  return (
    <div className={cn(
      "fixed bottom-0 left-0 z-50 w-full border-t bg-background md:hidden",
      className
    )}>
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-6">
        <Link
          href="/dashboard"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/dashboard" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-xs">Dashboard</span>
        </Link>
        
        <Link
          href="/dashboard/cards"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname.startsWith("/dashboard/cards") 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <CreditCard className="h-5 w-5" />
          <span className="text-xs">Cards</span>
        </Link>
        
        <Link
          href="/dashboard/nfc"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/dashboard/nfc" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Nfc className="h-5 w-5" />
          <span className="text-xs">NFC</span>
        </Link>
        
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/dashboard/settings" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs">Settings</span>
        </Link>
        
        <Link
          href="/profile"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/profile" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  )
}