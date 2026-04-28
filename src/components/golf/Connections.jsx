const PARTNERS = [
  'sequoia·partners','hillhouse','lightspeed','ggv','source code','5y capital',
  'matrix','zhen fund','ipsa','bond','stanford gsb','wharton','harvard','mit sloan',
  'kellogg','insead','tsinghua','ckgsb','berkeley haas','columbia',
];

export default function Connections() {
  return (
    <section id="connections" className="relative w-full overflow-hidden bg-black border-t border-white/5">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32">

        <div className="grid grid-cols-12 gap-y-6 gap-x-0 md:gap-10 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="reveal mono text-[10px] tracking-[0.3em] uppercase text-white/45">
              03 — our connections
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal hero-title text-white text-[7vw] md:text-[4.2vw] max-w-3xl">
              a network<br />built in motion.
            </h2>
          </div>
        </div>

        {/* Full-width 16:9 video */}
        <div
          className="reveal mb-20 relative ph overflow-hidden rounded-2xl md:rounded-3xl aspect-video"
          data-label="pebble beach · spring 26"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/uploads/swing-465f048b.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 mono text-[11px] tracking-[0.2em] uppercase text-white/80">
            pebble beach · spring 26
          </div>
        </div>

        {/* Partner marquee */}
        <div className="reveal relative overflow-hidden border-t border-b border-white/10 py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
                <span className="block w-1 h-1 rounded-full bg-white/40" />
                <span className="mono text-xs tracking-[0.2em] uppercase text-white/55">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10">
          <p className="text-white/55 text-sm max-w-md leading-relaxed">
            Logos shown represent organizations our members are affiliated with.
            Havora is independent and has no formal partnership with any institution.
          </p>
        </div>

      </div>
    </section>
  );
}
