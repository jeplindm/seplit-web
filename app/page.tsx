import Hero from '@/components/landing/hero'
import FeaturesGrid from '@/components/landing/features-grid'
import Footer from '@/components/landing/footer'
import Header from './components/Header'
import BackgroundOrbs from './components/BackgroundOrbs'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      <BackgroundOrbs />
      <Header />
    </main>
  )
}
