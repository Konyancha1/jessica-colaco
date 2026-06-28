import { useState, useRef, useEffect } from "react";

interface NavProps {
  scrolled: boolean;
}

export default function Nav({ scrolled }: NavProps) {
  const [open, setOpen] = useState(false);
  const [masterclassOpen, setMasterclassOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileMasterclassOpen, setMobileMasterclassOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  const masterclassRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setMasterclassOpen(false);
    setWorkOpen(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (masterclassRef.current && !masterclassRef.current.contains(e.target as Node)) {
        setMasterclassOpen(false);
      }
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass =
    "text-xs tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-1";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A84C]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
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

          {/* About */}
          <button onClick={() => scrollTo("about")} className={navLinkClass}>
            About
          </button>

          {/* Masterclasses dropdown */}
          <div className="relative" ref={masterclassRef}>
            <button
              onClick={() => setMasterclassOpen((v) => !v)}
              className={navLinkClass}
            >
              Masterclasses
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className={`transition-transform duration-300 ${masterclassOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {masterclassOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-[#0D0C09] border border-[#C9A84C]/20 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D0C09] border-l border-t border-[#C9A84C]/20 rotate-45" />
                <button
                  onClick={() => scrollTo("masterclass")}
                  className="w-full text-left px-5 py-3 group"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">Africa Speaks</p>
                  <p className="text-[10px] text-[#555] mt-0.5">4-week storytelling masterclass</p>
                </button>
                <div className="h-px bg-[#1A1A1A] mx-4" />
                <button
                  onClick={() => scrollTo("aiquickwins")}
                  className="w-full text-left px-5 py-3 group"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">AI Quick Wins</p>
                  <p className="text-[10px] text-[#555] mt-0.5">Practical AI tools, fast results</p>
                </button>
              </div>
            )}
          </div>

          {/* Gallery */}
          <button onClick={() => scrollTo("gallery")} className={navLinkClass}>
            Gallery
          </button>

          {/* Blog */}
          <button onClick={() => scrollTo("blog")} className={navLinkClass}>
            Blog
          </button>

          {/* Work With Me dropdown */}
          <div className="relative" ref={workRef}>
            <button
              onClick={() => setWorkOpen((v) => !v)}
              className="px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 flex items-center gap-2"
            >
              Work With Me
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className={`transition-transform duration-300 ${workOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {workOpen && (
              <div className="absolute top-full right-0 mt-4 w-56 bg-[#0D0C09] border border-[#C9A84C]/20 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="absolute -top-2 right-5 w-3 h-3 bg-[#0D0C09] border-l border-t border-[#C9A84C]/20 rotate-45" />

                <a
                  href="https://calendly.com/jessicacolaco/45min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 group"
                  onClick={() => setWorkOpen(false)}
                >
                  <div className="w-6 h-6 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all">
                    <span className="text-[#C9A84C] text-[9px]">45</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">Book a Session</p>
                    <p className="text-[10px] text-[#555] mt-0.5">45-minute call</p>
                  </div>
                </a>

                <div className="h-px bg-[#1A1A1A] mx-4" />

                <a
                  href="https://calendly.com/jessicacolaco/60min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 group"
                  onClick={() => setWorkOpen(false)}
                >
                  <div className="w-6 h-6 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all">
                    <span className="text-[#C9A84C] text-[9px]">60</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">Book a Session</p>
                    <p className="text-[10px] text-[#555] mt-0.5">60-minute call</p>
                  </div>
                </a>

                <div className="h-px bg-[#1A1A1A] mx-4" />

                <a
                  href="mailto:jessica@jessicacolaco.com"
                  className="flex items-center gap-3 px-5 py-3 group"
                  onClick={() => setWorkOpen(false)}
                >
                  <div className="w-6 h-6 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all">
                    <span className="text-[#C9A84C] text-[9px]">✉</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">Email Me</p>
                    <p className="text-[10px] text-[#555] mt-0.5">For speaking & partnerships</p>
                  </div>
                </a>
              </div>
            )}
          </div>
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-t border-[#C9A84C]/20 px-6 py-8 flex flex-col gap-1">

          <button
            onClick={() => scrollTo("about")}
            className="text-left text-sm tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors py-3"
          >
            My Story
          </button>

          <div className="border-t border-[#1A1A1A]">
            <button
              onClick={() => setMobileMasterclassOpen((v) => !v)}
              className="w-full text-left text-sm tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors py-3 flex items-center justify-between"
            >
              Masterclasses
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${mobileMasterclassOpen ? "rotate-180" : ""}`}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileMasterclassOpen && (
              <div className="pl-4 pb-3 flex flex-col gap-3">
                <button onClick={() => scrollTo("masterclass")} className="text-left text-xs tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#C9A84C] transition-colors">
                  Africa Speaks
                </button>
                <button onClick={() => scrollTo("aiquickwins")} className="text-left text-xs tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#C9A84C] transition-colors">
                  AI Quick Wins
                </button>
              </div>
            )}
          </div>

          <div className="border-t border-[#1A1A1A]">
            <button
              onClick={() => scrollTo("gallery")}
              className="w-full text-left text-sm tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors py-3"
            >
              Me in Action
            </button>
          </div>

          <div className="border-t border-[#1A1A1A]">
            <button
              onClick={() => scrollTo("blog")}
              className="w-full text-left text-sm tracking-[0.2em] uppercase text-[#A09880] hover:text-[#C9A84C] transition-colors py-3"
            >
              My Writing
            </button>
          </div>

          <div className="border-t border-[#1A1A1A]">
            <button
              onClick={() => setMobileWorkOpen((v) => !v)}
              className="w-full text-left text-sm tracking-[0.2em] uppercase text-[#C9A84C] py-3 flex items-center justify-between"
            >
              Work With Me
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${mobileWorkOpen ? "rotate-180" : ""}`}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileWorkOpen && (
              <div className="pl-4 pb-3 flex flex-col gap-4">
                <a
                  href="https://calendly.com/jc-jessicacolaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#C9A84C] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Book a Session — 45 min
                </a>
                <a
                  href="https://calendly.com/jc-jessicacolaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#C9A84C] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Book a Session — 60 min
                </a>
                <a
                  href="mailto:jc@jessicacolaco.com"
                  className="text-xs tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#C9A84C] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Email Me
                </a>
              </div>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}