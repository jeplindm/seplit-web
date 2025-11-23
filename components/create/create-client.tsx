'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeftCircle, Loader2 } from 'lucide-react'
import { LocalDB } from '@/lib/storage'

const generateGroupId = (name: string) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-').slice(0, 15)
  const random = Math.random().toString(36).substring(2, 6)
  return `${slug}-${random}`
}

export default function CreateClient() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [group, setGroup] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const groupInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (step === 1) setTimeout(() => nameInputRef.current?.focus(), 100)
    if (step === 2) setTimeout(() => groupInputRef.current?.focus(), 100)
  }, [step])

  const handleNextStep = () => {
    if (!name.trim()) return
    setStep((prevStep) => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!group.trim()) return

    setIsLoading(true)

    let currentUser = LocalDB.getUser()
    if (!currentUser) {
      currentUser = LocalDB.initSession(name)
    }

    const newGroupId = LocalDB.createGroup(group, currentUser)

    await new Promise((resolve) => setTimeout(resolve, 800))

    router.push(`/groups/${newGroupId}`)
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <Card className="w-full max-w-md shadow-lg border-slate-100">
        <CardHeader>
          {step === 2 && (
            <Button
              onClick={handlePreviousStep}
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 -ml-2 text-slate-400 hover:text-teal-600"
            >
              <ArrowLeftCircle className="h-5 w-5" />
            </Button>
          )}

          <CardTitle className="text-2xl font-bold text-slate-800">
            {step === 1 ? "Let's get started" : 'Almost done'}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? 'First, what should we call you?'
              : `Hi ${name}! What are you splitting?`}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6 py-4">
            {step === 1 ? (
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-slate-600">
                  Your Name
                </Label>
                <Input
                  ref={nameInputRef}
                  id="name"
                  className="text-lg h-12 focus-visible:ring-teal-500"
                  placeholder="e.g. Alice"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  autoComplete="off"
                />
              </div>
            ) : (
              <div className="grid gap-3">
                <Label htmlFor="group" className="text-slate-600">
                  Group Name
                </Label>
                <Input
                  ref={groupInputRef}
                  id="group"
                  className="text-lg h-12 focus-visible:ring-teal-500"
                  placeholder="e.g. Bali Trip 2024"
                  onChange={(e) => setGroup(e.target.value)}
                  value={group}
                  autoComplete="off"
                />
              </div>
            )}

            <div className="flex justify-center gap-2 mt-2">
              <div
                className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? 'bg-teal-500' : 'bg-slate-200'}`}
              />
              <div
                className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? 'bg-teal-500' : 'bg-slate-200'}`}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {step === 1 ? (
            <Button
              onClick={handleNextStep}
              type="button"
              className="w-full bg-teal-600 hover:bg-teal-700 text-lg h-12"
              disabled={!name.trim()}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              type="button"
              className="w-full bg-teal-600 hover:bg-teal-700 text-lg h-12"
              disabled={!group.trim() || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Group'
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
