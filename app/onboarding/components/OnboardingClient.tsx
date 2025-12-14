'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { ArrowRight, Sparkles } from 'lucide-react'

interface AvatarOption {
  id: string
  emoji: string
  color: string
  label: string
}

const AVATARS: AvatarOption[] = [
  { id: 'cat', emoji: '🐱', color: 'bg-orange-100', label: 'Cat' },
  { id: 'smile', emoji: '😄', color: 'bg-yellow-100', label: 'Smiley' },
  { id: 'ghost', emoji: '👻', color: 'bg-purple-100', label: 'Ghost' },
  { id: 'alien', emoji: '👽', color: 'bg-green-100', label: 'Alien' }
]

export default function OnboardingClient() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState('cat')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name,
          avatar: AVATARS.find((a) => a.id === selectedAvatar)
        })
      )

      router.push('/dashboard')
    } catch (error) {
      console.error('Error in Onboarding Client')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:-12 animate-fade-in-up w-full max-w-md rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/50"
    >
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
        <Sparkles className="h-6 w-6" />
      </div>

      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        First, what should <br />
        we call you?
      </h1>
      <p className="mb-10 text-center text-slate-400">
        This is how you'll appear to your friends.
      </p>

      {/* Avatar Picker */}
      <div className="mb-10 flex justify-center gap-4">
        {AVATARS.map((avatar) => {
          const isSelected = selectedAvatar === avatar.id
          return (
            <button
              key={avatar.id}
              onClick={() => setSelectedAvatar(avatar.id)}
              className={`relative flex h-16 w-16 items-center justify-center rounded-full text-3xl transition-all duration-300 ${avatar.color} ${isSelected ? 'scale-110 shadow-lg ring-4 ring-purple-600' : 'opacity-70 hover:scale-105 hover:opacity-100'} `}
              aria-label={`Select ${avatar.label} avatar`}
            >
              {avatar.emoji}

              {/* Active Checkmark Badge */}
              {isSelected && (
                <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-purple-600">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Input Field */}
      <div className="group mb-10">
        <label
          htmlFor="name"
          className="mb-2 ml-4 block text-xs font-bold tracking-wider text-slate-400 uppercase"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alex"
          className="w-full rounded-2xl border-2 border-transparent bg-slate-50 px-6 py-4 text-xl font-bold text-slate-900 caret-purple-600 transition-all duration-300 outline-none placeholder:text-slate-300 focus:border-purple-600 focus:bg-white"
          autoFocus
        />
      </div>

      {/* Action Button */}
      <button
        disabled={!name.trim() || isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 py-5 text-lg font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-[1.02] hover:bg-purple-700 active:scale-95 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
      >
        Continue
        <ArrowRight
          className={`h-5 w-5 transition-transform duration-300 ${name.trim() ? 'group-hover:translate-x-1' : ''}`}
        />
      </button>
    </form>
  )
}
