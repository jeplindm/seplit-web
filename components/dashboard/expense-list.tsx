"use client"

import type React from "react"

import { Utensils, Bus, Coffee, Bed, Compass } from "lucide-react"
import ExpenseCard from "./expense-card"

interface Expense {
  id: string
  date: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  payer: string
  amount: string
}

const mockExpenses: Expense[] = [
  {
    id: "1",
    date: "Today",
    icon: Utensils,
    title: "Dinner at Luigi's",
    payer: "Sarah",
    amount: "78.50",
  },
  {
    id: "2",
    date: "Yesterday",
    icon: Bus,
    title: "Scooter Rental",
    payer: "Mike",
    amount: "45.00",
  },
  {
    id: "3",
    date: "Nov 20",
    icon: Coffee,
    title: "Morning Coffee",
    payer: "You",
    amount: "12.30",
  },
  {
    id: "4",
    date: "Nov 19",
    icon: Bed,
    title: "Villa Accommodation",
    payer: "Sarah",
    amount: "450.00",
  },
  {
    id: "5",
    date: "Nov 18",
    icon: Compass,
    title: "Guided Tour",
    payer: "Mike",
    amount: "189.50",
  },
  {
    id: "6",
    date: "Nov 17",
    icon: Utensils,
    title: "Lunch at Beach",
    payer: "You",
    amount: "34.20",
  },
]

export default function ExpenseList() {
  return (
    <div className="space-y-2">
      {mockExpenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          date={expense.date}
          icon={expense.icon}
          title={expense.title}
          payer={expense.payer}
          amount={expense.amount}
        />
      ))}
    </div>
  )
}
