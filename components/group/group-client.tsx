'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'

import GroupHeader from '@/components/group/group-header'
import ExpenseCard from '@/components/shared/expense-card'
import BalanceCard from '@/components/shared/balance-card'

import { Utensils, AlertTriangle } from 'lucide-react'

const MOCK_EXPENSES = [
  {
    id: 1,
    title: "Dinner at Luigi's",
    payer: 'Sarah',
    date: 'Today',
    icon: Utensils,
    amount: '78.50'
  }
  // {
  //   id: 2,
  //   title: 'Uber to Hotel',
  //   payer: 'Bob',
  //   amount: 32.0,
  //   date: 'Yesterday',
  //   category: 'transport'
  // },
  // {
  //   id: 3,
  //   title: 'Beers',
  //   payer: 'You',
  //   amount: 45.0,
  //   date: 'Yesterday',
  //   category: 'food'
  // }
]

const MOCK_BALANCES = [
  { id: 1, from: 'Bob', to: 'Alice', amount: 15.5 },
  { id: 2, from: 'You', to: 'Alice', amount: 42.0 }
]

export default function GroupClient() {
  const [isGuest, setIsGuest] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('seplit_current_user')
    if (user && JSON.parse(user)?.isGuest) {
      setIsGuest(true)
    }
  }, [])

  return (
    <>
      <GroupHeader />

      {isGuest && (
        <Alert className="rounded-none border-x-0 border-t-0 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-700 text-xs flex justify-between items-center w-full">
            <span>Guest Mode. Sign up to save data.</span>
            <span className="font-bold underline cursor-pointer">Sign Up</span>
          </AlertDescription>
        </Alert>
      )}

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

      <div className="px-4">
        <Tabs defaultValue="expenses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="balances">Balances</TabsTrigger>
          </TabsList>

          {/* TAB A: EXPENSES LIST */}
          <TabsContent value="expenses" className="space-y-3">
            {MOCK_EXPENSES.map((expense) => (
              <ExpenseCard key={expense.id} expense={expense} />
            ))}
            <div className="h-8" /> {/* Spacer */}
          </TabsContent>

          {/* TAB B: BALANCES */}
          <TabsContent value="balances" className="space-y-3">
            {MOCK_BALANCES.map((balance) => (
              <BalanceCard key={balance.id} balance={balance} />
            ))}
            {MOCK_BALANCES.length === 0 && (
              <div className="text-center text-slate-400 py-10">
                All settled up! 🎉
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
