import type { CSSProperties, ReactNode } from "react";

export const TOTAL = 23;

export const i = (n: number) => ({ "--i": n }) as CSSProperties;

export function Frame({
  page,
  section,
  lo,
  presenter,
  title,
  kicker,
  source,
  children,
}: {
  page: number;
  section: string;
  lo?: string;
  presenter?: string;
  title: ReactNode;
  kicker?: ReactNode;
  source: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full flex-col bg-background px-20 pb-10 pt-12">
      <header className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-5">
          <span className="slide-label">{section}</span>
          {lo && <span className="chip text-primary">{lo}</span>}
        </div>
        {presenter && <span className="slide-label text-gold">{presenter}</span>}
      </header>
      <div className="anim mt-8" style={i(0)}>
        <h2 className="headline max-w-[1300px] text-[60px]">{title}</h2>
        {kicker && <p className="mt-3 max-w-[1150px] text-[24px] leading-snug text-muted-foreground">{kicker}</p>}
      </div>
      <div className="mt-8 min-h-0 flex-1">{children}</div>
      <footer className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[13px] tracking-wide text-muted-foreground">
        <span>{source}</span>
        <span>
          {String(page).padStart(2, "0")} / {TOTAL}
        </span>
      </footer>
    </div>
  );
}

export const TB11 = "Source: International Business: Competing in the Global Marketplace, Ch. 11";
export const TB12 = "Source: International Business: Competing in the Global Marketplace, Ch. 12";

export function Arrow({ dir = "right", className = "" }: { dir?: "right" | "down"; className?: string }) {
  return (
    <span className={`font-mono text-primary ${className}`} aria-hidden>
      {dir === "right" ? "→" : "↓"}
    </span>
  );
}

export function Takeaway({ children, label = "Managerial takeaway" }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex items-start gap-6 border-l-2 border-gold pl-6">
      <span className="slide-label shrink-0 pt-1 text-gold">{label}</span>
      <p className="font-display text-[24px] italic leading-snug">{children}</p>
    </div>
  );
}

export function Tag({ kind }: { kind: "textbook" | "current" }) {
  return kind === "textbook" ? (
    <span className="chip text-taupe">Textbook concept</span>
  ) : (
    <span className="chip text-gold">Current example · verified</span>
  );
}

export function Block({ label, title, children, tone = "cream", className = "", n = 0 }: { label?: string; title?: ReactNode; children: ReactNode; tone?: "cream" | "panel"; className?: string; n?: number }) {
  const dark = tone === "panel";
  return (
    <div className={`anim ${tone} p-5 ${className}`} style={i(n)}>
      {label && <div className={`slide-label text-[12px] ${dark ? "text-primary" : "text-primary"}`}>{label}</div>}
      {title && <div className="mt-1 text-[22px] font-semibold leading-tight">{title}</div>}
      <div className={`mt-2 text-[17px] leading-snug ${dark ? "text-muted-foreground" : "text-ink-soft"}`}>{children}</div>
    </div>
  );
}
