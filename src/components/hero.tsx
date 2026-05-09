import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.35 + 0.05,
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-125 h-125 rounded-full bg-[#C9A84C]/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-[#8B6914]/5 blur-[100px]" />
        <div className="absolute top-0 right-24 w-px h-full bg-linear-to-b from-transparent via-[#C9A84C]/15 to-transparent" />
        <div className="absolute top-0 left-12 w-px h-full bg-linear-to-b from-transparent via-[#C9A84C]/8 to-transparent" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-center">

          {/* Main content */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">
                Entrepreneur · Ecosystem Builder · Global Speaker
              </span>
            </div>

            <p className="text-[#A09880] text-sm tracking-[0.2em] uppercase mb-4">Hi, I'm JC —</p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight mb-6">
              <span className="block text-[#F0EDE6] animate-slide-up" style={{ animationDelay: "0.1s" }}>
                The Connector
              </span>
              <span className="block text-[#F0EDE6] animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Using
              </span>
              <span className="block text-[#F0C040] animate-slide-up" style={{ animationDelay: "0.3s" }}>
                Intentional Serendipity
              </span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-[#A09880] leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
              I design ecosystems. Through thought leadership talks and masterclasses creating conditions for the right people to meet and build something real. AND now using AI to accelerate this…
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => scrollTo("masterclass")}
                className="group relative px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                <span className="relative z-10">Join the Masterclass</span>
                <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo("book")}
                className="px-8 py-4 border border-[#F0EDE6]/25 text-[#F0EDE6] text-sm tracking-[0.15em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                Work With Me
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              {[
                { num: "18+",  label: "Years of Experience" },
                { num: "3+",   label: "Ventures Co-Founded" },
                { num: "2",    label: "SXSW Appearances" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-3xl text-[#C9A84C]">{s.num}</span>
                  <span className="text-[10px] text-[#555] tracking-widest uppercase mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="hidden md:flex md:col-span-4 flex-col items-end gap-6">
            <div className="border border-[#C9A84C]/20 p-6 bg-[#0D0C09] w-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                <span className="text-xs text-[#A09880] tracking-widest uppercase">Currently Available</span>
              </div>
              <p className="text-xs text-[#555] leading-relaxed mb-4">
                Taking new clients for 1:1 strategy and coaching sessions — from clarity calls to deep-dive brand and leadership work.
              </p>
              <button
                onClick={() => scrollTo("book")}
                className="w-full py-2.5 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C]/10 transition-colors"
              >
                Book a Session →
              </button>
            </div>

            <div className="border border-[#1E1E1E] p-6 bg-[#080808] w-full">
              <p className="text-[10px] text-[#555] tracking-widest uppercase mb-3">Recognised As</p>
              <div className="flex flex-col gap-2">
                {[
                  "TED Fellow",
                  "Harambean",
                  "iHub Co-Founder",
                  "SXSW Speaker",
                  "Harvard Guest Lecturer",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                    <span className="text-xs text-[#A09880]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#444]">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-[#C9A84C]/60 to-transparent" />
      </div>
    </section>
  );
}