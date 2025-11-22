"use client"

import { Plus } from "lucide-react"
import { useState } from "react"
import AddExpenseDrawer from "./add-expense-drawer"

export default function FloatingActionButton() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-24 right-4 w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
        aria-label="Add new expense"
      >
        <Plus className="w-6 h-6 text-white font-bold" />
      </button>
      <AddExpenseDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  )
}
