import { useEffect, useRef } from 'react';

export default function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    let raf, w, h, dpr;
    let stars = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = cvs.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cvs.width = Math.floor(w * dpr);
      cvs.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(260, Math.floor((w * h) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.2 + Math.random() * 0.8,
        r: 0.3 + Math.random() * 1.4,
        hue: 140 + (Math.random() * 40 - 20),
        sat: 8 + Math.random() * 16,
        twPhase: Math.random() * Math.PI * 2,
        twSpeed: 0.8 + Math.random() * 2.4,
        blinker: Math.random() < 0.25,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.02,
      }));
    };

    const t0 = performance.now();
    const tick = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      // Nebula wash — two drifting radial gradients
      const cx1 = w * (0.3 + 0.05 * Math.sin(t * 0.08));
      const cy1 = h * (0.4 + 0.04 * Math.cos(t * 0.07));
      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, Math.max(w, h) * 0.55);
      g1.addColorStop(0, 'rgba(40,70,55,0.35)');
      g1.addColorStop(0.5, 'rgba(20,35,30,0.12)');
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const cx2 = w * (0.75 + 0.05 * Math.cos(t * 0.06));
      const cy2 = h * (0.65 + 0.04 * Math.sin(t * 0.09));
      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, Math.max(w, h) * 0.45);
      g2.addColorStop(0, 'rgba(70,90,80,0.22)');
      g2.addColorStop(0.5, 'rgba(15,25,22,0.08)');
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        s.x += s.vx * s.z;
        s.y += s.vy * s.z;
        if (s.x < -2) s.x = w + 2; else if (s.x > w + 2) s.x = -2;
        if (s.y < -2) s.y = h + 2; else if (s.y > h + 2) s.y = -2;

        const sinV = Math.sin(t * s.twSpeed + s.twPhase);
        const tw = s.blinker
          ? Math.pow(0.5 + 0.5 * sinV, 3)
          : 0.5 + 0.5 * sinV;
        const a = (0.15 + 0.85 * tw) * s.z;
        const r = s.r * (0.7 + 0.5 * tw);

        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 5);
        glow.addColorStop(0, `hsla(${s.hue},${s.sat}%,92%,${a * 0.65})`);
        glow.addColorStop(1, 'hsla(140,10%,95%,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${s.hue},${s.sat}%,96%,${Math.min(1, a + 0.2)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(resize);
    ro.observe(cvs);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
