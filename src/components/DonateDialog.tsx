import { useState, type ReactNode } from "react";
import { Zap, Copy, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LIGHTNING_ADDRESS = "cryobrick@rizful.com";
const LIGHTNING_URI = `lightning:${LIGHTNING_ADDRESS}`;

type DonateDialogProps = {
  trigger?: ReactNode;
};

export default function DonateDialog({ trigger }: DonateDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LIGHTNING_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable (insecure context, permissions). Silently fail.
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Zap className="w-4 h-4 fill-current" />
            Donate
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 fill-current text-primary" />
            Support Cryobrick
          </DialogTitle>
          <DialogDescription>
            We accept donations via Bitcoin Lightning. Scan the QR code or copy
            the address below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-5 py-2">
          <a
            href={LIGHTNING_URI}
            className="bg-white p-4 rounded-sm border border-border"
            aria-label="Open Lightning address in wallet"
          >
            <QRCodeSVG
              value={LIGHTNING_URI}
              size={200}
              level="M"
              marginSize={0}
            />
          </a>

          <div className="w-full">
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-sm p-2">
              <code className="flex-1 text-sm font-mono truncate px-2">
                {LIGHTNING_ADDRESS}
              </code>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={
                  copied ? "Address copied" : "Copy lightning address"
                }
                className="inline-flex items-center justify-center w-9 h-9 rounded-sm hover:bg-background transition-colors text-muted-foreground hover:text-primary"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Thank you for supporting open-source Bitcoin self-custody.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
