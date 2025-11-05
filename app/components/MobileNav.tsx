"use client";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    // mobile-only (hidden on >= sm)
    <header className="<header className="block fixed top-0 left-0 right-0 z-[200] border-b-4 border-red-500 bg-white">
">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4">
        <a href="/" className="text-base font-semibold tracking-tight">
          LocalLink <span className="font-normal text-zinc-500">Digital</span>
        </a>

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

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="ml-auto h-full w-80 max-w-[85%] bg-white p-6"
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
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#contact">Contact</a>
            </nav>

            <a
              href="#quote"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

