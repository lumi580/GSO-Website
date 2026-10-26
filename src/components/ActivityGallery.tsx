import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { activityPhotos, type ActivityPhoto } from "@/data/activityPhotos";

type Photo = ActivityPhoto;
const photos = activityPhotos;

function Row({
  items,
  reverse,
  onOpen,
}: {
  items: Photo[];
  reverse?: boolean;
  onOpen: (photo: Photo) => void;
}) {
  return (
    <div className="group/row overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div
        className={`flex w-max gap-4 pr-4 group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee-slow"
        }`}
      >
        {/* Two copies so the -50% loop is seamless. */}
        {[...items, ...items].map((photo, i) => (
          <button
            key={i}
            onClick={() => onOpen(photo)}
            aria-hidden={i >= items.length}
            tabIndex={i >= items.length ? -1 : 0}
            className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-md bg-light md:h-72 md:w-[26rem]"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-2 font-serif text-xl text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Two counter-scrolling rows of GSO activity photos, with a lightbox. Hidden until photos exist. */
export default function ActivityGallery() {
  const [open, setOpen] = useState<Photo | null>(null);
  if (photos.length === 0) return null;

  const half = Math.ceil(photos.length / 2);
  const top = photos.length > 3 ? photos.slice(0, half) : photos;
  const bottom = photos.length > 3 ? photos.slice(half) : [...photos].reverse();

  return (
    <section id="moments" className="pt-6 pb-6 md:pt-8 md:pb-8 overflow-hidden">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Moments
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-balance">
              Life at the <em className="text-maroon-ink">GSO.</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/bc_gso"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-ink"
          >
            More on Instagram
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4">
        <Row items={top} onOpen={setOpen} />
        <Row items={bottom} reverse onOpen={setOpen} />
      </div>

      <Lightbox photo={open} onClose={() => setOpen(null)} />
    </section>
  );
}
