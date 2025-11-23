import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { ArrowRightLeft } from 'lucide-react'

interface BalanceCardProps {
  balance: {
    from: string
    to: string
    amount: number
  }
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  const isMe = balance.from === 'You'

  return (
    <Card className="border-slate-100 shadow-sm">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
            <ArrowRightLeft className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <span className={isMe ? 'font-bold text-red-500' : 'font-medium'}>
              {balance.from}
            </span>
            <span className="text-slate-400 px-1">owes</span>
            <span
              className={
                balance.to === 'You' ? 'font-bold text-teal-600' : 'font-medium'
              }
            >
              {balance.to}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="font-bold text-slate-800">
            ${balance.amount.toFixed(2)}
          </span>
          {isMe && (
            <Badge
              variant="outline"
              className="text-[10px] h-5 px-2 cursor-pointer hover:bg-teal-50 text-teal-600 border-teal-200"
            >
              Settle
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
