'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animateVariants'
import { Camera, Keyboard, Share2, User, Users } from 'lucide-react'

const steps = [
  {
    icon: User,
    title: '1. Set Profile',
    text: 'Just enter your name and pick an avatar. No email or password required.'
  },
  {
    icon: Users,
    title: '2. Create Group',
    text: 'Name your trip or dinner and select your currency (USD or IDR).'
  },
  {
    icon: Camera,
    title: '3. Scan & Split',
    text: 'Snap a receipt or type items manually, then tap to assign to friends.'
  },
  {
    icon: Share2,
    title: '4. Share Card',
    text: 'Send a beautiful summary image to your group chat to get paid back.'
  }
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-br from-transparent via-slate-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-5xl">
            Efforless Splitting
          </h2>
          <p className="text-lg font-medium text-slate-500">
            Go from messy receipts to settled debts in four simple steps.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                <step.icon size={100} />
              </div>

              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                {i === 2 && (
                  <div className="absolute -right-2 -bottom-2 rounded-full border border-slate-100 bg-white p-1 text-slate-400 shadow-sm group-hover:text-purple-600">
                    <Keyboard size={12} />
                  </div>
                )}
                <step.icon className="h-8 w-8" strokeWidth={2} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="leading-relaxed font-medium text-slate-500">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
