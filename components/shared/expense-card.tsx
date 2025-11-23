import { Card } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface ExpenseCardProps {
  expense: {
    id: number
    title: string
    payer: string
    date: string
    icon: LucideIcon
    amount: string
  }
}

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  return (
    <Card className="p-4 mb-3 border-slate-200 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="p-2 bg-teal-50 rounded-lg">
          <expense.icon className="w-5 h-5 text-teal-600" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-semibold text-slate-900 truncate">
              {expense.title}
            </h3>
            <p className="text-xs text-slate-500">{expense.date}</p>
          </div>
          <p className="text-xs text-slate-600 mt-1">Paid by {expense.payer}</p>
        </div>

        {/* Amount */}
        <p className="text-sm font-bold text-slate-900 text-right">
          ${expense.amount}
        </p>
      </div>
    </Card>
  )
}
