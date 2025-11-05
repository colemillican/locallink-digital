

"use client";
import React from "react";
import type { LucideIcon } from "lucide-react";
import { Check, Globe, ShieldCheck, Zap, Phone, Link as LinkIcon, Quote } from "lucide-react";
import MobileNav from "./components/MobileNav";

export default function Page() {
  return (
    <>
      <MobileNav />
      {/* your existing hero/sections remain below */}
    </>
  );
}



// Local color tokens
const colors = {
  navy: "#0F1D2B",
  teal: "#23B8A5",
  lime: "#9BE564",
  warmWhite: "#F8F9FA",
  slate: "#101827",
};

// Simple CTA button
type CTAProps = { children?: React.ReactNode };
const CTA: React.FC<CTAProps> = ({ children = "Get Your Free Website Preview" }) => (
  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow hover:shadow-md transition-all"
    style={{ background: colors.teal, color: "white" }}
  >
    {children}
  </a>
);

// Section wrapper
type SectionProps = { id?: string; className?: string; children?: React.ReactNode };
const Section: React.FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</section>
);

// Feature card
type FeatureProps = { icon: LucideIcon; title: string; children?: React.ReactNode };
const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div
      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
      style={{ background: "rgba(35, 184, 165, 0.10)" }}
    >
      <Icon size={22} color={colors.teal} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 leading-relaxed">{children}</p>
  </div>
);

// Pricing tier
type TierProps = { name: string; setup: string; monthly: string; features: string[]; highlight?: boolean };
const Tier: React.FC<TierProps> = ({ name, setup, monthly, features, highlight }) => (
  <div
    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${highlight ? "border-transparent" : "border-gray-200"}`}
    style={highlight ? { background: "linear-gradient(180deg, rgba(35, 184, 165, 0.10), white)" } : { background: "white" }}
  >
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="mt-3 text-3xl font-bold text-gray-900">
      <span className="text-lg font-medium text-gray-500 align-top">Setup </span>{setup}
      <span className="ml-3 text-lg font-medium text-gray-500">/ {monthly} per mo</span>
    </p>
    <ul className="mt-6 space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <Check className="mt-1 shrink-0" size={18} color={colors.teal} /> {f}
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <CTA>Start with {name}</CTA>
    </div>
  </div>
);

export default function LocalLinkHome() {
  return (
    <div className="min-h-screen w-full" style={{ background: colors.warmWhite }}>
      {/* Nav */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${colors.teal}20` }}>
              <LinkIcon size={22} color={colors.teal} />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold" style={{ color: colors.navy }}>
                LocalLink <span className="font-medium" style={{ color: colors.teal }}>Digital</span>
              </div>
              <div className="text-[11px] text-gray-500">Where local business meets modern design</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#work" className="hover:text-gray-900">Our Work</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <CTA>Free Preview</CTA>
          </nav>
        </Section>
      </header>

      {/* Hero */}
      <Section id="hero" className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: colors.navy }}>
            Where local business meets <span style={{ color: colors.teal }}>modern design</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
            We build and maintain professional websites for small businesses — and keep them <strong>visible on Google, fast, and up to date</strong>.
            You run the business. We handle the website <em>and</em> the web results.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTA />
            <a href="#pricing" className="text-sm font-semibold text-gray-700 hover:text-gray-900">See pricing →</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Zap size={18} color={colors.teal} /> Built in days</div>
            <div className="flex items-center gap-2"><ShieldCheck size={18} color={colors.teal} /> Fully managed</div>
            <div className="flex items-center gap-2"><Globe size={18} color={colors.teal} /> Mobile-first</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            {/* Mockup collage */}
            <div className="grid h-full grid-cols-2 gap-0">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1541976076758-347942db197b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="hidden h-full w-full bg-[url('https://images.unsplash.com/photo-1555529669-9331810d0237?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center md:block" />
              <div className="hidden h-full w-full bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center md:block" />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-6 hidden rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5 md:block">
            <div className="text-xs font-semibold text-gray-900">Sample stack</div>
            <div className="mt-1 text-xs text-gray-600">Framer / Webflow / Vercel • Stripe billing • Notion support</div>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section id="value" className="py-14">
        <h2 className="text-center text-3xl font-bold" style={{ color: colors.navy }}>Why local businesses choose LocalLink</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Fast setup. Fully managed. Built to be found. No jargon. No headaches.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Zap} title="Fast Setup">Your website built in days, not months.</Feature>
          <Feature icon={ShieldCheck} title="Fully Managed">Hosting, updates, backups, uptime monitoring, and security handled for you.</Feature>
          <Feature icon={Globe} title="Local SEO & Keywords">On-page SEO, keyword placement, titles, and Google Business tuning so customers can find you.</Feature>
          <Feature icon={Phone} title="Performance & Speed">Mobile-first, optimized Core Web Vitals, and image compression for fast loads.</Feature>
        </div>
      </Section>

      {/* How it works */}
      <Section id="process" className="py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Simple, transparent, and made for small business</h2>
            <ol className="mt-6 space-y-5">
              {[
                {
                  t: "We design your site",
                  d: "Tell us about your business and we’ll build a modern, mobile-friendly website that reflects your brand.",
                },
                {
                  t: "We host and maintain it",
                  d: "Your site stays updated, backed up, secure, and fast. Send changes anytime and we’ll handle them.",
                },
                {
                  t: "You get found",
                  d: "We handle on-page SEO, local keywords, metadata, and Google Business basics to improve local visibility.",
                },
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: colors.teal }}>
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{s.t}</div>
                    <div className="mt-1 text-gray-600">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">What’s included</div>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Custom 3–5 page website",
                "Mobile-first design",
                "Hosting, SSL, uptime monitoring",
                "Unlimited content edits",
                "Local SEO keywords & on-page titles",
                "Google Business optimization",
                "Image optimization & page speed",
                "Monthly analytics email (traffic & top pages)",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700"><Check size={18} color={colors.teal} className="mt-1" /> {f}</li>
              ))}
            </ul>
            <div className="mt-6"><CTA>Get Your Free Website Preview</CTA></div>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="py-14">
        <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Featured work</h2>
        <p className="mt-2 max-w-2xl text-gray-600">A few examples of local-style businesses we design for. Replace these with your portfolio when ready.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "IronPeak Gym", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" },
            { name: "Maple & Mane Barber", img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1200&auto=format&fit=crop" },
            { name: "Oak & Ember Cafe", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" },
            { name: "Hearth Roofing", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" },
            { name: "Bluebird Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" },
            { name: "Greenleaf Landscaping", img: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=1200&auto=format&fit=crop" },
          ].map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full bg-gray-100" style={{ backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="text-base font-semibold text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-500">Local business website</div>
                </div>
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">View site →</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-14">
        <h2 className="text-center text-3xl font-bold" style={{ color: colors.navy }}>Simple pricing. No contracts. No surprises.</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">Every plan includes hosting, security, and performance tuning. Upgrade anytime.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Tier
            name="Starter"
            setup="$399"
            monthly="$49"
            features={[
              "Custom 3-page site",
              "Hosting, SSL, backups",
              "Mobile-first design",
              "Basic on-page SEO (titles, meta)",
            ]}
          />
            <Tier
            name="Growth"
            setup="$0"
            monthly="$99"
            features={[
              "Unlimited content updates",
              "Local keywords & headings",
              "Google Business optimization",
              "Monthly analytics email",
            ]}
            highlight
          />
          <Tier
            name="Pro"
            setup="$299"
            monthly="$149"
            features={[
              "Blog or news posts",
              "Quarterly SEO tune-ups",
              "Image & speed optimization",
              "Highest priority support",
            ]}
          />
        </div>
      </Section>

      {/* Testimonial */}
      <Section id="testimonials" className="py-14">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-gray-100 p-3"><Quote color={colors.teal} /></div>
            <div>
              <p className="text-lg text-gray-800">
                “LocalLink made our gym look 10x more professional online. They launched it in a week and now we just text changes when we need them.”
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900">Megan H. — IronPeak Gym</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="w-full py-16" style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})` }}>
        <Section className="text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to modernize your business?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/85">Get a website that actually works — designed for small businesses, built for results.</p>
          <div className="mt-6 inline-block"><CTA>Get Your Free Website Preview</CTA></div>
        </Section>
      </div>

      {/* Contact */}
      <Section id="contact" className="py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Tell us about your business</h2>
            <p className="mt-2 text-gray-600">Fill this out and we’ll send a free homepage preview within 48 hours.</p>
            <form className="mt-6 grid gap-4">
              <input className="rounded-xl border border-gray-300 p-3 outline-none focus:ring-2" style={{ borderColor: "#E5E7EB" }} placeholder="Your name" />
              <input className="rounded-xl border border-gray-300 p-3 outline-none focus:ring-2" placeholder="Business name" />
              <input className="rounded-xl border border-gray-300 p-3 outline-none focus:ring-2" placeholder="Email" />
              <textarea className="min-h-[120px] rounded-xl border border-gray-300 p-3 outline-none focus:ring-2" placeholder="What do you do? What pages do you need?" />
              <div><CTA>Request Free Preview</CTA></div>
            </form>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">What happens next?</div>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><Check className="mt-1" size={18} color={colors.teal} /> We send a free homepage mockup within 48 hours.</li>
              <li className="flex items-start gap-3"><Check className="mt-1" size={18} color={colors.teal} /> If you like it, we finish the site and connect your domain.</li>
              <li className="flex items-start gap-3"><Check className="mt-1" size={18} color={colors.teal} /> You pay monthly for hosting and unlimited edits.</li>
            </ul>
            <div className="mt-6 rounded-xl p-4 text-sm" style={{ background: `${colors.teal}10`, color: colors.slate }}>
              Prefer email? Reach us at <span className="font-semibold">hello@locallinkdigital.com</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-6 border-t border-gray-200 bg-white">
        <Section className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <LinkIcon size={18} color={colors.teal} />
            <span className="font-semibold" style={{ color: colors.navy }}>LocalLink Digital</span>
            <span className="mx-2 text-gray-400">•</span>
            <span>Where local business meets modern design.</span>
          </div>
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} LocalLink Digital. All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
}


