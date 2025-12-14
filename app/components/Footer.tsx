'use client'

import { motion } from 'framer-motion'

import { ArrowRight, Sparkles } from 'lucide-react'

import { staggerContainer, fadeInUp } from '@/utils/animateVariants'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-20 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8 inline-flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-purple-500/30">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-8 text-5xl font-black tracking-tight text-slate-900 md:text-7xl"
        >
          Ready to settle up?
        </motion.h2>

        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group mx-auto flex items-center gap-3 rounded-full bg-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl shadow-purple-600/40 transition-all hover:bg-purple-700"
        >
          Start New Group
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </motion.button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 font-bold text-slate-500">
          <a href="#" className="transition-colors hover:text-purple-600">
            About Seplit
          </a>
          <a href="#" className="transition-colors hover:text-purple-600">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-purple-600">
            Terms of Service
          </a>
          <a href="#" className="transition-colors hover:text-purple-600">
            Contact Support
          </a>
        </div>
        <p className="mt-8 text-sm font-medium text-slate-400">
          © 2024 Seplit Inc. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
