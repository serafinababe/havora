export default function GolfFooter() {
  return (
    <footer className="relative w-full bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.55" strokeWidth="1" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeOpacity="0.55" strokeWidth="1" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeOpacity="0.55" strokeWidth="1" />
          </svg>
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-white/55">sf · sh · hk · sg</span>
        </div>
        <div className="mono text-[10px] tracking-[0.2em] uppercase text-white/45 text-center">
          designed for those who move between worlds
        </div>
        <div className="mono text-[10px] tracking-[0.2em] uppercase text-white/45">
          © 2026 havora · all rights reserved
        </div>
      </div>
    </footer>
  );
}
