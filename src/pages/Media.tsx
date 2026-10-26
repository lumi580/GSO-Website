import { useState } from "react";
import { ArrowUpRight, Expand } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { activityPhotos, type ActivityPhoto } from "@/data/activityPhotos";

export default function Media() {
  const [open, setOpen] = useState<ActivityPhoto | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title={
          <>
            A visual archive of <em className="text-maroon-ink">graduate</em> life.
          </>
        }
        description="Moments from GSO events, socials, and campus life at Brooklyn College."
      />

      <section className="py-14 md:py-16">
        {/* CSS columns give a masonry layout that keeps each photo's own shape. */}
        <div className="container-page columns-1 gap-4 sm:columns-2 lg:columns-3">
          {activityPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setOpen(photo)}
                className="group relative block w-full overflow-hidden rounded-md bg-light"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-left font-serif text-xl text-white">{photo.caption}</span>
                  <Expand className="h-4 w-4 shrink-0 text-gold" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="container-page mt-12 text-center">
          <a
            href="https://instagram.com/bc_gso"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            More on Instagram @bc_gso
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Lightbox photo={open} onClose={() => setOpen(null)} />
    </>
  );
}
