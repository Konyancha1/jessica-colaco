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
                <p className="text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase">Tech Entrepreneur · Leadership &amp; Communication Trainer</p>
                <p className="text-sm text-[#F0EDE6] mt-1 font-display">Jessica Colaco</p>
              </div>
            </div>
            <div className="absolute -right-5 top-16 bg-[#C9A84C] text-[#0A0A0A] px-5 py-3 z-20">
              <p className="text-[10px] font-bold tracking-widest uppercase">AI-Powered</p>
              <p className="text-[10px] tracking-widest uppercase">Narrative Coach</p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A84C]/15 z-0" />
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">My Story</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              I Live at the<br />
              <span className="text-[#C9A84C]">Intersection</span><br />
              of Code & Story
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-5">
              JESSICA COLACO is a public speaker, trainer, and thought leader passionate about equipping individuals and organizations with the skills they need to thrive in a fast-changing world.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-5">
              At the intersection of leadership, communication and technology, she delivers transformative training experiences that empower people to think boldly, speak confidently, and lead with intention.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-10">
              Through her work, Jessica has built a reputation for breaking down complex ideas—whether in AI, storytelling, or personal leadership—into practical, actionable insights that audiences can immediately apply.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-10">
              Her sessions are not just informative; they are deeply engaging, interactive, and designed to shift mindsets. From emerging professionals to seasoned leaders, Jessica challenges her audiences to step into clarity, own their voice, and build influence that drives real impact.
            </p>

            <p className="text-[#A09880] leading-relaxed mb-10">
              Beyond the stage, she is committed to creating spaces and platforms that support growth, connection, and continuous learning—because she believes that powerful communication and adaptive leadership are no longer optional, but essential.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◈", label: "AI Storytelling Tools", desc: "Practical tools to craft and communicate ideas using AI" },
                { icon: "◉", label: "Creative × Tech Bridge", desc: "Where technology meets human-centred storytelling" },
                { icon: "◇", label: "Accelerated Learning", desc: "Fast, immersive sessions that create lasting mindset shifts" },
                { icon: "◎", label: "Narrative Coaching", desc: "1:1 and group work to help you find and own your voice" },
              ].map((item) => (
                <div key={item.label} className="border border-[#1E1E1E] p-4 hover:border-[#C9A84C]/40 transition-colors group">
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  <p className="text-xs font-semibold mt-2 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">{item.label}</p>
                  <p className="text-[10px] text-[#555] mt-1 leading-relaxed">{item.desc}</p>
                </div>
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