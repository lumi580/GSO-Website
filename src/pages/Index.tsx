import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Users,
  Vote,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import heroCampus from "@/assets/CE-230118-Drone-05-2.jpg";
import campusBuilding from "@/assets/NEWS-Default-1-Featured.jpg";

const stats = [
  { value: 2751, suffix: "+", label: "Graduate Students" },
];

const pillars = [
  {
    icon: HandCoins,
    title: "Funding Clubs",
    body: "Conference travel grants, research funding, and emergency support for graduate students.",
  },
  {
    icon: BookOpen,
    title: "Student Activities",
    body: "A symposium, faculty connections, and grant tracking to advance your scholarship.",
  },
  {
    icon: ShieldCheck,
    title: "Advocacy",
    body: "Student rights, academic appeals, and representation in shared governance.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Orientation, networking, professional development, and social events year-round.",
  },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[92dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroCampus}
            alt="Aerial view of the Brooklyn College campus"
            width={1920}
            height={770}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="container-page pb-20 pt-40 text-ink">
          <Reveal y={30} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-white/25 px-3 py-1 text-xs uppercase tracking-[0.14em] font-semibold text-ink backdrop-blur">
              <Sparkles className="h-3 w-3 text-maroon-ink" />
              Graduate Student Organization · Est. Brooklyn College
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.98] text-balance">
              Representing graduate students.
              <br />
              <span className="text-maroon-ink italic">Leading change.</span>
              <br />
              Building community.
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium text-ink text-balance [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_14px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.7)]">
              The official governing body of Brooklyn College's graduate
              community — advocating, funding, and connecting more than 2,751
              scholars across every discipline.
            </p>

          </Reveal>

          {/* Outside the max-w-4xl block above, so it centres on the page
              container rather than on the headline column. */}
          <Reveal y={30} delay={0.12} className="mt-9 flex justify-center">
            <a
              href="https://forms.gle/YQNXsVhWvFYRuT3x8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-maroon-dark shadow-lg transition-transform hover:scale-[1.02]"
            >
              Join GSO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px gold-underline" />
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-page py-14">
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif text-maroon-ink">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28">
        <div className="container-page grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.14em] text-maroon-ink font-semibold">
              Our Mission
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-balance">
              A voice for every graduate student at Brooklyn College.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              The Graduate Student Organization is the officially chartered
              governing body representing all matriculated graduate students at
              Brooklyn College.
            </p>
            <p className="text-muted-foreground">
              We host convenings, advocate for student rights, and hold
              a seat at every table where decisions are made about graduate life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-maroon-ink font-medium hover:gap-3 transition-all"
            >
              Read our story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.14em] text-maroon-ink font-semibold">
                What we do
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-serif text-balance">
                Four pillars of graduate life.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:border-maroon/40 hover:shadow-xl hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/10 text-maroon-ink group-hover:bg-maroon group-hover:text-primary-foreground transition-colors">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={campusBuilding}
          alt=""
          width={1200}
          height={960}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-dark/95 to-maroon/80" />

        <div className="container-page py-24 text-white grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-xs uppercase tracking-[0.14em]">
              <Vote className="h-3 w-3 text-gold" />
              Shared Governance
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-serif text-balance">
              Your vote shapes the graduate experience.
            </h2>
            <p className="mt-4 max-w-lg text-white/80">
              GSO representatives sit on faculty and administration committees.
              Learn how elections work, run for office, or cast your ballot.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/elections"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-maroon-dark"
            >
              Election Info
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/governing-documents"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium hover:bg-white/10"
            >
              Constitution &amp; Bylaws
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-maroon-ink font-semibold">
                Get in touch
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">
                Have a question, concern, or idea?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                The office is open to every graduate student. Reach the
                President directly or contact our office assistant for anything
                else.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:GSOPresident@brooklyn.cuny.edu"
                className="block rounded-xl border border-border p-5 hover:border-maroon/50 transition"
              >
                <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  President
                </div>
                <div className="mt-1 font-medium">
                  GSOPresident@brooklyn.cuny.edu
                </div>
              </a>
              <a
                href="mailto:officeassistant.bcgso@gmail.com"
                className="block rounded-xl border border-border p-5 hover:border-maroon/50 transition"
              >
                <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Office
                </div>
                <div className="mt-1 font-medium">
                  officeassistant.bcgso@gmail.com · 718-951-5503
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
