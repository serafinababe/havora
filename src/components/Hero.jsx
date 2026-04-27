import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const STAGGERED_POSITIONS = [
  { word: 'horizon', cls: 'left-[3%] md:left-[5%] top-[14%]' },
  { word: 'capital', cls: 'right-[4%] md:right-[6%] top-[34%] text-right' },
  { word: 'people',  cls: 'left-[8%] md:left-[12%] top-[56%]' },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Base video layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/uploads/human.mp4"
      />

      {/* Green-tinted multiply wash — keeps brand mood over the footage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(60,90,68,0.16) 0%, rgba(10,16,12,0.22) 75%)',
          mixBlendMode: 'multiply',
        }}
      />
      {/* Secondary green tint — overlay blend lifts mid-greens */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(50,85,60,0.18) 0%, rgba(25,45,32,0.10) 60%, rgba(0,0,0,0.0) 100%)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Film grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Fog drift */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fog" />
      </div>

      {/* Subtle horizon line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 top-[62%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Darkening passes for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25 pointer-events-none" />
      {/* Extra wash behind subtext */}
      <div className="absolute left-0 top-[40%] w-[35%] h-[18%] bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

      <Navbar />

      <div className="relative h-full w-full">

        {/* Three staggered hero words */}
        {STAGGERED_POSITIONS.map(({ word, cls }, i) => (
          <h1
            key={word}
            className={`hero-title absolute text-white text-[15vw] md:text-[13vw] animate-rise rise-d${i + 1} ${cls}`}
          >
            {word}
          </h1>
        ))}

        {/* Subtext — left, mid-page */}
        <p className="absolute left-6 md:left-10 top-[46%] max-w-[280px] text-[15px] leading-tight text-white/90 animate-rise rise-d4 hidden md:block">
          where human intelligence shapes capital,<br />
          and relationships compound beyond boundaries.
        </p>

        {/* Badge — top left */}
        <div className="absolute left-6 md:left-10 top-[10.5%] mono text-[10px] tracking-[0.25em] uppercase text-white/45 animate-rise">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300/80 mr-2 align-middle relative">
            <span className="absolute inset-0 rounded-full bg-emerald-300/80 animate-ping" />
          </span>
          private · invitation only · est. 2026
        </div>

        {/* Stat — top right: founders & investors */}
        <div className="absolute right-6 md:right-10 top-[15%] flex items-center gap-4 animate-rise rise-d2">
          <div className="text-right">
            <div className="editorial-num text-3xl md:text-4xl font-light text-white">+500</div>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-white/55 mt-1">founders &amp; investors</div>
          </div>
          <div className="diag-divider" />
        </div>

        {/* Stat — bottom left: cities connected */}
        <div className="absolute left-6 md:left-10 bottom-10 flex items-center gap-4 animate-rise rise-d4">
          <div className="diag-divider" />
          <div>
            <div className="editorial-num text-3xl md:text-4xl font-light text-white">+20</div>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-white/55 mt-1">cities connected</div>
          </div>
        </div>

        {/* Stat — bottom right: private gatherings */}
        <div className="absolute right-6 md:right-10 bottom-10 flex items-center gap-4 animate-rise rise-d5">
          <div className="text-right">
            <div className="editorial-num text-3xl md:text-4xl font-light text-white">+100</div>
            <div className="mono text-[10px] tracking-[0.2em] uppercase text-white/55 mt-1">private gatherings</div>
          </div>
          <div className="diag-divider" />
        </div>

        {/* CTA — center bottom */}
        <Link
          to="/golf"
          className="absolute left-1/2 -translate-x-1/2 bottom-[14%] md:bottom-[12%] flex items-center gap-3 text-white/90 hover:text-white transition-colors group animate-rise rise-d5"
        >
          <span className="block w-8 h-px bg-white/40 group-hover:bg-white transition-colors" />
          <span className="text-[15px] tracking-tight">enter this world</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </section>
  );
}
