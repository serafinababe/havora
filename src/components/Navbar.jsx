import { Link } from 'react-router-dom';

function Logomark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" stroke="white" strokeOpacity="0.9" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke="white" strokeOpacity="0.45" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.6" fill="white" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 pt-6 flex items-center justify-between gap-4">
      {/* Logo pill */}
      <Link
        to="/"
        className="bg-neutral-900/85 backdrop-blur-md border border-white/5 rounded-full pl-3.5 pr-5 py-2.5 flex items-center gap-2.5 hover:bg-neutral-900 transition"
      >
        <Logomark size={20} />
        <span className="text-white text-sm tracking-tight">havora</span>
        <span className="mono text-[10px] text-white/40 ml-1.5 hidden sm:inline">v.001</span>
      </Link>

      {/* Center nav — hidden on landing, shown only on Golf page */}
      <div className="hidden items-center gap-1 bg-neutral-900/85 backdrop-blur-md border border-white/5 rounded-full px-2 py-1.5" />

      {/* CTA */}
      <Link
        to="/golf"
        className="bg-white text-black rounded-full px-5 py-3 text-sm hover:bg-neutral-200 transition flex items-center gap-2 group"
      >
        <span>enter this world</span>
        <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </nav>
  );
}
