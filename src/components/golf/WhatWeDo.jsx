function Glyph({ kind }) {
  if (kind === 'arc') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4 36 Q 24 4 44 36" stroke="white" strokeOpacity="0.85" strokeWidth="1" />
        <circle cx="4" cy="36" r="2" fill="white" />
        <circle cx="44" cy="36" r="2" fill="white" fillOpacity="0.45" />
      </svg>
    );
  }
  if (kind === 'split') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="14" cy="24" r="6" stroke="white" strokeOpacity="0.85" />
        <circle cx="34" cy="24" r="6" stroke="white" strokeOpacity="0.55" />
        <line x1="20" y1="24" x2="28" y2="24" stroke="white" strokeOpacity="0.6" />
      </svg>
    );
  }
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="white" strokeOpacity="0.85" />
      <circle cx="24" cy="24" r="10" stroke="white" strokeOpacity="0.45" />
      <circle cx="24" cy="24" r="2" fill="white" />
    </svg>
  );
}

const ITEMS = [
  {
    n: '/01',
    t: 'curated gatherings',
    d: 'Small-format dinners, retreats, and rounds — engineered for high-context conversation, not reach.',
    glyph: 'circle',
  },
  {
    n: '/02',
    t: 'cross-border connection',
    d: 'A trusted bridge between Silicon Valley and Greater China — discreet introductions, qualified rooms.',
    glyph: 'arc',
  },
  {
    n: '/03',
    t: 'founder & investor matching',
    d: 'Signal-driven matching grounded in track record and relational depth, not a database.',
    glyph: 'split',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" className="relative w-full bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-32">

        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="reveal mono text-[10px] tracking-[0.3em] uppercase text-white/45">
              02 — what we do
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal hero-title text-white text-[7vw] md:text-[4.2vw] max-w-4xl">
              three movements,<br />one shared rhythm.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {ITEMS.map((item) => (
            <div
              key={item.t}
              className="reveal bg-black p-8 md:p-10 group transition-colors min-h-[360px] flex flex-col hover:bg-[rgba(20,40,28,0.55)]"
            >
              <div className="flex items-start justify-between">
                <Glyph kind={item.glyph} />
                <span className="mono text-[10px] tracking-[0.25em] text-white/35">{item.n}</span>
              </div>
              <h3 className="hero-title text-white text-3xl md:text-4xl mt-16 max-w-[10ch]">
                {item.t}
              </h3>
              <p className="mt-6 text-white/65 text-sm leading-relaxed max-w-sm">
                {item.d}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
