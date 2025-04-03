"use client"

import React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/use-sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarCloseButtonProps {
  className?: string
}

export function SidebarCloseButton({ className }: SidebarCloseButtonProps) {
  const { toggleSidebar } = useSidebar()
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn("h-8 w-8", className)}
            aria-label="Close Sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Close Sidebar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}