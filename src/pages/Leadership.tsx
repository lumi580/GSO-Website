import { Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { members } from "@/data/leadership";

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Elected by graduate students.{" "}
            <em className="text-maroon-ink">Accountable</em> to graduate
            students.
          </>
        }
        description="The Executive Board of the Brooklyn College Graduate Student Organization, and the college committees each member sits on."
      />

      <section className="py-14 md:py-16">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-md border border-border bg-card overflow-hidden transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden bg-maroon">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      width={480}
                      height={480}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-serif text-8xl text-white/25">
                      {member.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-maroon-ink">
                    {member.role}
                  </div>
                  <h2 className="mt-1 text-2xl">{member.name}</h2>

                  <div className="mt-5 border-t border-border pt-4">
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
                      Committees
                    </div>
                    <ul className="mt-3 space-y-1.5 text-[14px] leading-snug text-foreground/80">
                      {member.committees.map((committee) => (
                        <li key={committee} className="flex gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {committee}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-maroon-ink hover:underline underline-offset-4 break-all"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      {member.email}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
