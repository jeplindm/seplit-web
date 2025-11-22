export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-teal-700 to-cyan-500 bg-clip-text text-transparent mb-2">
              Seplit
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-500">Split bills, not friendships.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-500">
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400 dark:text-slate-500">
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Seplit. All rights reserved.</p>
          <p>Built with love for splitters everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
