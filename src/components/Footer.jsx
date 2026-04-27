const LINKS = {
  Product:  ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company:  ['About', 'Blog', 'Careers', 'Press'],
  Legal:    ['Privacy', 'Terms', 'Security', 'Cookies'],
  Support:  ['Docs', 'Help center', 'Status', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-havora-500 flex items-center justify-center text-white font-black text-xs">H</span>
              <span className="text-white font-bold">Havora</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The platform that moves at the speed of markets.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Havora, Inc. All rights reserved.</p>
          <p>Built for the ones who move first.</p>
        </div>
      </div>
    </footer>
  )
}
