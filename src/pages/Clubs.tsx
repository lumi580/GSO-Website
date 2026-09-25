import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Club = {
  name: string;
  category: string;
  description: string;
  email?: string;
};

// PLACEHOLDER ROSTER — replace with the registered graduate club list.
// Each entry renders one card; `category` drives the filter bar above the grid.
const clubs: Club[] = [
  {
    name: "Example Departmental Club",
    category: "Academic & Departmental",
    description:
      "A club organized around a single graduate department or program.",
    email: "club@brooklyn.cuny.edu",
  },
  {
    name: "Example Professional Society",
    category: "Professional",
    description:
      "A student chapter of a professional or scholarly association.",
    email: "club@brooklyn.cuny.edu",
  },
  {
    name: "Example Cultural Association",
    category: "Cultural & Identity",
    description:
      "A community built around shared heritage, language, or identity.",
    email: "club@brooklyn.cuny.edu",
  },
  {
    name: "Example Service Organization",
    category: "Service & Advocacy",
    description:
      "A club devoted to volunteering, outreach, or issue advocacy.",
    email: "club@brooklyn.cuny.edu",
  },
  {
    name: "Example Recreation Club",
    category: "Recreation & Wellness",
    description: "A club for sport, games, fitness, or wellness activities.",
    email: "club@brooklyn.cuny.edu",
  },
  {
    name: "Example Arts Collective",
    category: "Arts & Media",
    description:
      "A club for performance, studio practice, writing, or student media.",
    email: "club@brooklyn.cuny.edu",
  },
];

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
        description="Every registered graduate club at Brooklyn College — academic, professional, cultural, and everything in between."
      />

      {clubs.length > 0 && (
        <section className="pt-12">
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

      <section className="py-12 pb-20">
        <div className="container-page">
          {clubs.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <h2 className="font-serif text-2xl">
                The club roster is being updated.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Registering a graduate club, or looking for one that used to be
                listed here? Get in touch with the GSO office.
              </p>
              <Link
                to="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-maroon-dark"
              >
                Contact the GSO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((club, i) => (
                <Reveal key={club.name} delay={i * 0.05}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 hover:border-maroon/50 hover:shadow-lg transition-all">
                    <div className="text-xs uppercase tracking-[0.12em] text-maroon-ink">
                      {club.category}
                    </div>
                    <h3 className="mt-2 text-2xl">{club.name}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {club.description}
                    </p>
                    {club.email && (
                      <a
                        href={`mailto:${club.email}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon-ink hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {club.email}
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-maroon-ink font-semibold">
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
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-maroon-dark transition-colors"
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
