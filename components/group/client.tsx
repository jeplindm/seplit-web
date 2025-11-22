import GroupHeader from '@/components/group/header'

import { Card, CardContent } from '@/components/ui/card'

export default function GroupClient() {
  return (
    <>
      <GroupHeader />

      <div className="p-4">
        <Card className="bg-linear-to-br from-teal-500 to-cyan-600 border-none text-white shadow-lg">
          <CardContent className="p-6 text-center space-y-1">
            <p className="text-teal-100 text-sm font-medium">Total you owe</p>
            <div className="text-4xl font-bold tracking-tight">$42.00</div>
            <p className="text-xs text-teal-100/80 pt-2">
              Total Group Spend: $201.50
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
