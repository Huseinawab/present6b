import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import * as A from "@/components/deck/slides-a";
import * as B from "@/components/deck/slides-b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Monetary System & Global Capital Market — IB Ch. 11 & 12" },
      { name: "description", content: "Academic presentation on the international monetary system, exchange-rate regimes, the IMF and World Bank, and global capital markets." },
      { property: "og:title", content: "Global Monetary System & Global Capital Market" },
      { property: "og:description", content: "International Business, Chapters 11 & 12 — a 23-slide academic presentation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

const SLIDES = [A.S01, A.S02, A.S03, A.S04, A.S05, A.S06, A.S07, A.S08, A.S09, A.S10, A.S11, B.S12, B.S13, B.S14, B.S15, B.S16, B.S17, B.S18, B.S19, B.S20, B.S21, B.S22, B.S23];
const W = 1600;
const H = 900;

function Deck() {
  const [idx, setIdx] = useState(0);
  const [scale, setScale] = useState(0.5);
  const root = useRef<HTMLDivElement>(null);
  const go = useCallback((d: number) => setIdx((v) => Math.min(SLIDES.length - 1, Math.max(0, v + d))), []);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, (window.innerHeight - 56) / H));
    fit();
    window.addEventListener("resize", fit);
    const key = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
      if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
      if (e.key === "Home") setIdx(0);
      if (e.key === "End") setIdx(SLIDES.length - 1);
      if (e.key === "f") toggleFs();
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("resize", fit); window.removeEventListener("keydown", key); };
  }, [go]);

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  const Slide = SLIDES[idx];
  return (
    <div ref={root} className="flex h-screen w-screen flex-col overflow-hidden bg-background">
      <div className="flex flex-1 items-center justify-center">
        <div style={{ width: W * scale, height: H * scale }} className="relative overflow-hidden">
          <div key={idx} className="slide-enter absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
            <Slide />
          </div>
        </div>
      </div>
      <nav className="flex h-14 items-center gap-4 border-t border-line px-6 font-mono text-[13px] text-muted-foreground">
        <button onClick={() => go(-1)} disabled={idx === 0} className="rounded-md border border-line px-3 py-1 hover:text-foreground disabled:opacity-30" aria-label="Previous slide">← Prev</button>
        <button onClick={() => go(1)} disabled={idx === SLIDES.length - 1} className="rounded-md border border-line px-3 py-1 hover:text-foreground disabled:opacity-30" aria-label="Next slide">Next →</button>
        <div className="relative h-[3px] flex-1 overflow-hidden rounded bg-muted">
          <div className="absolute inset-y-0 left-0 bg-gold transition-all duration-500" style={{ width: `${((idx + 1) / SLIDES.length) * 100}%` }} />
        </div>
        <span className="w-16 text-right">{String(idx + 1).padStart(2, "0")} / {SLIDES.length}</span>
        <button onClick={toggleFs} className="rounded-md border border-line px-3 py-1 hover:text-foreground" aria-label="Toggle fullscreen">Fullscreen</button>
      </nav>
    </div>
  );
}
