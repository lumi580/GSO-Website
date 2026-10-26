import { Building2, GraduationCap, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { committeeCount, committeeGroups } from "@/data/committees";
import { members } from "@/data/leadership";

const icons = [Landmark, Building2, GraduationCap];

// The board's seat names differ slightly from the committee list for the BCA.
const aliases: Record<string, string[]> = {
  "BCA Board": ["BCA GSO Representative", "BCA GSO Alternate"],
};

/** Board members who hold a seat on this committee. */
const seatedOn = (committee: string) =>
  members.filter((member) =>
    member.committees.some((seat) => seat === committee || aliases[committee]?.includes(seat))
  );

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export default function CommitteeSeats() {
  return (
    <section id="committees" className="relative overflow-hidden bg-light py-16 md:py-20">
      {/* Faint dot grid for texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(136_35_70/0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="container-page relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-maroon-ink/60" />
              Your Seat at the Table
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-balance">
              Where decisions get made, <em className="text-maroon-ink">we're in the room.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              GSO members sit on the college bodies that set budgets, fees,
              curriculum, and campus policy — so graduate students are never an
              afterthought.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
            <div className="flex items-center gap-6">
              <div className="font-serif text-[7rem] font-light leading-none text-maroon-ink md:text-[9rem]">
                <Counter to={committeeCount} />
              </div>
              <div className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                Committees
                <br />
                with a GSO seat
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {committeeGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.body} delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-card/90 p-6 shadow-[0_1px_0_rgb(33_37_41/0.04)] backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold leading-tight">{group.body}</h3>
                    </div>
                    <span className="rounded-full bg-gold/25 px-2.5 py-0.5 font-mono text-[11px] text-ink">
                      {group.committees.length}
                    </span>
                  </div>

                  <ul className="mt-5 divide-y divide-border">
                    {group.committees.map((committee, j) => {
                      const seated = seatedOn(committee);
                      return (
                        <motion.li
                          key={committee}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + j * 0.05 }}
                          className="group/row -mx-3 flex items-center gap-3 rounded-md px-3 py-3 transition-colors hover:bg-maroon/[0.06]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform group-hover/row:scale-150" />
                          <span className="flex-1 text-[14.5px] leading-snug transition-colors group-hover/row:text-maroon-ink">
                            {committee}
                          </span>
                          {/* Who from the board holds this seat */}
                          <span className="flex shrink-0 -space-x-2">
                            {seated.map((member) =>
                              member.photo ? (
                                <img
                                  key={member.name}
                                  src={member.photo}
                                  alt={member.name}
                                  title={`${member.name} · ${member.role}`}
                                  className="h-7 w-7 rounded-full object-cover ring-2 ring-card"
                                />
                              ) : (
                                <span
                                  key={member.name}
                                  title={`${member.name} · ${member.role}`}
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon font-mono text-[9px] text-white ring-2 ring-card"
                                >
                                  {initials(member.name)}
                                </span>
                              )
                            )}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl bg-maroon px-7 py-6 text-white md:flex-row md:items-center">
            <p className="text-lg">
              <span className="font-serif text-2xl">Want a seat?</span>{" "}
              <span className="text-white/80">Tell us which committee interests you.</span>
            </p>
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu?subject=Committee%20interest"
              className="shine inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[13.5px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              I'm Interested
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
