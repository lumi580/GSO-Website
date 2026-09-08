import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import heroCampus from "@/assets/hero-campus.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import community from "@/assets/community.jpg";

const gallery = [
  heroCampus,
  community,
  campusBuilding,
  heroCampus,
  campusBuilding,
  community,
];

const collections = [
  "Photo Gallery",
  "Videos",
  "Orientation Photos",
  "Event Gallery",
  "Press Kit",
];

export default function Media() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="A visual archive of graduate life."
        description="Photos, videos, and press assets from GSO events and campus moments."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-3 gap-4">
          {gallery.map((image, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={image}
                  alt="GSO event"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-page mt-10 flex flex-wrap gap-3 justify-center">
          {collections.map((collection) => (
            <button
              key={collection}
              className="rounded-full border border-border px-5 py-2 text-sm hover:border-maroon hover:text-maroon transition"
            >
              {collection}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
