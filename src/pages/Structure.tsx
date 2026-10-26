import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Crown,
  Landmark,
  ScrollText,
  UsersRound,
  Vote,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { clubs } from "@/data/clubs";
import { committeeCount, committeeGroups } from "@/data/committees";
import { members } from "@/data/leadership";
import { CONSTITUTION_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

type Level = {
  id: string;
  icon: typeof UsersRound;
  article: string;
  title: string;
  figure: string;
  summary: string;
  tone: "light" | "maroon" | "ink" | "gold";
};

// Every level comes straight from the GSO Constitution (revised June 2026).
const levels: Level[] = [
  {
    id: "members",
    icon: UsersRound,
    article: "Art. IV",
    title: "Graduate Students",
    figure: "2,751+ members",
    summary:
      "Every graduate student enrolled at Brooklyn College who pays the student activity fee is a member. Members elect the Executive Board.",
    tone: "light",
  },
  {
    id: "board",
    icon: Crown,
    article: "Art. VI",
    title: "Executive Board",
    figure: `${members.length} officers`,
    summary:
      "The executive and administrative body. It approves the operating budget, reviews club funding requests, recognizes graduate clubs, and carries out the GSO's work. Each officer has one vote.",
    tone: "maroon",
  },
  {
    id: "council",
    icon: Vote,
    article: "Art. IX",
    title: "Executive Council",
    figure: `Board + ${clubs.length} clubs`,
    summary:
      "The Executive Board plus every active graduate club. Each club gets one vote, and the council is the forum where the Board and clubs consult and decide together.",
    tone: "ink",
  },
  {
    id: "committees",
    icon: Landmark,
    article: "Art. III.6",
    title: "College Committees",
    figure: `${committeeCount} seats`,
    summary:
      "The GSO appoints graduate students to joint student–faculty, college-wide, and university-wide committees — where budgets, fees, and policy are set.",
    tone: "gold",
  },
];

const tones = {
  light: "bg-card border border-border text-foreground",
  maroon: "bg-maroon text-white",
  ink: "bg-ink text-white",
  gold: "bg-gold text-ink",
};

function Details({ id }: { id: string }) {
  if (id === "members") {
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Automatic", "No sign-up — paying the activity fee makes you a member."],
          ["Vote", "Elect the President, VP, Secretary, and Treasurer."],
          ["Run", "Matriculated grad students with a 3.0+ GPA can run for office."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg bg-light p-4">
            <div className="font-semibold">{title}</div>
            <p className="mt-1 text-[14px] text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    );
  }
  if (id === "board") {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div key={member.name} className="flex items-center gap-3 rounded-lg bg-light p-3">
            {member.photo ? (
              <img src={member.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon font-serif text-white">
                {initials(member.name)}
              </span>
            )}
            <div>
              <div className="text-[14.5px] font-semibold leading-tight">{member.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-maroon-ink">
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "council") {
    return (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-maroon px-4 py-2 text-[13.5px] text-white">
          Executive Board · {members.length} votes
        </span>
        {clubs.map((club) => (
          <span key={club.name} className="rounded-full border border-border bg-light px-4 py-2 text-[13.5px]">
            {club.name}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {committeeGroups.map((group) => (
        <div key={group.body} className="rounded-lg bg-light p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-maroon-ink">
            {group.body}
          </div>
          <ul className="mt-2 space-y-1 text-[14px]">
            {group.committees.map((committee) => (
              <li key={committee} className="flex gap-2">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                {committee}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Structure() {
  const [open, setOpen] = useState<string>("board");

  return (
    <>
      <PageHero
        eyebrow="Structure"
        title={
          <>
            How the GSO <em className="text-maroon-ink">works.</em>
          </>
        }
        description="Four levels, one chain of representation — from every graduate student to the committees that shape Brooklyn College. Tap a level to see who's in it."
      />

      <section className="relative overflow-hidden py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(136_35_70/0.07)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="container-page relative mx-auto max-w-4xl">
          {levels.map((level, i) => {
            const isOpen = open === level.id;
            return (
              <div key={level.id}>
                {i > 0 && (
                  <motion.div
                    className="mx-auto h-10 w-0.5 origin-top bg-gradient-to-b from-maroon to-gold"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                )}
                <Reveal delay={i * 0.08}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl shadow-[0_14px_40px_-22px_rgb(33_37_41/0.45)] transition-shadow",
                      isOpen && "shadow-[0_24px_60px_-24px_rgb(136_35_70/0.55)]"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? "" : level.id)}
                      aria-expanded={isOpen}
                      className={cn(
                        "flex w-full items-center gap-5 p-6 text-left md:p-7",
                        tones[level.tone]
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
                          level.tone === "light" && "bg-maroon text-white",
                          level.tone === "gold" && "bg-ink text-gold",
                          (level.tone === "maroon" || level.tone === "ink") && "bg-gold text-ink"
                        )}
                      >
                        <level.icon className="h-6 w-6" />
                      </span>
                      <div className="flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                          Level {i + 1} · {level.article}
                        </div>
                        <div className="mt-1 font-serif text-2xl md:text-3xl font-light tracking-[-0.02em]">
                          {level.title}
                        </div>
                      </div>
                      <div className="hidden text-right font-serif text-xl md:block">{level.figure}</div>
                      <ChevronDown
                        className={cn("h-5 w-5 shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="bg-card"
                        >
                          <div className="border-t border-border p-6 md:p-7">
                            <div className="font-serif text-xl text-maroon-ink md:hidden">{level.figure}</div>
                            <p className="max-w-2xl leading-relaxed text-muted-foreground">{level.summary}</p>
                            <div className="mt-5">
                              <Details id={level.id} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-maroon p-8 text-white md:flex-row md:items-center md:p-10">
              <div>
                <h2 className="text-3xl md:text-4xl">Want the full rules?</h2>
                <p className="mt-2 text-white/75">
                  Elections, vacancies, budgets, and amendments are all in the GSO Constitution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CONSTITUTION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13.5px] font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  <ScrollText className="h-4 w-4" />
                  Read the Constitution
                </a>
                <Link
                  to="/leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[13.5px] text-white transition-colors hover:border-white"
                >
                  Meet the Board
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
