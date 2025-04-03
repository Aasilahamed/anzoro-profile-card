"use client"

import React, { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  presets?: string[]
  className?: string
}

export function ColorPicker({ 
  color, 
  onChange, 
  presets = [], 
  className 
}: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(color)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    
    // Validate if it's a valid hex color
    if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) {
      onChange(value)
    }
  }
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-between", className)}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
            <span>{color}</span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Tabs defaultValue="solid">
          <TabsList className="w-full">
            <TabsTrigger value="solid" className="flex-1">Solid</TabsTrigger>
            <TabsTrigger value="presets" className="flex-1">Presets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="solid" className="space-y-4 py-4">
            <div 
              className="h-32 rounded-md border"
              style={{ backgroundColor: color }}
            />
            <div className="flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1"
                placeholder="#000000"
              />
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  onChange(e.target.value)
                  setInputValue(e.target.value)
                }}
                className="h-10 w-10 cursor-pointer rounded-md border-0"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="presets" className="py-4">
            <div className="grid grid-cols-5 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 flex items-center justify-center",
                    color === preset ? "border-primary" : "border-transparent"
                  )}
                  style={{ backgroundColor: preset }}
                  onClick={() => {
                    onChange(preset)
                    setInputValue(preset)
                  }}
                >
                  {color === preset && <Check className="h-4 w-4 text-white" />}
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}