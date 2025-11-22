import Header from '@/components/landing/header'
import Hero from '@/components/landing/hero'
import FeaturesGrid from '@/components/landing/features-grid'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesGrid />
      <Footer />
    </main>
  )
}
