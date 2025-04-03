"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ExitButtonProps {
  className?: string
  backUrl?: string
  tooltip?: string
}

export function ExitButton({ 
  className, 
  backUrl = "/", 
  tooltip = "Exit" 
}: ExitButtonProps) {
  const router = useRouter()
  
  const handleExit = () => {
    if (backUrl) {
      router.push(backUrl)
    } else {
      router.back()
    }
  }
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleExit}
            className={cn("h-8 w-8", className)}
            aria-label={tooltip}
          >
            <X className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}