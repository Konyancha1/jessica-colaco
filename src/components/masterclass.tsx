import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { masterclassQuery } from "../lib/queries";

type MasterclassModule = {
  title: string;
  description: string;
};

type MasterclassHighlight = {
  label: string;
  sub: string;
};

type MasterclassData = {
  _id: string;
  title: string;
  description: string;
  modules: MasterclassModule[];
  highlights: MasterclassHighlight[];
  price: string;
  colleaguePrice: string;
  contactPhone: string;
  registrationUrl: string;
};

export default function Masterclass() {
  const [masterclass, setMasterclass] = useState<MasterclassData | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch<MasterclassData | null>(masterclassQuery)
      .then((data) => {
        setMasterclass(data);
      })
      .catch((error) => {
        console.error("Error fetching masterclass from Sanity:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        id="masterclass"
        className="py-32 px-6 relative bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto text-[#A09880]">
          Loading masterclass...
        </div>
      </section>
    );
  }

  if (!masterclass) {
    return null;
  }

  const modules = masterclass.modules ?? [];
  const highlights = masterclass.highlights ?? [];

  return (
    <section id="masterclass" className="py-32 px-6 relative bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[18vw] text-[#0D0D0D] leading-none whitespace-nowrap">
          MASTERCLASS
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Masterclass information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />

              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">
                CommonLab × iHub
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              {masterclass.title}
            </h2>

            <p className="text-[#A09880] leading-relaxed mb-10">
              {masterclass.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={`${highlight.label}-${index}`}
                  className="border-l-2 border-[#C9A84C] pl-4"
                >
                  <p className="font-semibold text-[#F0EDE6] text-sm">
                    {highlight.label}
                  </p>

                  <p className="text-xs text-[#555]">
                    {highlight.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mb-10 border border-[#1A1A1A] bg-[#0D0C09] px-6 py-5">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <p className="text-[#F0EDE6] text-sm font-semibold">
                  {masterclass.price}
                  <span className="text-[#555] font-normal">
                    {" "}— single ticket
                  </span>
                </p>

                <p className="text-[#C9A84C] text-sm font-semibold">
                  {masterclass.colleaguePrice}
                  <span className="text-[#555] font-normal">
                    {" "}— bring a colleague
                  </span>
                </p>
              </div>

              <p className="text-xs text-[#555]">
                Seats are limited. Call {masterclass.contactPhone} for more
                information.
              </p>
            </div>

            {/* Registration button */}
            <a
              href={masterclass.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-bold overflow-hidden hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-shadow"
            >
              <span className="relative z-10">Register Now</span>

              <div className="absolute inset-0 bg-[#F0C040] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Curriculum */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-6">
              Program Curriculum
            </p>

            {modules.map((module, index) => (
              <div
                key={`${module.title}-${index}`}
                className={`border-b border-[#141414] cursor-pointer transition-all duration-300 ${
                  activeModule === index
                    ? "bg-[#0D0C09]"
                    : "hover:bg-[#0C0B08]"
                }`}
                onClick={() => setActiveModule(index)}
              >
                <div className="flex items-center gap-4 p-5">
                  <span className="font-display text-2xl text-[#C9A84C]/30 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className={`flex-1 text-sm font-semibold transition-colors ${
                      activeModule === index
                        ? "text-[#C9A84C]"
                        : "text-[#F0EDE6]"
                    }`}
                  >
                    {module.title}
                  </p>

                  <span
                    className={`text-[#C9A84C] transition-transform duration-300 ${
                      activeModule === index ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </div>

                {activeModule === index && (
                  <div className="px-5 pb-5 pl-16">
                    <p className="text-sm text-[#A09880] leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}