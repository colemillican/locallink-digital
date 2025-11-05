"use client";
import { useEffect, useState } from "react";

/* Inline logo */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="LocalLink Digital logo">
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#23B8A5" />
          <stop offset="100%" stopColor="#9BE564" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
      <path d="M20 20v24h12M32 44h12V20" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    // mobile-only
    <header className="sm:hidden sticky top-0 z-[300] border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4">
        {/* Logo + brand */}
        <a href="/" className="flex items-center gap-2">
          <LogoMark size={28} />
          <span className="text-[15px] font-semibold tracking-tight">
            LocalLink <span className="font-normal text-zinc-500">Digital</span>
          </span>
        </a>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Slide-over */}
      {open && (
        <div className="fixed inset-0 z-[400] bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="ml-auto h-full w-80 max-w-[85%] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="grid gap-2">
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#work">Work</a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#services">Services</a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#pricing">Pricing</a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#faq">FAQ</a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#preview">Free Preview</a>
            </nav>

            <a
              href="#preview"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white"
            >
              Get a Free Preview
            </a>
          </div>
        </div>
      )}
    </header>
  );
}







