import { useState } from "react";
import poster from '../assets/jc-masterclass.jpeg';

const modules = [
  { num: "01", title: "The Narrative Blueprint", desc: "Discover the foundational structure behind every compelling story — and learn how to map your own narrative arc with clarity and intention." },
  { num: "02", title: "AI as Your Story Partner", desc: "Explore how to use AI tools to accelerate your storytelling process — from ideation to refinement — without losing your authentic voice." },
  { num: "03", title: "Voice, Presence & Delivery", desc: "Build the confidence to own any room — virtual or physical. Learn how to structure and deliver ideas that land, resonate, and inspire action." },
  { num: "04", title: "Live Story Lab", desc: "Put it all into practice in a live, interactive session. Get real-time feedback, refine your delivery, and leave with a story you're proud to tell." },
];

const highlights = [
  { label: "4 Modules", sub: "Structured for real-world application" },
  { label: "Live Sessions", sub: "2-hour interactive online sessions" },
  { label: "AI Toolkit", sub: "Tools you can use immediately" },
  { label: "Coaching & Community", sub: "Free 30-min coaching session with JC" },
];

const INFO_SESSION_LINK = "https://forms.gle/9U1H7xKpvo6d47JY6";

export default function Masterclass() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="masterclass" className="py-32 px-6 relative bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[18vw] text-[#0D0D0D] leading-none whitespace-nowrap">MASTERCLASS</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Info Session Banner */}
        <div className="mb-20 border border-[#C9A84C]/30 bg-[#0D0C09] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]" />
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 pl-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">Free Info Session</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-[#F0EDE6] mb-3">
                A Powerful Virtual Session on <span className="text-[#C9A84C]">Networking, Public Speaking & Storytelling</span>
              </h3>
              <p className="text-[#A09880] text-sm leading-relaxed mb-5 max-w-xl">
                We'll explore how to build confidence in communication, structure and deliver your ideas clearly, strengthen your networking skills, and use AI tools to refine your messaging. Whether you're a student, professional, entrepreneur, or creative - this session is for you.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
              {["Wednesday, 20th May 2026", "6:30 PM – 7:30 PM", "Online"].map((badge) => (
                <span
                  key={badge}
                  className="text-[12px] tracking-[0.08em] uppercase px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C]"
                >
                  {badge}
                </span>
              ))}
            </div>
            </div>

            {/* Poster placeholder — replace src with your actual poster image */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <img src={poster} alt="Africa Speaks Info Session" className="w-44 h-60 object-cover" />
            </div>
          </div>

          <div className="border-t border-[#C9A84C]/10 px-10 py-4 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#555] text-xs tracking-wide">Limited spaces available. Reserve your spot today.</p>
            <a
              href={INFO_SESSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-shadow inline-block"
            >
              <span className="relative z-10">Reserve Your Free Spot →</span>
              <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Masterclass Section */}
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">Flagship Program</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              Africa<span className="text-[#C9A84C]">Speaks</span><br />Masterclass
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-4">
              A transformative masterclass for professionals, founders, leaders, and creatives who want to communicate with clarity, confidence, and impact. Whether you're building a brand, leading a team, pitching an idea, growing your influence, or stepping onto a stage — your story is one of your greatest assets.
            </p>
            <p className="text-[#A09880] leading-relaxed mb-10">
              Across four immersive modules over 4 weeks, you'll learn how to craft, refine, and deliver powerful narratives that move people, open doors, and create opportunity — combining timeless storytelling principles with modern AI tools.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((h) => (
                <div key={h.label} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="font-semibold text-[#F0EDE6] text-sm">{h.label}</p>
                  <p className="text-xs text-[#555]">{h.sub}</p>
                </div>
              ))}
            </div>

            <a
              href={INFO_SESSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow"
            >
              <span className="relative z-10">Sign Up for Masterclass</span>
              <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-6">Program Curriculum</p>
            {modules.map((mod, i) => (
              <div
                key={mod.num}
                className={`border-b border-[#141414] cursor-pointer transition-all duration-300 ${activeModule === i ? "bg-[#0D0C09]" : "hover:bg-[#0C0B08]"}`}
                onClick={() => setActiveModule(i)}
              >
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