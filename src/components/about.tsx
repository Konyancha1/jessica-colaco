export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[#C9A84C]/3 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Photo placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 aspect-3/4 bg-linear-to-br from-[#1A1611] to-[#0D0B08] border border-[#C9A84C]/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-44 h-44 rounded-full bg-linear-to-br from-[#C9A84C]/15 to-[#8B6914]/8 flex items-center justify-center">
                    <span className="font-display text-6xl text-[#C9A84C]/30">JC</span>
                  </div>
                  <div className="absolute -inset-5 border border-[#C9A84C]/15 rounded-full" style={{ animation: "spin 14s linear infinite" }} />
                  <div className="absolute -inset-10 border border-[#C9A84C]/8 rounded-full" style={{ animation: "spin 20s linear infinite reverse" }} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-[#0A0A0A] to-transparent">
                <div className="h-px w-full bg-linear-to-r from-[#C9A84C] to-transparent mb-3" />
                <p className="text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase">Tech Entrepreneur · Storytelling Coach</p>
                <p className="text-sm text-[#F0EDE6] mt-1 font-display">Jessica Colaco</p>
              </div>
            </div>
            <div className="absolute -right-5 top-16 bg-[#C9A84C] text-[#0A0A0A] px-5 py-3 z-20">
              <p className="text-[10px] font-bold tracking-widest uppercase">AI-Powered</p>
              <p className="text-[10px] tracking-widest uppercase">Narrative Coach</p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A84C]/15 z-0" />
          </div>

          {/* Text — first person, latin placeholder */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">My Story</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              I Live at the<br />
              <span className="text-[#C9A84C]">Intersection</span><br />
              of Code & Story
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium — totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-10">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            {/* Personal values grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◈", label: "AI Storytelling Tools", desc: "Lorem ipsum dolor sit amet consectetur" },
                { icon: "◉", label: "Creative × Tech Bridge", desc: "Adipiscing elit sed do eiusmod tempor" },
                { icon: "◇", label: "Accelerated Learning", desc: "Ut labore et dolore magna aliqua enim" },
                { icon: "◎", label: "Narrative Coaching", desc: "Quis nostrud exercitation ullamco" },
              ].map((item) => (
                <div key={item.label} className="border border-[#1E1E1E] p-4 hover:border-[#C9A84C]/40 transition-colors group">
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  <p className="text-xs font-semibold mt-2 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">{item.label}</p>
                  <p className="text-[10px] text-[#555] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Signature touch */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-8 bg-[#C9A84C]/40" />
              <p className="font-display text-lg text-[#C9A84C]/60 italic">— Jessica Colaco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}