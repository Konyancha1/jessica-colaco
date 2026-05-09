const socials = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jessicacolaco/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    href: "https://instagram.com/jessicacolaco/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@itsmejessicacolaco",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    title: "Newsletter",
    href: "https://www.linkedin.com/newsletters/african-creative-stack-7425135250516865025/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About", id: "about" },
  { label: "Masterclasses", id: "masterclass" },
  { label: "Gallery", id: "gallery" },
  { label: "Blog", id: "blog" },
  { label: "Work With Me", id: "book" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#161616] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center">
                <span className="font-display text-[#C9A84C] text-sm">JC</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[#F0EDE6] tracking-widest text-sm">JESSICA COLACO</span>
                <span className="text-[9px] text-[#555] tracking-[0.25em] uppercase mt-0.5">Tech Entrepreneur · Ecosystem Builder</span>
              </div>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs">
              Entrepreneur, ecosystem builder, and global speaker working at the intersection of the creative sector, technology, and talent.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.title}
                  title={s.title}
                  className="w-8 h-8 border border-[#1E1E1E] text-[#555] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all flex items-center justify-center"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#444] mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-sm text-[#444] hover:text-[#C9A84C] transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Say Hello */}
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#444] mb-5">Say Hello</p>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="mailto:jc@jessicacolaco.com"
                className="text-sm text-[#444] hover:text-[#C9A84C] transition-colors"
              >
                jc@jessicacolaco.com
              </a>
              <p className="text-sm text-[#444]">Nairobi, Kenya</p>
              <p className="text-sm text-[#444]">& Globally Remote</p>
            </div>

            {/* Newsletter CTA */}
            <div className="border border-[#1A1A1A] p-4 mt-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1">Newsletter</p>
              <p className="text-xs text-[#444] mb-3 leading-relaxed">African Creative Stack — dispatches on creativity, tech & talent.</p>
              <a
                href="https://www.linkedin.com/newsletters/african-creative-stack-7425135250516865025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] hover:text-[#F0C040] transition-colors flex items-center gap-1.5"
              >
                Subscribe →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111] pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-[#2A2A2A]">© 2026 Jessica Colaco. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <button key={l} className="text-xs text-[#2A2A2A] hover:text-[#555] transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}