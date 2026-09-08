import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const committees = [
  { name: "Academic Affairs", description: "Curriculum, faculty governance, and academic policy." },
  { name: "Student Affairs", description: "Student experience, welfare, and campus life." },
  { name: "Finance", description: "Budget review, funding allocations, and audit." },
  { name: "Research", description: "Research funding, symposium, and scholarly programming." },
  { name: "Professional Development", description: "Workshops, career panels, and industry connections." },
  { name: "Events", description: "Signature events, socials, and traditions." },
  { name: "International Students", description: "Advocacy and support for international graduate students." },
  { name: "Communications", description: "Newsletter, social media, and public relations." },
  { name: "Technology", description: "Digital infrastructure, website, and tools." },
  { name: "Diversity & Inclusion", description: "Belonging, equity, and inclusive scholarship." },
  { name: "Wellness", description: "Mental health, wellness programming, and peer support." },
];

export default function Committees() {
  return (
    <>
      <PageHero
        eyebrow="Committees"
        title="Where policy meets practice."
        description="Standing committees do the substantive work of the GSO — from budget review to programming to advocacy. Apply to join any that speaks to you."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {committees.map((committee, i) => (
            <Reveal key={committee.name} delay={i * 0.05}>
              <Link
                to="/get-involved"
                className="group block rounded-2xl border border-border bg-card p-7 hover:border-maroon/50 hover:shadow-lg transition-all"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-maroon">
                  Committee
                </div>
                <h3 className="mt-2 font-serif text-2xl">{committee.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {committee.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-maroon font-medium">
                  Apply to Join
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
