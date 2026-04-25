import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Cpu,
  ShieldCheck,
  Truck,
  Users,
  Zap,
  Sparkles,
  Eye,
  Mail,
  Twitter,
  Github,
  MessageCircle,
  Youtube,
} from "lucide-react";
import cryobrickLogo from "/images/cryobrick_text_logo.png";
import DonateDialog from "@/components/DonateDialog";

const traction = [
  { value: "25", label: "Units Sold" },
  { value: "50+", label: "Pre-orders Committed" },
  { value: "100%", label: "Bootstrapped" },
  { value: "$0", label: "VC Funding Taken" },
];

const roadmapPhases = [
  {
    range: "Months 1–6",
    title: "Hardware & Firmware",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    items: [
      "Finalize ESP32-S3 PCB with SIM, WiFi & Bluetooth support",
      "Port LVGL UI mimicking a 2018-era feature phone",
      "Implement airplane-mode + cellular controls",
      "Three-mode operation: cold / semi-cold / full cellular",
    ],
  },
  {
    range: "Months 7–11",
    title: "Tooling & Certification",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    items: [
      "Custom injection molding for the chassis",
      "Full FCC, CE, BIS & TEC certifications",
      "Security audit reports & documentation",
      "BitChat / Nostr / Lightning integration",
    ],
  },
  {
    range: "Months 12–15",
    title: "Production & Launch",
    icon: <Truck className="w-5 h-5 text-primary" />,
    items: [
      "First 1,000-unit production batch",
      "Global launch & 3PL distribution setup",
      "Open-source hardware designs published to GitHub",
      "Public CryoBrick OS release",
    ],
  },
];

const fundsBreakdown = [
  { label: "Embedded software development", amount: "$80k", pct: 29 },
  {
    label: "Hardware engineering & SIM/WiFi/BT integration",
    amount: "$55k",
    pct: 20,
  },
  { label: "First production run (1,000 units)", amount: "$45k", pct: 16 },
  { label: "Regulatory certifications (FCC/CE/BIS/TEC)", amount: "$25k", pct: 9 },
  { label: "Founder salary & operational buffer", amount: "$70k", pct: 26 },
];

const raiseSources = [
  {
    range: "$150k – $200k",
    title: "Bitcoin Community & Small Angels",
    description:
      "Via waitlist, X, and Bitcoin community groups. Lightning-friendly, low-friction.",
  },
  {
    range: "$100k – $150k",
    title: "Aligned Bitcoin Angels / Micro-VCs",
    description:
      "4–8 high-conviction angels who value open-source and privacy. $25k–$75k checks.",
  },
  {
    range: "$50k – $100k",
    title: "Grants (Non-Dilutive)",
    description:
      "HRF, OpenSats, and similar mission-aligned programs as buffer capital.",
  },
];

const team = [
  {
    name: "Alok Pawaskar",
    role: "Co-founder",
    description:
      "Bitcoin educator & entrepreneur. Built CryoBrick from personal need.",
  },
  {
    name: "Anipy",
    role: "Co-founder",
    description:
      "Bitcoin software developer. Multiple hackathon winner.",
  },
];

const socials = [
  { href: "https://x.com/cryobrick", icon: <Twitter className="w-5 h-5" />, label: "X / Twitter" },
  {
    href: "https://primal.net/p/nprofile1qqswztflqlv5ja2ajaxp8p4skak7ux54heavzcplqpvq6vlvd0v32es24l53r",
    icon: <Zap className="w-5 h-5 fill-current" />,
    label: "Nostr",
  },
  { href: "https://github.com/cryobrick", icon: <Github className="w-5 h-5" />, label: "GitHub" },
  { href: "https://discord.gg/YGCXhfkbsA", icon: <MessageCircle className="w-5 h-5" />, label: "Discord" },
  { href: "https://www.youtube.com/@cryobrick", icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
  { href: "mailto:cryobrick@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
];

export default function Roadmap() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="border-b border-border bg-secondary/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col relative min-h-[1.5rem]">
            {!logoLoaded && (
              <span className="text-xl font-bold tracking-tight absolute">
                Cryobrick
              </span>
            )}
            <img
              src={cryobrickLogo}
              alt="Cryobrick"
              className={`h-6 w-auto transition-opacity duration-300 ${
                logoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLogoLoaded(true)}
            />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">
              Bitcoin Wallet
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-sm px-3 py-1 mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="w-3 h-3 text-primary" />
              Community Funding Round — Open
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Help build stealth
              <br />
              <span className="text-primary">self-custody</span> for everyone.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We're raising{" "}
              <span className="font-bold text-foreground">$300k – $450k</span>{" "}
              from Bitcoin-native community members and aligned angels to
              manufacture our first 1,000-unit batch — and keep CryoBrick fully
              open-source.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <DonateDialog
                trigger={
                  <button
                    type="button"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-base font-bold hover:bg-primary/90 transition-all border-b-4 border-primary/30 active:border-b-0 active:translate-y-1 inline-flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    Donate via Lightning
                  </button>
                }
              />
              <a
                href="mailto:cryobrick@gmail.com?subject=CryoBrick%20Community%20Round"
                className="px-8 py-4 rounded-sm text-base font-bold border-2 border-border hover:border-primary/50 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact for Angel Round
              </a>
            </div>
          </div>
        </section>

        {/* Traction Stats */}
        <section className="py-16 bg-secondary/20 border-y border-border px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {"// TRACTION"}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Early but proven.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {traction.map((t) => (
                <div
                  key={t.label}
                  className="bg-background border border-border rounded-sm p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold tracking-tighter text-primary mb-1">
                    {t.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              Bootstrapped to date with personal capital. Only external prize:
              0.01 BTC from the Angor Pitch Contest — untouched.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
              {"// THE VISIBILITY PARADOX"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight uppercase font-mono">
              The Problem
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Traditional hardware wallets are easily recognized, expensive,
                and often require KYC and shipping addresses.
              </p>
              <p>
                Users in high-inflation jurisdictions — Nigeria, Argentina,
                India, Vietnam — face customs seizures, wrench attacks, and
                surveillance. Premium wallets only serve wealthy Western users.
              </p>
              <p className="border-l-4 border-primary pl-6 py-2 text-foreground italic">
                CryoBrick is invisible, affordable, and verifiable — designed
                for the people who need self-custody most.
              </p>
            </div>
          </div>
          <div className="bg-card border border-border p-12 rounded-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-mono">INVISIBLE</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Looks like any feature phone
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24 bg-secondary/20 border-y border-border px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {"// 15-MONTH ROADMAP"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase font-mono">
                The Plan
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                From prototype to 1,000 production units. Public launch
                projected May 2026 → August 2027.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {roadmapPhases.map((phase, i) => (
                <div
                  key={phase.range}
                  className="bg-background border border-border p-8 rounded-sm relative"
                >
                  <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-sm">
                    Phase {i + 1}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <div className="p-2 bg-secondary rounded-sm">
                      {phase.icon}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {phase.range}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ask */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {"// THE ASK"}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                <span className="text-primary">$300k – $450k</span> in 6–8 weeks
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not a traditional VC round. We want partners who share our
                mission of keeping CryoBrick fully open-source.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {raiseSources.map((source) => (
                <div
                  key={source.title}
                  className="bg-background border border-border p-8 rounded-sm hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl font-bold tracking-tighter text-primary mb-2 font-mono">
                    {source.range}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{source.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="py-24 bg-secondary/20 border-y border-border px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {"// USE OF FUNDS"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase font-mono">
                Where it goes
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                Direct to product. No marketing spend. No bloat.
              </p>
            </div>
            <div className="bg-background border border-border rounded-sm p-8 space-y-6">
              {fundsBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between mb-2 gap-4">
                    <span className="font-medium text-sm md:text-base">
                      {item.label}
                    </span>
                    <span className="font-mono font-bold text-primary">
                      {item.amount}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-sm transition-all"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valuation & Terms */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {"// VALUATION & TERMS"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase font-mono mb-6">
                Founder-friendly
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Valuation reflects real traction (25 paid units, 50+
                  committed), strong differentiation, and the broader hardware
                  wallet market growing toward $1.5B – $3B by 2032.
                </p>
                <p>
                  Comparable: Foundation Devices (Passport) raised $7M at ~$35M
                  post-money after their first ~1,000 founder units. We're
                  earlier, but the stealth + emerging-market moat is stronger.
                </p>
                <p className="border-l-4 border-primary pl-6 py-2 text-foreground italic">
                  Simple terms. No board seat. No aggressive milestones. We
                  stay mission-driven.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-8 space-y-5">
              <div className="flex justify-between items-baseline pb-4 border-b border-border">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Pre-money
                </span>
                <span className="text-2xl font-bold tracking-tighter">
                  $8M – $10M
                </span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-border">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Dilution
                </span>
                <span className="text-2xl font-bold tracking-tighter">
                  6 – 10%
                </span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-border">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Instrument
                </span>
                <span className="text-base font-medium font-mono">
                  SAFE / Priced
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Board seat
                </span>
                <span className="text-base font-medium font-mono">None</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-secondary/20 border-y border-border px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {"// TEAM"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase font-mono">
                Bitcoiners building for Bitcoiners
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-background border border-border p-8 rounded-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary font-mono mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-foreground text-background text-center selection:bg-primary selection:text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter uppercase font-mono">
              Strike while the iron is hot.
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-80 leading-relaxed font-mono">
              The video is going viral. 25 units sold. We're opening a
              community funding round to build the next batch.
              <br />
              <span className="text-primary font-bold">
                Help us keep CryoBrick truly open-source.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DonateDialog
                trigger={
                  <button
                    type="button"
                    className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-sm font-bold text-lg hover:bg-primary/90 transition-all border-b-4 border-black/20 inline-flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5 fill-current" />
                    Donate via Lightning
                  </button>
                }
              />
              <a
                href="mailto:cryobrick@gmail.com?subject=CryoBrick%20Community%20Round"
                className="w-full sm:w-auto bg-transparent border-2 border-background/20 text-background px-10 py-5 rounded-sm font-bold text-lg hover:bg-background/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] opacity-50 font-mono mt-12">
              Not a securities offering • Information shared in good faith with the community
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-2xl tracking-tighter uppercase">
              Cryobrick
            </span>
            <span className="text-muted-foreground font-mono text-xs mt-1">
              Vires in Numeris // Est. 2026
            </span>
            <div className="flex items-center gap-6 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    s.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-muted-foreground text-center md:text-right">
            <p className="text-sm">© 2026 Cryobrick. All rights reserved.</p>
            <p className="text-[10px] mt-2 font-mono uppercase tracking-[0.25em] opacity-50">
              Hardened Security Architecture // Zero Telemetry
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
