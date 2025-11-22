"use client"

import { Card } from "@/components/ui/card"

interface ItemizedSummaryProps {
  itemsTotal: number
  taxAmount: number
  tipAmount: number
  grandTotal: number
}

export default function ItemizedSummary({ itemsTotal, taxAmount, tipAmount, grandTotal }: ItemizedSummaryProps) {
  return (
    <Card className="fixed bottom-20 left-0 right-0 mx-4 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Items Total:</span>
          <span className="font-medium text-slate-900">${itemsTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Tax (10%):</span>
          <span className="font-medium text-slate-900">${taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Tip:</span>
          <span className="font-medium text-slate-900">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="border-t border-teal-200 pt-2 flex justify-between">
          <span className="font-semibold text-slate-900">Total to Split:</span>
          <span className="text-xl font-bold text-teal-600">${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  )
}
