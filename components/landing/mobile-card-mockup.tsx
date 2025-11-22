import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function MobileCardMockup() {
  return (
    <div className="w-full max-w-sm relative">
      <div className="bg-cyan-50/40 dark:bg-cyan-950/20 backdrop-blur-xl border border-cyan-200/40 dark:border-cyan-800/40 rounded-3xl p-6 shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-900/30">
        {/* Card Header */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Receipt Split</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">$84.50</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Restaurant • Today</p>
        </div>

        {/* Mock Receipt Items */}
        <div className="space-y-3 mb-6 pb-6 border-b border-cyan-200/30 dark:border-cyan-800/30">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Pasta Carbonara</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">$18.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Grilled Fish</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">$24.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Dessert</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">$12.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Tax & Tip</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">$30.00</span>
          </div>
        </div>

        {/* Split into 3 Avatars */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Splitting with:</p>
          <div className="flex -space-x-2">
            <Avatar className="h-8 w-8 border-2 border-white dark:border-slate-950">
              <AvatarFallback className="bg-teal-500 text-white text-xs font-bold">A</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-white dark:border-slate-950">
              <AvatarFallback className="bg-cyan-500 text-white text-xs font-bold">B</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-white dark:border-slate-950">
              <AvatarFallback className="bg-teal-400 text-white text-xs font-bold">C</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Each person's amount */}
        <div className="mt-4 pt-4 border-t border-cyan-200/30 dark:border-cyan-800/30 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400">Your share:</span>
            <span className="font-semibold text-teal-600 dark:text-teal-400">$28.17</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400">Other shares:</span>
            <span className="text-slate-600 dark:text-slate-400">$28.17 each</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-full h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl -z-10 pointer-events-none motion-safe:animate-pulse" />
    </div>
  )
}
