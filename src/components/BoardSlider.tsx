import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { members } from "@/data/leadership";
import { cn } from "@/lib/utils";

// Same left edge as .container-page (1280px max, 1.5rem / 3.5rem padding).
const GUTTER = "max(1.5rem, calc((100vw - 1280px) / 2 + 3.5rem))";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

/**
 * The Executive Board as a swipeable slider: big portrait cards that flip up
 * to show each member's committee seats on hover (or tap on touch screens).
 * Native scroll-snap does the sliding, so touch, trackpad, and keyboard all work.
 */
export default function BoardSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);

  // Track which card is nearest the left edge to light up the progress dots.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      setActive(Math.round(el.scrollLeft / (card.offsetWidth + 20)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (index: number) => {
    const el = track.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const atEnd = (() => {
    const el = track.current;
    return el ? el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 : false;
  })();

  return (
    <section id="team" className="relative overflow-hidden bg-ink py-16 md:py-20 text-white">
      {/* Soft maroon glow behind the cards. */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-maroon/40 blur-[120px]" />

      <div className="container-page relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-8 bg-gold/70" />
              The Board · 2026–27
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-balance">
              Meet the people <em className="text-gold">fighting</em> for you.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              Elected by graduate students, for graduate students. Hover a card
              to see where each officer represents you.
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => go(Math.max(0, active - 1))}
              disabled={active === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(Math.min(members.length - 1, active + 1))}
              disabled={atEnd}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="relative mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        // Line the first card up with the page container; scroll-padding must
        // match or snapping pulls the card back to the edge.
        style={{ paddingInline: GUTTER, scrollPaddingInline: GUTTER }}
      >
        {members.map((member, i) => {
          const open = flipped === member.name;
          return (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setFlipped(member.name)}
              onMouseLeave={() => setFlipped(null)}
              onClick={() => setFlipped(open ? null : member.name)}
              className="group relative aspect-[4/5] w-[78vw] shrink-0 cursor-pointer snap-start overflow-hidden rounded-xl bg-maroon sm:w-[22rem]"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#882346,#212529)]">
                  <span className="font-serif text-[9rem] font-light text-white/20">
                    {initials(member.name)}
                  </span>
                </div>
              )}

              {/* Name plate */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 pt-20">
                <span className="inline-block rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                  {member.role}
                </span>
                <h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.02em]">
                  {member.name}
                </h3>
                <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/60">
                  {member.committees.length} committee seat
                  {member.committees.length === 1 ? "" : "s"}
                </div>
              </div>

              {/* Committee seats, sliding up over the photo */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col bg-maroon/95 p-7 backdrop-blur-sm transition-[transform,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  {member.role} · Represents you on
                </span>
                <h3 className="mt-2 font-serif text-2xl font-light">{member.name}</h3>
                <ul className="mt-5 space-y-2.5 text-[14.5px] leading-snug text-white/90">
                  {member.committees.map((committee, j) => (
                    <li
                      key={committee}
                      className="flex gap-2.5 transition-[transform,opacity] duration-500"
                      style={{
                        transitionDelay: open ? `${120 + j * 50}ms` : "0ms",
                        transform: open ? "none" : "translateY(8px)",
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {committee}
                    </li>
                  ))}
                </ul>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    onClick={(event) => event.stopPropagation()}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm text-gold hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}

        {/* Closing card: a nudge to get involved. */}
        <Link
          to="/leadership"
          className="group relative flex aspect-[4/5] w-[78vw] shrink-0 snap-start flex-col justify-between rounded-xl border border-white/15 p-8 transition-colors hover:border-gold sm:w-[22rem]"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-gold">
            Full board & committees
          </span>
          <div>
            <h3 className="font-serif text-4xl font-light leading-tight">
              Want a seat at the table?
            </h3>
            <p className="mt-3 text-white/65">
              Meet the full leadership team and see every committee GSO sits on.
            </p>
            <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:translate-x-2">
              <ArrowRight className="h-6 w-6" />
            </span>
          </div>
        </Link>
      </div>

      {/* Progress dots */}
      <div className="container-page mt-8 flex gap-2">
        {members.map((member, i) => (
          <button
            key={member.name}
            aria-label={`Go to ${member.name}`}
            onClick={() => go(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-10 bg-gold" : "w-4 bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}
