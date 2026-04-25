import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Github,
  Mail,
  MessageCircle,
  Youtube,
  Zap,
} from "lucide-react";
import cryobrickImage from "/images/cryobrick.png";
import cryobrickLogo from "/images/cryobrick_text_logo.png";
import DonateDialog from "@/components/DonateDialog";

const ORDER_URL =
  "https://formstr.app/f/naddr1qvzqqqr4mqpzqlvenjpv3w86ekdu5h65c9u84vrp8c3vxpmqjf0ghqqkfc6yy6zzqy2hwumn8ghj7un9d3shjtnyv9kh2uewd9hj7qqxfdtykn3nv58dvg2c?viewKey=8828066e31c005b9f783baefe53d20cfe632834f770e19487e1bf25bedf83c62";

const socials = [
  {
    href: "https://x.com/cryobrick",
    icon: <Twitter className="w-5 h-5" />,
    label: "X / Twitter",
  },
  {
    href: "https://primal.net/p/nprofile1qqswztflqlv5ja2ajaxp8p4skak7ux54heavzcplqpvq6vlvd0v32es24l53r",
    icon: <Zap className="w-5 h-5 fill-current" />,
    label: "Nostr",
  },
  {
    href: "https://github.com/cryobrick",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://discord.gg/YGCXhfkbsA",
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Discord",
  },
  {
    href: "https://www.youtube.com/@cryobrick",
    icon: <Youtube className="w-5 h-5" />,
    label: "YouTube",
  },
  {
    href: "mailto:cryobrick@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
  },
];

export default function Landing() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-0">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column — text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo + brand */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative min-h-[2rem]">
                {!logoLoaded && (
                  <span className="text-2xl font-bold tracking-tight absolute">
                    Cryobrick
                  </span>
                )}
                <img
                  src={cryobrickLogo}
                  alt="Cryobrick"
                  className={`h-8 w-auto transition-opacity duration-300 ${
                    logoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setLogoLoaded(true)}
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Secure, Affordable,
              <br />
              and Inconspicuous
              <br />
              <span className="text-primary">Bitcoin Cold Storage</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Air-gapped custody on your feature phone. Zero cost.
              Plausible deniability built in.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-sm text-lg font-bold hover:bg-primary/90 transition-all border-b-4 border-primary/30 active:border-b-0 active:translate-y-1 inline-block"
              >
                Order Now
              </a>
              <DonateDialog />
              <Link
                to="/roadmap"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Roadmap →
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                Follow{" "}
                <a
                  href="https://x.com/cryobrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  @cryobrick
                </a>{" "}
                for updates
              </p>
              <div className="flex items-center gap-5">
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

            {/* Footer links */}
            <div className="mt-8 text-sm text-muted-foreground">
              <span>© 2026 Cryobrick</span>
              <span className="mx-2">·</span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                Vires in Numeris
              </span>
            </div>
          </div>

          {/* Right column — phone mockup */}
          <div className="flex items-center justify-center">
            <div className="max-w-xs w-full">
              <img
                src={cryobrickImage}
                alt="CryoBrick - Air-gapped Bitcoin wallet on feature phone"
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
