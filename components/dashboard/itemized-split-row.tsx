"use client"

import { Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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

interface ItemRowProps {
  item: Item
  users: User[]
  onUpdateItem: (id: string, updates: Partial<Item>) => void
  onToggleUser: (itemId: string, userId: number) => void
  onDeleteItem: (id: string) => void
}

export default function ItemRow({ item, users, onUpdateItem, onToggleUser, onDeleteItem }: ItemRowProps) {
  return (
    <Card className="p-3 rounded-xl border-slate-200">
      <div className="space-y-3">
        {/* Item Name and Price */}
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="text-xs text-slate-500 font-medium">Item Name</label>
            <Input
              value={item.name}
              onChange={(e) => onUpdateItem(item.id, { name: e.target.value })}
              placeholder="e.g., Burger"
              className="mt-1 rounded-lg h-9"
            />
          </div>
          <div className="w-24">
            <label className="text-xs text-slate-500 font-medium">Price</label>
            <div className="flex items-center mt-1 bg-slate-50 rounded-lg px-2 h-9 border border-slate-200">
              <span className="text-slate-600 text-sm">$</span>
              <Input
                type="number"
                value={item.price}
                onChange={(e) => onUpdateItem(item.id, { price: Number.parseFloat(e.target.value) || 0 })}
                placeholder="0.00"
                step="0.01"
                className="border-0 bg-transparent text-sm font-semibold focus:ring-0 p-1"
              />
            </div>
          </div>
          <Button
            onClick={() => onDeleteItem(item.id)}
            variant="ghost"
            size="sm"
            className="text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {/* User Assignment Avatars */}
        <div className="space-y-2">
          <label className="text-xs text-slate-500 font-medium">Assigned to</label>
          <div className="flex flex-wrap gap-2">
            {users.map((user) => (
              <button
                key={user.id}
                onClick={() => onToggleUser(item.id, user.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                  item.assignedUsers.includes(user.id)
                    ? "bg-teal-100 border-2 border-teal-500"
                    : "bg-slate-100 border-2 border-transparent hover:bg-slate-200"
                }`}
              >
                <span className="text-2xl">{user.avatar}</span>
                <span className="text-xs font-medium text-slate-700">{user.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
