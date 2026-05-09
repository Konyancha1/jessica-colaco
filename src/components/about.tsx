import jc from '../assets/jc.png';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[#C9A84C]/3 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 aspect-3/4 border border-[#C9A84C]/20 overflow-hidden">
              <img
                src={jc}
                alt="Jessica Colaco"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-[#0A0A0A] to-transparent">
                <div className="h-px w-full bg-linear-to-r from-[#C9A84C] to-transparent mb-3" />
                <p className="text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase">Tech Entrepreneur · Ecosystem Builder</p>
                <p className="text-sm text-[#F0EDE6] mt-1 font-display">Jessica Colaco</p>
              </div>
            </div>
            <div className="absolute -right-5 top-16 bg-[#C9A84C] text-[#0A0A0A] px-5 py-3 z-20">
              <p className="text-[10px] font-bold tracking-widest uppercase">Entrepreneur</p>
              <p className="text-[10px] tracking-widest uppercase">Ecosystem Builder</p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A84C]/15 z-0" />
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">My Story</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              I operate at the<br />
              <span className="text-[#C9A84C]">Intersection</span><br />
              of the creative sector, technology, and talent
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-5">
              Jessica Colaco is an entrepreneur and ecosystem builder working at the intersection of the creative sector, technology, and talent. With 18+ years of experience, she has co-founded ventures that shaped Africa's innovation story - most notably iHub (2010), widely accoladed for the rise of Kenya's "Silicon Savannah," and Brave, an HR-tech company focused on strategic talent acquisition, workforce planning, and executive search for tech and product talent in Africa.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-5">
              She is a dynamic global speaker and thought leader, featured at SXSW (2014, 2015) and a guest lecturer at Harvard (2017, 2018). Her talks span ecosystem design, tech entrepreneurship, and talent - plus her favorite edge: intentional serendipity, aka building networks that don't just look impressive…..they actually change your life.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-10">
              She's known for turning big ideas into practical, people-first platforms that scale - with community at the center, always. That work has earned her recognition as a TED Fellow and a proud Harambean.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◈", label: "Ecosystem Design", desc: "Co-founder of iHub, the catalyst behind Kenya's Silicon Savannah" },
                { icon: "◉", label: "Tech & Talent", desc: "Brave: HR-tech for strategic talent acquisition across Africa" },
                { icon: "◇", label: "Global Speaker", desc: "SXSW, Harvard — spanning entrepreneurship, talent & serendipity" },
                { icon: "◎", label: "Community Builder", desc: "People-first platforms that scale with community at the center" },
              ].map((item) => (
                <div key={item.label} className="border border-[#1E1E1E] p-4 hover:border-[#C9A84C]/40 transition-colors group">
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  <p className="text-xs font-semibold mt-2 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">{item.label}</p>
                  <p className="text-[10px] text-[#555] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["TED Fellow", "Harambean", "18+ Years", "SXSW Speaker", "Harvard Lecturer"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-8 bg-[#C9A84C]/40" />
              <p className="font-display text-lg text-[#C9A84C]/60 italic">Jessica Colaco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}