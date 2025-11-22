"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface TaxInputProps {
  taxPercent: string
  onTaxPercentChange: (value: string) => void
  taxAmount: number
}

export default function TaxInput({ taxPercent, onTaxPercentChange, taxAmount }: TaxInputProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="tax-tip">
        <AccordionTrigger className="hover:no-underline">
          <span className="font-medium text-slate-700">Add Tax & Tip +</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tax-percent" className="text-sm text-slate-600">
                  Tax (%)
                </Label>
                <Input
                  id="tax-percent"
                  type="number"
                  placeholder="0"
                  value={taxPercent}
                  onChange={(e) => onTaxPercentChange(e.target.value)}
                  className="mt-2 rounded-lg"
                />
              </div>
              <div>
                <Label className="text-sm text-slate-600">Tax Amount</Label>
                <div className="mt-2 p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-700">
                  ${taxAmount.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
