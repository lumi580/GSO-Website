import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarHeart,
  HandCoins,
  Landmark,
  Megaphone,
  ScrollText,
  UsersRound,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { clubs } from "@/data/clubs";
import { committeeCount } from "@/data/committees";
import { members } from "@/data/leadership";
import { CONSTITUTION_URL, INTEREST_FORM_URL } from "@/lib/links";
import teamPhoto from "@/assets/activities/02-the-gso-team.jpg";
import costumePhoto from "@/assets/activities/03-costume-social.jpg";
import judgingPhoto from "@/assets/activities/05-judging-panel.jpg";
import bulldogPhoto from "@/assets/about-bulldog.jpg";

const stats = [
  { value: 2751, suffix: "+", label: "Graduate students" },
  { value: 5, suffix: "", label: "Schools represented" },
  { value: committeeCount, suffix: "", label: "Committee seats" },
  { value: clubs.length, suffix: "", label: "Graduate clubs" },
];

// Plain-language summaries of the GSO Constitution, Article III (Purposes).
const purposes = [
  {
    icon: UsersRound,
    ref: "III.1",
    title: "Build community",
    body: "Create and maintain a graduate student community that furthers the quality of graduate education.",
  },
  {
    icon: HandCoins,
    ref: "III.3",
    title: "Fund graduate life",
    body: "Serve as the sole granting and allocating body for all graduate student fee funds.",
  },
  {
    icon: CalendarHeart,
    ref: "III.4",
    title: "Run programming",
    body: "Sponsor seminars, workshops, conferences, and events of academic, professional, cultural, and social interest.",
  },
  {
    icon: Megaphone,
    ref: "III.5 · III.7",
    title: "Be your voice",
    body: "Gather graduate students' concerns and speak and act publicly on their behalf.",
  },
  {
    icon: Landmark,
    ref: "III.6",
    title: "Seat representatives",
    body: "Appoint graduate students to joint student–faculty, college-wide, and university-wide committees.",
  },
  {
    icon: BookOpenCheck,
    ref: "III.2",
    title: "Defend academic freedom",
    body: "Shape college- and university-wide policy on graduate students' academic freedoms.",
  },
];

// How power flows, per Articles IV, VI, and IX.
const structure = [
  {
    step: "01",
    title: "Every graduate student",
    body: "Enrolled and paying the activity fee? You're automatically a member.",
    figure: "2,751+",
  },
  {
    step: "02",
    title: "Executive Board",
    body: "President, Vice President, Secretary, and Treasurer — elected to run the GSO.",
    figure: `${members.length} officers`,
  },
  {
    step: "03",
    title: "Executive Council",
    body: "The Board plus every active graduate club, each with one vote.",
    figure: "1 club = 1 vote",
  },
  {
    step: "04",
    title: "College committees",
    body: "GSO representatives carry your voice into the rooms where policy is set.",
    figure: `${committeeCount} seats`,
  },
];

export default function About() {
  return (
    <>
      {/* Hero: copy + photo collage */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-maroon/10 blur-[100px]" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow flex items-center gap-3"
            >
              <span className="h-px w-8 bg-maroon-ink/60" />
              About GSO
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl md:text-7xl text-balance"
            >
              The elected voice of <em className="text-maroon-ink">every</em> grad student.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground"
            >
              The Graduate Student Organization is Brooklyn College's official
              graduate student government. We fund your clubs, run your events,
              and represent you wherever decisions about graduate life are made.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href={INTEREST_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary shine">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/structure" className="btn-outline">
                How GSO Works
              </Link>
            </motion.div>
          </div>

          {/* Collage */}
          <div className="relative h-[24rem] md:h-[32rem] lg:col-span-6">
            {[
              { src: teamPhoto, cls: "left-[4%] top-0 w-[46%] rotate-[-4deg]", delay: 0.2 },
              { src: costumePhoto, cls: "right-0 top-[8%] w-[52%] rotate-[3deg]", delay: 0.35 },
              { src: judgingPhoto, cls: "left-[16%] bottom-0 w-[60%] rotate-[-1deg]", delay: 0.5 },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: photo.delay, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
                className={`absolute overflow-hidden rounded-xl border-4 border-white shadow-[0_20px_50px_-20px_rgb(33_37_41/0.45)] ${photo.cls}`}
              >
                <img src={photo.src} alt="" className="aspect-[4/3] h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink text-white">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""}`}
            >
              <div className="font-serif text-4xl md:text-5xl text-gold">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* You're already a member */}
      <section className="py-14 md:py-16">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-maroon p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-gold/20" />
              <div className="relative grid items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-gold">
                    Good news
                  </div>
                  <h2 className="mt-3 text-4xl md:text-5xl text-balance">
                    You're <em className="text-gold">already</em> a member.
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-white/80">
                    Every graduate student enrolled at Brooklyn College who pays
                    the student activity fee is a GSO member — no sign-up
                    required. Getting involved is the fun part.
                  </p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13.5px] font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Fill out the interest form
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    GSO Constitution · Art. IV.1
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we're here to do */}
      <section className="bg-light border-y border-border py-14 md:py-16">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-maroon-ink/60" />
                Our Purpose
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl text-balance">
                What we're <em className="text-maroon-ink">here</em> to do.
              </h2>
            </div>
            <a
              href={CONSTITUTION_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-ink"
            >
              <ScrollText className="h-4 w-4" />
              Read the Constitution
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {purposes.map((purpose, i) => (
              <Reveal key={purpose.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-maroon/40 hover:shadow-[0_18px_40px_-18px_rgb(136_35_70/0.4)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon-ink transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                      <purpose.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                      ART. {purpose.ref}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-light tracking-[-0.02em]">
                    {purpose.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {purpose.body}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-16">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-maroon-ink/60" />
                How GSO Works
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl text-balance">
                From your vote to the <em className="text-maroon-ink">decision room.</em>
              </h2>
            </div>
            <Link
              to="/structure"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-ink"
            >
              Explore the structure
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-5">
            {/* Connector line that draws across on scroll */}
            <motion.div
              className="absolute left-0 right-0 top-7 hidden h-0.5 origin-left bg-gradient-to-r from-maroon via-gold to-maroon md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {structure.map((item, i) => (
              <Reveal key={item.title} delay={0.2 + i * 0.15} className="relative">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-maroon font-mono text-sm text-white">
                  {item.step}
                </span>
                <div className="mt-5 font-serif text-3xl text-maroon-ink">{item.figure}</div>
                <h3 className="mt-2 text-lg">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {[
            {
              label: "Mission",
              title: "Represent. Advocate. Empower.",
              body: "To represent every graduate student at Brooklyn College through shared governance, deliver meaningful funding and programming, and advocate for the policies and resources that make graduate education work.",
            },
            {
              label: "Vision",
              title: "A model graduate community.",
              body: "Brooklyn College graduate students receive the funding, mentorship, and voice they need to become the scholars, professionals, and leaders their fields deserve.",
            },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.1}>
              <div className="border-l-2 border-gold pl-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                  {block.label}
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl">{block.title}</h2>
                <p className="mt-4 leading-relaxed text-white/70">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* President's welcome */}
      <section className="py-14 md:py-16">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <figure className="group relative mx-auto max-w-md">
              <div className="absolute -inset-3 rotate-[-3deg] rounded-2xl bg-gold/30" />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={bulldogPhoto}
                  alt="GSO members with the Brooklyn College Bulldog mascot on the campus lawn"
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow">President's Welcome</div>
            <blockquote className="mt-4 font-serif text-3xl md:text-4xl font-light leading-snug tracking-[-0.02em] text-balance">
              <span className="text-maroon-ink">“</span>Your graduate education
              deserves representation as ambitious as your work.
              <span className="text-maroon-ink">”</span>
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              On behalf of the Executive Board, welcome. Whether you are a
              first-semester master's student or defending your dissertation,
              the GSO exists to make your experience at Brooklyn College richer,
              fairer, and more supported.
            </p>
            <div className="mt-6 font-serif italic text-foreground/80">— GSO President</div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/leadership" className="btn-outline">
                Meet the Board
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={CONSTITUTION_URL} target="_blank" rel="noreferrer" className="btn-outline">
                <ScrollText className="h-4 w-4" />
                Our Constitution
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
