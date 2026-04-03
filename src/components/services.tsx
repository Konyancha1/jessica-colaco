const services = [
  {
    number: "01",
    title: "AI Coaching Tools",
    subtitle: "For the Modern Storyteller",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",
    tags: ["Prompt Engineering", "Story Frameworks", "Real-time Analysis"],
    cta: "Explore Tools",
  },
  {
    number: "02",
    title: "Creative × Tech Lab",
    subtitle: "Where Sectors Collide",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    tags: ["Cross-sector Programs", "Industry Workshops", "Case Studies"],
    cta: "Enter the Lab",
  },
  {
    number: "03",
    title: "Rapid Story Learning",
    subtitle: "Compress Years into Weeks",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    tags: ["Accelerated Method", "AI Feedback", "Story Scoring"],
    cta: "Learn Faster",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="absolute right-0 top-0 w-px h-full bg-linear-to-b from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">What I Offer</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              My Tools for<br />
              <span className="text-[#C9A84C]">Your Chapter</span>
            </h2>
          </div>
          <p className="text-[#A09880] max-w-sm text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.number} className="group relative border border-[#1E1E1E] p-8 hover:border-[#C9A84C]/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-4 right-6 font-display text-7xl text-[#141414] group-hover:text-[#C9A84C]/8 transition-colors duration-500 select-none">{s.number}</div>
              <div className="relative z-10">
                <div className="w-8 h-px bg-[#C9A84C] mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="text-[10px] text-[#555] tracking-widest uppercase mb-2">{s.subtitle}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-4 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors duration-300">{s.title}</h3>
                <p className="text-[#A09880] text-sm leading-relaxed mb-8">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[9px] px-3 py-1 border border-[#C9A84C]/25 text-[#C9A84C] tracking-widest uppercase">{tag}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#555] group-hover:text-[#C9A84C] transition-colors duration-300">
                  <span>{s.cta}</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A84C] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}