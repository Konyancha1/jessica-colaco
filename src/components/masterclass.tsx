import { useState } from "react";

const modules = [
  { num: "01", title: "AI Foundations for Leaders", desc: "Move beyond basic prompts. Build a working mental model of what AI can and can't do for your business, and identify the real challenges worth automating." },
  { num: "02", title: "Workflow Automation Essentials", desc: "Learn the core principles of automation and how to map a manual, repetitive task into a streamlined AI-powered workflow." },
  { num: "03", title: "Tools in Action — Zapier, Make & n8n", desc: "Get hands-on with ChatGPT, Claude, Zapier, Make, and n8n. Connect them together to automate real tasks and cut out the busywork." },
  { num: "04", title: "Build & Ship Your Workflow", desc: "Put it all into practice. Build at least one AI-powered workflow you can take straight back into your work, with feedback from the CommonLab team." },
];

const highlights = [
  { label: "4 Evening Sessions", sub: "18, 20, 25 & 27 August · 6:00–8:00 PM" },
  { label: "iHub, Nairobi", sub: "In-person, practical, hands-on" },
  { label: "AI Toolkit", sub: "ChatGPT, Claude, Zapier, Make, n8n" },
  { label: "Real Output", sub: "Leave with a workflow you can use immediately" },
];

const INFO_SESSION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSelLbt7U56BGeu0OL0CkdCcrpFXLRn6KkbKNUKSPan6mQXtAw/viewform?usp=header";

export default function Masterclass() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="masterclass" className="py-32 px-6 relative bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[18vw] text-[#0D0D0D] leading-none whitespace-nowrap">MASTERCLASS</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Masterclass Section */}
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">CommonLab × iHub</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              AI Quick Wins<br /><span className="text-[#C9A84C]">for Leaders</span>
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-4">
              If you've been wondering how to move beyond basic AI prompts and start using AI to solve real business challenges, this masterclass is for you. Join us for 4 practical evening sessions where you'll learn how to automate workflows, improve operational efficiency, and boost productivity using tools like ChatGPT, Claude, Zapier, Make, and n8n.
            </p>
            <p className="text-[#A09880] leading-relaxed mb-10">
              Whether you're a business owner, team lead, consultant, marketer, creative, or operations professional, you'll leave with practical AI skills and at least one AI-powered workflow you can immediately apply in your work.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="font-semibold text-[#F0EDE6] text-sm">{h.label}</p>
                  <p className="text-xs text-[#555]">{h.sub}</p>
                </div>
              ))}
            </div>

            <div className="mb-10 border border-[#1A1A1A] bg-[#0D0C09] px-6 py-5">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <p className="text-[#F0EDE6] text-sm font-semibold">KES 12,000 <span className="text-[#555] font-normal">— single ticket</span></p>
                <p className="text-[#C9A84C] text-sm font-semibold">KES 10,000pp <span className="text-[#555] font-normal">— bring a colleague</span></p>
              </div>
              <p className="text-xs text-[#555]">Seats are limited. Call 0793 014 798 for more information.</p>
            </div>

            <a
              href={INFO_SESSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow"
            >
              <span className="relative z-10">Register Now</span>
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