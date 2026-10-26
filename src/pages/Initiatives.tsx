import { motion } from "framer-motion";
import { ArrowUpRight, Check, Cpu, Lightbulb, Rocket, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { INTEREST_FORM_URL } from "@/lib/links";
import { AI_LAB_PROPOSAL_URL, AI_LAB_URL, aiLab } from "@/data/initiatives";

const pillarIcons = [Lightbulb, Sparkles, Rocket];

export default function Initiatives() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-white md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-maroon/50 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-[120px]" />
        {/* Faint circuit-like grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container-page relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            GSO Initiative · {aiLab.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-7 max-w-4xl text-5xl md:text-7xl text-balance"
          >
            Grad students need a <em className="text-gold">lab of their own.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75"
          >
            This year the GSO is proposing the {aiLab.name} to the college
            administration. {aiLab.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={AI_LAB_PROPOSAL_URL}
              target="_blank"
              rel="noreferrer"
              className="shine inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13.5px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Read the Full Proposal
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[13.5px] text-white transition-colors hover:border-white"
            >
              Support the Initiative
            </a>
            <span className="ml-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
              Led by {aiLab.lead}
            </span>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 border-t border-white/15 md:grid-cols-4">
            {aiLab.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className={`pt-6 ${i > 0 ? "md:border-l md:border-white/15 md:pl-6" : ""} ${i % 2 ? "pl-6" : ""}`}
              >
                <div className="font-serif text-4xl text-gold md:text-5xl">{stat.value}</div>
                <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/55">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 md:py-16">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Why It Matters
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              Graduate research <em className="text-maroon-ink">needs real space.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              AI is reshaping every field, and graduate students are the ones
              doing the research. What's missing is a dedicated lab — the space,
              tools, and community to do that work. That's what we're
              advocating for.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aiLab.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
                  <div className="group h-full rounded-xl border border-border bg-card p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(136_35_70/0.4)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-white transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-light">{pillar.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{pillar.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus areas marquee-style chips */}
      <section className="overflow-hidden border-y border-border bg-light py-14 md:py-16">
        <div className="container-page">
          <Reveal>
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Focus Areas
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl">
              Twelve disciplines, <em className="text-maroon-ink">one ecosystem.</em>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {aiLab.focusAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 260 }}
                className="flex cursor-default items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-[15px] transition-colors hover:border-maroon hover:bg-maroon hover:text-white"
              >
                <Cpu className="h-4 w-4 text-gold" />
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 md:py-16">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Proposed Programs
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              Programming built for <em className="text-maroon-ink">real outcomes.</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {aiLab.programs.map((program, i) => (
              <Reveal key={program.title} delay={(i % 5) * 0.06} className="h-full">
                <div className="group h-full bg-card p-6 transition-colors hover:bg-maroon hover:text-white">
                  <div className="font-mono text-[11px] text-maroon-ink transition-colors group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold leading-snug">{program.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground transition-colors group-hover:text-white/75">
                    {program.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-8 bg-gold/70" />
              Roadmap
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              A four-phase path to a <em className="text-gold">lasting</em> innovation center.
            </h2>
          </Reveal>

          <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-5">
            <motion.div
              className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left bg-gradient-to-r from-gold via-maroon to-gold md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {aiLab.phases.map((phase, i) => (
              <Reveal key={phase.title} delay={0.2 + i * 0.15}>
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-ink bg-gold font-mono text-sm text-ink">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-light">{phase.title}</h3>
                <ul className="mt-3 space-y-1.5 text-[14.5px] text-white/70">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-14 md:pt-16 pb-4">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-maroon p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-gold/20" />
              <div className="relative grid items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <h2 className="text-4xl md:text-5xl text-balance">
                    Help us make the case to the <em className="text-gold">administration.</em>
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-white/80">
                    Student support is what moves proposals forward. Tell us
                    you're interested, share your ideas, or join the founding
                    team.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13.5px] font-medium text-ink"
                  >
                    I Support This
                  </a>
                  <a
                    href={AI_LAB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[13.5px] text-white/80 hover:text-white"
                  >
                    Visit the proposal site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
