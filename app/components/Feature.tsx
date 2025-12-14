'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animateVariants'
import { CheckCircle2, Smartphone } from 'lucide-react'

export default function Feature() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={targetRef}
      id="features"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="order-2 space-y-8 lg:order-1"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-sm font-bold text-lime-800"
          >
            <CheckCircle2 className="h-4 w-4 fill-lime-200 text-lime-600" />
            Total Control
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl leading-[1.1] font-black text-slate-900 md:text-6xl"
          >
            Manage your <br />
            social finances.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl leading-relaxed font-medium text-slate-500"
          >
            Track multiple groups-Friday Dinner, Bali Trip, House Expenses-all
            in one place. See at a glance who owes you and who you owe.
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-4 pt-4">
            {[
              'Real-time debt tracking',
              'Multi-currency support',
              'Activity history'
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-lg font-bold text-slate-700"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                </div>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          style={{ y: yParallax }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative h-160 w-[320px] overflow-hidden rounded-[48px] border-8 border-slate-900 bg-slate-900 shadow-2xl ring-4 ring-slate-100/50">
            {/* Screen Content */}
            <div className="flex h-full w-full flex-col bg-slate-50 px-6 pt-12 pb-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Hi, Alex
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Your Dashboard
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"></div>
              </div>

              <div className="relative mb-6 overflow-hidden rounded-3xl bg-purple-600 p-6 text-white shadow-lg shadow-purple-500/30">
                <div className="relative z-10">
                  <p className="mb-1 text-xs font-bold text-purple-200 uppercase">
                    Total Balance
                  </p>
                  <p className="text-3xl font-black">-$42.00</p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-[20px] border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl">
                    🌴
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">Bali Trip</h4>
                    <p className="text-xs font-bold text-red-500">
                      You owe $20
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[20px] border border-slate-100 bg-white p-4 opacity-60 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xl">
                    🍣
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">Sushi Night</h4>
                    <p className="text-xs font-bold text-emerald-600">
                      Settled
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg">
                  <Smartphone />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
