
"use client";
import React from "react";
import type { LucideIcon } from "lucide-react";
import { Check, Globe, ShieldCheck, Zap, Phone, Link as LinkIcon, Quote } from "lucide-react";
import MobileNav from "./components/MobileNav";

// Local color tokens
const colors = {
  navy: "#0F1D2B",
  teal: "#23B8A5",
  lime: "#9BE564",
  warmWhite: "#F8F9FA",
  slate: "#101827",
};

export default function Page() {
  return (
    <>
      {/* ========================================================= */}
      {/* ✅ TEST A: MOBILE-ONLY RED BAR  */}
      {/* Appears only below 640 px screen width */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[9999] h-16 bg-red-600 text-white text-center flex items-center justify-center font-bold">
        MOBILE TEST BAR — SHOULD ONLY APPEAR ON PHONES
      </div>

      {/* Spacer so the bar doesn’t overlap content */}
      <div className="sm:hidden h-16" />
      {/* ========================================================= */}

      {/* Your existing mobile nav (keep this so we can test it too) */}
      <MobileNav />

      {/* ========================================================= */}
      {/* ✅ Everything below here is what I mean by "hero / sections". */}
      {/* This is the top content section of your homepage. */}
      {/* The Mobile Test Bar sits above this. */}
      {/* Replace this placeholder with your actual hero code. */}
      {/* ========================================================= */}

      <section className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div className="space-y-5">
            <h1 className="font-semibold leading-tight [font-size:clamp(1.7rem,5vw,3rem)]">
              Where local business meets modern design.
            </h1>
            <p className="text-zinc-600 [font-size:clamp(1rem,2.6vw,1.125rem)]">
              Fast, clean websites that turn clicks into calls.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-white"
              >
                Get a Quote
              </a>
              <a
                href="#work"
                className="inline-flex h-11 items-center justify-center rounded-xl border px-5"
              >
                See Work
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-gray-200 h-56 sm:h-80 flex items-center justify-center text-gray-500 font-semibold">
            HERO IMAGE PLACEHOLDER
          </div>
        </div>
      </section>

      {/* Example next section */}
      <section
        id="work"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-xl font-semibold mb-4">Work</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-6">Project Card</div>
          <div className="rounded-2xl border p-6">Project Card</div>
          <div className="rounded-2xl border p-6">Project Card</div>
        </div>
      </section>
    </>
  );
}

