'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import {
  staggerContainer,
  fadeInUp,
  floatAnimation
} from '@/utils/animateVariants'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-32 pb-20 md:pt-48 md:pb-32 lg:grid-cols-2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-8 text-center lg:text-left"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-bold tracking-wider text-purple-700 uppercase"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
          Now available in IDR & USD
        </motion.div>

        <motion.h1 className="text-6xl leading-[1.05] font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
          Split bills, <br />{' '}
          <span className="bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            not friendships.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto max-w-lg text-xl leading-relaxed font-medium text-slate-500 lg:mx-0"
        >
          The smartest way to scan receipts, itemize expenses, and track debts.
          You do the transfer; we do the math.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start"
        >
          <motion.button
            onClick={() => router.push('/onboarding')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 rounded-full bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-purple-500/30 transition-colors hover:cursor-pointer hover:bg-purple-700"
          >
            Start Splitting - Free
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full px-8 py-4 font-bold text-slate-600 transition-all hover:cursor-pointer hover:bg-purple-50 hover:text-purple-600"
          >
            View Demo
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="perspective-1000 relative hidden h-125 w-full lg:block">
        <motion.div
          animate={floatAnimation}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: -80, rotateY: -15 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute z-10 flex w-64 flex-col rounded-3xl border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between opacity-40">
              <div className="h-8 w-8 rounded-full bg-slate-200"></div>
              <div className="h-2 w-12 rounded bg-slate-200"></div>
            </div>
            <div className="mb-6 space-y-3 opacity-20">
              <div className="h-2 w-full rounded bg-slate-900"></div>
              <div className="h-2 w-3/4 rounded bg-slate-900"></div>
              <div className="h-2 w-1/2 rounded bg-slate-900"></div>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-300 pt-4">
              <span className="text-xs font-bold text-slate-400">TOTAL</span>
              <span className="text-xl font-black text-slate-900">$124.50</span>
            </div>

            <div className="absolute top-1/2 -right-5 z-20 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-purple-600 shadow-lg">
              <ArrowRight size={20} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 80, rotateY: 15 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute z-0 aspect-3/4 w-64 overflow-hidden rounded-4xl border-4 border-white bg-slate-900 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.5)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-indigo-900 opacity-80"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-bold opacity-80">
                Friday Sushi
              </h3>
              <p className="mb-4 text-3xl font-black tracking-tight">$124.50</p>

              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
              className="absolute top-4 right-4 rounded-full bg-[#25D366] p-2 text-white shadow-lg"
            >
              <MessageCircle size={16} fill="white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
