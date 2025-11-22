import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-linear-to-r from-teal-700 to-cyan-500 bg-clip-text text-transparent">
          Seplit
        </div>

        <Button
          variant="outline"
          className="text-sm font-medium border-teal-200 text-teal-600 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950 bg-transparent"
        >
          Login
        </Button>
      </div>
    </header>
  )
}
