import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const paths = [
  {
    title: "Volunteer",
    description:
      "Support events, orientation, and campus initiatives on a flexible schedule.",
  },
  {
    title: "Join a Committee",
    description:
      "Bring your expertise to Finance, Research, DEI, Wellness, and more.",
  },
  {
    title: "Become a Representative",
    description: "Advocate for your department on the General Assembly.",
  },
  {
    title: "Run for Office",
    description: "Serve on the Executive Board — elections held annually.",
  },
  {
    title: "Suggest an Event",
    description:
      "Have an idea? We fund and produce student-driven programming.",
  },
  {
    title: "Submit a Proposal",
    description: "Formal proposals for policy, funding, or partnerships.",
  },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Six ways to shape the graduate experience."
        description="The GSO is only as strong as the students who show up. Pick a role that fits your time and interests."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paths.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.05}>
              <div className="group rounded-2xl border border-border bg-card p-7 h-full hover:border-maroon/50 hover:shadow-lg transition-all">
                <div className="text-4xl font-serif text-maroon-ink">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-2xl">{path.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {path.description}
                </p>
                <Link
                  to="/#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon-ink"
                >
                  Start
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
