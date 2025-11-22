import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ExpenseCardProps {
  date: string
  icon: LucideIcon
  title: string
  payer: string
  amount: string
}

export default function ExpenseCard({ date, icon: Icon, title, payer, amount }: ExpenseCardProps) {
  return (
    <Card className="p-4 mb-3 border-slate-200 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="p-2 bg-teal-50 rounded-lg">
          <Icon className="w-5 h-5 text-teal-600" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-semibold text-slate-900 truncate">{title}</h3>
            <p className="text-xs text-slate-500">{date}</p>
          </div>
          <p className="text-xs text-slate-600 mt-1">Paid by {payer}</p>
        </div>

        {/* Amount */}
        <p className="text-sm font-bold text-slate-900 text-right">${amount}</p>
      </div>
    </Card>
  )
}
