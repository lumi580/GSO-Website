import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  HandCoins,
  Instagram,
  Mail,
  Megaphone,
  PartyPopper,
  Phone,
  UsersRound,
  Vote,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ActivityGallery from "@/components/ActivityGallery";
import BoardSlider from "@/components/BoardSlider";
import HeroSlideshow from "@/components/HeroSlideshow";
import CommitteeSeats from "@/components/CommitteeSeats";
import ProposalBand from "@/components/ProposalBand";
import { INTEREST_FORM_URL as JOIN_URL } from "@/lib/links";
import { formatDay, formatTime, upcomingEvents } from "@/data/campusEvents";
import { committeeCount } from "@/data/committees";
import { mainAccount } from "@/data/budget";
import gamesPhoto from "@/assets/activities/04-games-and-giveaways.jpg";
import photoBoothPhoto from "@/assets/activities/07-photo-booth.jpg";
import fullRoomPhoto from "@/assets/activities/01-a-full-room.jpg";
import costumePhoto from "@/assets/activities/03-costume-social.jpg";
import campusBuilding from "@/assets/NEWS-Default-1-Featured.jpg";


// The five schools of Brooklyn College — every one has graduate programs the
// GSO represents.
const schools = [
  "Murray Koppelman School of Business",
  "School of Education",
  "School of Humanities & Social Sciences",
  "School of Natural & Behavioral Sciences",
  "School of Visual, Media & Performing Arts",
];

const stats = [
  { value: 2751, suffix: "+", label: "Graduate Students" },
  { value: schools.length, suffix: "", label: "Schools Represented" },
  { value: committeeCount, suffix: "", label: "Committee Seats" },
];

// Student-first shortcuts: what someone landing here most likely came to do.
const quickActions = [
  { icon: HandCoins, label: "Get funding for my club", to: "/clubs" },
  { icon: CalendarDays, label: "Find an event", to: "/events" },
  { icon: Megaphone, label: "Raise an issue", to: "/advocacy" },
  { icon: UsersRound, label: "Join a committee", to: "/#committees" },
  { icon: Vote, label: "Run for office", to: "/elections" },
];

// Each pillar pairs a real figure (FY27 budget request, committee sheet) with
// a photo from GSO events.
const grantsLine = mainAccount.find((line) => line.code === "6-22")!;
const eventsLine = mainAccount.find((line) => line.code === "6-05")!;

const pillars = [
  {
    icon: HandCoins,
    title: "Funding Clubs",
    body: "Conference travel grants, research funding, and emergency support for graduate students.",
    href: "/clubs",
    photo: gamesPhoto,
    stat: `$${Math.round(grantsLine.requested / 1000)}K`,
    statLabel: "in club money",
  },
  {
    icon: PartyPopper,
    title: "Student Activities",
    body: "A symposium, faculty connections, and grant tracking to advance your scholarship.",
    href: "/events",
    photo: photoBoothPhoto,
    stat: `$${Math.round(eventsLine.requested / 1000)}K`,
    statLabel: "for social & cultural events",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    body: "Student rights, academic appeals, and representation in shared governance.",
    href: "/advocacy",
    photo: fullRoomPhoto,
    stat: String(committeeCount),
    statLabel: "committee seats",
  },
  {
    icon: UsersRound,
    title: "Community",
    body: "Orientation, networking, professional development, and social events year-round.",
    href: "/get-involved",
    photo: costumePhoto,
    stat: "2,751+",
    statLabel: "graduate students",
  },
];

function SectionHead({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: ReactNode;
  link?: { label: string; to: string };
}) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <div className="eyebrow flex items-center gap-3">
          <motion.span
            className="h-px bg-maroon-ink/60"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          {eyebrow}
        </div>
        <h2 className="mt-5 text-4xl md:text-6xl text-balance">{title}</h2>
      </div>
      {link && (
        <Link
          to={link.to}
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-ink"
        >
          {link.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}

// Hero headline, one entry per animated word; `em` words are set in gold italic.
const headline = [
  { word: "Your" },
  { word: "voice." },
  { word: "Your", br: true },
  { word: "community.", em: true },
];

const heroPoints = ["Fund your clubs", "Fight for your rights", "Bring grad students together"];

export default function Index() {
  // Hero photo drifts down at a fraction of scroll speed (parallax) and the
  // copy fades as it leaves.
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 900], [0, 220]);
  const copyOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[720px] h-dvh max-h-[980px] flex-col overflow-hidden bg-ink text-white">
        <HeroSlideshow photoY={photoY} />
        {/* Ink-and-maroon veil: heavy in the lower-left where the copy sits, clear
            through the middle so the campus still reads. */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_15%_85%,rgb(33_37_41/0.8)_0%,transparent_60%),linear-gradient(180deg,rgb(33_37_41/0.55)_0%,rgb(33_37_41/0.05)_40%,rgb(136_35_70/0)_55%,rgb(136_35_70/0.85)_100%)]" />
        {/* Extra left-side shade so the copy reads against busy rooftops. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />

        <div className="container-page flex flex-1 flex-col justify-center pt-32 pb-10">
          <motion.div style={{ opacity: copyOpacity }} className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold flex items-center gap-3">
              <span className="h-px w-8 bg-gold/70" />
              Brooklyn College Graduate Student Organization
            </div>

            <h1 className="mt-7 text-[clamp(3.25rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] [text-shadow:0_2px_24px_rgb(33_37_41/0.45)]">
              {/* Each word rises in turn; the overflow mask makes them appear
                  from behind a baseline. */}
              {headline.map(({ word, em, br }, i) => (
                <Fragment key={i}>
                {br && <br />}
                <span className="inline-block overflow-hidden pb-[0.12em] align-top">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {em ? <em className="text-gold">{word}</em> : word}
                  </motion.span>
                </span>{" "}
                </Fragment>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-8 max-w-xl text-lg md:text-[21px] leading-relaxed text-white [text-shadow:0_1px_12px_rgb(33_37_41/0.6)]"
            >
              We're the elected student government for{" "}
              <strong className="font-semibold text-gold">
                all 2,751+ graduate students
              </strong>{" "}
              at Brooklyn College — and we're here for you.
            </motion.p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {heroPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-white/25 bg-ink/40 px-4 py-2 text-[14px] text-white backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {point}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-medium text-maroon transition-[background,transform] hover:-translate-y-0.5 hover:bg-light"
              >
                Learn About GSO
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-6 py-3.5 text-[13.5px] text-white/90 transition-colors hover:border-white hover:text-white"
              >
                Join GSO
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="container-page">
          <div className="grid grid-cols-3 border-t border-white/20">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "border-l border-white/20 pl-5 md:pl-8 py-6" : "py-6 pr-5"}
              >
                <div className="font-serif text-3xl md:text-5xl text-white">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 font-mono text-[9.5px] md:text-[10.5px] uppercase tracking-[0.2em] text-white/65">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schools marquee */}
        <div className="relative border-t border-white/15 bg-maroon/90 backdrop-blur-sm overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...schools, ...schools].map((school, i) => (
              <span
                key={i}
                aria-hidden={i >= schools.length}
                className="flex items-center gap-10 pr-10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70 whitespace-nowrap"
              >
                {school}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pt-16 pb-6 md:pt-20 md:pb-8">
        <div className="container-page grid lg:grid-cols-12 gap-14 items-start">
          <Reveal className="lg:col-span-6">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              About GSO
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-balance">
              A voice for <em className="text-maroon-ink">every</em> graduate
              student at Brooklyn College.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              The Graduate Student Organization is the officially chartered
              governing body representing all matriculated graduate students at
              Brooklyn College.
            </p>
            <Link to="/about" className="btn-outline mt-9">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <figure className="relative border-l-2 border-gold pl-8 md:pl-10">
              <span
                aria-hidden
                className="absolute -top-10 left-6 font-serif text-[9rem] leading-none text-maroon-ink/15"
              >
                “
              </span>
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug tracking-[-0.02em] text-foreground">
                We host convenings, advocate for student rights, and hold a
                seat at every table where decisions are made about graduate
                life.
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                — GSO Mission
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ActivityGallery />

      {/* Quick actions */}
      <section aria-label="Quick links" className="border-b border-border">
        <div className="container-page py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="eyebrow shrink-0">I want to…</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 flex-1">
              {quickActions.map((action, i) => (
                <Reveal key={action.label} delay={i * 0.05} y={12}>
                  <Link
                    to={action.to}
                    className="group flex h-full items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5 text-[14px] font-medium transition-[background,border-color,color,transform] hover:-translate-y-0.5 hover:border-maroon hover:bg-maroon hover:text-white"
                  >
                    <action.icon className="h-4 w-4 shrink-0 text-maroon-ink transition-[color,transform] duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:text-gold" />
                    <span className="leading-snug">{action.label}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-20 bg-light border-y border-border">
        <div className="container-page">
          <SectionHead
            eyebrow="What We Do"
            title={
              <>
                Four ways we show up <em className="text-maroon-ink">for you.</em>
              </>
            }
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
                <Link
                  to={pillar.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-maroon/40 hover:shadow-[0_24px_50px_-20px_rgb(136_35_70/0.45)]"
                >
                  {/* Photo with number badge and icon */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-maroon">
                    <img
                      src={pillar.photo}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                    <span className="absolute left-4 top-4 font-mono text-[11px] tracking-[0.2em] text-white/90">
                      0{i + 1}
                    </span>
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                      <pillar.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl text-maroon-ink">{pillar.stat}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {pillar.statLabel}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-[26px] font-light tracking-[-0.02em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-maroon-ink">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                  {/* Gold rule that sweeps in along the bottom on hover */}
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GSO initiative: a dedicated graduate research & innovation lab */}
      <ProposalBand />

      {/* Upcoming events */}
      <section id="events" className="py-16 md:py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="Upcoming Events"
            title={
              <>
                What's <em className="text-maroon-ink">happening</em> on
                campus.
              </>
            }
            link={{ label: "View All Events", to: "/events" }}
          />

          <UpcomingEvents />
        </div>
      </section>

      {/* Team */}
      <BoardSlider />

      {/* Committees */}
      <CommitteeSeats />

      {/* Shared governance */}
      <section className="relative isolate overflow-hidden">
        <img
          src={campusBuilding}
          alt=""
          width={1200}
          height={960}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon/95 to-maroon/75" />

        <div className="container-page py-16 md:py-20 text-white grid lg:grid-cols-2 gap-10 items-end">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold flex items-center gap-3">
              <span className="h-px w-8 bg-gold/70" />
              Shared Governance
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-balance">
              Your vote <em className="text-gold">shapes</em> the graduate
              experience.
            </h2>
            <p className="mt-6 max-w-lg text-white/75 leading-relaxed">
              GSO representatives sit on faculty and administration committees.
              Learn how elections work, run for office, or cast your ballot.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/elections"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-[13.5px] font-medium text-maroon transition-transform hover:-translate-y-0.5"
            >
              Election Info
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/governing-documents"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-6 py-3.5 text-[13.5px] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              Read the Constitution
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-gold text-ink">
        <div className="container-page py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-gold animate-float">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl tracking-[-0.02em]">
                Follow @bc_gso
              </div>
              <p className="mt-1 text-[15px] text-ink/80">
                Events, deadlines, and campus news — first on Instagram.
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/bc_gso"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Follow on Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* Join + contact */}
      <section id="contact" className="pt-16 md:pt-20 pb-4">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="eyebrow inline-flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Get Involved
              <span className="h-px w-8 bg-maroon-ink/60" />
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl text-balance">
              Find your place in the{" "}
              <em className="text-maroon-ink">graduate</em> community.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              The office is open to every graduate student. Join GSO, bring a
              question, or pitch an idea — we want to hear it.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shine"
              >
                Join GSO
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/get-involved" className="btn-outline">
                Ways to Get Involved
              </Link>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 max-w-4xl grid md:grid-cols-2 border-y border-border">
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu"
              className="group flex items-start justify-between gap-4 border-b md:border-b-0 md:border-r border-border p-7 transition-colors hover:bg-card"
            >
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                  President
                </div>
                <div className="mt-2 flex items-center gap-2 font-medium break-all">
                  <Mail className="h-4 w-4 shrink-0 text-maroon-ink" />
                  GSOPresident@brooklyn.cuny.edu
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-maroon-ink" />
            </a>
            <a
              href="mailto:officeassistant.bcgso@gmail.com"
              className="group flex items-start justify-between gap-4 p-7 transition-colors hover:bg-card"
            >
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                  Office
                </div>
                <div className="mt-2 flex items-center gap-2 font-medium break-all">
                  <Mail className="h-4 w-4 shrink-0 text-maroon-ink" />
                  officeassistant.bcgso@gmail.com
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  718-951-5503
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-maroon-ink" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/** The next few campus events: one featured with its photo, the rest listed. */
function UpcomingEvents() {
  const [featured, ...rest] = upcomingEvents().slice(0, 5);
  if (!featured) {
    return (
      <p className="mt-14 text-muted-foreground">
        No upcoming events right now — check back soon.
      </p>
    );
  }
  const day = formatDay(featured.start);

  return (
    <div className="mt-10 grid lg:grid-cols-12 gap-6">
      <Reveal className="lg:col-span-7">
        <a
          href={featured.link}
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full min-h-[420px] overflow-hidden rounded-md bg-ink text-white"
        >
          <img
            src={featured.photo}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="relative mt-auto p-7 md:p-9">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
              Next up · {day.weekday} {day.month} {day.day}
            </div>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl font-light tracking-[-0.02em] text-balance">
              {featured.title}
            </h3>
            <div className="mt-3 text-[15px] text-white/75">
              {featured.group} · {formatTime(featured)}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              RSVP
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </Reveal>

      <div className="lg:col-span-5 grid gap-3">
        {rest.map((event, i) => {
          const { month, day } = formatDay(event.start);
          return (
            <Reveal key={event.id} x={30} delay={0.1 + i * 0.08}>
              <a
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-md border border-border bg-card p-3 pr-5 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-maroon/40 hover:shadow-[0_8px_28px_-8px_rgb(33_37_41/0.15)]"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-light">
                  <img
                    src={event.photo}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/75 text-white">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/80">
                      {month}
                    </span>
                    <span className="font-serif text-2xl leading-none">{day}</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-maroon-ink line-clamp-1">
                    {event.group}
                  </div>
                  <div className="mt-1 font-serif text-lg leading-snug tracking-[-0.01em] line-clamp-2">
                    {event.title}
                  </div>
                  <div className="mt-1 text-[13px] text-muted-foreground">
                    {formatTime(event)}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-[transform,color] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-maroon-ink" />
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
