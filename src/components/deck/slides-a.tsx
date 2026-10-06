import cover from "@/assets/cover.jpg";
import gold from "@/assets/gold.jpg";
import currencies from "@/assets/currencies.jpg";
import { Arrow, Frame, Takeaway, TB11, TOTAL, i } from "./primitives";

const P1 = "Presenter 01";
const P2 = "Presenter 02";

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
          <span className="slide-label">Chapter 11 &amp; 12</span>
        </div>
        <div>
          <h1 className="anim headline text-[104px] uppercase" style={i(1)}>
            The Global Monetary System
            <span className="block text-primary">&amp; Global Capital Market</span>
          </h1>
          <p className="anim mt-8 max-w-[1000px] text-[28px] leading-snug text-muted-foreground" style={i(2)}>
            How exchange rates, financial institutions, and global capital shape international business
          </p>
        </div>
        <div className="anim grid grid-cols-4 gap-8 border-t border-line pt-6" style={i(3)}>
          {[["Course", "International Business"], ["Group", "Group Name · Members"], ["University", "University Name"], ["Lecturer", "Lecturer Name"]].map(([k, v]) => (
            <div key={k}>
              <div className="slide-label text-[12px]">{k}</div>
              <div className="mt-1 text-[20px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function S02() {
  const steps = [
    ["International Monetary System", "Rules that govern exchange rates", "Ch. 11"],
    ["Exchange Rates", "The price of one currency in another", "Ch. 11"],
    ["Cross-Border Trade & Investment", "Firms price, source and invest abroad", "Link"],
    ["Global Capital Markets", "Borrowers and investors meet across borders", "Ch. 12"],
    ["Corporate Financing & Management", "Where, how, and in which currency to raise money", "Ch. 12"],
  ];
  return (
    <Frame page={2} section="The Big Picture" presenter={P1} source={TB11 + " & 12"} title="The system behind global business">
      <div className="grid h-full grid-cols-[1fr_440px] gap-14">
        <div className="flex flex-col justify-between">
          {steps.map(([t, d, tag], n) => (
            <div key={t} className="anim flex items-center gap-6" style={i(n + 1)}>
              <span className="w-10 font-mono text-[18px] text-gold">0{n + 1}</span>
              <div className={`cream flex flex-1 items-center justify-between px-7 py-4 ${n === 2 ? "bg-secondary" : ""}`} style={{ marginLeft: n * 36 }}>
                <div>
                  <div className="text-[26px] font-semibold">{t}</div>
                  <div className="text-[18px] text-ink-soft">{d}</div>
                </div>
                <span className="chip text-ink-soft">{tag}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="anim" style={i(6)}>
            <div className="slide-label text-gold">Central question</div>
            <p className="headline mt-4 text-[36px] italic leading-tight">
              “How do countries and companies move money across borders without losing control of value, stability, or risk?”
            </p>
          </div>
          <div className="anim border-t border-line pt-6 text-[20px] leading-relaxed text-muted-foreground" style={i(7)}>
            <span className="text-foreground">Why together?</span> Chapter 11 sets the <em>rules of value</em> (exchange-rate regimes, IMF). Chapter 12 shows how firms <em>raise and move capital</em> inside those rules — and carry their risk.
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S03() {
  return <Divider n="01" title={["International", "Monetary System"]} sub="From gold to floating exchange rates" img={gold} page={3} presenter="Presenter 01 · History & Institutions" />;
}

export function S04() {
  const eras = [
    { y: "1870s–1914", t: "Gold Standard", m: "Currencies pegged to gold; convertibility guaranteed", w: "Ties money supply to gold stock", c: "Collapses under WWI financing" },
    { y: "1914–1939", t: "Wars & Breakdown", m: "Gold convertibility suspended; failed attempts to return", w: "Competitive devaluations", c: "Trade shrinks, loss of confidence" },
    { y: "1944", t: "Bretton Woods", m: "Fixed rates; USD pegged to gold at $35/oz", w: "Depends on U.S. policy discipline", c: "IMF & World Bank created" },
    { y: "1971–1973", t: "Collapse", m: "Nixon ends dollar–gold convertibility", w: "Speculation against the dollar", c: "Fixed-rate system abandoned" },
    { y: "1976 →", t: "Mixed / Floating", m: "Jamaica Agreement: floating accepted", w: "Volatility", c: "Float, managed float, pegs coexist" },
  ];
  return (
    <Frame page={4} section="From Gold to Floating" lo="LO11-1" presenter={P1} source={TB11} title="How the global monetary system evolved" kicker="Each regime solved the previous problem — and created a new one.">
      <div className="relative">
        <div className="bar-x absolute left-0 right-0 top-[34px] h-px bg-gold" />
        <div className="grid grid-cols-5 gap-5">
          {eras.map((e, n) => (
            <div key={e.t} className="anim" style={i(n + 1)}>
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full border-2 border-gold bg-background" />
                <span className="font-mono text-[18px] text-gold">{e.y}</span>
              </div>
              <div className="cream mt-6 p-5">
                <div className="headline text-[30px]">{e.t}</div>
                <dl className="mt-4 space-y-3 text-[16px] leading-snug">
                  <div><dt className="slide-label text-[11px] text-primary">Mechanism</dt><dd>{e.m}</dd></div>
                  <div><dt className="slide-label text-[11px] text-destructive">Weakness</dt><dd>{e.w}</dd></div>
                  <div><dt className="slide-label text-[11px] text-ink-soft">Consequence</dt><dd>{e.c}</dd></div>
                </dl>
              </div>
            </div>
          ))}
        </div>
        <div className="anim mt-8" style={i(7)}>
          <Takeaway>The trade-off never disappears: stability and predictability versus monetary-policy freedom.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S05() {
  const chain = ["Trade surplus", "Gold inflow", "Money supply ↑", "Domestic prices ↑", "Exports less competitive", "Trade balance adjusts"];
  return (
    <Frame page={5} section="Chapter 11 · Gold Standard" lo="LO11-1" presenter={P1} source={TB11 + ", Gold Standard"} title="The gold standard: stability at a price">
      <div className="grid h-full grid-cols-[1fr_520px] gap-12">
        <div className="flex flex-col gap-7">
          <ul className="anim grid grid-cols-2 gap-x-10 gap-y-3 text-[21px]" style={i(1)}>
            <li><span className="text-gold">■</span> Currencies <b>pegged to gold</b></li>
            <li><span className="text-gold">■</span> Governments guaranteed <b>convertibility</b></li>
            <li><span className="text-gold">■</span> Exchange rates <b>predictable</b></li>
            <li><span className="text-destructive">■</span> But <b>monetary policy constrained</b></li>
          </ul>
          <div className="anim cream p-7" style={i(2)}>
            <div className="slide-label text-[12px] text-primary">Automatic adjustment — balance-of-trade equilibrium</div>
            <div className="mt-5 grid grid-cols-6 items-stretch gap-2">
              {chain.map((c, n) => (
                <div key={c} className="relative flex items-center justify-center rounded-lg border border-card-line px-2 py-5 text-center text-[17px] font-medium">
                  {c}
                  {n < chain.length - 1 && <span className="absolute -right-[11px] z-10 font-mono text-primary">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="anim panel p-6" style={i(3)}>
            <div className="slide-label text-[12px] text-destructive">Why it failed</div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[22px]">
              {["World War I", "Inflation", "Competitive devaluation", "Loss of confidence", "Collapse"].map((c, n, a) => (
                <span key={c} className="flex items-center gap-3">{c}{n < a.length - 1 && <Arrow />}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="anim relative overflow-hidden rounded-2xl" style={i(2)}>
          <img src={gold} alt="Gold bars and historic banknotes" className="h-full w-full object-cover" loading="lazy" />
          <div className="overlay-bottom absolute inset-0" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-[26px] italic">Value anchored to metal — not to policy.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S06() {
  const flow = [["44", "Countries"], ["", "Bretton Woods, NH · 1944"], ["", "Fixed exchange rates"], ["$35", "USD ↔ 1 oz gold"], ["", "IMF + World Bank"]];
  return (
    <Frame page={6} section="Chapter 11 · Bretton Woods" lo="LO11-1" presenter={P1} source={TB11 + ", Bretton Woods System"} title="Bretton Woods: the world builds a new monetary order">
      <div className="grid h-full grid-cols-[460px_1fr] gap-14">
        <div className="flex flex-col items-stretch gap-2">
          {flow.map(([big, t], n) => (
            <div key={t} className="anim flex flex-col items-center" style={i(n + 1)}>
              <div className={`${n === 3 ? "cream" : "panel"} flex w-full items-center justify-center gap-4 px-6 py-3`}>
                {big && <span className={`headline text-[40px] ${n === 3 ? "" : "text-gold"}`}>{big}</span>}
                <span className="text-[21px]">{t}</span>
              </div>
              {n < flow.length - 1 && <Arrow dir="down" className="text-[20px]" />}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          {[
            ["Dollar-centred pegs", "Other currencies fixed against the U.S. dollar."],
            ["Gold anchor", "Only the dollar was convertible to gold — at $35 per ounce."],
            ["IMF oversight", "Monitored the system and lent to members facing short-term balance-of-payments pressure."],
            ["Controlled flexibility", "Devaluations beyond 10% required IMF approval — preventing competitive devaluation."],
            ["World Bank", "Financed post-war reconstruction and long-term economic development."],
          ].map(([t, d], n) => (
            <div key={t} className="anim grid grid-cols-[300px_1fr] gap-6 border-b border-line pb-4" style={i(n + 2)}>
              <span className="text-[24px] font-semibold text-primary">{t}</span>
              <span className="text-[21px] text-muted-foreground">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function S07() {
  return (
    <Frame page={7} section="Chapter 11 · Collapse of the Fixed System" lo="LO11-1" presenter={P1} source={TB11 + ", The Collapse of the Fixed Exchange Rate System"} title="Why did fixed exchange rates break down?">
      <div className="flex h-full flex-col gap-8">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
          {["U.S. inflation (Vietnam war + Great Society spending)", "Growing U.S. balance-of-trade deficit", "Pressure on the dollar"].map((c, n) => (
            <>
              <div key={c} className="anim cream px-6 py-6 text-center text-[22px] font-medium" style={i(n + 1)}>{c}</div>
              {n < 2 && <span className="anim headline text-[40px] text-gold" style={i(n + 1)}>+</span>}
            </>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            ["Speculative pressure", "Markets bet on dollar devaluation"],
            ["Gold convertibility strained", "Dollar claims exceed U.S. gold"],
            ["1971 · Nixon", "Ends dollar–gold convertibility"],
            ["1973", "Fixed-rate system collapses"],
          ].map(([t, d], n) => (
            <div key={t} className="anim panel relative p-6" style={i(n + 4)}>
              <span className="font-mono text-[14px] text-primary">STEP {n + 1}</span>
              <div className="mt-2 text-[24px] font-semibold">{t}</div>
              <div className="mt-1 text-[18px] text-muted-foreground">{d}</div>
              {n < 3 && <span className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 font-mono text-[22px] text-gold">→</span>}
            </div>
          ))}
        </div>
        <div className="anim mt-auto" style={i(9)}>
          <Takeaway>Exchange-rate systems are sustainable only when economic fundamentals and policy credibility support them.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S08() {
  const col = (name: string, role: string, items: string[], n: number) => (
    <div className="anim cream flex flex-col p-8" style={i(n)}>
      <div className="slide-label text-[12px] text-primary">{role}</div>
      <div className="headline mt-2 text-[56px]">{name}</div>
      <ul className="mt-6 space-y-3 text-[22px]">
        {items.map((t) => <li key={t} className="border-b border-card-line pb-3">{t}</li>)}
      </ul>
    </div>
  );
  return (
    <Frame page={8} section="Bretton Woods Institutions" lo="LO11-2" presenter={P2} source={TB11 + ", Role of the IMF and World Bank"} title="Two institutions, two core missions">
      <div className="grid h-full grid-cols-[1fr_300px_1fr] gap-8">
        {col("IMF", "Stability institution", ["Maintains international monetary order", "Balance-of-payments problems", "Financial-crisis support", "Loans with policy conditions (conditionality)"], 1)}
        <div className="anim flex flex-col items-center justify-center gap-4 text-center" style={i(2)}>
          <div className="rounded-full border border-gold px-6 py-6 text-[19px] leading-tight text-gold">International<br />Monetary<br />System</div>
          <p className="text-[17px] text-muted-foreground">Both born at Bretton Woods, 1944. Roles now <em>overlap</em>: the IMF lends in crises, the World Bank also ties loans to policy reform.</p>
        </div>
        {col("World Bank", "Development institution", ["Long-term economic development", "Infrastructure (dams, roads, energy)", "Poverty reduction & development projects", "IBRD loans · IDA low-interest credits"], 3)}
      </div>
    </Frame>
  );
}

export function S09() {
  const cell = (items: string[], good: boolean) => (
    <ul className="space-y-2 text-[20px]">
      {items.map((t) => (
        <li key={t} className="flex gap-3"><span className={good ? "text-primary" : "text-destructive"}>{good ? "+" : "−"}</span>{t}</li>
      ))}
    </ul>
  );
  return (
    <Frame page={9} section="The Regime Debate" lo="LO11-3" presenter={P2} source={TB11 + ", Fixed versus Floating Exchange Rates"} title="Fixed or floating — which system is better?">
      <div className="flex h-full flex-col gap-6">
        <div className="anim cream grid grid-cols-[220px_1fr_1fr] overflow-hidden" style={i(1)}>
          <div />
          <div className="border-l border-card-line p-5 headline text-[34px]">Fixed</div>
          <div className="border-l border-card-line p-5 headline text-[34px]">Floating</div>
          <div className="slide-label border-t border-card-line p-5 text-primary">Advantages</div>
          <div className="border-l border-t border-card-line p-5">{cell(["Stability & predictability", "Monetary discipline (curbs inflation)", "Supports trade planning"], true)}</div>
          <div className="border-l border-t border-card-line p-5">{cell(["Monetary-policy autonomy", "Automatic trade-balance adjustment", "Absorbs external shocks"], true)}</div>
          <div className="slide-label border-t border-card-line p-5 text-destructive">Disadvantages</div>
          <div className="border-l border-t border-card-line p-5">{cell(["Less policy autonomy", "Requires reserves & intervention", "Vulnerable to speculation"], false)}</div>
          <div className="border-l border-t border-card-line p-5">{cell(["Volatility & uncertainty", "Higher transaction risk", "Complicates trade & investment"], false)}</div>
        </div>
        <div className="anim mt-auto" style={i(3)}>
          <Takeaway label="Verdict">There is no universally superior regime — the choice reflects a country’s economic structure and policy priorities.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S10() {
  const regimes = [
    ["Free float", "Market sets the rate", "USD · EUR · JPY · GBP", "Policy autonomy"],
    ["Managed float", "Central bank intervenes (“dirty float”)", "China", "Stability + flexibility"],
    ["Peg", "Fixed to a reference currency", "Many small trading economies", "Imported credibility"],
    ["Currency board", "Domestic currency backed 100% by foreign reserves", "Hong Kong (HKD–USD)", "Hard commitment"],
    ["Dollarization", "No separate legal tender", "Ecuador (since 2000)", "End chronic inflation"],
  ];
  return (
    <Frame page={10} section="Exchange-Rate Regimes in Practice" lo="LO11-4" presenter={P2} source={TB11 + ", Exchange Rate Regimes in Practice; IMF classification"} title="The world doesn’t use one exchange-rate system" kicker="Per the textbook, ~21% of IMF members float freely; ~5% have no separate legal tender.">
      <div className="flex h-full flex-col">
        <div className="anim flex items-center justify-between font-mono text-[14px] uppercase tracking-widest text-muted-foreground" style={i(1)}>
          <span>← More flexibility</span><span>More commitment →</span>
        </div>
        <div className="bar-x mt-3 h-[3px] bg-primary" style={i(1)} />
        <div className="mt-6 grid grid-cols-5 gap-4">
          {regimes.map(([t, d, ex, why], n) => (
            <div key={t} className="anim cream flex flex-col p-5" style={i(n + 2)}>
              <span className="font-mono text-[13px] text-gold">0{n + 1}</span>
              <div className="headline mt-1 text-[28px]">{t}</div>
              <p className="mt-3 text-[17px] leading-snug text-ink-soft">{d}</p>
              <div className="mt-auto border-t border-card-line pt-3">
                <div className="slide-label text-[11px] text-primary">Example</div>
                <div className="text-[18px] font-semibold">{ex}</div>
                <div className="slide-label mt-2 text-[11px] text-primary">Why choose it</div>
                <div className="text-[17px]">{why}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="anim mt-5 text-[17px] italic text-muted-foreground" style={i(8)}>Categories are a spectrum — many countries sit between them or shift over time.</p>
      </div>
    </Frame>
  );
}

export function S11() {
  const data = [
    { c: "USD", y20: 60.5, y24: 57.8 },
    { c: "EUR", y20: 20.5, y24: 19.8 },
    { c: "JPY", y20: null, y24: 5.8 },
    { c: "CNY", y20: null, y24: 2.2 },
  ];
  const max = 65;
  return (
    <Frame page={11} section="Current Issue" lo="LO11-1 · LO11-4" presenter={P2} source="Source: Ch. 11 Opening Case (2020 baseline); IMF COFER, Q4 2024 (share of allocated reserves, %)" title="The dollar: still the center of the system?" kicker="Could the Chinese yuan seriously challenge the dollar?">
      <div className="grid h-full grid-cols-[1fr_520px] gap-12">
        <div className="anim cream flex flex-col p-8" style={i(1)}>
          <div className="flex items-center justify-between">
            <span className="slide-label text-[12px] text-ink-soft">Share of global FX reserves, %</span>
            <span className="flex gap-5 text-[15px]">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-taupe" />2020 · textbook</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary" />Q4 2024 · IMF</span>
            </span>
          </div>
          <div className="mt-6 flex flex-1 flex-col justify-around">
            {data.map((d, n) => (
              <div key={d.c} className="grid grid-cols-[70px_1fr] items-center gap-4">
                <span className="font-mono text-[22px] font-semibold">{d.c}</span>
                <div className="space-y-2">
                  {d.y20 !== null && (
                    <div className="flex items-center gap-3"><div className="bar-x h-5 rounded-sm bg-taupe" style={{ width: `${(d.y20 / max) * 100}%`, ...i(n) }} /><span className="text-[17px]">{d.y20}</span></div>
                  )}
                  <div className="flex items-center gap-3"><div className="bar-x h-5 rounded-sm bg-primary" style={{ width: `${(d.y24 / max) * 100}%`, ...i(n + 1) }} /><span className="text-[17px] font-semibold">{d.y24}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="anim relative h-[170px] overflow-hidden rounded-2xl" style={i(2)}>
            <img src={currencies} alt="Dollar, euro and yuan banknotes" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="anim" style={i(3)}>
            <div className="slide-label text-gold">Why the dollar dominates (textbook)</div>
            <ul className="mt-3 space-y-2 text-[19px]">
              <li>• Size of the U.S. economy</li>
              <li>• Liquidity of dollar assets (Treasuries)</li>
              <li>• Confidence in U.S. institutions</li>
              <li>• ~90% of FX transactions involve USD</li>
              <li>• Yuan held back by capital controls</li>
            </ul>
          </div>
          <div className="anim border-t border-line pt-4 text-[18px] text-muted-foreground" style={i(4)}>
            <span className="text-foreground">Today:</span> the dollar’s share is slowly eroding — mostly toward smaller “non-traditional” currencies, not the yuan.
          </div>
        </div>
      </div>
    </Frame>
  );
}
