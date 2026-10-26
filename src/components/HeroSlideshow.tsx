import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import aerial from "@/assets/brc-aerial.jpg";
import fullRoom from "@/assets/activities/01-a-full-room.jpg";
import costumeSocial from "@/assets/activities/03-costume-social.jpg";
import games from "@/assets/activities/04-games-and-giveaways.jpg";
import judging from "@/assets/activities/05-judging-panel.jpg";

const slides = [
  { src: aerial, caption: "Brooklyn College campus" },
  { src: fullRoom, caption: "A full room" },
  { src: costumeSocial, caption: "Costume social" },
  { src: judging, caption: "Judging panel" },
  { src: games, caption: "Games & giveaways" },
];

const DURATION = 6000;

/**
 * Hero background: crossfading photos with a slow zoom, plus a slide counter
 * and progress bars. `photoY` carries the hero's parallax offset.
 */
export default function HeroSlideshow({ photoY }: { photoY: MotionValue<number> }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <>
      <motion.div style={{ y: photoY }} className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].caption}
            className="absolute inset-0 h-full w-full object-cover saturate-[.85] brightness-[.9]"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: DURATION / 1000 + 1.4, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Slide controls — right edge on desktop, above the stats on phones. */}
      <div
        className="absolute right-6 top-28 z-10 flex flex-col items-end gap-3 lg:right-14 lg:top-1/2 lg:-translate-y-1/2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="font-mono text-[11px] tracking-[0.2em] text-white/80">
          <span className="text-gold">{String(index + 1).padStart(2, "0")}</span> /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
        <div className="flex gap-1.5 lg:flex-col">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              aria-label={`Show ${slide.caption}`}
              onClick={() => setIndex(i)}
              className="relative h-1 w-8 overflow-hidden rounded-full bg-white/25 lg:h-10 lg:w-1"
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}`}
                  className="absolute inset-0 origin-left rounded-full bg-gold lg:origin-top"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                />
              )}
              {i < index && <span className="absolute inset-0 rounded-full bg-white/60" />}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "hidden max-w-[10rem] text-right font-serif text-sm italic text-white/80 lg:block"
            )}
          >
            {slides[index].caption}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
