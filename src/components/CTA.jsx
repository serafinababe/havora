export default function CTA() {
  return (
    <section id="pricing" className="relative bg-black py-28 px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-havora-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          Ready to get an edge?
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Join thousands of analysts using Havora to find alpha before the bell rings.
          Free for 14 days, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            className="w-full sm:w-auto bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-200 active:scale-95 text-lg"
          >
            Start free trial
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-white/60 hover:text-white font-medium text-lg transition-colors duration-200"
          >
            Talk to sales →
          </a>
        </div>
      </div>
    </section>
  )
}
