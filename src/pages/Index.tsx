import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  GraduationCap,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Users,
  Vote,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import heroCampus from "@/assets/hero-campus.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import community from "@/assets/community.jpg";

const stats = [
  { value: 2600, suffix: "+", label: "Graduate Students" },
  { value: 40, suffix: "+", label: "Events / year" },
  { value: 24, suffix: "", label: "Student Leaders" },
  { value: 180, suffix: "K", label: "Funding awarded" },
];

const pillars = [
  {
    icon: HandCoins,
    title: "Funding Opportunities",
    body: "Conference travel grants, research funding, and emergency support for graduate students.",
  },
  {
    icon: BookOpen,
    title: "Research Support",
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
            alt="Brooklyn College campus at golden hour"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--maroon-dark)]/85" />
        </div>

        <div className="container-page pb-20 pt-40 text-white">
          <Reveal y={30} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85 backdrop-blur">
              <Sparkles className="h-3 w-3 text-gold" />
              Graduate Student Organization · Est. Brooklyn College
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.98] text-balance">
              Representing graduate students.
              <br />
              <span className="text-gold-soft italic">Leading change.</span>
              <br />
              Building community.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80 text-balance">
              The official governing body of Brooklyn College's graduate
              community — advocating, funding, and connecting more than 2,600
              scholars across every discipline.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-maroon-dark shadow-lg transition-transform hover:scale-[1.02]"
              >
                Join GSO
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px gold-underline" />
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-page py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div>
                  <div className="text-4xl md:text-5xl font-serif text-maroon">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
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
            <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
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
              Brooklyn College — City University of New York.
            </p>
            <p className="text-muted-foreground">
              We fund research, host convenings, defend student rights, and hold
              a seat at every table where decisions are made about graduate life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-maroon font-medium hover:gap-3 transition-all"
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
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
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
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/10 text-maroon group-hover:bg-maroon group-hover:text-primary-foreground transition-colors">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-serif">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-28">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl aspect-[5/4]">
              <img
                src={community}
                alt="Graduate students collaborating"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
              Community
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-balance">
              Scholarship is a shared endeavor.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              From orientation to graduation, GSO is a network of peers,
              mentors, and advocates who ensure no graduate student navigates
              their program alone.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link
                to="/events"
                className="group rounded-xl border border-border p-5 hover:border-maroon/50 transition-colors"
              >
                <Calendar className="h-5 w-5 text-maroon" />
                <div className="mt-3 font-medium">Upcoming Events</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Symposium, career fair, socials.
                </div>
              </Link>
              <Link
                to="/leadership"
                className="group rounded-xl border border-border p-5 hover:border-maroon/50 transition-colors"
              >
                <GraduationCap className="h-5 w-5 text-maroon" />
                <div className="mt-3 font-medium">Meet the Board</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Executive &amp; representatives.
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Governance CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={campusBuilding}
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-dark/95 to-maroon/80" />

        <div className="container-page py-24 text-white grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-xs uppercase tracking-[0.2em]">
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
      <section className="py-28">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
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
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
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
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
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
