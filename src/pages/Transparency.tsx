import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const stats = [
  { value: 180, suffix: "K", label: "Funding awarded (yr)" },
  { value: 42, suffix: "", label: "Events hosted" },
  { value: 96, suffix: "%", label: "Board attendance" },
  { value: 12, suffix: "", label: "Policy wins" },
];

const reports = [
  "Annual Report 2024–25",
  "Budget Report FY25",
  "Strategic Plan 2025–2028",
  "Projects & Achievements",
  "Meeting Minutes Archive",
];

export default function Transparency() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Open books. Public work."
        description="Every dollar we spend and every decision we make is documented here."
      />

      <section className="py-16 border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-serif text-maroon">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page space-y-3">
          {reports.map((report, i) => (
            <Reveal key={report} delay={i * 0.05}>
              <a
                href="#"
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-6 hover:border-maroon/50 transition"
              >
                <span className="font-serif text-xl">{report}</span>
                <span className="text-sm text-maroon font-medium">
                  Download →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
