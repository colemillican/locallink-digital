"use client";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Renders a fixed, top nav directly into document.body to avoid
 * any parent stacking/overflow/transform issues. Includes inline
 * styles so it is visible even if Tailwind isn't applied.
 */
export default function MobileNav() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // Create a container div we can portal into (once mounted)
  const container = useMemo(() => {
    if (typeof document === "undefined") return null;
    const el = document.createElement("div");
    el.setAttribute("id", "mobile-nav-portal");
    return el;
  }, []);

  useEffect(() => {
    setMounted(true);
    if (!container) return;
    document.body.appendChild(container);
    return () => {
      try {
        document.body.removeChild(container);
      } catch {}
    };
  }, [container]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // If not mounted yet, render nothing (avoids SSR mismatch)
  if (!mounted || !container) return null;

  return createPortal(
    <>
      {/* MOBILE-ONLY: hide ≥640px using a minimal inline media query fallback */}
      <style>{`
        @media (min-width: 640px) {
          #mobile-nav-root { display: none !important; }
        }
      `}</style>

      {/* Root wrapper with inline styles so we can see it even without Tailwind */}
      <div
        id="mobile-nav-root"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,              // above everything
          background: "rgba(255,255,255,0.95)",
          WebkitBackdropFilter: "saturate(150%) blur(8px)",
          backdropFilter: "saturate(150%) blur(8px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <a
            href="/"
            style={{ fontWeight: 700, letterSpacing: "-0.01em", color: "#0a0a0a", textDecoration: "none" }}
          >
            LocalLink <span style={{ fontWeight: 500, color: "#71717a" }}>Digital</span>
          </a>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            style={{
              padding: 8,
              borderRadius: 8,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {/* hamburger */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay & sheet (inline styles so it’s visible even without Tailwind) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(0,0,0,0.4)",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "min(85%, 320px)",
              background: "#fff",
              padding: 24,
              boxShadow: "-8px 0 24px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontWeight: 700 }}>Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{ padding: 8, borderRadius: 8, border: "none", background: "transparent", cursor: "pointer" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav style={{ display: "grid", gap: 8 }}>
              <a href="#work" style={linkStyle}>Work</a>
              <a href="#services" style={linkStyle}>Services</a>
              <a href="#pricing" style={linkStyle}>Pricing</a>
              <a href="#contact" style={linkStyle}>Contact</a>
            </nav>

            <a
              href="#quote"
              style={{
                marginTop: 20,
                display: "inline-flex",
                height: 44,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: "#000",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </>,
    container
  );
}

// simple inline style for links (keeps it obvious even without Tailwind)
const linkStyle: React.CSSProperties = {
  padding: "8px 8px",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 600,
  color: "#0a0a0a",
  textDecoration: "none",
};



