const STATS = [
  { value: '$2.4T+', label: 'IPO volume tracked' },
  { value: '40+',    label: 'Global exchanges' },
  { value: '2,400+', label: 'Active analysts' },
  { value: '99.9%',  label: 'Platform uptime' },
]

export default function Stats() {
  return (
    <section className="bg-havora-600 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-4xl sm:text-5xl font-black text-white">{value}</p>
            <p className="mt-2 text-white/70 text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
