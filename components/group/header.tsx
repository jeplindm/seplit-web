import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

export default function GroupHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-16 flex items-center justify-between">
      <h1 className="font-bold text-lg text-slate-800">Bali Trip 2024</h1>

      <Button
        variant="ghost"
        size="icon"
        // onClick={handleShare}
        className="text-teal-600"
      >
        <Share2 className="w-5 h-5" />
      </Button>
    </header>
  )
}
