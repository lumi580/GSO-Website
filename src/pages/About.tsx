import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import campusBuilding from "@/assets/campus-building.jpg";

const values = [
  {
    number: "01",
    title: "Advocacy",
    body: "We defend the academic, professional, and personal rights of every graduate student.",
  },
  {
    number: "02",
    title: "Integrity",
    body: "Transparent operations, ethical governance, and public accountability.",
  },
  {
    number: "03",
    title: "Inclusion",
    body: "A graduate community where every background and discipline belongs.",
  },
  {
    number: "04",
    title: "Excellence",
    body: "Support that helps students produce their most ambitious scholarship.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About GSO"
        title="A student government worthy of a world-class graduate community."
        description="For decades the Graduate Student Organization has represented Brooklyn College's graduate students — chartered, elected, and accountable to the community it serves."
      />

      <section className="py-24">
        <div className="container-page grid md:grid-cols-2 gap-14">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
                Mission
              </div>
              <h2 className="mt-3 text-3xl font-serif">
                Represent. Advocate. Empower.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To represent every graduate student at Brooklyn College through
                shared governance, deliver meaningful funding and programming,
                and advocate for the policies and resources that make graduate
                education work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
                Vision
              </div>
              <h2 className="mt-3 text-3xl font-serif">
                A model graduate community.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Brooklyn College graduate students receive the funding,
                mentorship, and voice they need to become the scholars,
                professionals, and leaders their fields deserve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
            Core Values
          </div>
          <h2 className="mt-3 text-4xl font-serif max-w-2xl">
            Principles that guide every decision.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.number} delay={i * 0.08}>
                <div className="rounded-2xl bg-card border border-border p-7 h-full">
                  <div className="text-4xl font-serif text-maroon">
                    {value.number}
                  </div>
                  <div className="mt-4 font-semibold">{value.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={campusBuilding}
              alt="Brooklyn College"
              width={1600}
              height={1000}
              loading="lazy"
              className="rounded-3xl aspect-[4/3] object-cover"
            />
          </Reveal>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold">
              President's Welcome
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif text-balance">
              "Your graduate education deserves representation as ambitious as
              your work."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              On behalf of the Executive Board, welcome. Whether you are a
              first-semester master's student or defending your dissertation,
              the GSO exists to make your experience at Brooklyn College richer,
              fairer, and more supported.
            </p>
            <div className="mt-6 font-serif italic text-foreground/80">
              — GSO President
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
