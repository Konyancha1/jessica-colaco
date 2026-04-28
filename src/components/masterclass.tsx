import { useState } from "react";

const modules = [
  { num: "01", title: "The Narrative Blueprint", desc: "Discover the foundational structure behind every compelling story — and learn how to map your own narrative arc with clarity and intention." },
  { num: "02", title: "AI as Your Story Partner", desc: "Explore how to use AI tools to accelerate your storytelling process — from ideation to refinement — without losing your authentic voice." },
  { num: "03", title: "The Velocity Method", desc: "A proven framework for communicating complex ideas quickly and memorably, whether you're on a stage, in a boardroom, or online." },
  { num: "04", title: "Cross-Sector Storytelling", desc: "Learn how to adapt your narrative for different industries, audiences, and formats — so your story lands every time, everywhere." },
  { num: "05", title: "Live Story Lab", desc: "Put it all into practice in a live, interactive session. Get real-time feedback, refine your delivery, and leave with a story you're proud to tell." },
];

const highlights = [
  { label: "5 Modules", sub: "Structured for real-world application" },
  { label: "Live Sessions", sub: "Interactive, not just informative" },
  { label: "AI Toolkit", sub: "Tools you can use immediately" },
  { label: "Community", sub: "A space for growth & connection" },
];

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfj2dss8Ur585n01o4MknyYJyw_i9BFy9Q2N6QWJTmC3bvZ-Zb-J378wbxEJ6ffnyV/exec";

type FormData = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  role: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Masterclass() {
  const [activeModule, setActiveModule] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", industry: "", role: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", industry: "", role: "" });
    } catch {
      setStatus("error");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setStatus("idle"), 400);
  };

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
              StoryVelocity is a transformative masterclass designed for professionals who want to communicate with clarity, confidence, and impact. Whether you're building a brand, leading a team, or stepping onto a stage — your story is your greatest asset.
            </p>
            <p className="text-[#A09880] leading-relaxed mb-10">
              Over five immersive modules, you'll learn how to craft, refine, and deliver narratives that move people — combining timeless storytelling principles with the power of modern AI tools.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((h) => (
                <div key={h.label} className="border-l-2 border-[#C9A84C] pl-4">
                  <p className="font-semibold text-[#F0EDE6] text-sm">{h.label}</p>
                  <p className="text-xs text-[#555]">{h.sub}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="group relative px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow"
            >
              <span className="relative z-10">Sign Up for Masterclass</span>
              <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
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

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 bg-[#0D0C09] border border-[#C9A84C]/20 w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full border border-[#C9A84C] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#C9A84C] text-2xl">✓</span>
                </div>
                <h3 className="font-display text-2xl text-[#F0EDE6] mb-3">You're In!</h3>
                <p className="text-[#A09880] text-sm leading-relaxed mb-2">
                  Check your inbox — a confirmation email is on its way.
                </p>
                <p className="text-[#555] text-xs mb-8">Jessica will be in touch with session details soon.</p>
                <button onClick={closeModal} className="px-6 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C]/10 transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-1">StoryVelocity</p>
                    <h3 className="font-display text-2xl text-[#F0EDE6]">Reserve Your Spot</h3>
                  </div>
                  <button onClick={closeModal} className="text-[#555] hover:text-[#F0EDE6] transition-colors text-xl leading-none">×</button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Jessica Colaco" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "jessica@example.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+254 700 000 000" },
                    { name: "industry", label: "Industry", type: "text", placeholder: "e.g. Technology, Finance, Media" },
                    { name: "role", label: "Role / Title", type: "text", placeholder: "e.g. Founder, Manager, Consultant" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555] mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        value={form[field.name as keyof FormData]}
                        onChange={handleChange}
                        className="w-full bg-[#080808] border border-[#1E1E1E] text-[#F0EDE6] text-sm px-4 py-3 placeholder:text-[#333] focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                      />
                    </div>
                  ))}

                  {status === "error" && (
                    <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold hover:bg-[#F0C040] transition-colors disabled:opacity-50"
                  >
                    {status === "submitting" ? "Submitting..." : "Sign Me Up"}
                  </button>

                  <p className="text-[10px] text-[#333] text-center">You'll receive a confirmation email immediately after signing up.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}