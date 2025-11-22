import FeatureCard from "./feature-card"
import { Split, UtensilsCrossed, Share2 } from "lucide-react"

export default function FeaturesGrid() {
  const features = [
    {
      icon: Split,
      title: "Even Split",
      description: "Automatically divide bills equally among all participants with one tap.",
    },
    {
      icon: UtensilsCrossed,
      title: "Itemized Split",
      description: "Customize who pays for what. Perfect for complex meal orders.",
    },
    {
      icon: Share2,
      title: "Instant Share Link",
      description: "Generate a shareable link and sync in real-time. No app required.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            All the Features You Need
          </h2>
          <p className="text-lg text-muted-foreground">Smart splitting that works the way you do.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
