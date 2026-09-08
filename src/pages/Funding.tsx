import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const programs = [
  {
    cadence: "Rolling",
    title: "Conference Funding",
    amount: "up to $750",
    description:
      "Registration, travel, and lodging to present at an academic or professional conference.",
  },
  {
    cadence: "Rolling",
    title: "Travel Grants",
    amount: "up to $500",
    description: "Support for research-related travel, archives, and fieldwork.",
  },
  {
    cadence: "Twice yearly",
    title: "Student Research Grants",
    amount: "up to $1,500",
    description:
      "Direct funding for materials, participant compensation, and research expenses.",
  },
  {
    cadence: "Continuous",
    title: "Emergency Funding",
    amount: "as needed",
    description:
      "Confidential support for graduate students experiencing financial hardship.",
  },
];

export default function Funding() {
  return (
    <>
      <PageHero
        eyebrow="Funding"
        title="Money that moves your work forward."
        description="Every dollar the GSO administers flows back to graduate students — for research, conferences, and life's unexpected moments."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full flex flex-col">
                <div className="text-xs uppercase tracking-[0.16em] text-maroon">
                  {program.cadence}
                </div>
                <h3 className="mt-2 font-serif text-3xl">{program.title}</h3>
                <div className="mt-3 text-2xl font-serif text-gold">
                  {program.amount}
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
                  {program.description}
                </p>
                <button className="mt-6 self-start inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-maroon-dark">
                  Apply
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
