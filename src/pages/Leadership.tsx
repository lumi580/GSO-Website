import { Clock, Linkedin, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const board = [
  {
    initial: "E",
    role: "President",
    name: "Executive President",
    description:
      "Leads the Executive Board, represents the GSO to the administration, and chairs the General Assembly.",
    hours: "Mon 2–4pm",
    email: "GSOPresident@brooklyn.cuny.edu",
  },
  {
    initial: "V",
    role: "Vice President",
    name: "Vice President",
    description:
      "Coordinates committees, oversees strategic initiatives, and represents the President as needed.",
    hours: "Tue 1–3pm",
    email: "vp.bcgso@brooklyn.cuny.edu",
  },
  {
    initial: "T",
    role: "Treasurer",
    name: "Treasurer",
    description:
      "Manages the GSO budget, funding allocations, and financial transparency reports.",
    hours: "Wed 12–2pm",
    email: "treasurer.bcgso@brooklyn.cuny.edu",
  },
  {
    initial: "S",
    role: "Secretary",
    name: "Secretary",
    description:
      "Records minutes, maintains records, and manages official communications.",
    hours: "Thu 3–5pm",
    email: "secretary.bcgso@brooklyn.cuny.edu",
  },
  {
    initial: "A",
    role: "Graduate Representative",
    name: "At-Large Representative",
    description:
      "Voice for the general graduate student body across departments and schools.",
    hours: "By appointment",
    email: "reps.bcgso@brooklyn.cuny.edu",
  },
  {
    initial: "D",
    role: "Department Representative",
    name: "Department Representative",
    description: "Represents specific graduate departments in the General Assembly.",
    hours: "By appointment",
    email: "reps.bcgso@brooklyn.cuny.edu",
  },
];

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Elected by graduate students. Accountable to graduate students."
        description="The Executive Board and representatives who make up the Brooklyn College Graduate Student Organization."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {board.map((member, i) => (
            <Reveal key={member.name + member.role} delay={i * 0.06}>
              <article className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-[5/4] bg-gradient-to-br from-maroon to-maroon-dark relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-8xl text-white/15">
                      {member.initial}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs uppercase tracking-[0.12em] text-gold">
                      {member.role}
                    </div>
                    <div className="mt-1 font-serif text-2xl">{member.name}</div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Clock className="h-4 w-4 text-maroon-ink" />
                      Office hours: {member.hours}
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-maroon-ink hover:underline"
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn on request
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
