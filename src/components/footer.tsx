export default function Footer() {
  return (
    <footer className="border-t border-[#161616] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            {/* Personal footer signature */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center">
                <span className="font-display text-[#C9A84C] text-sm">JC</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[#F0EDE6] tracking-widest text-sm">JESSICA COLACO</span>
                <span className="text-[9px] text-[#555] tracking-[0.25em] uppercase mt-0.5">Tech Entrepreneur · Storytelling Coach</span>
              </div>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs">
              JESSICA COLACO is a public speaker, trainer, and thought leader passionate about equipping individuals and organizations with the skills they need to thrive in a fast-changing world.
            </p>
            <div className="flex gap-3 mt-6">
              {["X", "IG", "LI", "YT"].map((s) => (
                <button key={s} className="w-8 h-8 border border-[#1E1E1E] text-[9px] text-[#555] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#444] mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {["About", "Masterclass", "Gallery", "Blog", "Book"].map((l) => (
                <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })} className="text-left text-sm text-[#444] hover:text-[#C9A84C] transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#444] mb-5">Say Hello</p>
            <div className="flex flex-col gap-2 mb-6">
              <p className="text-sm text-[#444]">jc@jessicacolaco.com</p>
              <p className="text-sm text-[#444]">Nairobi, Kenya</p>
              <p className="text-sm text-[#444]">& Globally Remote</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111] pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-[#2A2A2A]">© 2025 Jessica Colaco. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <button key={l} className="text-xs text-[#2A2A2A] hover:text-[#555] transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
