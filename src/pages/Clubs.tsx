import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HandCoins, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { mainAccount } from "@/data/budget";
import { clubs } from "@/data/clubs";

const clubMoney = mainAccount.find((line) => line.code === "6-22")!;


export default function Clubs() {
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(clubs.map((club) => club.category))],
    []
  );

  const visible = useMemo(
    () =>
      active === "All" ? clubs : clubs.filter((club) => club.category === active),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow="Clubs"
        title="Find your people."
        description={`All ${clubs.length} registered graduate clubs at Brooklyn College for 2026–27. Reach out to a club president to get involved.`}
      />

      {/* Club money from the FY27 budget request */}
      <section className="pt-10">
        <div className="container-page">
          <Reveal>
            <Link
              to="/transparency"
              className="group flex flex-col gap-5 rounded-xl bg-maroon p-6 text-white transition-transform hover:-translate-y-0.5 md:flex-row md:items-center md:p-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                <HandCoins className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-gold">
                  Club Money · FY27
                </div>
                <div className="mt-1 font-serif text-3xl md:text-4xl">
                  ${clubMoney.requested.toLocaleString()}{" "}
                  <span className="text-xl text-white/75 md:text-2xl">requested for graduate clubs</span>
                </div>
                <p className="mt-1 text-[14.5px] text-white/70">
                  Up from ${clubMoney.prior.toLocaleString()} in FY26 — the largest line in the GSO budget.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                See the budget
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {clubs.length > 0 && (
        <section className="pt-10">
          <div className="container-page flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm transition",
                  active === category
                    ? "border-maroon bg-maroon text-primary-foreground"
                    : "border-border hover:border-maroon hover:text-maroon-ink"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="py-10 pb-14">
        <div className="container-page">
          {clubs.length === 0 ? (
            <div className="rounded-md border border-border bg-card p-10 text-center">
              <h2 className="font-serif text-2xl">
                The club roster is being updated.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Registering a graduate club, or looking for one that used to be
                listed here? Get in touch with the GSO office.
              </p>
              <Link
                to="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-maroon/85"
              >
                Contact the GSO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((club, i) => (
                <Reveal key={club.name} delay={i * 0.05}>
                  <div className="group flex h-full flex-col rounded-md border border-border bg-card p-7 hover:border-maroon/50 hover:shadow-lg transition-all">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-maroon-ink">
                      {club.category}
                    </div>
                    <h3 className="mt-2 flex-1 font-serif text-2xl font-light tracking-[-0.02em] text-balance">
                      {club.name}
                    </h3>
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
                        President
                      </div>
                      <div className="mt-1 font-medium">{club.president}</div>
                      <a
                        href={`mailto:${club.email}`}
                        className="mt-1 inline-flex items-start gap-2 text-[13.5px] text-maroon-ink hover:underline underline-offset-4"
                      >
                        <Mail className="mt-[3px] h-3.5 w-3.5 shrink-0" />
                        {/* Student addresses are long; let them wrap at the @. */}
                        <span>
                          {club.email.split("@")[0]}@<wbr />
                          <span className="whitespace-nowrap">
                            {club.email.split("@")[1]}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow">
                Start something
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">
                Don't see your club? Register it.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Any group of graduate students can charter a club through the
                GSO — and registered clubs are eligible for GSO programming
                support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-maroon/85 transition-colors"
              >
                Register a Club
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-maroon hover:text-maroon-ink transition"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
