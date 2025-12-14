import Header from './components/Header'
import BackgroundOrbs from './components/BackgroundOrbs'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Feature from './components/Feature'
import Payment from './components/Payment'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <BackgroundOrbs />
      <Header />
      <Hero />
      <HowItWorks />
      <Feature />
      <Payment />
      <SocialProof />
      <Footer />
    </main>
  )
}
