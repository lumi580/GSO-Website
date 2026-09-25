import { Vote } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const timeline = [
  { step: "01", title: "Nominations Open", date: "March 3" },
  { step: "02", title: "Candidate Statements Due", date: "March 17" },
  { step: "03", title: "Debate Night", date: "April 2" },
  { step: "04", title: "Voting Opens", date: "April 8" },
  { step: "05", title: "Results Announced", date: "April 15" },
];

const guides = ["Eligibility", "Candidates", "Campaign Rules", "Past Elections"];

export default function Elections() {
  return (
    <>
      <PageHero
        eyebrow="Elections"
        title="Democracy, on the graduate calendar."
        description="Annual elections determine the Executive Board and representative seats."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-4">
            {timeline.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <div className="text-xs uppercase tracking-[0.12em] text-maroon-ink">
                    {item.step}
                  </div>
                  <div className="mt-3 font-serif text-xl">{item.title}</div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {item.date}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <div
              key={guide}
              className="rounded-2xl bg-card border border-border p-6"
            >
              <Vote className="h-5 w-5 text-maroon-ink" />
              <div className="mt-3 font-serif text-lg">{guide}</div>
              <a href="#" className="mt-2 inline-block text-sm text-maroon-ink">
                Read →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
