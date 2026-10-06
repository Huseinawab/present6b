import { Fragment } from "react";
import cover from "@/assets/cover.jpg";
import { Arrow, Block, Frame, Tag, Takeaway, TB12, TOTAL, i } from "./primitives";

export function S17() {
  const tier = (t: string, items: string[], n: number, hl = false) => (
    <div className={`anim ${hl ? "cream" : "panel"} px-6 py-4 text-center`} style={i(n)}>
      <div className="headline text-[30px]">{t}</div>
      <div className={`text-[17px] ${hl ? "text-ink-soft" : "text-muted-foreground"}`}>{items.join(" · ")}</div>
    </div>
  );
  return (
    <Frame page={17} section="The Global Capital Market" lo="LO12-1" source={TB12 + ", Benefits of the Global Capital Market"} title="Global capital markets connect money with opportunity" kicker="A capital market connects those who have money to invest with those who need money to finance investment.">
      <div className="grid h-full grid-cols-[460px_1fr] gap-12">
        <div className="flex flex-col gap-1">
          {tier("Investors", ["Companies", "Individuals", "Institutions"], 1)}
          <Arrow dir="down" className="text-center text-[20px]" />
          {tier("Financial intermediaries", ["Banks", "Investment banks", "Markets"], 2, true)}
          <Arrow dir="down" className="text-center text-[20px]" />
          {tier("Borrowers", ["Companies", "Governments", "Individuals"], 3)}
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <Block n={3} label="Equity" title="The company sells ownership claims">Shareholders receive dividends and capital gains; the firm has no fixed obligation to repay.</Block>
            <Block n={4} label="Debt" title="The company borrows and promises repayment + interest">Bank loans and bonds create fixed obligations regardless of how the firm performs.</Block>
          </div>
          <div className="anim panel p-6" style={i(5)}>
            <div className="slide-label text-gold">Why “global”?</div>
            <p className="mt-2 text-[21px] leading-snug">Because investors and borrowers are <b>no longer limited to their domestic markets</b>. A firm in one country can tap savers in another; an investor can buy assets worldwide.</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function S18() {
  const b = [["Larger investor pool", "More potential sources of funds"], ["Greater liquidity", "Easier to raise large amounts"], ["Lower cost of capital", "More competition among investors can reduce the required return"], ["Financing flexibility", "Choose the market and currency with better conditions"]];
  const inv = [["More assets", "More investment opportunities"], ["Diversification", "Country-specific risks are spread across markets"]];
  const list = (xs: string[][]) => xs.map(([t, d]) => <li key={t} className="border-b border-card-line pb-2"><b className="text-[19px]">{t}</b><div className="text-[16px] text-ink-soft">→ {d}</div></li>);
  return (
    <Frame page={18} section="Benefits of the Global Capital Market" lo="LO12-1" source={TB12 + ", Opening Case: Nanox"} title="What does a global capital market actually give a company?">
      <div className="grid h-full grid-cols-[1fr_330px_440px] gap-6">
        <div className="anim cream p-6" style={i(1)}><div className="slide-label text-[12px] text-primary">For borrowers</div><ul className="mt-3 space-y-2">{list(b)}</ul></div>
        <div className="anim cream p-6" style={i(2)}><div className="slide-label text-[12px] text-primary">For investors</div><ul className="mt-3 space-y-2">{list(inv)}</ul></div>
        <div className="anim panel flex flex-col p-6" style={i(3)}>
          <div className="flex items-center justify-between"><span className="slide-label text-gold">Nanox</span><Tag kind="textbook" /></div>
          <div className="mt-3 space-y-2 text-[18px]">
            {["Israeli medical-imaging company", "Domestic market too small / expensive", "IPO on NASDAQ", "Accessed deeper U.S. investor demand"].map((s, n) => <div key={s} className="flex gap-2"><span className="font-mono text-primary">{n ? "→" : "•"}</span>{s}</div>)}
          </div>
          <div className="mt-auto"><div className="headline text-[78px] leading-none text-gold">$165.2M</div><div className="text-[17px] text-muted-foreground">raised through the NASDAQ IPO</div></div>
          <p className="mt-4 border-t border-line pt-3 font-mono text-[13px] uppercase tracking-wider text-primary">Global market access can change a company’s financing options.</p>
        </div>
      </div>
    </Frame>
  );
}

export function S19() {
  const f = [["01", "Technology", "Faster communication → faster information → faster trading → lower transaction barriers."], ["02", "Deregulation", "Financial institutions gained greater freedom to operate across markets and products."], ["03", "Liberalization of capital flows", "Governments reduced restrictions on cross-border investment and currency movement."]];
  return (
    <Frame page={19} section="Growth of the Global Capital Market" lo="LO12-2" source={TB12 + ", Growth of the Global Capital Market"} title="Three forces turned national capital markets into a global network">
      <div className="flex h-full flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          {f.map(([n, t, d], k) => (
            <div key={t} className="anim cream p-6" style={i(k + 1)}>
              <div className="headline text-[60px] text-primary">{n}</div>
              <div className="text-[27px] font-semibold">{t}</div>
              <div className="mt-2 text-[18px] text-ink-soft">{d}</div>
            </div>
          ))}
        </div>
        <div className="anim flex items-center justify-center gap-4 text-[21px]" style={i(5)}>
          {["Technology + deregulation + capital mobility", "More cross-border financing", "More global liquidity"].map((t, n, a) => (
            <Fragment key={t}><span className={`${n === 2 ? "rounded-xl bg-primary text-primary-foreground" : "panel"} px-6 py-3`}>{t}</span>{n < a.length - 1 && <Arrow />}</Fragment>
          ))}
        </div>
        <div className="anim mt-auto" style={i(6)}>
          <Takeaway label="Result">Capital that was once trapped inside national borders now searches globally for the best risk-adjusted return.</Takeaway>
        </div>
      </div>
    </Frame>
  );
}

export function S20() {
  const flow = ["Capital inflow", "Investment boom", "Leverage rises", "Asset prices ↑", "External shock", "Investor panic", "Capital outflow", "Currency depreciation", "Debt burden ↑", "Financial crisis"];
  return (
    <Frame page={20} section="Risks of Global Capital Markets" lo="LO12-3" source={TB12 + ", Global Capital Market Risks"} title="The same connectivity that improves efficiency can spread crises">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-2 gap-6">
          <Block n={1} label="Benefit" title="Capital can move toward productive opportunities">Savings flow to the firms and countries with the best investment prospects.</Block>
          <Block n={2} tone="panel" label="Risk" title="Capital can leave very quickly when investors lose confidence">“Hot money” reverses in days — far faster than real investment can adjust.</Block>
        </div>
        <div className="anim" style={i(3)}>
          <div className="slide-label text-gold">The boom–bust chain</div>
          <div className="mt-3 grid grid-cols-10 gap-2">
            {flow.map((c, n) => (
              <div key={c} className="flex flex-col">
                <div className="flex h-[120px] items-end"><div className={`bar-y w-full rounded-t-md ${n < 4 ? "bg-primary" : "bg-destructive"}`} style={{ height: [40, 70, 95, 120, 100, 80, 60, 45, 30, 20][n], ...i(n) }} /></div>
                <div className="mt-2 text-center text-[15px] leading-tight">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="anim mt-auto grid grid-cols-[1fr_auto] items-center gap-6" style={i(5)}>
          <div className="flex flex-wrap gap-2">{["Currency risk", "Banking crisis", "Foreign debt crisis", "Asset bubbles", "Capital flight", "Contagion"].map((r) => <span key={r} className="chip text-destructive">{r}</span>)}</div>
          <div className="text-[17px] text-muted-foreground"><b className="text-foreground">1997 Asia</b> · <b className="text-foreground">2008 global financial crisis</b></div>
        </div>
      </div>
    </Frame>
  );
}

export function S21() {
  return (
    <Frame page={21} section="Three Channels of Global Capital" lo="LO12-4" source={TB12 + ", The Eurocurrency Market; The Global Bond Market; The Global Equity Market"} title="Three major channels of global capital">
      <div className="grid h-full grid-cols-3 gap-6">
        <div className="anim cream flex flex-col p-6" style={i(1)}>
          <div className="headline text-[34px]">Eurocurrency</div>
          <p className="mt-2 text-[17px]"><b>What:</b> any currency banked outside its country of origin.</p>
          <div className="my-4 flex items-center justify-center gap-3 rounded-lg border border-card-line py-4 text-[17px]"><span className="font-mono text-[24px] text-primary">$</span><Arrow /><span>London bank</span><span className="text-ink-soft">= Eurodollar</span></div>
          <p className="text-[17px]"><b>Why use it:</b> lower borrowing/lending spreads, less regulatory interference.</p>
          <p className="mt-2 text-[17px] text-destructive"><b>Main risk:</b> FX risk + lower regulatory protection.</p>
        </div>
        <div className="anim cream flex flex-col p-6" style={i(2)}>
          <div className="headline text-[34px]">Global bonds</div>
          <p className="mt-2 text-[17px]"><b>Foreign bond:</b> issued outside the borrower’s country, in the currency of the country where it is issued.</p>
          <div className="mt-2 flex gap-2"><span className="chip text-primary">Yankee · $ in US</span><span className="chip text-primary">Samurai · ¥ in Japan</span></div>
          <p className="mt-4 text-[17px]"><b>Eurobond:</b> denominated in a currency but issued outside that currency’s home country, via international syndicates.</p>
          <div className="mt-2"><span className="chip text-primary">e.g. $-bond sold in Europe</span></div>
          <p className="mt-auto pt-3 text-[17px]"><b>Why use it:</b> access international investors, potentially lower financing costs.</p>
        </div>
        <div className="anim cream flex flex-col p-6" style={i(3)}>
          <div className="headline text-[34px]">Global equity</div>
          <p className="mt-2 text-[17px]"><b>What:</b> companies issue or list shares to investors in foreign markets.</p>
          <ul className="mt-4 space-y-2 text-[17px]"><li>+ Larger investor base</li><li>+ Liquidity</li><li>+ Visibility with customers & partners</li><li>+ Access to capital</li></ul>
          <div className="mt-auto rounded-lg bg-primary p-4 text-primary-foreground"><div className="slide-label text-[11px] text-primary-foreground">Example</div><div className="text-[19px] font-semibold">Nanox → NASDAQ listing</div></div>
        </div>
      </div>
    </Frame>
  );
}

export function S22() {
  return (
    <Frame page={22} section="Foreign Exchange Risk & Cost of Capital" lo="LO12-5" source={TB12 + ", Foreign Exchange Risk and the Cost of Capital"} title="The cheapest interest rate can become the most expensive loan" kicker="A South Korean company needs ₩1 billion for one year.">
      <div className="flex h-full flex-col gap-5">
        <div className="grid grid-cols-[1fr_1.4fr_1fr] gap-5">
          <div className="anim cream p-6" style={i(1)}>
            <div className="slide-label text-[12px] text-primary">Option A · Domestic loan</div>
            <div className="headline text-[66px]">10%</div>
            <div className="text-[19px]">Repay <b>₩1.10 billion</b></div>
          </div>
          <div className="anim cream p-6" style={i(2)}>
            <div className="slide-label text-[12px] text-primary">Option B · US-dollar loan</div>
            <div className="headline text-[66px]">6%</div>
            <div className="space-y-1 font-mono text-[16px]">
              <div>At $1 = ₩1,000 → borrow <b>$1 million</b></div>
              <div>Repay $1.06M → initially <b>₩1.06 billion</b></div>
              <div className="text-primary">Saving vs A: ₩40 million</div>
            </div>
          </div>
          <div className="anim rounded-xl bg-destructive p-6 text-destructive-foreground" style={i(3)}>
            <div className="slide-label text-[12px] text-destructive-foreground">But then the won depreciates</div>
            <div className="mt-1 font-mono text-[18px]">$1 = ₩1,500</div>
            <div className="mt-2 font-mono text-[16px]">$1.06M × ₩1,500</div>
            <div className="headline text-[56px] leading-tight">₩1.59 bn</div>
            <div className="text-[15px]">The “6%” loan now costs ~59% in won terms</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Block n={4} tone="panel" label="Lesson" title="FX risk can overwhelm an interest-rate advantage">The firm “saved” 4 points of interest but paid ₩490 million more than the domestic loan.</Block>
          <Block n={5} tone="panel" label="Hedging" title="Forward contracts reduce — not remove — uncertainty">Hedging fixes the future rate but has its own cost, and cannot perfectly eliminate long-term FX risk.</Block>
        </div>
        <div className="anim mt-auto flex items-center justify-center gap-4 text-[22px]" style={i(6)}>
          <span className="slide-label text-gold">Managers must evaluate</span>
          {["Interest rate", "FX risk", "Hedging cost"].map((t, n) => <Fragment key={t}><span className="panel px-5 py-2">{t}</span>{n < 2 && <span className="headline text-[30px] text-gold">+</span>}</Fragment>)}
          <span className="text-muted-foreground">— not interest rate alone</span>
        </div>
      </div>
    </Frame>
  );
}

export function S23() {
  const chain = ["Global monetary system", "Exchange-rate regime", "Currency value & volatility", "Global capital flows", "Financing cost", "Corporate risk", "Management decisions"];
  const concl = [
    "Exchange-rate systems create a trade-off between stability and policy flexibility.",
    "Global capital markets increase access to financing and investment — but also transmit financial shocks across borders.",
    "International managers must evaluate not only return and interest rates, but also currency risk, capital-market conditions and macroeconomic policy.",
  ];
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative flex h-full flex-col px-20 py-12">
        <span className="anim slide-label text-gold" style={i(0)}>Synthesis · Chapters 11 &amp; 12</span>
        <h2 className="anim headline mt-3 text-[64px]" style={i(0)}>The big picture</h2>
        <div className="anim mt-6 flex items-center gap-2" style={i(1)}>
          {chain.map((c, n) => <Fragment key={c}><span className={`${n === 6 ? "rounded-xl bg-primary text-primary-foreground" : "panel"} px-3 py-3 text-center text-[16px] leading-tight`}>{c}</span>{n < 6 && <Arrow />}</Fragment>)}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {concl.map((c, n) => (
            <div key={c} className="anim cream p-5" style={i(n + 2)}><div className="headline text-[34px] text-primary">{n + 1}</div><p className="text-[18px] leading-snug">{c}</p></div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-[auto_1fr_380px] items-end gap-10">
          <div className="anim" style={i(5)}><div className="headline text-[84px] uppercase leading-none">Thank you</div><div className="slide-label mt-2">Questions &amp; discussion</div></div>
          <p className="anim font-display text-[22px] italic leading-snug" style={i(6)}>“If global financial integration lowers the cost of capital but increases the speed at which crises spread, how much financial openness should a country accept?”</p>
          <details className="anim panel p-4" style={i(7)}>
            <summary className="slide-label cursor-pointer text-primary">References ▾</summary>
            <ol className="mt-2 space-y-1 text-[13px] text-muted-foreground">
              <li>Hill &amp; Hult — International Business: Competing in the Global Marketplace, Ch. 11 &amp; 12</li>
              <li>IMF — COFER Data Brief, 27 Mar 2026 (2025 Q4)</li>
              <li>IMF — Annual Report on Exchange Arrangements</li>
              <li>World Bank — IBRD &amp; IDA</li>
            </ol>
          </details>
        </div>
      </div>
      <span className="absolute bottom-6 right-20 font-mono text-[13px] text-muted-foreground">23 / {TOTAL}</span>
    </div>
  );
}
