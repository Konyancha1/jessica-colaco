import { useState, useEffect, useRef } from "react";

/* ─── Event data ───────────────────────────────────────────────── */
const EVENTS = [
  {
    id: "ai-quick-wins",
    tag: "Course · Starts July 15",
    urgent: false,
    title: "AI Quick Wins for Leaders",
    subtitle: "Practical AI workflows for non-developers",
    description:
      "Stop copy-pasting between tools. Build your first useful AI automation in 4 weeks with Make, n8n, ChatGPT, Claude, Gmail, and more.",
    meta: [
      { icon: "📅", text: "Thursdays 7:00 PM EAT · 4 weeks" },
      { icon: "📚", text: "24 lessons · 4 modules · ~485 min" },
      { icon: "💳", text: "Ksh 12,000 · Founding Cohort price" },
    ],
    badges: ["AI Workflows", "Make", "n8n", "No-Code", "Leadership"],
    cta: "Reserve My Spot",
    ctaHref: "https://commonlab.agentcommons.io/courses/ai-quick-wins-for-leaders",
    secondaryCta: "Preview lessons",
    secondaryHref: "https://commonlab.agentcommons.io/courses/ai-quick-wins-for-leaders",
    accentColor: "#7EC8C8",
    accentGlow: "rgba(126,200,200,0.22)",
  },
] as const;

/* ─── Component ────────────────────────────────────────────────── */
export default function EventPopup({
  delay = 3000,
  sessionKey = "event_popup_v3",
}: {
  delay?: number;
  sessionKey?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (sessionStorage.getItem(sessionKey)) return;
    timer.current = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)));
    }, delay);
    return () => clearTimeout(timer.current);
  }, [delay, sessionKey]);

  const dismiss = () => {
    setClosing(true);
    setAnimateIn(false);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(sessionKey, "1");
    }, 480);
  };

  const goTo = (idx: number) => {
    if (sliding || idx === active) return;
    setSlideDir(idx > active ? 1 : -1);
    setSliding(true);
    setTimeout(() => {
      setActive(idx);
      setSliding(false);
    }, 280);
  };

  if (!visible) return null;
  const ev = EVENTS[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes ep_pulse {
          0%,100%{box-shadow:0 0 0 0 var(--ep-glow);opacity:1}
          60%{box-shadow:0 0 0 7px transparent;opacity:.7}
        }
        .ep-cta-btn:hover{ filter:brightness(1.1); transform:translateY(-1px); }
        .ep-cta-btn:active{ transform:translateY(0); }
        .ep-sec-btn:hover{
          border-color:rgba(240,237,230,.22) !important;
          color:rgba(240,237,230,.65) !important;
        }
        .ep-dot{ width:7px;height:7px;border-radius:50%;cursor:pointer;
          transition:all .25s ease;border:1px solid rgba(255,255,255,.18);
          background:rgba(255,255,255,.12); }
        .ep-dot.ep-dot-active{ width:20px;border-radius:4px; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(8,8,8,0.7)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          zIndex: 9998,
          opacity: animateIn && !closing ? 1 : 0,
          transition: "opacity .45s ease",
        }}
      />

      {/* Card */}
      <div
        style={{
          position: "fixed",
          bottom: "clamp(1.25rem,3.5vw,2.5rem)",
          right: "clamp(1.25rem,3.5vw,2.5rem)",
          zIndex: 9999,
          width: "min(440px,calc(100vw - 2.5rem))",
          transform: animateIn && !closing
            ? "translateY(0) scale(1)"
            : "translateY(38px) scale(0.96)",
          opacity: animateIn && !closing ? 1 : 0,
          transition: "transform .55s cubic-bezier(.22,1,.36,1), opacity .45s ease",
        }}
      >
        {/* Glow halo */}
        <div style={{
          position: "absolute", inset: -2, borderRadius: 22, zIndex: -1,
          background: `radial-gradient(ellipse at 30% 0%, ${ev.accentGlow} 0%, transparent 65%)`,
          filter: "blur(16px)",
          transition: "background .4s ease",
        }} />

        <div style={{
          background: "linear-gradient(158deg,#161616 0%,#0c0c0c 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,.7), inset 0 0 0 1px rgba(255,255,255,.04)",
        }}>
          {/* Top accent bar */}
          <div style={{
            height: 3,
            background: `linear-gradient(90deg, transparent 0%, ${ev.accentColor} 35%, ${ev.accentColor}bb 65%, transparent 100%)`,
            transition: "background .4s ease",
          }} />

          <div style={{ padding: "1.65rem 1.8rem 1.5rem" }}>

            {/* Row: tag + event counter + close */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.05rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".55rem" }}>
                {ev.urgent && (
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                    background: ev.accentColor, display: "inline-block",
                    animation: "ep_pulse 2s ease-in-out infinite",
                    "--ep-glow": ev.accentGlow,
                  } as React.CSSProperties} />
                )}
                <span style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: ".62rem", letterSpacing: ".2em",
                  textTransform: "uppercase", fontWeight: 600,
                  color: ev.accentColor, transition: "color .35s",
                }}>{ev.tag}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: ".85rem" }}>
                <span style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: ".62rem",
                  color: "rgba(240,237,230,.25)", letterSpacing: ".08em",
                }}>
                  {active + 1} / {EVENTS.length}
                </span>
                <button
                  onClick={dismiss}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(240,237,230,.28)", fontSize: "1rem",
                    lineHeight: 1, padding: 0, transition: "color .2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,237,230,.7)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,.28)")}
                  aria-label="Close"
                >✕</button>
              </div>
            </div>

            {/* Sliding body */}
            <div style={{
              opacity: sliding ? 0 : 1,
              transform: sliding ? `translateX(${slideDir * 16}px)` : "translateX(0)",
              transition: "opacity .28s ease, transform .28s ease",
            }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(1.5rem,4vw,1.9rem)",
                fontWeight: 600, lineHeight: 1.1,
                color: "#F0EDE6", margin: "0 0 .22rem",
                letterSpacing: "-.02em",
              }}>{ev.title}</h2>

              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: ".76rem", fontWeight: 500,
                color: ev.accentColor, margin: "0 0 .9rem",
                letterSpacing: ".01em", transition: "color .35s",
              }}>{ev.subtitle}</p>

              {/* Divider */}
              <div style={{
                height: 1, marginBottom: "1rem",
                background: `linear-gradient(90deg, ${ev.accentColor}55, transparent)`,
                transition: "background .35s",
              }} />

              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: ".79rem", lineHeight: 1.58,
                color: "rgba(240,237,230,.52)", margin: "0 0 .95rem",
              }}>{ev.description}</p>

              {/* Meta */}
              <div style={{ display: "flex", flexDirection: "column", gap: ".36rem", marginBottom: ".95rem" }}>
                {ev.meta.map(m => (
                  <div key={m.text} style={{
                    display: "flex", alignItems: "center", gap: ".5rem",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".77rem", color: "rgba(240,237,230,.55)",
                  }}>
                    <span style={{ fontSize: ".8rem" }}>{m.icon}</span>
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".3rem", marginBottom: "1.25rem" }}>
                {ev.badges.map(b => (
                  <span key={b} style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".62rem", fontWeight: 500,
                    letterSpacing: ".07em", textTransform: "uppercase",
                    color: "rgba(240,237,230,.38)",
                    border: "1px solid rgba(240,237,230,.09)",
                    borderRadius: 6, padding: ".18rem .48rem",
                  }}>{b}</span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: ".6rem" }}>
                <a
                  href={ev.ctaHref}
                  className="ep-cta-btn"
                  style={{
                    flex: "1 1 auto", display: "block", textAlign: "center",
                    padding: ".72rem 1rem", borderRadius: 10,
                    background: ev.accentColor,
                    color: "#0A0A0A",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".78rem", fontWeight: 700,
                    letterSpacing: ".07em", textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: `0 4px 24px ${ev.accentGlow}`,
                    transition: "filter .2s, transform .2s, box-shadow .2s",
                  }}
                >{ev.cta}</a>

                <a
                  href={ev.secondaryHref}
                  className="ep-sec-btn"
                  style={{
                    padding: ".72rem .9rem", borderRadius: 10,
                    background: "transparent",
                    border: "1px solid rgba(240,237,230,.1)",
                    color: "rgba(240,237,230,.38)",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".74rem", textDecoration: "none",
                    whiteSpace: "nowrap",
                    display: "flex", alignItems: "center",
                    transition: "border-color .2s, color .2s",
                  }}
                >{ev.secondaryCta}</a>
              </div>
            </div>

            {/* Dot switcher */}
            <div style={{
              display: "flex", justifyContent: "center",
              alignItems: "center", gap: ".45rem", marginTop: "1.1rem",
            }}>
              {EVENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`ep-dot${i === active ? " ep-dot-active" : ""}`}
                  style={{
                    background: i === active ? ev.accentColor : undefined,
                    borderColor: i === active ? ev.accentColor : undefined,
                    transition: "all .3s ease, background .35s ease",
                    border: "none",
                    padding: 0,
                  } as React.CSSProperties}
                  aria-label={`View event ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}