import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Cpu, FlaskConical, Network } from "lucide-react";
import { aiLab } from "@/data/initiatives";

const rotating = ["research", "AI", "startups", "innovation"];

// Pills that orbit the core: [label, ring (0 = outer), start angle in degrees]
const orbiters: [string, number, number][] = [
  ["AI", 0, 20],
  ["Research", 0, 150],
  ["Startups", 0, 260],
  ["Health AI", 1, 80],
  ["ML", 1, 220],
  ["Ethics", 1, 330],
];

const rings = [
  { inset: "0%", duration: 40 },
  { inset: "17%", duration: 28 },
];

const features = [
  { icon: FlaskConical, title: "Dedicated research space", body: "A room of our own for grad research teams." },
  { icon: Cpu, title: "Compute & AI tools", body: "Workstations, GPUs, and cloud for real AI work." },
  { icon: Network, title: "Cross-discipline", body: "Every graduate program, one shared lab." },
];

/** Card whose border and background light up toward the cursor. */
function SpotlightCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const bg = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgb(243 189 72 / 0.16), transparent 70%)`;
  return (
    <motion.div
      onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        x.set(-200);
        y.set(-200);
      }}
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-gold/40"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export default function ProposalBand() {
  const [word, setWord] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % rotating.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Section-wide spotlight that trails the cursor.
  const mx = useSpring(useMotionValue(600), { stiffness: 120, damping: 20 });
  const my = useSpring(useMotionValue(300), { stiffness: 120, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgb(136 35 70 / 0.35), transparent 65%)`;

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative overflow-hidden bg-ink py-16 text-white md:py-24"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-gold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            This Year's Proposal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance"
          >
            Grad students need a{" "}
            <em className="bg-gradient-to-r from-gold via-[#ffe3a3] to-gold bg-[length:200%_100%] bg-clip-text text-transparent [animation:shimmer_4s_linear_infinite]">
              lab of their own.
            </em>
          </motion.h2>

          <div className="mt-5 flex items-baseline gap-3 font-serif text-2xl md:text-3xl text-white/80">
            Built for
            <span className="relative inline-flex h-[1.3em] min-w-[7.5ch] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={rotating[word]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="italic text-gold"
                >
                  {rotating[word]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            The GSO is proposing a dedicated graduate lab for research and
            innovation — and taking the case to the college administration.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <SpotlightCard>
                  <f.icon className="h-5 w-5 text-gold" />
                  <div className="mt-3 text-[15px] font-semibold leading-tight">{f.title}</div>
                  <p className="mt-1 text-[13px] leading-snug text-white/55">{f.body}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* CTA with an animated gradient border */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/initiatives"
              className="group relative inline-flex overflow-hidden rounded-full p-[2px]"
            >
              <span className="absolute inset-[-100%] animate-spin bg-[conic-gradient(from_0deg,#f3bd48,#882346,#f3bd48,#882346,#f3bd48)] [animation-duration:3s]" />
              <span className="relative inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-4 text-[14px] font-semibold text-ink transition-colors group-hover:bg-[#ffd36e]">
                See the Proposal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">
              Led by {aiLab.lead}
            </span>
          </div>
        </div>

        {/* Living lab graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[22rem] md:max-w-[28rem] lg:col-span-5"
        >
          {rings.map((ring, r) => (
            <div key={r} className="absolute rounded-full border border-white/10" style={{ inset: ring.inset }}>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: `${ring.duration}s`, animationDirection: r ? "reverse" : "normal" }}
              >
                {orbiters
                  .filter(([, ringIndex]) => ringIndex === r)
                  .map(([label, , angle]) => (
                    // Rotate a full-size layer to the pill's angle, pin the pill to the
                    // ring's top edge, then undo both rotations so the text stays upright.
                    <div key={label} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="animate-spin"
                          style={{
                            animationDuration: `${ring.duration}s`,
                            animationDirection: r ? "normal" : "reverse",
                          }}
                        >
                          <span
                            style={{ transform: `rotate(${-angle}deg)` }}
                            className={`block whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] backdrop-blur-md ${
                              r
                                ? "border-maroon-ink/50 bg-maroon/70 text-white"
                                : "border-gold/40 bg-ink/85 text-gold shadow-[0_0_20px_-4px_rgb(243_189_72/0.6)]"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Core */}
          <div className="absolute inset-[33%]">
            <div className="absolute -inset-2 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent,#f3bd48,transparent_40%)] opacity-70 [animation-duration:4s]" />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-maroon via-[#5b1730] to-ink text-center shadow-[0_0_80px_-10px_rgb(136_35_70/0.95)]"
            >
              <FlaskConical className="h-8 w-8 text-gold" />
              <span className="mt-1.5 font-serif text-lg leading-none">Grad Lab</span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
                Proposed
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* The plan */}
      <div className="container-page relative mt-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {aiLab.phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-ink/95 p-5 transition-colors hover:bg-maroon/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 font-mono text-[11px] text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Phase</span>
              </div>
              <div className="mt-3 font-serif text-xl font-light leading-tight">{phase.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
