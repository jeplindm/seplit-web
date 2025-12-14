import FeaturesGrid from '@/components/landing/features-grid'
import Footer from '@/components/landing/footer'
import Header from './components/Header'
import BackgroundOrbs from './components/BackgroundOrbs'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <BackgroundOrbs />
      <Header />
      <Hero />
    </main>
  )
}
