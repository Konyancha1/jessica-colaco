const galleryItems = [
  { label: "Keynote — Nairobi Tech Summit 2024", type: "Speaking", wide: true, symbol: "◈" },
  { label: "StoryVelocity Cohort 3 Workshop", type: "Workshop", wide: false, symbol: "◉" },
  { label: "AI Tools Demo — Creative Week Lagos", type: "Demo", wide: false, symbol: "◇" },
  { label: "1:1 Deep Dive Coaching Session", type: "Coaching", wide: false, symbol: "◎" },
  { label: "Brand Narrative Retreat — Zanzibar", type: "Retreat", wide: false, symbol: "○" },
  { label: "Podcast — The Story Engineer Ep. 12", type: "Media", wide: false, symbol: "●" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 relative bg-[#060606] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[#C9A84C]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">Me in Action</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Where I<br /><span className="text-[#C9A84C]">Show Up</span>
            </h2>
          </div>
          <p className="text-[#A09880] max-w-xs text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden border border-[#181818] hover:border-[#C9A84C]/35 transition-all duration-500 cursor-pointer ${item.wide ? "col-span-2" : ""}`}
              style={{ aspectRatio: item.wide ? "2/1" : "1/1", background: "linear-gradient(135deg,#111009 0%,#0A0908 100%)" }}
            >
              {/* Abstract visual placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className={`rounded-full bg-[#C9A84C]/8 flex items-center justify-center`} style={{ width: item.wide ? 100 : 70, height: item.wide ? 100 : 70 }}>
                    <span className="text-[#C9A84C]/40" style={{ fontSize: item.wide ? 36 : 26 }}>{item.symbol}</span>
                  </div>
                  <div className="absolute -inset-3 border border-[#C9A84C]/8 rounded-full" style={{ animation: `spin ${10 + i * 2}s linear infinite` }} />
                </div>
              </div>

              {/* Hover tint */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/4 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-60 group-hover:opacity-100 transition-all duration-400">
                <div className="h-px w-6 bg-[#C9A84C] mb-2" />
                <p className="text-[9px] text-[#C9A84C] tracking-widest uppercase">{item.type}</p>
                <p className="text-[11px] text-[#F0EDE6] mt-0.5">{item.label}</p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-all duration-400" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}