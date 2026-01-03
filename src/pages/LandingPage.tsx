import { Link } from "react-router-dom";
import {
  Shield,
  Smartphone,
  QrCode,
  Cpu,
  ArrowRight,
  Lock,
  Hash,
  Zap,
  Twitter,
  Github,
  Mail,
  MessageCircle,
} from "lucide-react";
import cryobrickImage from "/images/cryobrick.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="border-b border-border bg-secondary/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">Cryobrick</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">
              Bitcoin Wallet
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#security"
              className="hover:text-primary transition-colors"
            >
              Security
            </a>
          </div>
          <div className="w-24" />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Secure.
              <br />
              <span className="text-primary">Affordable.</span>
              <br />
              <span className="italic">Inconspicuous.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-mono animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {"// BITCOIN CUSTODY REIMAGINED"}
              <br />
              Air-gapped cold storage on your feature phone.
              <br />
              Zero cost. No shipping. Plausible deniability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link
                to="/manifesto"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-sm text-lg font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all border-b-4 border-primary/30 active:border-b-0 active:translate-y-1"
              >
                Read the Manifesto <Hash className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-12 relative animate-in fade-in zoom-in duration-1000 delay-500">
            <img
              src={cryobrickImage}
              alt="CryoBrick - Air-gapped Bitcoin wallet on feature phone"
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />
          </div>
        </section>

        {/* Features Grid */}
        <section
          id="features"
          className="py-24 bg-secondary/20 border-y border-border px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Why CryoBrick?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Addressing the critical gaps in Bitcoin self-custody:
                visibility, cost, privacy, and accessibility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Smartphone className="w-6 h-6 text-primary" />,
                  title: "Plausible Deniability",
                  description:
                    "Looks like a normal feature phone. No one can tell you're using it for Bitcoin custody just by looking at it.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: "Air-Gapped Security",
                  description:
                    "Absolute physical separation. Keys are generated and stored on a device that has never touched a packet of data.",
                },
                {
                  icon: <Lock className="w-6 h-6 text-primary" />,
                  title: "Zero Cost",
                  description:
                    "No hardware purchase required. If you have a feature phone, you can turn it into cold storage at zero additional cost.",
                },
                {
                  icon: <ArrowRight className="w-6 h-6 text-primary" />,
                  title: "No Shipping, No Waiting",
                  description:
                    "No customs delays, no shipping restrictions, no geographic barriers. If you can get a feature phone, you can use CryoBrick.",
                },
                {
                  icon: <Cpu className="w-6 h-6 text-primary" />,
                  title: "No Personal Information",
                  description:
                    "We don't collect your data. No email, no address, no accounts. The wallet runs entirely on your device.",
                },
                {
                  icon: <QrCode className="w-6 h-6 text-primary" />,
                  title: "Standard Support",
                  description:
                    "Full support for Native SegWit (BIP84) and PSBT signing. Compatible with Blue Wallet, Sparrow, and more.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-background border border-border p-8 rounded-sm hover:border-primary/50 transition-colors group"
                >
                  <div className="mb-4 p-3 bg-secondary inline-block rounded-sm group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Philosophy */}
        <section
          id="about"
          className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight uppercase font-mono">
              The Problem We Solve
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Bitcoin's cryptography is nearly unbreakable in the digital
                world. But securing Bitcoin physically? That's where users face
                real danger.
              </p>
              <p>
                Traditional self-custody methods—paper backups, metal plates,
                hardware wallets—all expose users to three critical risks: theft
                by criminals, confiscation by authorities, and recognition by
                anyone looking.
              </p>
              <p>
                Hardware wallets offer excellent cryptographic security, but
                they come with critical shortcomings: zero plausible
                deniability, cost barriers, privacy data leaks, and geographic
                restrictions.
              </p>
              <p className="border-l-4 border-primary pl-6 py-2 text-foreground italic">
                CryoBrick addresses these vulnerabilities with a solution that's
                secure, affordable, and—most importantly—invisible.
              </p>
            </div>
          </div>
          <div className="bg-card border border-border p-12 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-mono">
                100% OFFLINE
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Physical Air-Gap
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-foreground text-background text-center selection:bg-primary selection:text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase font-mono">
              Another Choice.
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-80 leading-relaxed font-mono">
              We're not trying to replace hardware wallets entirely.
              <br />
              CryoBrick gives you another choice—with the same fundamental
              security promise:
              <br />
              <span className="text-primary font-bold">
                your private keys stay offline and under your control
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-primary text-primary-foreground px-12 py-5 rounded-sm font-bold text-xl hover:bg-primary/90 transition-all border-b-4 border-black/20">
                Join the Resistance
              </button>
              <Link
                to="/manifesto"
                className="w-full sm:w-auto bg-transparent border-2 border-background/20 text-background px-12 py-5 rounded-sm font-bold text-xl hover:bg-background/10 transition-all"
              >
                Learn the Tech
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-2xl tracking-tighter uppercase">
                Cryobrick
              </span>
              <span className="text-muted-foreground font-mono text-xs mt-1">
                Vires in Numeris // Est. 2026
              </span>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://x.com/cryobrick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="X / Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://primal.net/p/nprofile1qqswztflqlv5ja2ajaxp8p4skak7ux54heavzcplqpvq6vlvd0v32es24l53r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Nostr"
              >
                <Zap className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://github.com/cryobrick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/YGCXhfkbsA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:cryobrick@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
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
