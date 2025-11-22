import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border hover:border-teal-300 dark:hover:border-teal-700 transition-colors duration-300 motion-safe:transition-all">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 mb-4">
        <Icon className="h-6 w-6 text-teal-500 dark:text-teal-400" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
