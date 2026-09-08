import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const items = [
  {
    title: "Student Rights",
    description:
      "Know your rights as a graduate student — academic, workplace, and personal.",
  },
  {
    title: "Academic Appeals",
    description:
      "Guidance for grade appeals, program reviews, and academic disputes.",
  },
  {
    title: "Graduate Policies",
    description: "Tracking policy changes that affect graduate students.",
  },
  {
    title: "Campus Issues",
    description:
      "Ongoing advocacy on tuition, housing, transit, and campus services.",
  },
  {
    title: "Submit a Concern",
    description: "Open a case with the Advocacy Committee — confidentially.",
  },
  {
    title: "Anonymous Feedback",
    description:
      "Share concerns without attribution. Reviewed by the Executive Board.",
  },
  {
    title: "Student Surveys",
    description: "Periodic surveys that shape our advocacy priorities.",
  },
  {
    title: "Resolution Tracker",
    description: "Follow the status of every open case and policy resolution.",
  },
];

export default function Advocacy() {
  return (
    <>
      <PageHero
        eyebrow="Advocacy"
        title="Standing up for graduate students."
        description="From individual academic appeals to campus-wide policy — the GSO advocates."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-maroon/50 transition">
                <div className="mt-1 text-2xl font-serif text-maroon">→</div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-maroon group-hover:translate-x-0.5 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
