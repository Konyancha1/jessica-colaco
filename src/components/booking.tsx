import { useState } from "react";

const plans = [
  {
    duration: "45 min",
    price: "$50",
    label: "Strategy Session",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Lorem ipsum dolor sit", "Consectetur adipiscing", "Sed do eiusmod tempor", "Ut labore et dolore"],
    popular: false,
  },
  {
    duration: "60 min",
    price: "$100",
    label: "Deep Dive",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    features: ["Nemo enim ipsam voluptatem", "Quia voluptas sit aspernatur", "Sed quia consequuntur", "Magni dolores ratione", "At vero eos et accusamus"],
    popular: true,
  },
];

export default function Booking() {
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && selected !== null) setSubmitted(true);
  };

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
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.
          </p>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          {plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`relative border p-8 cursor-pointer transition-all duration-400 ${selected === i ? "border-[#C9A84C] bg-[#0F0E0B]" : "border-[#1E1E1E] hover:border-[#C9A84C]/25 bg-[#080808]"} ${plan.popular ? "md:-translate-y-2" : ""}`}
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
                <div className={`w-5 h-5 border rounded-full flex items-center justify-center mt-1 transition-colors ${selected === i ? "border-[#C9A84C] bg-[#C9A84C]" : "border-[#2A2A2A]"}`}>
                  {selected === i && <div className="w-2 h-2 rounded-full bg-[#0A0A0A]" />}
                </div>
              </div>
              <p className="text-xs text-[#A09880] leading-relaxed mb-6">{plan.description}</p>
              <div className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-[#C9A84C] text-xs">◈</span>
                    <span className="text-xs text-[#A09880]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        {!submitted ? (
          <div className="max-w-xl mx-auto border border-[#1A1A1A] p-8 bg-[#080808]">
            <p className="text-[10px] text-[#555] tracking-widest uppercase mb-6 text-center">
              {selected !== null ? `Selected: ${plans[selected].duration} — ${plans[selected].price}` : "Select a plan above to continue"}
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-2 block">Your Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Lorem Ipsum" className="w-full bg-[#0A0A0A] border border-[#1E1E1E] focus:border-[#C9A84C] text-[#F0EDE6] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#2A2A2A]" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-2 block">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="lorem@ipsum.com" className="w-full bg-[#0A0A0A] border border-[#1E1E1E] focus:border-[#C9A84C] text-[#F0EDE6] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#2A2A2A]" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-2 block">Tell Me About Your Story</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." className="w-full bg-[#0A0A0A] border border-[#1E1E1E] focus:border-[#C9A84C] text-[#F0EDE6] text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-[#2A2A2A]" />
              </div>
              <button onClick={handleSubmit} disabled={!form.name || !form.email || selected === null} className="mt-2 w-full py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-bold disabled:opacity-25 disabled:cursor-not-allowed hover:bg-[#F0C040] transition-colors">
                Request My Session
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto border border-[#C9A84C]/25 p-12 bg-[#080808] text-center">
            <div className="w-14 h-14 rounded-full border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
              <span className="text-[#C9A84C] text-xl">◈</span>
            </div>
            <h3 className="font-display text-3xl text-[#C9A84C] mb-3">You're In!</h3>
            <p className="text-sm text-[#A09880] leading-relaxed">
              Lorem ipsum, {form.name}. Dolor sit amet consectetur adipiscing elit sed do eiusmod at {form.email} within 24 hours — {selected !== null ? plans[selected].duration : ""}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}