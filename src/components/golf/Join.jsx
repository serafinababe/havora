import { useState } from 'react';

const EMAIL = 'dapengpxj@gmail.com';

export default function Join() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="join" className="relative w-full bg-black border-t border-white/5 overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="atmos-base" />
        <div className="terrain-bands" />
        <div className="coastal-fog" />
        <div className="coastal-fog-2" />
        <div className="sun-bloom" />
        <div className="sun-rays" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-40 text-center">
        <h2 className="reveal hero-title text-white text-[10vw] md:text-[7.5vw] max-w-5xl mx-auto">
          if you belong here,<br />you'll know.
        </h2>
        <p className="reveal mt-10 text-white/70 max-w-md mx-auto text-base leading-relaxed">
          Membership is by introduction. Tell us where you've been, and where you're going.
        </p>
        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={copyEmail}
            className="bg-white text-black rounded-full px-7 py-4 text-sm hover:bg-neutral-200 transition flex items-center gap-3 group"
            aria-live="polite"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>{copied ? 'email copied' : 'connect via email'}</span>
            <span className={`transition-transform ${copied ? '' : 'group-hover:translate-x-0.5'}`}>
              {copied ? '✓' : '→'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
