'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { Expense, Group, LocalDB, Member } from '@/lib/storage'

interface GroupContextType {
  group: Group | null
  members: Member[]
  expenses: Expense[]
  isLoading: boolean

  // Actions
  addMember: (name: string) => void
  removeMember: (id: string) => void
  addExpense: (expense: Omit<Expense, 'id' | 'groupId'>) => void
  refreshData: () => void
}

const GroupContext = createContext<GroupContextType | undefined>(undefined)

export function GroupProvider({
  children,
  groupId
}: {
  children: ReactNode
  groupId: string
}) {
  const [group, setGroup] = useState<Group | null>(null)
  const [members, setMembers] = useState<Member[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load Data
  const refreshData = () => {
    const groupData = LocalDB.getGroup(groupId)
    const memberData = LocalDB.getMembers(groupId)

    if (groupData) setGroup(groupData)
    setMembers(memberData)

    setIsLoading(false)
  }

  useEffect(() => {
    refreshData()
  }, [groupId])

  const addMember = (name: string) => {
    LocalDB.addMember(groupId, name)
    refreshData()
  }

  const removeMember = (id: string) => {
    LocalDB.removeMember(id)
    const newMembers = members.filter((m: Member) => m.id !== id)
    setMembers(newMembers)
  }

  const addExpense = (expenseData: any) => {
    // LocalDB.addExpense(groupId, expenseData)
    refreshData()
  }

  return (
    <GroupContext.Provider
      value={{
        group,
        members,
        expenses,
        isLoading,
        addMember,
        removeMember,
        addExpense,
        refreshData
      }}
    >
      {children}
    </GroupContext.Provider>
  )
}

export function useGroup() {
  const context = useContext(GroupContext)
  if (context === undefined) {
    throw new Error('useGroup must be used within a GroupProvider')
  }
  return context
}
