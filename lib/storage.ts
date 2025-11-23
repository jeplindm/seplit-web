export interface User {
  id: string
  name: string
  isGuest: boolean
}

export interface Group {
  id: string
  name: string
  createdBy: string
  createdAt: number
}

export interface Member {
  id: string
  groupId: string
  name: string
  isMe: boolean
}

export interface Expense {
  id: string
  groupId: string
  title: string
  amount: number
  payerId: string
  date: string
}

const KEYS = {
  USER: 'seplit_user',
  GROUPS: 'seplit_groups',
  MEMBERS: 'seplit_members',
  EXPENSES: 'seplit_expenses'
}

export const LocalDB = {
  getUser: (): User | null => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(KEYS.USER)
    return stored ? JSON.parse(stored) : null
  },

  initSession: (name: string): User => {
    const user: User = { id: crypto.randomUUID(), name, isGuest: true }
    localStorage.setItem(KEYS.USER, JSON.stringify(user))
    return user
  },

  createGroup: (groupName: string, creator: User): string => {
    const groupId =
      groupName.toLowerCase().replace(/\s+/g, '-') +
      +'-' +
      Math.random().toString(36).substr(2, 4)

    const newGroup: Group = {
      id: groupId,
      name: groupName,
      createdBy: creator.id,
      createdAt: Date.now()
    }
    const groups = JSON.parse(localStorage.getItem(KEYS.GROUPS) || '[]')
    groups.push(newGroup)
    localStorage.setItem(KEYS.GROUPS, JSON.stringify(groups))

    LocalDB.addMember(groupId, creator.name, true)

    return groupId
  },

  getGroup: (groupId: string): Group | undefined => {
    const groups = JSON.parse(localStorage.getItem(KEYS.GROUPS) || '[]')
    const res = groups.find((g: Group) => g.id === groupId)
    return res
  },

  getMembers: (groupId: string): Member[] => {
    const members = JSON.parse(localStorage.getItem(KEYS.MEMBERS) || '[]')
    return members.filter((m: Member) => m.groupId === groupId)
  },

  addMember: (groupId: string, name: string, isMe: boolean = false) => {
    const newMember: Member = {
      id: crypto.randomUUID(),
      groupId,
      name,
      isMe
    }
    const members = JSON.parse(localStorage.getItem(KEYS.MEMBERS) || '[]')
    members.push(newMember)
    localStorage.setItem(KEYS.MEMBERS, JSON.stringify(members))
    return newMember
  },

  removeMember: (id: string): Member[] => {
    const members = JSON.parse(localStorage.getItem(KEYS.MEMBERS) || '[]')
    const updatedMembers = members.filter((m: Member) => m.id !== id)
    localStorage.setItem(KEYS.MEMBERS, JSON.stringify(updatedMembers))
    return updatedMembers
  }
}
