"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import ExpenseList from "@/components/dashboard/expense-list"
import BottomNavigation from "@/components/dashboard/bottom-navigation"
import FloatingActionButton from "@/components/dashboard/floating-action-button"
import BalancesView from "@/components/dashboard/balances-view"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("expenses")

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <DashboardHeader />

      {/* Main Content */}
      <div className="px-4 pt-4">
        {activeTab === "expenses" && <ExpenseList />}
        {activeTab === "balances" && <BalancesView />}
        {activeTab === "settings" && (
          <div className="py-12 text-center text-slate-500">
            <p>Settings view coming soon</p>
          </div>
        )}
      </div>

      {/* FAB */}
      <FloatingActionButton />

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  )
}
