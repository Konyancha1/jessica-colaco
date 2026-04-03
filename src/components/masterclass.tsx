import { useState } from "react";

const modules = [
  { num: "01", title: "The Narrative Blueprint", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { num: "02", title: "AI as Your Story Partner", desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute." },
  { num: "03", title: "The Velocity Method", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam." },
  { num: "04", title: "Cross-Sector Storytelling", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos." },
  { num: "05", title: "Live Story Lab", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti." },
];

export default function Masterclass() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="masterclass" className="py-32 px-6 relative bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[18vw] text-[#0D0D0D] leading-none whitespace-nowrap">MASTERCLASS</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">My Flagship Program</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              Story<span className="text-[#C9A84C]">Velocity</span><br />Masterclass
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="text-[#A09880] leading-relaxed mb-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "5 Modules", sub: "Lorem ipsum dolor sit" },
                { label: "Live Sessions", sub: "Consectetur adipiscing" },
                { label: "AI Toolkit", sub: "Sed do eiusmod tempor" },
                { label: "Community", sub: "Incididunt ut labore" },
              ].map((h) => (
                <div key={h.label} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="font-semibold text-[#F0EDE6] text-sm">{h.label}</p>
                  <p className="text-xs text-[#555]">{h.sub}</p>
                </div>
              ))}
            </div>

            <button className="group relative px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow">
              <span className="relative z-10">Sign Up for Masterclass</span>
              <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-6">Program Curriculum</p>
            {modules.map((mod, i) => (
              <div key={mod.num} className={`border-b border-[#141414] cursor-pointer transition-all duration-300 ${activeModule === i ? "bg-[#0D0C09]" : "hover:bg-[#0C0B08]"}`} onClick={() => setActiveModule(i)}>
                <div className="flex items-center gap-4 p-5">
                  <span className="font-display text-2xl text-[#C9A84C]/30 w-8">{mod.num}</span>
                  <p className={`flex-1 text-sm font-semibold transition-colors ${activeModule === i ? "text-[#C9A84C]" : "text-[#F0EDE6]"}`}>{mod.title}</p>
                  <span className={`text-[#C9A84C] transition-transform duration-300 ${activeModule === i ? "rotate-90" : ""}`}>›</span>
                </div>
                {activeModule === i && (
                  <div className="px-5 pb-5 pl-16">
                    <p className="text-sm text-[#A09880] leading-relaxed">{mod.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}