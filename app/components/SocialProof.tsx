'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="overflow-hidden bg-slate-900 py-24 text-white">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-black md:text-4xl">
          Getting paid back looks good.
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-slate-900 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-slate-900 to-transparent"></div>

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{ width: 'fit-content' }}
        >
          {[...Array(2)].map((_, listIndex) => (
            <React.Fragment key={listIndex}>
              {[
                {
                  title: 'Bali Trip 🌴',
                  total: 'Rp 4.5M',
                  color: 'from-purple-600 to-indigo-600'
                },
                {
                  title: 'Office Lunch 🍔',
                  total: '$145.20',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Utilities 💡',
                  total: '$85.00',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Drinks 🍻',
                  total: 'Rp 850k',
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  title: 'Roadtrip 🚗',
                  total: '$320.00',
                  color: 'from-emerald-500 to-teal-500'
                }
              ].map((card, i) => (
                <div
                  key={`${listIndex}-${i}`}
                  className="relative aspect-3/4 w-60 shrink-0 overflow-hidden rounded-4xl border border-slate-700 bg-slate-800 shadow-2xl"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-20`}
                  ></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Sparkles size={16} />
                    </div>
                    <h3 className="mb-1 text-sm font-bold tracking-widest uppercase opacity-70">
                      {card.title}
                    </h3>
                    <p className="text-3xl font-black tracking-tight">
                      {card.total}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
