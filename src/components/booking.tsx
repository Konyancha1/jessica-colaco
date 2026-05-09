import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/jessicacolaco"; // replace with your actual Calendly base URL

const plans = [
  {
    duration: "45 min",
    price: "$50",
    label: "Clarity & Strategy Call",
    description: "Feeling stuck, scattered, or unsure what to focus on next? This session is designed to give you direction. Together, we'll look at where you are, what's not working, and where the real opportunity is — so you can stop guessing and start moving with intention.",
    features: [
      "Clear direction on your next steps (career, brand, or business)",
      "Identification of what's holding you back — and how to fix it",
      "Focus areas that actually move the needle",
      "Practical, actionable steps you can implement immediately",
    ],
    bestFor: "Anyone who needs clarity, structure, and a plan to move forward.",
    popular: false,
    calendly: `${CALENDLY_URL}/clarity-strategy-call`,
  },
  {
    duration: "60 min",
    price: "$100",
    label: "Deep Dive Strategy Session",
    description: "This is for you if you're ready to go beyond clarity and start building. In this session, we don't just talk — we refine, structure, and map out your next moves together. Whether it's your personal brand, content, positioning, or how to leverage AI in your work, you'll leave with a strategy you can actually execute.",
    features: [
      "A personalized strategy tailored to your goals",
      "Refined positioning and messaging (how you present yourself and your work)",
      "Content or visibility direction (what to say, how to say it, where to show up)",
      "Live ideation and structured next steps you can immediately act on",
    ],
    bestFor: "Individuals who are ready to execute, refine their approach, and accelerate their growth.",
    popular: true,
    calendly: `${CALENDLY_URL}/deep-dive-strategy-session`,
  },
];

export default function Booking() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="book" className="py-32 px-6 relative bg-[#060606]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#C9A84C]/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">Work With Me</span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
            Book a <span className="text-[#C9A84C]">Consultation</span>
          </h2>
          <p className="text-[#A09880] max-w-md mx-auto text-sm leading-relaxed">
            Whether you need clarity on your next step or a full strategy session — choose the format that fits where you are right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`relative border p-8 cursor-pointer transition-all duration-400 ${
                selected === i
                  ? "border-[#C9A84C] bg-[#0F0E0B]"
                  : "border-[#1E1E1E] hover:border-[#C9A84C]/25 bg-[#080808]"
              } ${plan.popular ? "md:-translate-y-2" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] text-[9px] tracking-[0.2em] uppercase font-bold px-4 py-1">
                  Most Popular
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[10px] text-[#555] tracking-widest uppercase mb-1">{plan.duration}</p>
                  <p className="font-display text-4xl text-[#C9A84C]">{plan.price}</p>
                  <p className="text-sm text-[#F0EDE6] mt-1">{plan.label}</p>
                </div>
                <div
                  className={`w-5 h-5 border rounded-full flex items-center justify-center mt-1 transition-colors ${
                    selected === i ? "border-[#C9A84C] bg-[#C9A84C]" : "border-[#2A2A2A]"
                  }`}
                >
                  {selected === i && <div className="w-2 h-2 rounded-full bg-[#0A0A0A]" />}
                </div>
              </div>

              <p className="text-xs text-[#A09880] leading-relaxed mb-6">{plan.description}</p>

              <p className="text-[9px] text-[#555] tracking-widest uppercase mb-3">What you'll walk away with</p>
              <div className="flex flex-col gap-2 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <span className="text-[#C9A84C] text-xs mt-0.5 shrink-0">◈</span>
                    <span className="text-xs text-[#A09880] leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1A1A1A] pt-4 mb-8">
                <p className="text-[9px] text-[#555] tracking-widest uppercase mb-1">Best for</p>
                <p className="text-xs text-[#A09880] leading-relaxed italic">{plan.bestFor}</p>
              </div>

              <a
                href={plan.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block w-full py-3.5 text-center text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F0C040]"
              >
                Book This Session →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#555] mt-8">
          You'll be redirected to Calendly to pick a time that works for you.
        </p>
      </div>
    </section>
  );
}