"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TaxInput from "./tax-input"
import TipToggle from "./tip-toggle"
import TotalBar from "./total-bar"
import SplitTabs from "./split-tabs"
import UserSplitList from "./user-split-list"
import ItemizedSplit from "./itemized-split"

interface AddExpenseDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddExpenseDrawer({ open, onOpenChange }: AddExpenseDrawerProps) {
  const [subtotal, setSubtotal] = useState("")
  const [description, setDescription] = useState("")
  const [taxPercent, setTaxPercent] = useState("")
  const [tipType, setTipType] = useState<"percent" | "fixed">("percent")
  const [tipValue, setTipValue] = useState("")
  const [splitMode, setSplitMode] = useState<"even" | "personal" | "itemized">("even")

  // Calculate amounts
  const subtotalNum = Number.parseFloat(subtotal) || 0
  const taxAmount = subtotalNum * ((Number.parseFloat(taxPercent) || 0) / 100)
  const tipAmount =
    tipType === "percent" ? subtotalNum * ((Number.parseFloat(tipValue) || 0) / 100) : Number.parseFloat(tipValue) || 0
  const grandTotal = subtotalNum + taxAmount + tipAmount

  const mockUsers = [
    { id: 1, name: "Sarah", avatar: "👩" },
    { id: 2, name: "John", avatar: "👨" },
    { id: 3, name: "Emma", avatar: "👩‍🦰" },
  ]

  const handleSave = () => {
    console.log("[v0] Saving expense:", {
      subtotal: subtotalNum,
      description,
      tax: taxAmount,
      tip: tipAmount,
      grandTotal,
      splitMode,
    })
    onOpenChange(false)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle>Add Expense</DrawerTitle>
          <DrawerClose asChild>
            <button className="rounded-md p-1 hover:bg-slate-100">
              <X className="w-5 h-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4 pb-4 space-y-6">
          {/* Main Input Section */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="subtotal" className="text-slate-700 font-medium">
                Subtotal
              </Label>
              <Input
                id="subtotal"
                type="number"
                placeholder="0.00"
                value={subtotal}
                onChange={(e) => setSubtotal(e.target.value)}
                className="text-lg font-bold mt-2 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-slate-700 font-medium">
                Description
              </Label>
              <Input
                id="description"
                type="text"
                placeholder="e.g., Sushi Night"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 rounded-xl"
              />
            </div>
          </div>

          {/* Tax & Tip Section */}
          <div className="space-y-4">
            <TaxInput taxPercent={taxPercent} onTaxPercentChange={setTaxPercent} taxAmount={taxAmount} />
            <TipToggle
              tipType={tipType}
              onTipTypeChange={setTipType}
              tipValue={tipValue}
              onTipValueChange={setTipValue}
            />
          </div>

          {/* Total Bar */}
          <TotalBar subtotal={subtotalNum} tax={taxAmount} tip={tipAmount} grandTotal={grandTotal} />

          {/* Split Context */}
          <div className="space-y-4">
            <SplitTabs splitMode={splitMode} onSplitModeChange={setSplitMode} />
            <p className="text-xs text-slate-500 italic">
              Tax and tip will be distributed proportionally to each person's share.
            </p>
          </div>

          {/* User List */}
          {splitMode === "itemized" ? (
            <ItemizedSplit users={mockUsers} subtotal={subtotalNum} taxAmount={taxAmount} tipAmount={tipAmount} />
          ) : (
            <UserSplitList users={mockUsers} subtotal={subtotalNum} splitMode={splitMode} />
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1 rounded-lg bg-transparent">
                Cancel
              </Button>
            </DrawerClose>
            <Button onClick={handleSave} className="flex-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white">
              Add Expense
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
