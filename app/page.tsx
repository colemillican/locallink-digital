"use client";
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Check,
  Globe,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

const BRAND = "LocalLink Digital";

/** Inline thumbnail (data URI) */
const thumb = (text: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#e5f7f3'/><stop offset='100%' stop-color='#dff2ff'/></linearGradient></defs>
      <rect width='100%' height='100%' rx='24' fill='url(#g)'/>
      <g font-family='Inter, system-ui, -apple-system, Segoe UI, Roboto' fill='#0f172a' text-anchor='middle'>
        <text x='400' y='320' font-size='38' font-weight='700'>${text}</text>
      </g></svg>`
  )}`;

/** Logo component (used in footer) */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label={`${BRAND} logo`}>
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#23B8A5" />
          <stop offset="100%" stopColor="#9BE564" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
      <path
        d="M20 20v24h12M32 44h12V20"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Mobile Nav (you already have the logo there) */}
      <MobileNav />

      {/* ============================ DESKTOP NAV ============================ */}
      <header className="hidden sm:block sticky top-0 z-[200] border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-6">
          {/* ✅ Inline SVG logo BESIDE the company name: "local link" */}
          <a href="/" className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 64 64"
              aria-label="local link logo"
            >
              <defs>
                <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#23B8A5" />
                  <stop offset="100%" stopColor="#9BE564" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
              <path
                d="M20 20v24h12M32 44h12V20"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="text-[16px] font-semibold tracking-tight">
              local link
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[14px] sm:flex">
            <a href="#work" className="hover:opacity-80">
              Our Work
            </a>
            <a href="#pricing" className="hover:opacity-80">
              Pricing
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
            <a
              href="#preview"
              className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-500/90 px-4 font-semibold text-white hover:bg-emerald-500"
            >
              Free Preview
            </a>
          </nav>
        </div>
      </header>

      {/* ============================== MAIN =============================== */}
      <main className="pt-16 sm:pt-0">
        {/* ============================== HERO ============================== */}
        <section className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-center gap-8 px-4 pt-2 pb-10 sm:grid-cols-2 sm:px-6 sm:py-16 lg:gap-14 lg:px-8">
          {/* Left */}
          <div>
            <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-zinc-900">
              Where local business meets{" "}
              <span className="text-emerald-600">modern design</span>.
            </h1>

            {/* Short mobile line */}
            <p className="mt-3 text-[15.5px] text-zinc-600 sm:hidden">
              Fast, clean sites that make your phone ring.
            </p>

            {/* Longer desktop copy */}
            <p className="mt-4 hidden max-w-xl text-[15.5px] leading-7 text-zinc-600 sm:block">
              We build and maintain professional websites for small businesses—and keep them
              <strong className="text-zinc-800 font-semibold"> visible on Google</strong>,{" "}
              <strong className="text-zinc-800 font-semibold">fast</strong>, and{" "}
              <strong className="text-zinc-800 font-semibold">up to date</strong>. You run the
              business. We handle the website <em>and</em> the web results.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#preview"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-6 text-[15px] font-semibold text-white shadow-sm hover:bg-emerald-600"
              >
                Get Your Free Preview
              </a>
              <a
                href="#pricing"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-5 text-[15px] font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                See pricing <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Benefit chips */}
            <div className="mt-4 hidden flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-zinc-600 xs:flex sm:flex">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-600" /> Built in days
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Fully managed
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-600" /> Mobile-first
              </span>
            </div>
          </div>

          {/* Right: image mosaic */}
          <div className="relative">
            <div className="rounded-3xl border bg-white p-2 shadow-sm">
              <div className="grid aspect-[4/3] grid-cols-2 gap-2 rounded-2xl">
                <img
                  alt="Thumb A"
                  src={thumb("Shop counter")}
                  className="h-full w-full rounded-xl object-cover"
                />
                <img
                  alt="Thumb B"
                  src={thumb("Gallery grid")}
                  className="h-full w-full rounded-xl object-cover"
                />
                <img
                  alt="Thumb C"
                  src={thumb("Neutral set")}
                  className="h-full w-full rounded-xl object-cover"
                />
                <img
                  alt="Thumb D"
                  src={thumb("Lifestyle")}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Floating tag */}
            <div className="pointer-events-none absolute -bottom-5 left-8 rounded-2xl border bg-white px-4 py-2 text-[12.5px] text-zinc-600 shadow-md">
              <div className="font-medium text-zinc-700">Sample stack</div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span>Next.js</span>•<span>Tailwind</span>•<span>Vercel</span>•<span>Stripe</span>•
                <span>Notion support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= VALUE / FEATURES ======================= */}
        <section className="mx-auto w-full max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-semibold tracking-tight text-zinc-900">
            Why local businesses choose LocalLink
          </h2>
          <p className="mx-auto mt-2 hidden max-w-2xl text-center text-[14.5px] text-zinc-600 sm:block">
            Fast setup. Fully managed. Built to be found. No jargon. No headaches.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Bolt className="h-5 w-5 text-emerald-600" />}
              title="Fast Setup"
              text="Built in days so you start converting sooner."
            />
            <FeatureCard
              icon={<BadgeCheck className="h-5 w-5 text-emerald-600" />}
              title="Fully Managed"
              text="Hosting, updates, backups, and tweaks handled for you."
            />
            <FeatureCard
              icon={<Search className="h-5 w-5 text-emerald-600" />}
              title="Local SEO"
              text="On-page SEO, clean metadata, and local structure."
            />
            <FeatureCard
              icon={<Globe className="h-5 w-5 text-emerald-600" />}
              title="Performance"
              text="Mobile-first and optimized Core Web Vitals."
            />
          </div>
        </section>

        {/* ============================== WORK ============================== */}
        <section id="work" className="scroll-mt-24 mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">Our Work</h3>
            <a href="#preview" className="hidden sm:inline-flex items-center text-sm font-semibold">
              Get a free preview <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tag: "Home Services", title: "Auburn HVAC", blurb: "High-intent landing page with sticky click-to-call." },
              { tag: "Roofing", title: "RiverTown Roofing", blurb: "Before/after gallery + quote form that converts." },
              { tag: "Landscaping", title: "Pine & Co. Landscaping", blurb: "Services grid, reviews, seasonal promos." },
              { tag: "Fitness", title: "Tiger Fitness", blurb: "Timetable, trainer bios, intro offer flow." },
              { tag: "Auto", title: "Auto Shine Detailers", blurb: "Package compare table + tracked calls." },
              { tag: "Electric", title: "BrightSpark Electric", blurb: "Emergency CTA + local service pages." },
            ].map((c, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl border bg-white">
                <img
                  alt={`${c.title} preview`}
                  src={thumb(c.title)}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <span className="inline-block rounded-md bg-zinc-100 px-2 py-1 text-[12px] font-medium text-zinc-700">
                    {c.tag}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold">{c.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600">{c.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================= PRICING ============================ */}
        <section id="pricing" className="scroll-mt-24 mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">Simple pricing</h3>
          <p className="mt-2 max-w-xl text-zinc-600 hidden sm:block">
            Flat monthly rates. Cancel anytime. Every plan includes hosting, SSL, and ongoing tweaks.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <PriceCard
              name="Starter"
              price="$49"
              note="/mo"
              features={["Mobile-first website", "Hosting + SSL", "Local SEO basics", "2 tweaks / mo"]}
            />
            <PriceCard
              name="Growth"
              price="$149"
              note="/mo"
              highlight
              features={[
                "Everything in Starter",
                "Priority support",
                "Analytics & call tracking",
                "Quarterly CRO tune-ups",
              ]}
            />
          </div>
        </section>

        {/* =============================== FAQ ============================== */}
        <section id="faq" className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">FAQ</h3>
          <div className="mt-4 space-y-3">
            <Faq
              q="How fast can you launch?"
              a="Most sites launch within a week once we have your logo, services, and contact details."
            />
            <Faq
              q="Can you help with content?"
              a="Yes—share bullet points and we’ll draft clean, on-brand copy for you."
            />
            <Faq
              q="Do you work with non-service businesses?"
              a="We mainly serve local and home-service brands, but we’re happy to chat."
            />
          </div>
        </section>

        {/* ============================== PREVIEW =========================== */}
        <section id="preview" className="scroll-mt-24 mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Get your free website preview</h3>
              <p className="mt-2 max-w-lg text-zinc-600 hidden sm:block">
                Send a few details and we’ll mock up a preview—no obligation. Prefer a call? (555) 123-4567
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> No setup fee
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Cancel anytime
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Same-week launch option
                </li>
              </ul>
            </div>

            <form className="max-w-xl space-y-3">
              <input className="h-11 w-full rounded-xl border px-3 text-[16px]" placeholder="Business name" />
              <input className="h-11 w-full rounded-xl border px-3 text-[16px]" placeholder="Your name" />
              <input className="h-11 w-full rounded-xl border px-3 text-[16px]" type="email" placeholder="Email" />
              <input
                className="h-11 w-full rounded-xl border px-3 text-[16px]"
                type="tel"
                inputMode="tel"
                placeholder="Phone"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border p-3 text-[16px]"
                placeholder="Tell us what you do & where you serve"
              />
              <button className="h-11 w-full rounded-full bg-emerald-500 font-semibold text-white hover:bg-emerald-600">
                Request Preview
              </button>
              <p className="text-xs text-zinc-500">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          </div>
        </section>

        {/* ============================== FOOTER ============================ */}
        <footer className="border-t bg-white">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <LogoMark size={26} />
                <div className="text-sm">
                  <div className="font-semibold">{BRAND}</div>
                  <div className="text-zinc-500">Websites for local business</div>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-4 text-sm">
                <a href="#work" className="hover:opacity-80">
                  Our Work
                </a>
                <a href="#pricing" className="hover:opacity-80">
                  Pricing
                </a>
                <a href="#faq" className="hover:opacity-80">
                  FAQ
                </a>
                <a href="#preview" className="hover:opacity-80">
                  Free Preview
                </a>
              </nav>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ============================ UI components ============================ */

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        {icon}
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-600">{text}</p>
    </div>
  );
}

function PriceCard({
  name,
  price,
  note,
  features,
  highlight,
}: {
  name: string;
  price: string;
  note?: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white p-6",
        highlight ? "ring-1 ring-emerald-300 border-emerald-200 bg-emerald-50/30" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">{name}</h4>
        {highlight ? (
          <span className="rounded-full bg-emerald-500/90 px-2 py-[2px] text-[11px] font-semibold text-white">
            Popular
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-zinc-600">Simple monthly plan</p>
      <p className="mt-4 text-3xl font-bold">
        {price}
        <span className="text-base font-medium text-zinc-500">{note}</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-800">
        {features.map((f, i) => (
          <li key={i} className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#preview"
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-emerald-500 px-4 font-semibold text-white hover:bg-emerald-600"
      >
        Choose
      </a>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border bg-white p-4">
      <summary className="cursor-pointer select-none text-sm font-semibold">{q}</summary>
      <p className="mt-2 text-sm text-zinc-600">{a}</p>
    </details>
  );
}










