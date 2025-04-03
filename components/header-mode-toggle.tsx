"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeSwitch } from "@/components/ui/theme-switch"

export function HeaderModeToggle() {
  return (
    <ThemeSwitch aria-label="Toggle dark mode" />
  )
}