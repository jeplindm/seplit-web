import { Input } from "@/components/ui/input"

interface User {
  id: number
  name: string
  avatar: string
}

interface UserSplitListProps {
  users: User[]
  subtotal: number
  splitMode: "even" | "personal"
}

export default function UserSplitList({ users, subtotal, splitMode }: UserSplitListProps) {
  const evenAmount = users.length > 0 ? subtotal / users.length : 0

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-slate-700">Split among</h3>
      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <span className="text-2xl">{user.avatar}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700">{user.name}</p>
            </div>
            {splitMode === "even" ? (
              <div className="text-sm font-medium text-teal-600">${evenAmount.toFixed(2)}</div>
            ) : (
              <Input
                type="number"
                placeholder="0.00"
                defaultValue={evenAmount.toFixed(2)}
                className="w-24 h-8 text-right text-sm rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
