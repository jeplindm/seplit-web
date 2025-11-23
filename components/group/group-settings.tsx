'use-client'

import { useState } from 'react'

import { useGroup } from '@/app/context/group-context'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { Settings, Trash2, UserPlus } from 'lucide-react'

export default function GroupSettings() {
  const { group, members, addMember, removeMember } = useGroup()

  const [newMemberName, setNewMemberName] = useState('')

  const handleAddMember = () => {
    if (!newMemberName.trim()) return
    addMember(newMemberName) // Calls the Context function
    setNewMemberName('')
  }

  const handleRemoveMember = (id: string) => {
    removeMember(id)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 flex items-center gap-2 hover:bg-slate-100"
        >
          <span className="font-bold text-lg text-slate-800">
            {group?.name}
          </span>
          <Settings className="w-4 h-4 text-slate-400" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85%] sm:max-w-[340px]">
        <SheetHeader className="text-left mb-6">Group Settings</SheetHeader>

        <div className="space-y-4 mb-8 px-2">
          <Label className="text-sm font-medium text-slate-500">
            Group Name
          </Label>
          <Input defaultValue="Bali Trip 2024" />
        </div>

        <div className="space-y-3 px-2">
          <Label className="text-sm font-medium text-slate-500">Members</Label>
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 bg-teal-100 text-teal-700">
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700">
                  {member.name} {member.isMe && '(You)'}
                </span>
              </div>
              {!member.isMe && (
                <Button
                  onClick={() => handleRemoveMember(member.id)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-300 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
            <Input
              placeholder="Add person (e.g. Sarah)"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddMember()}
              className="h-10"
            />
            <Button
              onClick={handleAddMember}
              size="icon"
              className="h-10 w-10 bg-teal-600 hover:bg-teal-700"
            >
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
