import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import manifestoContent from "../content/manifesto.md?raw";
import "./BlogPost.css";

export default function BlogPost() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="border-b border-border bg-secondary/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold tracking-tight">Cryobrick</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">
              Bitcoin Wallet
            </span>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="blog-post prose prose-lg max-w-none">
          <ReactMarkdown>{manifestoContent}</ReactMarkdown>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Cryobrick. All rights reserved.
          </p>
          <p className="text-[10px] mt-2 font-mono uppercase tracking-[0.25em] opacity-50">
            Hardened Security Architecture // Zero Telemetry
          </p>
        </div>
      </footer>
    </div>
  );
}
