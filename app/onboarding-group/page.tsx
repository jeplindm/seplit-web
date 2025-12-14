'use client'

import React, { useState } from 'react'
import { ChevronDown, ArrowRight, Wallet, Users, Sparkles } from 'lucide-react'

// Define theme colors to match your brand requirements
const THEME = {
  purple: '#7C3AED', // Electric Purple
  purpleLight: '#F3E8FF',
  white: '#FFFFFF',
  grayBorder: '#E2E8F0',
  textMain: '#1E293B',
  textLight: '#64748B'
}

interface CurrencyOption {
  code: string
  symbol: string
  label: string
}

const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', symbol: '$', label: 'USD ($)' },
  { code: 'IDR', symbol: 'Rp', label: 'IDR (Rp)' },
  { code: 'EUR', symbol: '€', label: 'EUR (€)' }
]

const SeplitOnboarding: React.FC = () => {
  const [groupName, setGroupName] = useState<string>('')
  const [currency, setCurrency] = useState<CurrencyOption>(CURRENCIES[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans text-slate-900 relative overflow-hidden">
      {/* Background Decor Elements (Subtle & Playful) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* --- Main Center Card --- */}
      <div className="w-full max-w-md bg-white relative z-10 animate-fade-in-up">
        {/* Header / Logo Area */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-purple-600 rounded-[24px] flex items-center justify-center shadow-lg shadow-purple-200 rotate-3 transition-transform hover:rotate-6">
            <Sparkles className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Card Content Container */}
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Name your group.
            </h1>
            <p className="text-slate-500 text-lg">
              Is it a trip? A dinner? Or just life?
            </p>
          </div>

          {/* Input Area */}
          <div className="space-y-6">
            {/* Group Name Input */}
            <div className="relative group">
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="e.g., Friday Sushi"
                className="w-full bg-white border-2 border-slate-200 text-slate-900 text-xl font-semibold placeholder:text-slate-300 placeholder:font-normal rounded-[24px] px-6 py-5 outline-none focus:border-purple-600 transition-colors duration-300 shadow-sm"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors pointer-events-none">
                <Users className="w-6 h-6" />
              </div>
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <label className="block text-left text-sm font-bold text-slate-400 mb-2 ml-4">
                CURRENCY
              </label>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 hover:border-purple-200 text-slate-900 rounded-[24px] px-6 py-4 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">
                    {currency.symbol}
                  </div>
                  <span className="font-bold text-lg">{currency.code}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-[24px] shadow-xl shadow-purple-900/5 overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr)
                        setIsDropdownOpen(false)
                      }}
                      className="w-full flex items-center gap-3 px-6 py-4 hover:bg-purple-50 transition-colors text-left"
                    >
                      <span className="text-slate-500 font-medium w-8 text-center">
                        {curr.symbol}
                      </span>
                      <span
                        className={`font-semibold ${currency.code === curr.code ? 'text-purple-600' : 'text-slate-900'}`}
                      >
                        {curr.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-purple-600 text-white font-bold text-xl py-5 rounded-[24px] shadow-xl shadow-purple-600/30 hover:bg-purple-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-600/40 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mt-8 group">
            Create Group
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-slate-400">Press Enter to continue</p>
        </div>
      </div>
    </div>
  )
}

export default SeplitOnboarding
