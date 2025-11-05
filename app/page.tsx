

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
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  Layout,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

// Brand
const BRAND = "LocalLink Digital";

// Local color tokens (keep or modify)
const colors = {
  navy: "#0F1D2B",
  teal: "#23B8A5",
  lime: "#9BE564",
  warmWhite: "#F8F9FA",
  slate: "#101827",
};

// Simple inline logo (monogram)
function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-label={`${BRAND} logo`}
    >
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors.teal} />
          <stop offset="100%" stopColor={colors.lime} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#llg)" />
      <path
        d="M18 18v28h14M32 46h14V18"
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
    <>
      {/* Mobile-only nav */}
      <MobileNav />

      {/* Offset content under the sticky mobile header (64px) */}
      <main className="pt-16 sm:pt-0">
        {/* ================= HERO ================= */}
        <section className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid items-center gap-8 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <LogoMark size={42} />
                <div className="leading-tight">
                  <div className="text-2xl font-bold">{BRAND}</div>
                  <div className="text-sm text-zinc-500">
                    Websites that make your phone ring.
                  </div>
                </div>
              </div>

              <h1 className="font-semibold leading-tight [font-size:clamp(1.9rem,5vw,3.2rem)]">
                Where local business meets modern design.
              </h1>

              <p className="text-zinc-600 [font-size:clamp(1rem,2.6vw,1.125rem)]">
                We build fast, clean websites for home-service and local
                businesses—with simple pricing and same-week launches.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-white font-semibold"
                >
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex h-11 items-center justify-center rounded-xl border px-5 font-semibold"
                >
                  See Work
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> SSL & hosting included
                </div>
                <div className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Same-week launch
                </div>
                <div className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4" /> SEO basics out of the box
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-100 h-56 sm:h-96 flex items-center justify-center">
              {/* Replace with Image if/when you have one */}
              <div className="text-center">
                <Sparkles className="mx-auto mb-3 h-8 w-8 text-zinc-400" />
                <div className="font-medium text-zinc-700">
                  Project preview area
                </div>
                <div className="text-zinc-500 text-sm">
                  (Swap in a real screenshot later)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== LOGOS/AS SEEN IN (optional) ============== */}
        <section className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500">
            <div className="text-xs tracking-wide uppercase">Trusted by local brands</div>
            <div className="h-6 w-px bg-zinc-200 hidden sm:block" />
            <div className="flex gap-6 opacity-80">
              <div className="text-sm">Auburn HVAC</div>
              <div className="text-sm">RiverTown Roofing</div>
              <div className="text-sm">Pine & Co. Landscaping</div>
              <div className="text-sm">Tiger Fitness</div>
            </div>
          </div>
        </section>

        {/* ================= WORK ================= */}
        <section
          id="work"
          className="scroll-mt-24 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Recent Work</h2>
            <a href="#quote" className="hidden sm:inline-flex items-center text-sm font-semibold">
              Start your project <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Auburn HVAC",
                desc: "High-intent landing page with call tracking and sticky CTA.",
                badge: "Home Services",
              },
              {
                title: "RiverTown Roofing",
                desc: "Before/after gallery + quote form that converts.",
                badge: "Roofing",
              },
              {
                title: "Pine & Co. Landscaping",
                desc: "Services grid, reviews, and seasonal specials.",
                badge: "Landscaping",
              },
              {
                title: "Tiger Fitness",
                desc: "Timetables, trainer bios, and intro offer flow.",
                badge: "Fitness",
              },
              {
                title: "Auto Shine Detailers",
                desc: "Package compare table + click-to-call buttons.",
                badge: "Auto",
              },
              {
                title: "BrightSpark Electric",
                desc: "Emergency CTA + service area SEO pages.",
                badge: "Electric",
              },
            ].map((card, i) => (
              <article key={i} className="group rounded-2xl border p-5 hover:shadow-sm transition">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                    {card.badge}
                  </span>
                </div>
                <div className="h-36 rounded-xl bg-zinc-100 mb-3 grid place-items-center text-zinc-500">
                  {/* image placeholder */}
                  Preview
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{card.desc}</p>
                <div className="mt-3 inline-flex items-center text-sm font-semibold">
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="scroll-mt-24 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Layout}
              title="Website Build"
              items={[
                "Modern, mobile-first design",
                "Same-week launch option",
                "Hosting + SSL included",
              ]}
            />
            <ServiceCard
              icon={LinkIcon}
              title="SEO Basics"
              items={[
                "Clean metadata & semantics",
                "Fast load & core web vitals",
                "Local schema & best practices",
              ]}
            />
            <ServiceCard
              icon={Zap}
              title="Conversion Setup"
              items={[
                "Sticky CTAs & forms",
                "Click-to-call & tracking",
                "Review/social proof blocks",
              ]}
            />
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold mb-6">Our Simple Process</h2>
          <ol className="grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Plan",
                desc: "Quick call to understand goals, services, and local area.",
              },
              {
                step: "2",
                title: "Build",
                desc: "We design & set up a clean, fast site with clear CTAs.",
              },
              {
                step: "3",
                title: "Launch",
                desc: "Go live, track calls, and adjust based on results.",
              },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border p-6">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold">
                  {s.step}
                </div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                quote:
                  "Our calls doubled after launch. Customers say the site is easy to use and we love the quick tweaks.",
                name: "Mason R.",
                role: "Owner, RiverTown Roofing",
              },
              {
                quote:
                  "They built it fast and it looks sharp on mobile. The click-to-call button is a game-changer.",
                name: "Tara L.",
                role: "Manager, Auburn HVAC",
              },
            ].map((t, i) => (
              <blockquote key={i} className="rounded-2xl border p-6">
                <div className="mb-3 flex items-center gap-2 text-amber-500">
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                </div>
                <Quote className="h-5 w-5 text-zinc-400" />
                <p className="mt-2 text-zinc-700">{t.quote}</p>
                <footer className="mt-3 text-sm text-zinc-500">
                  — {t.name}, {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section
          id="pricing"
          className="scroll-mt-24 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <PriceCard
              name="Starter"
              price="$49"
              note="/mo"
              features={[
                "Mobile-first website",
                "Hosting + SSL",
                "SEO basics",
                "2 revisions / mo",
              ]}
              highlight={false}
            />
            <PriceCard
              name="Growth"
              price="$149"
              note="/mo"
              features={[
                "Everything in Starter",
                "Priority tweaks",
                "Analytics & call tracking",
                "Quarterly CRO tune-ups",
              ]}
              highlight
            />
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-3">
            <Faq q="How fast can you launch?" a="Most sites launch within a week once we have your logo, service list, and contact details." />
            <Faq q="Can you help with content?" a="Yes—give us bullet points and we’ll draft clean, on-brand copy." />
            <Faq q="Do you work with non-service businesses?" a="We focus on local and home-service brands, but we’re happy to chat." />
          </div>
        </section>

        {/* ================= CONTACT / QUOTE ================= */}
        <section
          id="contact"
          className="scroll-mt-24 sm:scroll-mt-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Let’s get you live</h2>
              <p className="text-zinc-600">
                Send a few details and we’ll reply same day. Prefer a call?
              </p>
              <div className="space-y-2 text-sm text-zinc-600">
                <div className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@locallink.digital</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Auburn, AL</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon–Fri, 9–5 CT</span>
                </div>
              </div>
            </div>

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
                className="min-h-[120px] w-full rounded-xl border p-3 text-[16px]"
                placeholder="Tell us about your business and what you need"
              />
              <button className="h-11 w-full rounded-xl bg-black text-white font-semibold">
                Request Quote
              </button>
              <p className="text-xs text-zinc-500">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t bg-white/70 backdrop-blur">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <LogoMark size={32} />
                <div className="text-sm">
                  <div className="font-semibold">{BRAND}</div>
                  <div className="text-zinc-500">Websites for local business</div>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-4 text-sm">
                <a href="#work" className="hover:opacity-80">Work</a>
                <a href="#services" className="hover:opacity-80">Services</a>
                <a href="#pricing" className="hover:opacity-80">Pricing</a>
                <a href="#contact" className="hover:opacity-80">Contact</a>
              </nav>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* =================== Small components =================== */

function ServiceCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <ul className="space-y-2 text-sm text-zinc-700">
        {items.map((t, i) => (
          <li key={i} className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
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
        "rounded-2xl border p-6",
        highlight ? "ring-1 ring-emerald-300 border-emerald-200 bg-emerald-50/30" : "",
      ].join(" ")}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-zinc-600">Simple subscription pricing</p>
      <p className="mt-4 text-3xl font-bold">
        {price}
        <span className="text-base font-medium text-zinc-500">{note}</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      <a
        href="#quote"
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-white"
      >
        Choose
      </a>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border p-4">
      <summary className="cursor-pointer select-none text-sm font-semibold">
        {q}
      </summary>
      <p className="mt-2 text-sm text-zinc-600">{a}</p>
    </details>
  );
}




