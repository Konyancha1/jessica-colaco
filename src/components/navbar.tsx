import { useState } from "react";

interface NavProps {
  scrolled: boolean;
}

const links = ["About", "Services", "Masterclass", "Gallery", "Blog", "Book"];

export default function Nav({ scrolled }: NavProps) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A84C]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Personal logo / name mark */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[#C9A84C]/60 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
            <span className="font-display text-[#C9A84C] text-sm font-bold">JC</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[#F0EDE6] text-sm tracking-widest">JESSICA</span>
            <span className="text-[10px] text-[#A09880] tracking-[0.25em] uppercase">COLACO</span>
          </div>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xs tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors duration-300"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Book")}
            className="px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
          >
            Work With Me
          </button>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-[#C9A84C]" onClick={() => setOpen(!open)}>
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-t border-[#C9A84C]/20 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}