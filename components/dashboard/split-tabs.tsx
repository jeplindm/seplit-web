"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SplitTabsProps {
  splitMode: "even" | "personal" | "itemized"
  onSplitModeChange: (mode: "even" | "personal" | "itemized") => void
}

export default function SplitTabs({ splitMode, onSplitModeChange }: SplitTabsProps) {
  return (
    <Tabs value={splitMode} onValueChange={(v) => onSplitModeChange(v as "even" | "personal" | "itemized")}>
      <TabsList className="w-full grid grid-cols-3 rounded-lg bg-slate-100">
        <TabsTrigger value="even" className="rounded-md">
          Split Evenly
        </TabsTrigger>
        <TabsTrigger value="personal" className="rounded-md">
          Split Personally
        </TabsTrigger>
        <TabsTrigger value="itemized" className="rounded-md">
          Itemized
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
