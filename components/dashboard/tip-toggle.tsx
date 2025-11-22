"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TipToggleProps {
  tipType: "percent" | "fixed"
  onTipTypeChange: (type: "percent" | "fixed") => void
  tipValue: string
  onTipValueChange: (value: string) => void
}

export default function TipToggle({ tipType, onTipTypeChange, tipValue, onTipValueChange }: TipToggleProps) {
  return (
    <div className="space-y-3">
      <Label className="text-slate-700 font-medium">Tip / Service</Label>
      <div className="flex gap-2">
        <button
          onClick={() => onTipTypeChange("percent")}
          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
            tipType === "percent"
              ? "bg-teal-100 text-teal-700 border border-teal-300"
              : "bg-slate-100 text-slate-600 border border-slate-200"
          }`}
        >
          Percent
        </button>
        <button
          onClick={() => onTipTypeChange("fixed")}
          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
            tipType === "fixed"
              ? "bg-teal-100 text-teal-700 border border-teal-300"
              : "bg-slate-100 text-slate-600 border border-slate-200"
          }`}
        >
          Fixed Amount
        </button>
      </div>
      <Input
        type="number"
        placeholder={tipType === "percent" ? "0" : "0.00"}
        value={tipValue}
        onChange={(e) => onTipValueChange(e.target.value)}
        className="rounded-lg"
      />
    </div>
  )
}
