
import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import { sanityClient, urlFor } from "../lib/sanity";
import { eventPopupQuery } from "../lib/queries";

/* ─── Event data type ───────────────────────────────────────────── */

type EventMeta = {
  icon?: string;
  text: string;
};

type EventItem = {
  _id: string;
  image?: any;
  imageAlt?: string;
  tag?: string;
  urgent?: boolean;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: EventMeta[];
  badges?: string[];
  cta?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  accentColor?: string;
  accentGlow?: string;
  order?: number;
};

/* ─── Component ────────────────────────────────────────────────── */

export default function EventPopup({
  delay = 3000,
  sessionKey = "event_popup_v4",
}: {
  delay?: number;
  sessionKey?: string;
}) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [closing, setClosing] = useState(false);

  const [active, setActive] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);

  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const slideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  /* ─── Fetch published events from Sanity ─────────────────────── */

  useEffect(() => {
    let cancelled = false;

    const fetchEvents = async () => {
      try {
        const data = await sanityClient.fetch<EventItem[]>(eventPopupQuery);

        if (!cancelled) {
          setEvents(Array.isArray(data) ? data : []);
          setActive(0);
        }
      } catch (error) {
        console.error("Failed to fetch event popups from Sanity:", error);

        if (!cancelled) {
          setEvents([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ─── Show popup after delay ─────────────────────────────────── */

  useEffect(() => {
    if (loading || events.length === 0) return;

    if (sessionStorage.getItem(sessionKey)) return;

    timer.current = setTimeout(() => {
      setVisible(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true);
        });
      });
    }, delay);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [delay, events.length, loading, sessionKey]);

  /* ─── Cleanup timers ─────────────────────────────────────────── */

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (slideTimer.current) clearTimeout(slideTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /* ─── Dismiss popup ──────────────────────────────────────────── */

  const dismiss = () => {
    if (closing) return;

    setClosing(true);
    setAnimateIn(false);

    closeTimer.current = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(sessionKey, "1");
    }, 480);
  };

  /* ─── Event carousel ─────────────────────────────────────────── */

  const goTo = (idx: number) => {
    if (sliding || idx === active || idx < 0 || idx >= events.length) {
      return;
    }

    setSlideDir(idx > active ? 1 : -1);
    setSliding(true);

    slideTimer.current = setTimeout(() => {
      setActive(idx);
      setSliding(false);
    }, 280);
  };

  /* ─── Current event ──────────────────────────────────────────── */

  if (loading || !visible || events.length === 0) {
    return null;
  }

  const ev = events[active];

  if (!ev) {
    return null;
  }

  const posterUrl = ev.image
    ? urlFor(ev.image).width(900).quality(85).url()
    : undefined;

  const accentColor = ev.accentColor || "#7EC8C8";
  const accentGlow = ev.accentGlow || "rgba(126,200,200,0.22)";

  const eventMeta = ev.meta || [];
  const eventBadges = ev.badges || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes ep_pulse {
          0%,100% {
            box-shadow: 0 0 0 0 var(--ep-glow);
            opacity: 1;
          }

          60% {
            box-shadow: 0 0 0 7px transparent;
            opacity: .7;
          }
        }

        .ep-cta-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        .ep-cta-btn:active {
          transform: translateY(0);
        }

        .ep-sec-btn:hover {
          border-color: rgba(240,237,230,.22) !important;
          color: rgba(240,237,230,.65) !important;
        }

        .ep-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          cursor: pointer;
          transition: all .25s ease;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.12);
        }

        .ep-dot.ep-dot-active {
          width: 20px;
          border-radius: 4px;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(8,8,8,0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
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
          transform:
            animateIn && !closing
              ? "translateY(0) scale(1)"
              : "translateY(38px) scale(0.96)",
          opacity: animateIn && !closing ? 1 : 0,
          transition:
            "transform .55s cubic-bezier(.22,1,.36,1), opacity .45s ease",
        }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: "absolute",
            inset: -2,
            borderRadius: 22,
            zIndex: -1,
            background: `radial-gradient(ellipse at 30% 0%, ${accentGlow} 0%, transparent 65%)`,
            filter: "blur(16px)",
            transition: "background .4s ease",
          }}
        />

        <div
          style={{
            background: "linear-gradient(158deg,#161616 0%,#0c0c0c 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20,
            overflow: "hidden",
            overflowY: "auto",
            maxHeight: "calc(100vh - 2.5rem)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,.7), inset 0 0 0 1px rgba(255,255,255,.04)",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: 3,
              background: `linear-gradient(90deg, transparent 0%, ${accentColor} 35%, ${accentColor}bb 65%, transparent 100%)`,
              transition: "background .4s ease",
            }}
          />

          {/* Poster */}
          {posterUrl && (
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                maxHeight: "min(46vh, 420px)",
                overflow: "hidden",
                background: "#ffffff",
              }}
            >
              <img
                src={posterUrl}
                alt={ev.imageAlt || ev.title}
                loading="eager"
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;

                  if (parent) {
                    parent.style.display = "none";
                  }
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  opacity: sliding ? 0 : 1,
                  transition: "opacity .28s ease",
                }}
              />

              {/* Blend poster into the dark card */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(180deg, transparent 60%, #161616 100%)",
                }}
              />
            </div>
          )}

          <div style={{ padding: "1.65rem 1.8rem 1.5rem" }}>
            {/* Row: tag + event counter + close */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.05rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".55rem",
                }}
              >
                {ev.urgent && (
                  <span
                    style={
                      {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: accentColor,
                        display: "inline-block",
                        animation: "ep_pulse 2s ease-in-out infinite",
                        "--ep-glow": accentGlow,
                      } as CSSProperties
                    }
                  />
                )}

                <span
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".62rem",
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: accentColor,
                    transition: "color .35s",
                  }}
                >
                  {ev.tag}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".85rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".62rem",
                    color: "rgba(240,237,230,.25)",
                    letterSpacing: ".08em",
                  }}
                >
                  {active + 1} / {events.length}
                </span>

                <button
                  onClick={dismiss}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(240,237,230,.28)",
                    fontSize: "1rem",
                    lineHeight: 1,
                    padding: 0,
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(240,237,230,.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(240,237,230,.28)";
                  }}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Sliding body */}
            <div
              style={{
                opacity: sliding ? 0 : 1,
                transform: sliding
                  ? `translateX(${slideDir * 16}px)`
                  : "translateX(0)",
                transition: "opacity .28s ease, transform .28s ease",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(1.5rem,4vw,1.9rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "#F0EDE6",
                  margin: "0 0 .22rem",
                  letterSpacing: "-.02em",
                }}
              >
                {ev.title}
              </h2>

              {ev.subtitle && (
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".76rem",
                    fontWeight: 500,
                    color: accentColor,
                    margin: "0 0 .9rem",
                    letterSpacing: ".01em",
                    transition: "color .35s",
                  }}
                >
                  {ev.subtitle}
                </p>
              )}

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  marginBottom: "1rem",
                  background: `linear-gradient(90deg, ${accentColor}55, transparent)`,
                  transition: "background .35s",
                }}
              />

              {ev.description && (
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: ".79rem",
                    lineHeight: 1.58,
                    color: "rgba(240,237,230,.52)",
                    margin: "0 0 .95rem",
                  }}
                >
                  {ev.description}
                </p>
              )}

              {/* Event details */}
              {eventMeta.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".36rem",
                    marginBottom: ".95rem",
                  }}
                >
                  {eventMeta.map((m, index) => (
                    <div
                      key={`${m.text}-${index}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: ".77rem",
                        color: "rgba(240,237,230,.55)",
                      }}
                    >
                      {m.icon && (
                        <span style={{ fontSize: ".8rem" }}>{m.icon}</span>
                      )}
                      {m.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Badges */}
              {eventBadges.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".3rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {eventBadges.map((badge) => (
                    <span
                      key={badge}
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: ".62rem",
                        fontWeight: 500,
                        letterSpacing: ".07em",
                        textTransform: "uppercase",
                        color: "rgba(240,237,230,.38)",
                        border: "1px solid rgba(240,237,230,.09)",
                        borderRadius: 6,
                        padding: ".18rem .48rem",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              {(ev.ctaHref || ev.secondaryHref) && (
                <div style={{ display: "flex", gap: ".6rem" }}>
                  {ev.ctaHref && (
                    <a
                      href={ev.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-cta-btn"
                      style={{
                        flex: "1 1 auto",
                        display: "block",
                        textAlign: "center",
                        padding: ".72rem 1rem",
                        borderRadius: 10,
                        background: accentColor,
                        color: "#0A0A0A",
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: ".78rem",
                        fontWeight: 700,
                        letterSpacing: ".07em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        boxShadow: `0 4px 24px ${accentGlow}`,
                        transition:
                          "filter .2s, transform .2s, box-shadow .2s",
                      }}
                    >
                      {ev.cta || "Register Now"}
                    </a>
                  )}

                  {ev.secondaryHref && (
                    <a
                      href={ev.secondaryHref}
                      className="ep-sec-btn"
                      style={{
                        padding: ".72rem .9rem",
                        borderRadius: 10,
                        background: "transparent",
                        border: "1px solid rgba(240,237,230,.1)",
                        color: "rgba(240,237,230,.38)",
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: ".74rem",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        transition: "border-color .2s, color .2s",
                      }}
                    >
                      {ev.secondaryCta || "Contact"}
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Dot switcher */}
            {events.length > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".45rem",
                  marginTop: "1.1rem",
                }}
              >
                {events.map((event, index) => (
                  <button
                    key={event._id}
                    onClick={() => goTo(index)}
                    className={`ep-dot${
                      index === active ? " ep-dot-active" : ""
                    }`}
                    style={
                      {
                        background:
                          index === active ? accentColor : undefined,
                        borderColor:
                          index === active ? accentColor : undefined,
                        transition: "all .3s ease, background .35s ease",
                        border: "none",
                        padding: 0,
                      } as CSSProperties
                    }
                    aria-label={`View event ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
