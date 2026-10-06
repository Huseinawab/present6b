import { Fragment } from "react";
import cover from "@/assets/cover.jpg";
import gold from "@/assets/gold.jpg";
import { Arrow, Block, Frame, Tag, Takeaway, TB11, TOTAL, i } from "./primitives";

export function Divider({ n, title, sub, img, page, presenter }: { n: string; title: string[]; sub: string; img: string; page: number; presenter: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative flex h-full flex-col justify-end px-20 pb-20">
        <span className="anim slide-label text-gold" style={i(0)}>{presenter}</span>
        <div className="anim headline mt-4 text-[150px] text-primary" style={i(1)}>{n}</div>
        <h2 className="anim headline text-[96px] uppercase" style={i(2)}>
          {title.map((t) => <span key={t} className="block">{t}</span>)}
        </h2>
        <div className="anim mt-8 h-px w-40 bg-gold" style={i(3)} />
        <p className="anim mt-6 text-[28px] text-muted-foreground" style={i(4)}>{sub}</p>
      </div>
      <span className="absolute bottom-8 right-20 font-mono text-[13px] text-muted-foreground">{String(page).padStart(2, "0")} / {TOTAL}</span>
    </div>
  );
}

export function S01() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <img src={cover} alt="Global financial district at dusk" className="absolute inset-0 h-full w-full object-cover" />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative flex h-full flex-col justify-between px-20 py-16">
        <div className="anim flex items-center gap-6" style={i(0)}>
          <span className="slide-label text-gold">International Business</span>
          <span className="h-px w-16 bg-gold" />
          <span className="slide-label">Chapter 11 &amp; Chapter 12</span>
        </div>
        <div>
          <h1 className="anim headline text-[104px] uppercase" style={i(1)}>
            The Global Monetary System
            <span className="block text-primary">&amp; Global Capital Market</span>
          </h1>
          <p className="anim mt-8 max-w-[1050px] text-[28px] leading-snug text-muted-foreground" style={i(2)}>
            How exchange rates, international institutions, and global capital shape international business
          </p>
        </div>
        <div className="anim grid grid-cols-3 gap-8 border-t border-line pt-6" style={i(3)}>
          {[["Group", "[GROUP MEMBERS]"], ["University", "Universitas Indonesia"], ["Lecturer", "[LECTURER]"]].map(([k, v]) => (
            <div key={k}>
              <div className="slide-label text-[12px]">{k}</div>
              <div className="mt-1 text-[22px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function S02() {
  const nodes = [
    ["Global monetary system", "Sets the rules of the environment in which currencies interact — fixed, floating, or managed."],
    ["Exchange rates", "Change a firm’s prices, revenue, costs and competitiveness in every foreign market."],
    ["Global capital markets", "Determine where — and in which currency — companies can raise financing."],
    ["Financial risk", "Determines whether apparently cheap financing is actually cheap once currencies move."],
  ];
  return (
    <Frame page={2} section="Why This Matters" source={TB11 + " & 12"} title="Why should an international business student care?">
      <div className="grid h-full grid-cols-[480px_1fr] gap-12">
        <div className="flex flex-col justify-between">
          <div className="anim cream p-7" style={i(1)}>
            <div className="slide-label text-[12px] text-primary">A business scenario</div>
            <p className="mt-3 font-display text-[28px] leading-snug">
              “A company can have a profitable product, strong demand, and cheap financing — yet still lose money because the exchange rate moves against it.”
            </p>
          </div>
          <div className="anim border-l-2 border-gold pl-6" style={i(6)}>
            <p className="font-display text-[24px] italic leading-snug">International business is not only about selling across borders. It is also about <span className="text-gold">managing the value of money across borders.</span></p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {nodes.map(([t, d], n) => (
            <div key={t} className="anim panel relative flex flex-col p-6" style={i(n + 2)}>
              <span className="font-mono text-[15px] text-gold">0{n + 1}</span>
              <div className="headline mt-2 text-[32px]">{t}</div>
              <p className="mt-3 text-[19px] leading-snug text-muted-foreground">{d}</p>
              <span className="absolute right-5 top-5 font-mono text-[20px] text-primary">{["→", "↓", "←", "◎"][n]}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function S03() {
  const steps = [
    ["1870s–1914", "Gold standard", "Currencies tied to gold"],
    ["1944–1973", "Bretton Woods", "Currencies tied to the dollar; dollar tied to gold"],
    ["1973 →", "Floating / managed / pegged", "Each country chooses its own regime"],
    ["Today", "Global capital markets", "Capital moves across borders at scale"],
  ];
  return (
    <Frame page={3} section="Roadmap" source={TB11 + " & 12"} title="From gold → dollars → floating currencies → global capital">
      <div className="flex h-full flex-col">
        <div className="relative mt-4">
          <div className="bar-x absolute left-0 right-0 top-[11px] h-px bg-gold" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map(([y, t, d], n) => (
              <div key={t} className="anim" style={i(n + 1)}>
                <span className="block h-6 w-6 rounded-full border-2 border-gold bg-background" />
                <div className="mt-5 font-mono text-[20px] text-gold">{y}</div>
                <div className="headline mt-2 text-[38px]">{t}</div>
                <p className="mt-2 text-[20px] text-muted-foreground">{d}</p>
                <span className="chip mt-4 inline-block text-primary">{n < 3 ? "Ch. 11" : "Ch. 12"}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="anim mt-auto grid grid-cols-3 gap-5" style={i(6)}>
          {[["Exchange-rate stability", "Predictable prices for trade and investment"], ["Monetary-policy freedom", "Ability to fight unemployment or inflation at home"], ["Capital mobility", "Money can flow freely across borders"]].map(([t, d]) => (
            <div key={t} className="cream p-5"><div className="text-[22px] font-semibold">{t}</div><div className="text-[17px] text-ink-soft">{d}</div></div>
          ))}
        </div>
        <p className="anim mt-5 font-display text-[24px] italic" style={i(7)}>
          The system evolved because countries repeatedly faced a trade-off between these three goals — no regime delivers all of them at once.
        </p>
      </div>
    </Frame>
  );
}

export function S04() {
  return (
    <Frame page={4} section="Chapter 11 · Gold Standard" lo="LO11-1" source={TB11 + ", The Gold Standard"} title="The gold standard: how money was tied to gold" kicker="Definition: a monetary system in which currencies were pegged to gold and governments guaranteed convertibility into gold.">
      <div className="grid h-full grid-cols-[1fr_430px] gap-10">
        <div className="flex flex-col gap-5">
          <div className="anim flex items-center gap-3 text-[20px]" style={i(1)}>
            {["Currency", "Fixed gold value", "Predictable exchange rate", "Cross-border trade becomes easier"].map((c, n, a) => (
              <Fragment key={c}><span className="panel px-5 py-3">{c}</span>{n < a.length - 1 && <Arrow />}</Fragment>
            ))}
          </div>
          <div className="anim cream p-7" style={i(2)}>
            <div className="flex items-center justify-between"><span className="slide-label text-[12px] text-primary">Worked example</span><Tag kind="textbook" /></div>
            <div className="mt-4 grid grid-cols-[1fr_1fr_auto_1fr] items-center gap-6">
              <div><div className="headline text-[44px]">US$1</div><div className="text-[18px] text-ink-soft">= 23.22 grains of gold</div></div>
              <div><div className="headline text-[44px]">£1</div><div className="text-[18px] text-ink-soft">= 113 grains of gold</div></div>
              <span className="font-mono text-[28px] text-primary">→</span>
              <div className="rounded-xl bg-primary p-4 text-primary-foreground"><div className="headline text-[46px]">£1 ≈ $4.87</div><div className="text-[15px]">113 ÷ 23.22</div></div>
            </div>
            <p className="mt-4 text-[18px] text-ink-soft">Because both currencies had a fixed gold value, the exchange rate between them could be calculated directly — and stayed stable.</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Block n={3} tone="panel" label="Strength" title="Stability + automatic adjustment">A trade surplus brought gold in, raised the money supply and prices, and made exports less competitive — so trade balances corrected themselves.</Block>
            <Block n={4} tone="panel" label="Weakness" title="Limited monetary-policy flexibility">The money supply was tied to gold, so governments could not freely expand money to fight recessions or unemployment.</Block>
          </div>
        </div>
        <div className="anim relative overflow-hidden rounded-2xl" style={i(2)}>
          <img src={gold} alt="Gold bars and historic banknotes" className="h-full w-full object-cover" loading="lazy" />
          <div className="overlay-bottom absolute inset-0" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-[24px] italic">Gold → currency → exchange rate.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S05() {
  const eras = [
    ["World War I", ["Governments print money to finance the war", "Inflation rises", "Gold convertibility becomes difficult"]],
    ["1920s", ["Countries try to restore the gold standard", "Britain returns at its prewar parity (1925)", "British goods become expensive → exports suffer"]],
    ["1930s", ["Countries devalue competitively to win exports", "Confidence in gold convertibility collapses", "Countries suspend convertibility"]],
    ["1939", ["The gold standard is effectively dead", "World trade has shrunk", "A new system is needed after the war"]],
  ] as const;
  return (
    <Frame page={5} section="Chapter 11 · Collapse of the Gold Standard" lo="LO11-1" source={TB11 + ", The Period between the Wars: 1918–1939"} title="The gold standard did not survive economic and political shocks">
      <div className="flex h-full flex-col gap-6">
        <div className="grid grid-cols-4 gap-4">
          {eras.map(([t, items], n) => (
            <div key={t} className="anim cream relative flex flex-col p-6" style={i(n + 1)}>
              <div className="headline text-[38px] text-primary">{t}</div>
              <ol className="mt-3 space-y-2 text-[18px]">
                {items.map((x, k) => <li key={x} className="flex gap-2"><span className="font-mono text-gold">{k === 0 ? "•" : "→"}</span>{x}</li>)}
              </ol>
              {n < 3 && <span className="absolute -right-4 top-10 z-10 font-mono text-[24px] text-gold">→</span>}
            </div>
          ))}
        </div>
        <div className="anim panel p-6 text-[19px] text-muted-foreground" style={i(5)}>
          <span className="text-foreground">Why the British return failed:</span> pegging the pound at its old, pre-war gold value overvalued it after wartime inflation. British exports became uncompetitive, unemployment rose, and pressure on the pound eventually forced Britain off gold (1931).
        </div>
        <div className="anim mt-auto" style={i(6)}>
          <Takeaway label="Key conclusion">Fixed rules cannot survive if governments repeatedly violate the economic conditions required to maintain them.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S06() {
  const chain = ["Other currencies", "Pegged to the US dollar", "US dollar", "Convertible to gold", "$35 / ounce"];
  return (
    <Frame page={6} section="Chapter 11 · Bretton Woods" lo="LO11-1" source={TB11 + ", The Bretton Woods System"} title="Bretton Woods: rebuilding the global monetary order" kicker="In 1944, representatives from 44 countries met at Bretton Woods, New Hampshire, to design a more stable postwar monetary system.">
      <div className="grid h-full grid-cols-[420px_1fr] gap-12">
        <div className="flex flex-col gap-1">
          {chain.map((c, n) => (
            <div key={c} className="anim flex flex-col items-center" style={i(n + 1)}>
              <div className={`${n === 4 ? "cream" : "panel"} w-full px-6 py-3 text-center ${n === 4 ? "headline text-[40px]" : "text-[21px]"}`}>{c}</div>
              {n < chain.length - 1 && <Arrow dir="down" className="text-[18px]" />}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <Block n={2} label="Why the dollar?" title="The U.S. emerged from WWII with enormous economic and financial power">It held most of the world’s monetary gold, so a dollar convertible into gold was the most credible anchor available.</Block>
          <div className="grid grid-cols-2 gap-5">
            <Block n={3} label="Institution" title="IMF">Monetary stability and balance-of-payments support — lends to members facing short-term pressure, approves devaluations beyond 10%.</Block>
            <Block n={4} label="Institution" title="World Bank">Economic development — originally postwar reconstruction, later long-term development financing.</Block>
          </div>
          <div className="anim mt-auto" style={i(6)}>
            <Takeaway label="Key difference">Unlike the classical gold standard, Bretton Woods created international institutions to help enforce and manage the system.</Takeaway>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S07() {
  return (
    <Frame page={7} section="Chapter 11 · Collapse of the Fixed System" lo="LO11-1" source={TB11 + ", The Collapse of the Fixed Exchange Rate System"} title="Why did the fixed-rate system collapse in 1973?">
      <div className="grid h-full grid-cols-[1fr_440px] gap-10">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
            {[["US inflation", "Financed by Vietnam War + Great Society spending"], ["Growing US trade deficit", "More dollars flowing abroad"], ["Pressure on the dollar", "Dollar seen as overvalued"]].map(([t, d], n) => (
              <Fragment key={t}>
                <div className="anim cream px-5 py-4 text-center" style={i(n + 1)}><div className="text-[21px] font-semibold">{t}</div><div className="text-[15px] text-ink-soft">{d}</div></div>
                {n < 2 && <span className="headline text-[34px] text-gold">+</span>}
              </Fragment>
            ))}
          </div>
          {[["Speculative pressure", "Traders bet the dollar would be devalued and sold dollars"], ["Difficulty maintaining gold convertibility", "Foreign dollar holdings exceeded U.S. gold reserves"], ["1971 · Nixon ends dollar–gold convertibility", "The anchor of the system disappears"], ["1973 · Bretton Woods collapses", "Major currencies begin to float"]].map(([t, d], n) => (
            <div key={t} className="anim flex items-center gap-4" style={i(n + 4)}>
              <Arrow dir="down" className="w-6 text-[22px]" />
              <div className="panel flex flex-1 items-baseline justify-between px-6 py-3"><span className="text-[21px] font-semibold">{t}</span><span className="text-[17px] text-muted-foreground">{d}</span></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="anim cream p-6" style={i(5)}>
            <div className="slide-label text-[12px] text-primary">After 1973: a mixed system</div>
            <ul className="mt-3 space-y-2 text-[19px]">
              <li><b>Some currencies float</b> — e.g. USD, EUR, JPY</li>
              <li><b>Some are managed</b> — central banks intervene</li>
              <li><b>Some are pegged</b> — tied to another currency</li>
            </ul>
            <p className="mt-3 text-[16px] text-ink-soft">Formalized by the 1976 Jamaica Agreement.</p>
          </div>
          <div className="anim mt-auto" style={i(8)}>
            <Takeaway label="Key insight">The collapse did not eliminate exchange-rate management. It changed how governments manage exchange rates.</Takeaway>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S08() {
  const col = (name: string, purpose: string, problems: string[], does: string[], n: number) => (
    <div className="anim cream flex flex-col p-7" style={i(n)}>
      <div className="headline text-[52px]">{name}</div>
      <div className="slide-label mt-3 text-[12px] text-primary">Primary purpose</div>
      <div className="text-[21px] font-semibold">{purpose}</div>
      <div className="mt-4 grid grid-cols-2 gap-5">
        <div><div className="slide-label text-[12px] text-primary">Main problems</div><ul className="mt-1 space-y-1 text-[17px]">{problems.map((x) => <li key={x}>• {x}</li>)}</ul></div>
        <div><div className="slide-label text-[12px] text-primary">What it does</div><ul className="mt-1 space-y-1 text-[17px]">{does.map((x) => <li key={x}>• {x}</li>)}</ul></div>
      </div>
    </div>
  );
  return (
    <Frame page={8} section="Bretton Woods Institutions" lo="LO11-2" source={TB11 + ", Role of the IMF and World Bank; Closing Case (Egypt)"} title="IMF and World Bank: same system, different jobs">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-2 gap-6">
          {col("IMF", "Maintain monetary and financial stability", ["Balance-of-payments problems", "Currency crises", "Financial crises"], ["Lends to countries in crisis", "Provides policy guidance", "Supports macroeconomic adjustment"], 1)}
          {col("World Bank", "Promote long-term economic development", ["Development financing", "Infrastructure", "Poverty & development challenges"], ["Provides development financing", "Supports long-term projects", "Builds capacity in developing economies"], 2)}
        </div>
        <div className="anim grid grid-cols-2 gap-6 text-center font-mono text-[18px] tracking-widest" style={i(3)}>
          <span className="rounded-lg border border-primary py-2 text-primary">IMF = STABILITY / CRISIS</span>
          <span className="rounded-lg border border-gold py-2 text-gold">WORLD BANK = DEVELOPMENT / LONG TERM</span>
        </div>
        <div className="anim panel flex items-center gap-4 p-5" style={i(4)}>
          <span className="slide-label shrink-0 text-gold">Textbook case · Egypt 2016</span>
          <div className="flex flex-wrap items-center gap-3 text-[19px]">
            {["Reserves shrink", "Currency depreciation", "Import prices rise", "Inflation", "IMF financing + policy conditions"].map((c, n, a) => (
              <Fragment key={c}><span>{c}</span>{n < a.length - 1 && <Arrow />}</Fragment>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}
