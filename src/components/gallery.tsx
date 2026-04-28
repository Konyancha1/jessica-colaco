import uan1 from '../assets/uan-summit2.png';
import uan2 from '../assets/uan summit 1.png';
import uan3 from '../assets/uan3.png';
import ms1 from '../assets/ms1.png';
import ms2 from '../assets/ms2.png';
import sa1 from '../assets/sa1.jpg';
import sa2 from '../assets/sa2.jpg';

const galleryItems = [

  { label: "UAN Leadership Summit", type: "Speaking", wide: true, image: uan1},
  { label: "UAN Leadership Summit", type: "Speaking", wide: false, image: uan2 },
  { label: "Networking Masterclass", type: "Workshop", wide: false, image: ms2 },
  { label: "Networking Masterclass", type: "Workshop", wide: false, image: ms1 },
  { label: "Salons Assured - Training", type: "Workshop", wide: false, image: sa1 },
  { label: "Salons Assured - Training", type: "Workshop", wide: false, image: sa2 },
  { label: "UAN Leadership Summit", type: "Speaking", wide: true, image: uan3},
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 relative bg-[#060606] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[#C9A84C]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">Me in Action</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Where I<br /><span className="text-[#C9A84C]">Show Up</span>
            </h2>
          </div>
          <p className="text-[#A09880] max-w-xs text-sm leading-relaxed">
            From keynote stages to intimate workshops — here's a look at where I've been showing up.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden border border-[#181818] hover:border-[#C9A84C]/35 transition-all duration-500 cursor-pointer ${item.wide ? "col-span-2" : ""}`}
              style={{ aspectRatio: item.wide ? "2/1" : "1/1" }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark overlay always present, deepens on hover */}
              <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-all duration-500" />

              {/* Gold hover tint */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/8 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-[#0A0A0A]/90 to-transparent translate-y-1 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-400">
                <div className="h-px w-6 bg-[#C9A84C] mb-2" />
                <p className="text-[9px] text-[#C9A84C] tracking-widest uppercase">{item.type}</p>
                <p className="text-[11px] text-[#F0EDE6] mt-0.5">{item.label}</p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-all duration-400" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}