'use client'

import { motion } from 'framer-motion'

import { fadeInUp, staggerContainer } from '@/utils/animateVariants'

import { Banknote, CreditCard, Wallet } from 'lucide-react'

export default function Payment() {
  return (
    <section className="bg-purple-50 px-6 py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[48px] bg-white p-12 text-center shadow-xl shadow-purple-100 md:p-20">
        <div className="absolute top-0 left-0 h-2 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-lime-500"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center gap-6"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-purple-600">
              <Wallet size={32} />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-indigo-600">
              <CreditCard size={32} />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-lime-600">
              <Banknote size={32} />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-3xl font-black text-slate-900 md:text-5xl"
          >
            Use{' '}
            <span className="text-purple-600 underline decoration-lime-400 decoration-4 underline-offset-4">
              any
            </span>{' '}
            payment method.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500"
          >
            GoPay, OVO, Venmo, Cash app, or physical cash. Seplit simply tracks
            the debt so you know who owes what. We don't touch your money.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
