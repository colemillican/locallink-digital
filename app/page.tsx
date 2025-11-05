

"use client";
import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Check,
  Globe,
  ShieldCheck,
  Zap,
  Phone,
  Link as LinkIcon,
  Quote,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

// Local color tokens (keep or remove as you wish)
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
      {/* Mobile-only nav */}
      <MobileNav />

      {/* Offset content under the sticky mobile header (64px) */}
      <main className="pt-16 sm:pt-0">
        {/* ===== HERO ===== */}
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
              {/* Trust row (optional) */}
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <ShieldCheck className="h-4 w-4" />
                <span>SSL, fast hosting, and ongoing tweaks</span>
              </div>
            </div>

            {/* Replace with your Next/Image hero if you have it */}
            <div className="overflow-hidden rounded-2xl bg-gray-200 h-56 sm:h-80 flex items-center justify-center text-gray-500 font-semibold">
              HERO IMAGE PLACEHOLDER
            </div>
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section
          id="work"
          className="scroll-mt-20 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-xl font-semibold mb-4">Work</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <div className="mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="font-medium">Local Service Site</span>
              </div>
              <p className="text-sm text-zinc-600">
                Blazing-fast landing page with clear calls to action.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span className="font-medium">Conversion Tune-Up</span>
              </div>
              <p className="text-sm text-zinc-600">
                Simplified forms, tracked calls, and sticky CTAs.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-medium">SEO Basics</span>
              </div>
              <p className="text-sm text-zinc-600">
                Clean metadata, fast loads, and readable content.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section
          id="services"
          className="scroll-mt-20 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-xl font-semibold mb-6">Services</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-2xl border p-6">
              <div className="mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Sites that Make Phones Ring</span>
              </div>
              <p className="text-sm text-zinc-600">
                Clear messaging, strong CTAs, and fast load times.
              </p>
            </li>
            <li className="rounded-2xl border p-6">
              <div className="mb-2 flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <span className="font-medium">SEO & On-Page Basics</span>
              </div>
              <p className="text-sm text-zinc-600">
                Metadata, semantics, and best-practice structure.
              </p>
            </li>
          </ul>
        </section>

        {/* ===== PRICING ===== */}
        <section
          id="pricing"
          className="scroll-mt-20 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-xl font-semibold mb-6">Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-zinc-600">For new local brands</p>
              <p className="mt-4 text-3xl font-bold">
                $49<span className="text-base font-medium text-zinc-500">/mo</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Mobile-first site</li>
                <li>✓ Hosting + SSL</li>
                <li>✓ Basic SEO</li>
              </ul>
              <a
                href="#quote"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-white"
              >
                Choose
              </a>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-1 text-sm text-zinc-600">For scaling teams</p>
              <p className="mt-4 text-3xl font-bold">
                $149<span className="text-base font-medium text-zinc-500">/mo</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Everything in Starter</li>
                <li>✓ Faster turnarounds</li>
                <li>✓ Ongoing tweaks</li>
              </ul>
              <a
                href="#quote"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-white"
              >
                Choose
              </a>
            </div>
          </div>
        </section>

        {/* ===== CONTACT / QUOTE ===== */}
        <section
          id="contact"
          className="scroll-mt-20 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-xl font-semibold mb-6">Contact</h2>
          <form id="quote" className="max-w-xl space-y-3">
            <input
              className="h-11 w-full rounded-xl border px-3 text-[16px]"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="h-11 w-full rounded-xl border px-3 text-[16px]"
              type="tel"
              name="phone"
              inputMode="tel"
              placeholder="Phone"
            />
            <input
              className="h-11 w-full rounded-xl border px-3 text-[16px]"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="min-h-[110px] w-full rounded-xl border p-3 text-[16px]"
              placeholder="Tell us about your business"
            />
            <button className="h-11 w-full rounded-xl bg-black text-white">
              Request Quote
            </button>
          </form>
        </section>
      </main>
    </>
  );
}




