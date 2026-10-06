import crisis from "@/assets/crisis.jpg";
import cover from "@/assets/cover.jpg";
import { Arrow, Frame, Takeaway, TB11, TB12, TOTAL, i } from "./primitives";
import { Divider } from "./slides-a";

const P3 = "Presenter 03";
const P4 = "Presenter 04";

export function S12() {
  return <Divider n="02" title={["IMF, Crises", "& Management"]} sub="When monetary policy becomes a business issue" img={crisis} page={12} presenter="Presenter 03 · Crises & Managers" />;
}

export function S13() {
  const rows = [
    ["Provides emergency liquidity", "Conditionality can impose painful austerity"],
    ["Prevents deeper financial contagion", "“One-size-fits-all” policies may worsen short-term conditions"],
    ["Restores investor confidence", "Moral hazard: lenders and governments expect a bailout"],
    ["Supports balance-of-payments adjustment", "Lack of accountability; external influence on domestic policy"],
  ];
  return (
    <Frame page={13} section="Crisis Management" lo="LO11-5" presenter={P3} source={TB11 + ", Crisis Management by the IMF"} title="Should the IMF rescue countries in crisis?">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-[1fr_60px_1fr] gap-4">
          <div className="slide-label text-primary">Case for the IMF</div><div /><div className="slide-label text-destructive">Criticisms</div>
        </div>
        {rows.map(([a, b], n) => (
          <div key={a} className="anim grid grid-cols-[1fr_60px_1fr] items-center gap-4" style={i(n + 1)}>
            <div className="cream px-6 py-4 text-[21px] font-medium">{a}</div>
            <span className="text-center font-mono text-[22px] text-gold">⇄</span>
            <div className="panel px-6 py-4 text-[21px]">{b}</div>
          </div>
        ))}
        <div className="anim mt-auto flex flex-wrap items-center gap-3" style={i(6)}>
          <span className="slide-label mr-3 text-gold">Textbook cases</span>
          {["Asian crisis · 1997", "Argentina · 2001–02", "Global financial crisis · 2008–10", "Egypt · 2016"].map((c) => (
            <span key={c} className="chip text-foreground">{c}</span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function S14() {
  const chain = ["Won depreciates", "Dollar debt becomes more expensive", "Corporate balance sheets deteriorate", "Defaults & bankruptcies", "Investment falls", "Unemployment rises", "IMF intervention"];
  return (
    <Frame page={14} section="Case · South Korea 1997" lo="LO11-5" presenter={P3} source={TB11 + ", The Asian Crisis"} title="When an exchange-rate problem becomes a business problem">
      <div className="grid h-full grid-cols-[1fr_420px] gap-12">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-7 gap-2">
            {chain.map((c, n) => (
              <div key={c} className={`anim relative flex min-h-[150px] flex-col justify-between rounded-xl p-4 ${n === 6 ? "cream" : "panel"}`} style={i(n + 1)}>
                <span className={`font-mono text-[13px] ${n === 6 ? "text-primary" : "text-gold"}`}>0{n + 1}</span>
                <span className="text-[18px] font-medium leading-tight">{c}</span>
              </div>
            ))}
          </div>
          <div className="anim grid grid-cols-3 gap-5" style={i(8)}>
            {[["800 → 1,700", "won per US$ — the currency more than halved in value"], ["50–80%", "value lost by Asian currencies vs USD in months"], ["$55 bn", "IMF-led rescue package for South Korea, Dec 1997"]].map(([b, d]) => (
              <div key={b} className="border-t-2 border-gold pt-4">
                <div className="headline text-[48px] text-gold">{b}</div>
                <div className="mt-1 text-[18px] text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
          <div className="anim mt-auto" style={i(9)}>
            <Takeaway label="Lesson">Financial instability does not stay inside financial markets — it reaches firms, employees, consumers, and managers.</Takeaway>
          </div>
        </div>
        <div className="anim relative overflow-hidden rounded-2xl" style={i(3)}>
          <img src={crisis} alt="Trading floor during a market crash" className="h-full w-full object-cover" loading="lazy" />
          <div className="overlay-bottom absolute inset-0" />
          <p className="absolute bottom-6 left-6 right-6 text-[19px]">Korean firms had borrowed heavily in <b>dollars</b> while earning in <b>won</b> — a currency mismatch that turned depreciation into insolvency.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S15() {
  const channels = ["Import costs", "Export competitiveness", "Foreign revenue", "Debt service", "Investment returns", "Pricing", "Supply chain"];
  const decisions = ["Multinational pricing", "Sourcing", "Plant location", "Foreign investment", "Financing currency", "Hedging"];
  return (
    <Frame page={15} section="Implications for Business" lo="LO11-6" presenter={P3} source={TB11 + ", Implications for Managers"} title="Exchange rates change management decisions" kicker="Macroeconomic policy → company P&L → strategic choices.">
      <div className="flex h-full flex-col items-center gap-3">
        <div className="anim cream px-10 py-4 text-[26px] font-semibold" style={i(1)}>Exchange-rate policy</div>
        <Arrow dir="down" className="text-[22px]" />
        <div className="anim panel px-10 py-3 text-[22px]" style={i(2)}>Currency value &amp; volatility</div>
        <Arrow dir="down" className="text-[22px]" />
        <div className="grid w-full grid-cols-7 gap-3">
          {channels.map((c, n) => (
            <div key={c} className="anim rounded-lg border border-primary/50 px-3 py-4 text-center text-[18px]" style={i(n + 3)}>{c}</div>
          ))}
        </div>
        <Arrow dir="down" className="text-[22px]" />
        <div className="anim w-full rounded-xl bg-primary p-5 text-primary-foreground" style={i(10)}>
          <div className="slide-label text-[12px] text-primary-foreground">Management decisions</div>
          <div className="mt-2 grid grid-cols-6 gap-3 text-[21px] font-semibold">
            {decisions.map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S16() {
  return <Divider n="03" title={["Global", "Capital Market"]} sub="Why companies increasingly raise money beyond their home country" img={cover} page={16} presenter="Presenter 04 · Capital & Strategy" />;
}

export function S17() {
  const side = (t: string, items: string[], n: number) => (
    <div className="anim cream p-7" style={i(n)}>
      <div className="slide-label text-[12px] text-primary">For</div>
      <div className="headline text-[44px]">{t}</div>
      <ul className="mt-4 space-y-2 text-[21px]">{items.map((x) => <li key={x} className="border-b border-card-line pb-2">{x}</li>)}</ul>
    </div>
  );
  return (
    <Frame page={17} section="Benefits of the Global Capital Market" lo="LO12-1" presenter={P4} source={TB12 + ", Opening Case (Nanox) & Benefits of the Global Capital Market"} title="Global capital = more money, more options">
      <div className="grid h-full grid-cols-[1fr_1fr_400px] gap-8">
        {side("Borrowers", ["Larger pool of funds", "Greater liquidity", "Lower potential cost of capital", "Specialized investors", "Financing flexibility"], 1)}
        {side("Investors", ["More investment opportunities", "International diversification", "Better risk-adjusted returns"], 2)}
        <div className="anim panel flex flex-col justify-between p-7" style={i(3)}>
          <span className="slide-label text-gold">Textbook case · Nanox</span>
          <div>
            <div className="headline text-[88px] text-gold">$165M</div>
            <div className="text-[20px]">raised in a <b>NASDAQ IPO, 2020</b></div>
          </div>
          <p className="text-[18px] text-muted-foreground">An Israeli medical-imaging firm went to the U.S. because deeper liquidity and investor demand lowered its cost of capital.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S18() {
  const drivers = [["01", "Technology", "Faster information, communication & trading"], ["02", "Deregulation", "Financial services opened to competition"], ["03", "Cross-border liberalization", "Fewer restrictions on international capital flows"]];
  return (
    <Frame page={18} section="Growth of the Global Capital Market" lo="LO12-2" presenter={P4} source={TB12 + ", Growth of the Global Capital Market"} title="Why capital went global">
      <div className="flex h-full flex-col gap-8">
        <div className="grid grid-cols-3 gap-6">
          {drivers.map(([n, t, d], k) => (
            <div key={t} className="anim cream p-7" style={i(k + 1)}>
              <div className="headline text-[64px] text-primary">{n}</div>
              <div className="mt-1 text-[28px] font-semibold">{t}</div>
              <div className="mt-2 text-[19px] text-ink-soft">{d}</div>
            </div>
          ))}
        </div>
        <div className="anim flex items-center justify-center gap-5 text-[24px]" style={i(5)}>
          {["Greater global liquidity", "Lower financing barriers", "More international capital flows"].map((t, n, a) => (
            <span key={t} className="flex items-center gap-5"><span className="panel px-6 py-3">{t}</span>{n < a.length - 1 && <Arrow />}</span>
          ))}
        </div>
        <div className="anim mt-auto grid grid-cols-2 gap-8 border-t border-line pt-5 text-[19px] text-muted-foreground" style={i(6)}>
          <p><span className="text-foreground">Today · </span>Electronic trading and 24-hour markets let investors buy foreign shares from a phone app.</p>
          <p><span className="text-foreground">Today · </span>Cross-border listings (e.g. Nanox on NASDAQ) show how firms shop globally for the cheapest capital.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S19() {
  const flow = ["Capital inflow", "Boom", "Leverage", "Shock", "Capital flight", "Currency depreciation"];
  return (
    <Frame page={19} section="Global Capital Market Risks" lo="LO12-3" presenter={P4} source={TB12 + ", Global Capital Market Risks"} title="Global capital creates efficiency — and contagion">
      <div className="flex h-full flex-col gap-7">
        <div className="grid grid-cols-2 gap-8">
          <div className="anim cream p-6" style={i(1)}>
            <div className="slide-label text-[12px] text-primary">Benefits</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[21px]">{["Liquidity", "Efficient capital allocation", "Diversification", "Lower financing costs"].map((x) => <span key={x}>+ {x}</span>)}</div>
          </div>
          <div className="anim panel p-6" style={i(2)}>
            <div className="slide-label text-[12px] text-destructive">Systemic risks</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[21px]">{["Capital flight", "Currency crises", "Financial contagion", "Asset bubbles", "Regulatory arbitrage", "Sudden reversals"].map((x) => <span key={x}>− {x}</span>)}</div>
          </div>
        </div>
        <div className="anim" style={i(3)}>
          <div className="slide-label text-gold">The boom–bust cycle</div>
          <div className="mt-4 grid grid-cols-6 gap-2">
            {flow.map((c, n) => (
              <div key={c} className="relative">
                <div className="flex h-[180px] items-end"><div className={`bar-y w-full rounded-t-md ${n < 3 ? "bg-primary" : "bg-destructive"}`} style={{ height: [70, 120, 175, 110, 55, 30][n], ...i(n) }} /></div>
                <div className="mt-2 text-center text-[18px]">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="anim mt-auto flex gap-4 text-[18px] text-muted-foreground" style={i(5)}>
          <span className="chip text-foreground">1997 Asian crisis</span><span className="chip text-foreground">2008 global financial crisis</span>
          <span className="self-center">— both spread across borders through integrated capital markets.</span>
        </div>
      </div>
    </Frame>
  );
}

export function S20() {
  const cols = [
    ["Eurocurrency market", ["Currency deposited outside its home country", "Mostly Eurodollars", "Narrower lending–deposit spreads", "Less regulatory interference", "Risk: FX & banking-system exposure"]],
    ["Global bond market", ["Foreign bonds: sold outside issuer’s country, in local currency", "Eurobonds: underwritten by international syndicates, in a currency other than the market’s", "Long-term debt financing", "Access to international investors"]],
    ["Global equity market", ["Cross-border stock issuance & listing", "International investor base", "Greater liquidity & visibility", "Potential lower cost of capital"]],
  ] as const;
  return (
    <Frame page={20} section="Three Global Capital Markets" lo="LO12-4" presenter={P4} source={TB12 + ", Eurocurrency, Global Bond and Global Equity Markets"} title="Eurocurrency vs global bonds vs global equity">
      <div className="grid h-full grid-cols-3 gap-6">
        {cols.map(([t, items], n) => (
          <div key={t} className="anim cream flex flex-col p-7" style={i(n + 1)}>
            <div className="flex items-center gap-3">
              <span className="headline text-[40px] text-primary">{["€$", "B", "S"][n]}</span>
              <span className="slide-label text-[12px] text-ink-soft">{["Short-term deposits & loans", "Debt", "Equity"][n]}</span>
            </div>
            <div className="headline mt-3 text-[34px]">{t}</div>
            <ul className="mt-4 space-y-2 text-[19px]">{items.map((x) => <li key={x} className="border-b border-card-line pb-2">{x}</li>)}</ul>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function S21() {
  return (
    <Frame page={21} section="Foreign Exchange Risk & Cost of Capital" lo="LO12-5" presenter={P4} source={TB12 + ", Foreign Exchange Risk and the Cost of Capital"} title="The cheapest loan can become the most expensive" kicker="A South Korean firm needs ₩1 billion for one year.">
      <div className="grid h-full grid-cols-[1fr_1.3fr_430px] gap-6">
        <div className="anim cream flex flex-col p-7" style={i(1)}>
          <div className="slide-label text-[12px] text-primary">Option A · Domestic loan</div>
          <div className="headline mt-3 text-[80px]">10%</div>
          <div className="mt-auto text-[20px]">Repay <b>₩1.10 billion</b></div>
          <div className="text-[17px] text-ink-soft">Cost is known in advance</div>
        </div>
        <div className="anim cream flex flex-col p-7" style={i(2)}>
          <div className="slide-label text-[12px] text-destructive">Option B · Dollar loan</div>
          <div className="headline mt-3 text-[80px]">6%</div>
          <div className="mt-2 space-y-2 font-mono text-[18px]">
            <div>Today: $1 = ₩1,000 → borrow <b>$1M</b></div>
            <div>Repay: <b>$1.06M</b></div>
            <div className="text-destructive">If won falls: $1 = ₩1,500</div>
            <div className="border-t border-card-line pt-2 text-[20px]">$1.06M × ₩1,500 = <b>₩1.59 billion</b></div>
          </div>
        </div>
        <div className="anim flex flex-col justify-between rounded-xl bg-destructive p-7 text-destructive-foreground" style={i(3)}>
          <div className="slide-label text-[12px] text-destructive-foreground">Effective cost</div>
          <div>
            <div className="font-mono text-[22px] line-through opacity-70">6% nominal</div>
            <div className="headline text-[150px] leading-none">59%</div>
          </div>
          <ul className="space-y-1 text-[17px]">
            <li>• FX risk can overwhelm interest savings</li>
            <li>• Hedging cuts risk but raises cost</li>
            <li>• Judge <b>total</b> financing cost</li>
          </ul>
        </div>
      </div>
    </Frame>
  );
}

export function S22() {
  const pts = [["Currency", "Monitor exchange-rate exposure"], ["Financing", "Choose market & currency strategically"], ["Risk", "Balance return against FX & system risk"], ["Capital", "Use global markets to access liquidity"], ["Macro policy", "Track IMF, central banks & regimes"]];
  return (
    <Frame page={22} section="Synthesis · Chapters 11 & 12" presenter="All presenters" source={TB11 + " & 12"} title="What does this mean for an international manager?">
      <div className="flex h-full flex-col gap-8">
        <div className="grid grid-cols-5 gap-4">
          {pts.map(([t, d], n) => (
            <div key={t} className="anim cream p-6" style={i(n + 1)}>
              <div className="font-mono text-[16px] text-gold">0{n + 1}</div>
              <div className="headline mt-1 text-[32px]">{t}</div>
              <div className="mt-2 text-[18px] text-ink-soft">{d}</div>
            </div>
          ))}
        </div>
        <div className="anim mt-auto flex items-center justify-center gap-4 text-[22px]" style={i(7)}>
          {["Monetary system", "Exchange rate", "Capital market", "Financial risk"].map((t, n) => (
            <span key={t} className="flex items-center gap-4"><span className="panel px-5 py-3">{t}</span><span className="headline text-[34px] text-gold">{n < 3 ? "+" : "="}</span></span>
          ))}
          <span className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground">International business strategy</span>
        </div>
      </div>
    </Frame>
  );
}

export function S23() {
  const refs = [
    "Hill, C.W.L. & Hult, G.T.M. — International Business: Competing in the Global Marketplace, Ch. 11 The International Monetary System",
    "Ibid., Ch. 12 The Global Capital Market",
    "IMF — Currency Composition of Official Foreign Exchange Reserves (COFER), Q4 2024",
    "IMF — Annual Report on Exchange Arrangements and Exchange Restrictions",
    "World Bank — About the IBRD & IDA",
    "BIS — Triennial Central Bank Survey of FX markets",
  ];
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative grid h-full grid-cols-[1fr_520px] gap-16 px-20 py-16">
        <div className="flex flex-col justify-center">
          <span className="anim slide-label text-gold" style={i(0)}>Questions &amp; discussion</span>
          <h2 className="anim headline mt-4 text-[150px] uppercase" style={i(1)}>Thank you</h2>
          <p className="anim mt-8 max-w-[860px] font-display text-[32px] italic leading-snug" style={i(2)}>
            “If global capital makes financing cheaper but also increases financial contagion, should countries prioritize financial openness or financial stability?”
          </p>
        </div>
        <details className="anim panel self-end p-6" style={i(3)}>
          <summary className="slide-label cursor-pointer text-primary">References ▾</summary>
          <ol className="mt-4 space-y-2 text-[15px] text-muted-foreground">
            {refs.map((r) => <li key={r}>{r}</li>)}
          </ol>
        </details>
      </div>
      <span className="absolute bottom-8 right-20 font-mono text-[13px] text-muted-foreground">23 / {TOTAL}</span>
    </div>
  );
}

export { TB11 };
