const FEATURES = [
  {
    icon: '⚡',
    title: 'Real-Time Data',
    description:
      'Live IPO filings, pricing updates, and lock-up expiry alerts streamed the moment they happen.',
  },
  {
    icon: '🧠',
    title: 'AI Signals',
    description:
      'Proprietary ML models surface underpriced offerings before the market catches on.',
  },
  {
    icon: '📊',
    title: 'Deep Analytics',
    description:
      'Interactive S-1 breakdowns, comparable analysis, and valuation models — out of the box.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description:
      'Customizable watchlists and push alerts so you never miss a critical window.',
  },
  {
    icon: '🔒',
    title: 'Institutional Grade',
    description:
      'SOC 2 Type II certified. Enterprise SSO, audit logs, and role-based access control.',
  },
  {
    icon: '🌐',
    title: 'Global Coverage',
    description:
      'Track IPOs across NYSE, NASDAQ, LSE, ASX, and 40+ exchanges worldwide.',
  },
]

export default function Features() {
  return (
    <section id="product" className="relative bg-black py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-havora-400">
            Platform
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Built from the ground up for IPO professionals who can't afford to be slow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-havora-500/40 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-havora-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
