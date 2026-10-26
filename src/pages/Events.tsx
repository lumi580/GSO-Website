import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Search } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  formatDay,
  formatTime,
  monthKey,
  upcomingEvents,
  type CampusEvent,
} from "@/data/campusEvents";
import { cn } from "@/lib/utils";

const PAGE = 24;

export default function Events() {
  const events = useMemo(() => upcomingEvents(), []);
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE);

  // Club types ordered by how many events each has, so the busiest come first.
  const types = useMemo(() => {
    const counts = new Map<string, number>();
    for (const event of events) counts.set(event.groupType, (counts.get(event.groupType) ?? 0) + 1);
    return ["All", ...[...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name)];
  }, [events]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter(
      (event) =>
        (type === "All" || event.groupType === type) &&
        (!q ||
          event.title.toLowerCase().includes(q) ||
          event.group.toLowerCase().includes(q) ||
          event.category.toLowerCase().includes(q))
    );
  }, [events, type, query]);

  const months = useMemo(() => {
    const groups = new Map<string, CampusEvent[]>();
    for (const event of filtered.slice(0, shown)) {
      const key = monthKey(event.start);
      groups.set(key, [...(groups.get(key) ?? []), event]);
    }
    return [...groups];
  }, [filtered, shown]);

  const pick = (next: string) => {
    setType(next);
    setShown(PAGE);
  };

  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            What's <em className="text-maroon-ink">happening</em> on campus.
          </>
        }
        description={`${events.length} upcoming events from clubs and organizations across Brooklyn College. RSVP on the official campus events platform.`}
      />

      <section className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container-page py-5 grid gap-4">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setShown(PAGE);
              }}
              placeholder="Search events, clubs, or types…"
              className="w-full rounded-full border border-input bg-card py-2.5 pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
            {types.map((name) => (
              <button
                key={name}
                onClick={() => pick(name)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-[13px] transition-colors",
                  type === name
                    ? "border-maroon bg-maroon text-white"
                    : "border-border bg-card hover:border-maroon hover:text-maroon-ink"
                )}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No upcoming events match that search.
            </p>
          )}

          <div className="grid gap-16">
            {months.map(([month, list]) => (
              <div key={month}>
                <h2 className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl md:text-4xl">
                  {month}
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {list.length} events
                  </span>
                </h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {list.map((event, i) => (
                      <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <EventCard event={event} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {shown < filtered.length && (
            <div className="mt-16 text-center">
              <button onClick={() => setShown((n) => n + PAGE)} className="btn-outline">
                Show more events
                <span className="font-mono text-[11px] text-muted-foreground">
                  {filtered.length - shown} left
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function EventCard({ event }: { event: CampusEvent }) {
  const { month, day, weekday } = formatDay(event.start);

  return (
    <a
      href={event.link}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgb(33_37_41/0.3)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-light">
        {event.photo && (
          <img
            src={event.photo}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-md bg-white px-3 py-2 text-ink shadow-md">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-maroon">
            {month}
          </span>
          <span className="font-serif text-2xl leading-none">{day}</span>
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {weekday}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white backdrop-blur">
          {event.category || event.groupType}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-maroon-ink line-clamp-1">
          {event.group}
        </div>
        <h3 className="mt-2 font-serif text-[22px] font-light leading-snug tracking-[-0.02em] line-clamp-2">
          {event.title}
        </h3>
        <div className="mt-3 grid gap-1 text-[13.5px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {formatTime(event)}
          </span>
          {event.location && (
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {event.location}
            </span>
          )}
        </div>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-maroon-ink">
          RSVP
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
