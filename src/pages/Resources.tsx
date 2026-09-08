import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Academic",
    items: [
      "Academic Calendar",
      "Graduate Handbook",
      "Library",
      "Writing Center",
      "Scholarships",
    ],
  },
  {
    title: "Career & Research",
    items: [
      "Career Services",
      "Research Opportunities",
      "Internship Board",
      "Job Board",
      "Grant Tracker",
    ],
  },
  {
    title: "Life & Wellness",
    items: [
      "Counseling",
      "International Student Services",
      "Housing",
      "Transportation",
      "Technology Resources",
    ],
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything you need, curated."
        description="A living index of the campus and CUNY resources graduate students use most."
      />

      <section className="py-20">
        <div className="container-page space-y-14">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div>
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <h2 className="font-serif text-3xl">{group.title}</h2>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {group.items.length} resources
                  </span>
                </div>

                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 hover:border-maroon/50 hover:shadow-sm transition"
                    >
                      <span className="font-medium">{item}</span>
                      <span className="text-maroon opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
