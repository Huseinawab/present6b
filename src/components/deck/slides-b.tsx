import { Fragment } from "react";
import currencies from "@/assets/currencies.jpg";
import crisis from "@/assets/crisis.jpg";
import cover from "@/assets/cover.jpg";
import { Arrow, Block, Frame, Tag, Takeaway, TB11, i } from "./primitives";
import { Divider } from "./slides-a";

export function S09() {
  const col = (t: string, def: string, how: string, ben: string[], cost: string[], n: number) => (
    <div className="anim cream flex flex-col p-7" style={i(n)}>
      <div className="headline text-[44px]">{t}</div>
      <p className="mt-2 text-[19px]"><b>Definition.</b> {def}</p>
      <p className="mt-2 text-[18px] text-ink-soft"><b className="text-ink">How it works.</b> {how}</p>
      <div className="mt-4 grid grid-cols-2 gap-5 border-t border-card-line pt-4">
        <ul className="space-y-1 text-[17px]"><li className="slide-label text-[11px] text-primary">Benefits</li>{ben.map((x) => <li key={x}>+ {x}</li>)}</ul>
        <ul className="space-y-1 text-[17px]"><li className="slide-label text-[11px] text-destructive">Costs</li>{cost.map((x) => <li key={x}>− {x}</li>)}</ul>
      </div>
    </div>
  );
  return (
    <Frame page={9} section="The Regime Choice" lo="LO11-3" source={TB11 + ", Fixed versus Floating Exchange Rates"} title="Fixed vs floating: what are countries really choosing?">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-2 gap-6">
          {col("Fixed", "The government maintains the currency at a predetermined value relative to another currency or reference.", "The central bank buys or sells its currency using foreign-exchange reserves and adjusts monetary policy to hold the rate.", ["Exchange-rate predictability", "Lower currency uncertainty", "Monetary discipline", "Supports trade & investment"], ["Less policy autonomy", "Needs reserves & intervention", "Vulnerable to speculative attack", "Painful adjustment"], 1)}
          {col("Floating", "The currency’s value is primarily determined by market demand and supply.", "The rate adjusts continuously in the foreign-exchange market. If demand falls, the currency depreciates — exports get cheaper, imports dearer.", ["Monetary-policy autonomy", "Automatic external adjustment", "Absorbs economic shocks"], ["Volatility", "Uncertainty", "FX exposure for businesses", "Harder planning"], 2)}
        </div>
        <div className="anim mt-auto" style={i(4)}>
          <Takeaway label="Verdict">The choice is not between “good” and “bad” — it is a trade-off between stability and flexibility.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S10() {
  const chain = ["€ cost ↑", "USD purchasing cost ↑", "Gross margin ↓", "Firm may raise prices", "Demand may fall"];
  return (
    <Frame page={10} section="From Theory to the Firm" lo="LO11-3" source={TB11 + ", Fixed versus Floating Exchange Rates; Implications for Managers"} title="Why does the exchange-rate regime matter to a company?" kicker="Scenario: a U.S. company imports components from Europe and pays its suppliers in euros.">
      <div className="flex h-full flex-col gap-5">
        <div className="anim cream p-6" style={i(1)}>
          <div className="slide-label text-[12px] text-destructive">If the euro appreciates against the dollar</div>
          <div className="mt-4 grid grid-cols-5 gap-3">
            {chain.map((c, n) => (
              <div key={c} className="relative rounded-lg border border-card-line px-3 py-5 text-center text-[20px] font-semibold">
                {c}{n < 4 && <span className="absolute -right-[13px] top-1/2 z-10 -translate-y-1/2 font-mono text-primary">→</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Block n={2} tone="panel" label="Stable environment" title="Planning becomes easier">With a predictable exchange rate the importer can lock in costs, set prices and sign long-term supply contracts with confidence.</Block>
          <Block n={3} tone="panel" label="Volatile floating environment" title="Greater uncertainty">The same contract can become unprofitable in weeks. The firm must hedge, renegotiate, or diversify suppliers.</Block>
          <Block n={4} label="The opposite case" title="Depreciation helps exporters">When the home currency depreciates, its exports become cheaper abroad — exporters may gain market share.</Block>
        </div>
        <div className="anim mt-auto" style={i(5)}>
          <Takeaway>The same currency move hurts importers and helps exporters — managers must know which side of the trade they are on.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S11() {
  const regimes = [
    ["Free float", "Market determines its value.", "No routine intervention", "Policy autonomy; deep financial markets", "USD · EUR · GBP · JPY"],
    ["Managed float", "Market sets direction; rate is smoothed.", "Central bank intervenes when needed", "Stability without a hard commitment", "China"],
    ["Peg", "Tied to another currency at a fixed rate.", "Central bank defends the peg", "Exchange-rate stability; imported credibility", "Many small trading economies"],
    ["Currency board", "Backed by foreign reserves at a fixed rate.", "Board must hold 100% reserve backing", "Hard, credible commitment against inflation", "Hong Kong (HKD–USD)"],
    ["Dollarization", "Country adopts another country’s currency.", "Policy effectively set abroad", "End chronic inflation & instability", "Ecuador (2000)"],
  ];
  const rows = ["What happens", "Who intervenes", "Why choose it", "Example"];
  return (
    <Frame page={11} section="Exchange-Rate Regimes in Practice" lo="LO11-4" source={TB11 + ", Exchange Rate Regimes in Practice"} title="Countries use different exchange-rate regimes for different reasons">
      <div className="flex h-full flex-col">
        <div className="anim flex justify-between font-mono text-[14px] uppercase tracking-widest text-muted-foreground" style={i(1)}><span>← More flexibility</span><span>More commitment →</span></div>
        <div className="bar-x mt-2 h-[3px] bg-primary" style={i(1)} />
        <div className="mt-5 grid grid-cols-5 gap-4">
          {regimes.map(([t, ...vals], n) => (
            <div key={t} className="anim cream flex flex-col p-5" style={i(n + 2)}>
              <span className="font-mono text-[13px] text-gold">0{n + 1}</span>
              <div className="headline text-[28px]">{t}</div>
              {vals.map((v, k) => (
                <div key={k} className="mt-3 border-t border-card-line pt-2">
                  <div className="slide-label text-[11px] text-primary">{rows[k]}</div>
                  <div className={`text-[16px] leading-snug ${k === 3 ? "font-semibold" : ""}`}>{v}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="anim mt-auto text-[17px] italic text-muted-foreground" style={i(8)}>Per the textbook, ~21% of IMF members float freely and ~5% have no separate legal tender. Real regimes form a spectrum — many countries sit between categories.</p>
      </div>
    </Frame>
  );
}

export function S12() {
  const data = [
    { c: "USD", a: 60.5, b: 56.77 },
    { c: "EUR", a: 20.5, b: 20.25 },
    { c: "CNY", a: null, b: 1.95 },
  ];
  const max = 65;
  return (
    <Frame page={12} section="Current Issue" lo="LO11-4" source="Source: Ch. 11 Opening Case (end-2020); IMF COFER Data Brief, 27 Mar 2026 (2025 Q4, % of FX reserves)" title="Why is the US dollar still the world’s dominant currency?">
      <div className="grid h-full grid-cols-[1fr_1fr] gap-8">
        <div className="flex flex-col gap-4">
          <div className="anim cream p-6" style={i(1)}>
            <div className="flex items-center justify-between"><span className="slide-label text-[12px] text-ink-soft">Share of global FX reserves, %</span><Tag kind="current" /></div>
            <div className="mt-2 flex gap-5 text-[14px]"><span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-taupe" />End-2020 · textbook</span><span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary" />2025 Q4 · IMF</span></div>
            <div className="mt-4 space-y-4">
              {data.map((d, n) => (
                <div key={d.c} className="grid grid-cols-[60px_1fr] items-center gap-3">
                  <span className="font-mono text-[20px] font-semibold">{d.c}</span>
                  <div className="space-y-1">
                    {d.a !== null && <div className="flex items-center gap-3"><div className="bar-x h-4 rounded-sm bg-taupe" style={{ width: `${(d.a / max) * 100}%`, ...i(n) }} /><span className="text-[16px]">{d.a}</span></div>}
                    <div className="flex items-center gap-3"><div className="bar-x h-4 rounded-sm bg-primary" style={{ width: `${Math.max((d.b / max) * 100, 1)}%`, ...i(n + 1) }} /><span className="text-[16px] font-semibold">{d.b}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="anim relative h-[150px] overflow-hidden rounded-2xl" style={i(2)}>
            <img src={currencies} alt="Dollar, euro and yuan banknotes" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="anim slide-label text-gold" style={i(2)}>Why the dollar remains dominant</div>
          {[["Size of the US economy", "A large economic base supports demand for dollars."], ["Financial-market depth", "Large, liquid dollar-denominated asset markets (e.g. Treasuries)."], ["International trade", "Many commodities and cross-border transactions are priced in dollars."], ["Institutional trust", "Investors value liquidity, convertibility and market access."], ["Network effect", "The more people use dollars, the more useful dollars become."]].map(([t, d], n) => (
            <div key={t} className="anim grid grid-cols-[30px_1fr] gap-3 border-b border-line pb-2" style={i(n + 3)}>
              <span className="font-mono text-primary">{n + 1}</span>
              <div><span className="text-[19px] font-semibold">{t}.</span> <span className="text-[17px] text-muted-foreground">{d}</span></div>
            </div>
          ))}
          <div className="anim panel mt-auto p-4 text-[16px] leading-snug" style={i(8)}>
            <span className="text-gold">Could the yuan challenge it?</span> <b>For:</b> China is the world’s largest trader and promotes yuan invoicing. <b>Barriers:</b> capital controls, limited convertibility and less open financial markets — the yuan is still under 2% of reserves.
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S13() {
  const pro = [["Emergency liquidity", "Prevents immediate default"], ["Confidence", "Reassures investors and creditors"], ["Stabilization", "Helps restore macroeconomic stability"], ["Contagion control", "Reduces the risk of the crisis spreading"]];
  const con = [["Conditionality", "Governments must adopt specific economic policies"], ["Austerity risk", "Spending cuts / tight money may worsen short-term pain"], ["Moral hazard", "Repeated rescues may encourage risky lending and borrowing"], ["Policy sovereignty", "External conditions shape domestic economic policy"]];
  const card = ([t, d]: string[], n: number, good: boolean) => (
    <div key={t} className={`anim ${good ? "cream" : "panel"} px-6 py-4`} style={i(n)}>
      <div className={`text-[22px] font-semibold ${good ? "" : "text-destructive"}`}>{t}</div>
      <div className={`text-[17px] ${good ? "text-ink-soft" : "text-muted-foreground"}`}>→ {d}</div>
    </div>
  );
  return (
    <Frame page={13} section="Crisis Management by the IMF" lo="LO11-5" source={TB11 + ", Crisis Management by the IMF; Evaluating the IMF’s Policy Prescriptions"} title="Should the IMF rescue countries in financial crisis?">
      <div className="flex h-full flex-col gap-4">
        <div className="anim flex items-center gap-3 text-[18px] text-muted-foreground" style={i(1)}>
          <span className="slide-label text-gold">How it works</span>
          {["Crisis", "IMF loan", "Policy conditions", "Stabilization"].map((c, n, a) => <Fragment key={c}><span className="text-foreground">{c}</span>{n < a.length - 1 && <Arrow />}</Fragment>)}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3"><div className="slide-label text-primary">Why IMF intervention can help</div>{pro.map((p, n) => card(p, n + 2, true))}</div>
          <div className="space-y-3"><div className="slide-label text-destructive">But critics argue</div>{con.map((p, n) => card(p, n + 2, false))}</div>
        </div>
        <div className="anim mt-auto" style={i(7)}>
          <Takeaway label="Bottom line">The IMF debate is ultimately about how to balance financial stability, economic adjustment, and national policy autonomy.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S14() {
  const chain = ["1997", "Capital outflows", "Currencies depreciate", "Foreign-currency debt becomes more expensive", "Corporate balance sheets deteriorate", "Banking & corporate failures", "IMF intervention"];
  return (
    <Frame page={14} section="Case · Asian Financial Crisis" lo="LO11-5" source={TB11 + ", The Asian Crisis"} title="The Asian financial crisis: when currency risk became corporate risk">
      <div className="grid h-full grid-cols-[1fr_400px] gap-10">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-7 gap-2">
            {chain.map((c, n) => (
              <div key={c} className={`anim flex min-h-[150px] flex-col justify-between rounded-xl p-4 ${n === 6 ? "cream" : "panel"}`} style={i(n + 1)}>
                <span className={`font-mono text-[13px] ${n === 6 ? "text-primary" : "text-gold"}`}>0{n + 1}</span>
                <span className={`font-medium leading-tight ${n === 0 ? "headline text-[34px]" : "text-[17px]"}`}>{c}</span>
              </div>
            ))}
          </div>
          <div className="anim grid grid-cols-3 gap-5" style={i(8)}>
            {[[">$110 bn", "IMF short-term loans committed to South Korea, Indonesia & Thailand, 1997"], ["50–80%", "value lost by affected Asian currencies vs the US$ in a few months"], ["800 → 1,700", "won per US$ — Korea’s dollar debts roughly doubled in won"]].map(([b, d]) => (
              <div key={b} className="border-t-2 border-gold pt-3"><div className="headline text-[46px] text-gold">{b}</div><div className="text-[16px] text-muted-foreground">{d}</div></div>
            ))}
          </div>
          <div className="anim cream mt-auto p-5" style={i(9)}>
            <div className="slide-label text-[12px] text-primary">Why this matters for management</div>
            <p className="mt-1 text-[19px]">Firms that borrowed in foreign currency suddenly faced much larger liabilities when local currencies collapsed — the bridge to Chapter 12’s foreign-exchange risk.</p>
          </div>
        </div>
        <div className="anim relative overflow-hidden rounded-2xl" style={i(3)}>
          <img src={crisis} alt="Trading floor during a market crash" className="h-full w-full object-cover" loading="lazy" />
          <div className="overlay-bottom absolute inset-0" />
          <p className="absolute bottom-6 left-6 right-6 text-[18px]">Earning in <b>won</b>, owing in <b>dollars</b>: a currency mismatch turned depreciation into insolvency.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S15() {
  const forces = [["Exchange rate", "affects selling price and competitiveness"], ["Inflation", "affects input costs and purchasing power"], ["Interest rate", "affects financing cost"], ["Currency policy", "affects market-entry and investment decisions"], ["Financial crisis", "affects liquidity, demand, suppliers and customers"]];
  const qs = ["Where to produce?", "Where to source?", "What currency to borrow?", "How to price?", "Whether to hedge?", "Where to invest?"];
  return (
    <Frame page={15} section="Implications for Managers" lo="LO11-6" source={TB11 + ", Focus on Managerial Implications"} title="How the global monetary system changes management decisions">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-5 gap-4">
          {forces.map(([t, d], n) => (
            <div key={t} className="anim cream p-5" style={i(n + 1)}>
              <div className="font-mono text-[14px] text-gold">0{n + 1}</div>
              <div className="headline text-[28px]">{t}</div>
              <div className="mt-2 text-[17px] text-ink-soft">→ {d}</div>
            </div>
          ))}
        </div>
        <Arrow dir="down" className="text-center text-[26px]" />
        <div className="anim rounded-xl bg-primary p-6 text-primary-foreground" style={i(7)}>
          <div className="slide-label text-[12px] text-primary-foreground">Managers must decide</div>
          <div className="mt-3 grid grid-cols-6 gap-3 text-[22px] font-semibold">{qs.map((q) => <span key={q}>{q}</span>)}</div>
        </div>
        <div className="anim mt-auto" style={i(8)}>
          <Takeaway>Macroeconomic policy becomes a management issue when it changes the economics of a firm’s decisions.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S16() {
  return <Divider n="03" title={["The Global", "Capital Market"]} sub="How companies and investors move capital across borders" img={cover} page={16} presenter="Chapter 12" />;
}
