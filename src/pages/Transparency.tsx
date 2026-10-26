import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import {
  allPrior,
  allRequested,
  budgetSubmitted,
  mainAccount,
  stipends,
  summerAccount,
  totals,
  type BudgetLine,
} from "@/data/budget";
import { cn } from "@/lib/utils";

const usd = (n: number) => `$${n.toLocaleString()}`;
const change = (line: BudgetLine) =>
  line.prior === 0 ? "New" : `${line.requested >= line.prior ? "+" : "−"}${Math.abs(Math.round(((line.requested - line.prior) / line.prior) * 100))}%`;

const grants = mainAccount.find((line) => line.code === "6-22")!;
const stipendTotal = stipends.reduce((total, s) => total + s.annual, 0);

export default function Transparency() {
  const growth = ((allRequested - allPrior) / allPrior) * 100;

  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title={
          <>
            Open books. <em className="text-maroon-ink">Public</em> work.
          </>
        }
        description={`Our FY27 budget request to the Brooklyn College Association, line by line. Submitted ${budgetSubmitted}; these are requested amounts — final allocations are set by BCA.`}
      />

      {/* Headline numbers */}
      <section className="border-b border-border py-12">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: allRequested, prefix: "$", label: "FY27 total requested" },
            { value: Math.round(growth * 10) / 10, prefix: "+", suffix: "%", label: `vs. FY26 (${usd(allPrior)})` },
            { value: grants.requested, prefix: "$", label: "Club money" },
            { value: stipendTotal, prefix: "$", label: "Executive Board stipends" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l-2 border-gold pl-5">
                <div className="font-serif text-4xl text-maroon-ink md:text-5xl">
                  {Number.isInteger(stat.value) ? (
                    <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    `${stat.prefix}${stat.value}${stat.suffix ?? ""}`
                  )}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Line-by-line comparison */}
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Main Account · 10167</div>
            <h2 className="mt-4 text-4xl text-balance">Where the money goes.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              FY27 requests {usd(totals.mainRequested)} for the main operating
              account, up from {usd(totals.mainPrior)} in FY26. Over half goes to
              club money for graduate clubs, while stipends fall from{" "}
              {usd(mainAccount[1].prior)} to {usd(mainAccount[1].requested)}.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <BudgetChart lines={mainAccount} />
          </div>
        </div>
      </section>

      {/* Summer + stipends */}
      <section className="border-y border-border bg-light py-14 md:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Summer Account · 77002</div>
            <h2 className="mt-4 text-3xl">Summer programming</h2>
            {summerAccount.map((line) => (
              <div key={line.label} className="mt-6 rounded-md border border-border bg-card p-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {line.label}
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-serif text-4xl text-maroon-ink">{usd(line.requested)}</span>
                  <span className="text-sm text-muted-foreground">
                    from {usd(line.prior)} · {change(line)}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="eyebrow">Proposed Stipends · 2026–27</div>
              <h2 className="mt-4 text-3xl">
                {usd(stipendTotal)} across four officers
              </h2>
              <p className="mt-3 text-muted-foreground">
                Based on each position's responsibility, oversight, and workload.
                Paid per semester.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stipends.map((s, i) => (
                <Reveal key={s.role} delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-md border border-border bg-card p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl font-light">{s.role}</h3>
                      <div className="text-right">
                        <div className="font-serif text-2xl text-maroon-ink">{usd(s.annual)}</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {usd(s.annual / 2)} / semester
                        </div>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-[14px] text-foreground/80">
                      {s.duties.map((duty) => (
                        <li key={duty} className="flex gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-14 md:pt-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-maroon p-10 text-white md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl">Questions about the budget?</h2>
              <p className="mt-2 text-white/80">
                Every graduate student can ask how their activity fee is spent.
              </p>
            </div>
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu?subject=GSO%20budget%20question"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-medium text-maroon transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Ask the GSO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Paired horizontal bars per line: FY26 in de-emphasis gray, FY27 request in
 * maroon (emphasis — the request is the point, last year is context).
 */
function BudgetChart({ lines }: { lines: BudgetLine[] }) {
  const [view, setView] = useState<"chart" | "table">("chart");
  const [hover, setHover] = useState<string | null>(null);
  const max = Math.max(...lines.flatMap((line) => [line.prior, line.requested]));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-5 text-[13px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-4 rounded-sm bg-[var(--chart-prior)]" />
            FY26 allocated
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-4 rounded-sm bg-maroon-ink" />
            FY27 requested
          </span>
        </div>
        <div className="inline-flex rounded-full border border-border p-0.5 text-[12.5px]">
          {(["chart", "table"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "rounded-full px-3.5 py-1 capitalize transition-colors",
                view === v ? "bg-maroon text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === "chart" ? (
        <div className="mt-6 divide-y divide-border border-y border-border" onMouseLeave={() => setHover(null)}>
          {lines.map((line, i) => (
            <div
              key={line.label}
              onMouseEnter={() => setHover(line.label)}
              className={cn(
                "relative grid grid-cols-1 gap-2 py-4 transition-opacity sm:grid-cols-[11rem_1fr] sm:gap-6",
                hover && hover !== line.label && "opacity-45"
              )}
            >
              <div>
                <div className="text-[14.5px] font-medium leading-tight">{line.label}</div>
                <div className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                  {line.code !== "—" ? `LINE ${line.code}` : "FEE"}
                  {line.official && ` · ${line.official.toUpperCase()}`} · {change(line)}
                </div>
              </div>
              <div className="grid gap-1.5">
                {(["prior", "requested"] as const).map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className="h-3 flex-1">
                      <motion.div
                        className={cn(
                          "h-full rounded-r-[4px]",
                          key === "prior" ? "bg-[var(--chart-prior)]" : "bg-maroon-ink"
                        )}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(line[key] / max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        style={{ minWidth: line[key] > 0 ? 3 : 0 }}
                      />
                    </div>
                    <span
                      className={cn(
                        "w-16 shrink-0 text-right text-[13px] tabular-nums",
                        key === "requested" ? "font-semibold text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {usd(line[key])}
                    </span>
                  </div>
                ))}
              </div>
              {hover === line.label && (
                <div className="pointer-events-none absolute right-24 top-2 z-10 hidden rounded-md border border-border bg-card px-3 py-2 text-[12.5px] shadow-lg sm:block">
                  <div className="font-medium">{line.label}</div>
                  <div className="text-muted-foreground">
                    {usd(line.prior)} → <span className="font-semibold text-foreground">{usd(line.requested)}</span>{" "}
                    ({change(line)})
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <div className="text-[14.5px] font-semibold">Total</div>
            <div className="flex justify-end gap-6 text-[14px] tabular-nums">
              <span className="text-muted-foreground">{usd(totals.mainPrior)}</span>
              <span className="font-semibold">{usd(totals.mainRequested)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-border text-left font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                <th className="py-3 pr-4 font-normal">Line</th>
                <th className="py-3 pr-4 font-normal">Description</th>
                <th className="py-3 pr-4 text-right font-normal">FY26 allocated</th>
                <th className="py-3 pr-4 text-right font-normal">FY27 requested</th>
                <th className="py-3 text-right font-normal">Change</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {lines.map((line) => (
                <tr key={line.label} className="border-b border-border">
                  <td className="py-3 pr-4 text-muted-foreground">{line.code}</td>
                  <td className="py-3 pr-4">
                    {line.label}
                    {line.official && (
                      <span className="text-muted-foreground"> ({line.official})</span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-right text-muted-foreground">{usd(line.prior)}</td>
                  <td className="py-3 pr-4 text-right font-semibold">{usd(line.requested)}</td>
                  <td className="py-3 text-right">{change(line)}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4">Total</td>
                <td className="py-3 pr-4 text-right">{usd(totals.mainPrior)}</td>
                <td className="py-3 pr-4 text-right">{usd(totals.mainRequested)}</td>
                <td className="py-3 text-right">
                  +{Math.round(((totals.mainRequested - totals.mainPrior) / totals.mainPrior) * 1000) / 10}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
