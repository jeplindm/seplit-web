import Header from './components/Header'
import BackgroundOrbs from './components/BackgroundOrbs'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Feature from './components/Feature'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <BackgroundOrbs />
      <Header />
      <Hero />
      <HowItWorks />
      <Feature />
    </main>
  )
}
