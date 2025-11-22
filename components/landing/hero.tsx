'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import MobileCardMockup from './mobile-card-mockup'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight text-balance">
            Split Bills without the Awkwardness.
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 text-pretty">
            The free, modern way to share expenses. No account needed to start.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={() => router.push('/create')}
              size="lg"
              className="bg-linear-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-teal-200/50 dark:shadow-teal-950/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-200/60 dark:hover:shadow-teal-950/60 hover:scale-105 active:scale-95 motion-safe:transition-transform"
            >
              Start Splitting Now
            </Button>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <MobileCardMockup />
        </div>
      </div>
    </section>
  )
}
