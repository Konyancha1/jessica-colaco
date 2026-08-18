import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/jc-jessicacolaco";

const plan = {
  duration: "45 min",
  price: "$50",
  label: "Clarity & Strategy Call",
  description:
    "Feeling stuck, scattered, or unsure what to focus on next? This session is designed to give you direction. Together, we'll look at where you are, what's not working, and where the real opportunity is — so you can stop guessing and start moving with intention.",
  features: [
    "Clear direction on your next steps (career, brand, or business)",
    "Identification of what's holding you back — and how to fix it",
    "Focus areas that actually move the needle",
    "Practical, actionable steps you can implement immediately",
  ],
  bestFor: "Anyone who needs clarity, structure, and a plan to move forward.",
  calendly: CALENDLY_URL,
};

export default function Booking() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="book" className="py-32 px-6 relative bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-125 h-125 bg-[#C9A84C]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-105 h-105 bg-[#C9A84C]/4 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">
              Work With Me
            </span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
            Book a <span className="text-[#C9A84C]">Consultation</span>
          </h2>
          <p className="text-[#A09880] max-w-md mx-auto text-sm leading-relaxed">
            One focused session to get clarity on your next move — no guesswork,
            just a plan.
          </p>
        </div>

        {/* Spotlight card */}
        <div className="border border-[#1E1E1E] bg-[#080808] grid md:grid-cols-[1.4fr_1fr]">

          {/* Left: story */}
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#1A1A1A]">
            <p className="text-[10px] text-[#555] tracking-[0.25em] uppercase mb-3">
              {plan.duration} session
            </p>

            <h3 className="font-display text-3xl text-[#F0EDE6] mb-6">
              {plan.label}
            </h3>

            <p className="text-sm text-[#A09880] leading-relaxed mb-8">
              {plan.description}
            </p>

            <p className="text-[9px] text-[#555] tracking-widest uppercase mb-4">
              What you'll walk away with
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="shrink-0 w-4 h-4 rounded-full border border-[#C9A84C]/40 flex items-center justify-center mt-0.5">
                    <Check size={9} className="text-[#C9A84C]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#A09880] leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1A1A1A] pt-5">
              <p className="text-[9px] text-[#555] tracking-widest uppercase mb-1">
                Best for
              </p>
              <p className="text-sm text-[#A09880] leading-relaxed italic">
                {plan.bestFor}
              </p>
            </div>
          </div>

          {/* Right: pricing / CTA */}
          <div className="p-10 md:p-14 flex flex-col justify-between bg-[#0A0A08]">
            <div>
              <p className="text-[10px] text-[#555] tracking-[0.25em] uppercase mb-2">
                Investment
              </p>
              <p className="font-display text-6xl text-[#C9A84C] mb-1">
                {plan.price}
              </p>
              <p className="text-xs text-[#666]">one-time session</p>
            </div>

            <a
              href={plan.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group flex items-center justify-center gap-2 w-full py-4 text-center text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F0C040]"
            >
              Book This Session
              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  hovered ? "translate-x-1" : ""
                }`}
              />
            </a>

            <p className="text-center text-[11px] text-[#555] mt-4 leading-relaxed">
              You'll be redirected to Calendly to pick a time that works for
              you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}