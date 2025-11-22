"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import ItemRow from "./itemized-split-row"
import ItemizedSummary from "./itemized-summary"

interface User {
  id: number
  name: string
  avatar: string
}

interface Item {
  id: string
  name: string
  price: number
  assignedUsers: number[]
}

interface ItemizedSplitProps {
  users: User[]
  subtotal: number
  taxAmount: number
  tipAmount: number
}

export default function ItemizedSplit({ users, subtotal, taxAmount, tipAmount }: ItemizedSplitProps) {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Burger", price: 15, assignedUsers: [1] },
    { id: "2", name: "Salad", price: 12, assignedUsers: [2] },
    { id: "3", name: "Drinks", price: 8, assignedUsers: [1, 2, 3] },
  ])

  const addItem = () => {
    const newItem: Item = {
      id: Date.now().toString(),
      name: "",
      price: 0,
      assignedUsers: [],
    }
    setItems([...items, newItem])
  }

  const updateItem = (id: string, updates: Partial<Item>) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...updates } : item)))
  }

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const toggleUserAssignment = (itemId: string, userId: number) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          const newAssigned = item.assignedUsers.includes(userId)
            ? item.assignedUsers.filter((id) => id !== userId)
            : [...item.assignedUsers, userId]
          return { ...item, assignedUsers: newAssigned }
        }
        return item
      }),
    )
  }

  const itemsTotal = items.reduce((sum, item) => sum + item.price, 0)
  const grandTotal = itemsTotal + taxAmount + tipAmount

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Assign Items</h3>
        <Button
          onClick={addItem}
          size="sm"
          variant="outline"
          className="gap-1 rounded-lg border-teal-200 hover:bg-teal-50 bg-transparent"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {items.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            users={users}
            onUpdateItem={updateItem}
            onToggleUser={toggleUserAssignment}
            onDeleteItem={deleteItem}
          />
        ))}
      </div>

      {/* Summary Footer */}
      <ItemizedSummary itemsTotal={itemsTotal} taxAmount={taxAmount} tipAmount={tipAmount} grandTotal={grandTotal} />
    </div>
  )
}
