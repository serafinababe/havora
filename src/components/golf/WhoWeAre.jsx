import { useState, useEffect } from 'react';
import Galaxy from './Galaxy';

const LINES = [
  'beyond the swings, beyond the deals.',
  'fairways that unite, people that thrive.',
  'rhythm meets strategy, play meets purpose.',
];

export default function WhoWeAre() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % LINES.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="who" className="relative w-full overflow-hidden bg-black pt-24">
      {/* Deep-space gradient base */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, #0a1410 0%, #050807 55%, #000 100%)' }}
      />
      <Galaxy />
      {/* Legibility washes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-10">

          {/* Left column — label + description */}
          <div className="col-span-12 md:col-span-3">
            <div className="reveal mono text-[10px] tracking-[0.3em] uppercase text-white/45">
              01 — who we are
            </div>
            <div className="reveal mt-6 text-white/55 text-sm leading-relaxed">
              A private community at the intersection of capital, craft, and conversation.
            </div>
          </div>

          {/* Right column — rotating headline + body */}
          <div className="col-span-12 md:col-span-9 md:pl-8">
            <div className="reveal hero-title text-white text-[7vw] md:text-[5.2vw] relative" style={{ minHeight: '2.6em' }}>
              {LINES.map((line, i) => (
                <span
                  key={line}
                  className="block absolute inset-0 transition-all duration-1000"
                  style={{
                    opacity: idx === i ? 1 : 0,
                    transform: idx === i ? 'translateY(0)' : 'translateY(24px)',
                    pointerEvents: idx === i ? 'auto' : 'none',
                  }}
                >
                  {line}
                </span>
              ))}
            </div>

            <div className="reveal mt-14 grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="text-white/85 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                  Havora is a new kind of venture network — where trust is built off the course, and ideas travel faster through people.
                </p>
                <div className="mt-10 flex items-center gap-4 mono text-[10px] tracking-[0.25em] uppercase text-white/45">
                  <span className="block w-12 h-px bg-white/30" />
                  <span>vc · mba · founder ecosystems</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
