"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

interface DebtRelation {
  id: string
  from: string
  to: string
  amount: number
  fromAvatar: string
  toAvatar: string
}

export default function BalancesView() {
  // Mock data: who owes whom
  const debts: DebtRelation[] = [
    {
      id: "1",
      from: "You",
      to: "Alice",
      amount: 45.0,
      fromAvatar: "JD",
      toAvatar: "A",
    },
    {
      id: "2",
      from: "Bob",
      to: "You",
      amount: 32.5,
      fromAvatar: "B",
      toAvatar: "JD",
    },
    {
      id: "3",
      from: "You",
      to: "Charlie",
      amount: 18.75,
      fromAvatar: "JD",
      toAvatar: "C",
    },
    {
      id: "4",
      from: "Diana",
      to: "You",
      amount: 56.0,
      fromAvatar: "D",
      toAvatar: "JD",
    },
  ]

  return (
    <div className="space-y-4">
      {debts.map((debt) => {
        const isYouOwing = debt.from === "You"

        return (
          <Card key={debt.id} className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 flex items-center justify-between">
              {/* Left: Avatars and Text */}
              <div className="flex items-center gap-3">
                {/* From Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                    isYouOwing ? "bg-teal-500" : "bg-emerald-500"
                  }`}
                >
                  {debt.fromAvatar}
                </div>

                {/* Arrow and Text */}
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-900">
                    {debt.from} owes {debt.to}
                  </p>
                  <div
                    className={`text-sm font-semibold flex items-center gap-1 ${
                      isYouOwing ? "text-red-600" : "text-emerald-600"
                    }`}
                  >
                    {isYouOwing ? (
                      <>
                        <TrendingDown className="w-4 h-4" />${debt.amount.toFixed(2)}
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-4 h-4" />${debt.amount.toFixed(2)}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* To Avatar and Button */}
              <div className="flex flex-col items-end gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-cyan-500">
                  {debt.toAvatar}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-200 text-teal-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 text-xs bg-transparent"
                >
                  Settle Up
                </Button>
              </div>
            </div>
          </Card>
        )
      })}

      {/* Summary Section */}
      <Card className="border border-slate-200 bg-white shadow-sm mt-6">
        <div className="p-4 space-y-2">
          <p className="text-sm font-medium text-slate-700">Summary</p>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">You owe:</span>
            <span className="font-semibold text-red-600">$63.75</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">You're owed:</span>
            <span className="font-semibold text-emerald-600">$88.50</span>
          </div>
          <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between text-sm">
            <span className="font-medium text-slate-900">Net balance:</span>
            <span className="font-bold text-emerald-600">+$24.75</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
