import { Calendar, MapPin, QrCode } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const events = [
  { date: "Sep 04", category: "Signature", title: "Graduate Orientation", location: "Woody Tanger Auditorium" },
  { date: "Oct 12", category: "Research", title: "Research Symposium", location: "Boylan Hall" },
  { date: "Oct 26", category: "Career", title: "Career & Internship Fair", location: "Student Center" },
  { date: "Nov 08", category: "Social", title: "Networking Social", location: "Roosevelt Hall" },
  { date: "Nov 20", category: "Development", title: "Leadership Workshop", location: "Ingersoll Hall" },
  { date: "Dec 03", category: "Social", title: "End-of-Semester Celebration", location: "Whitman Theater" },
];

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Programming that builds a graduate community."
        description="From orientation to symposium to socials — every event is free for GSO members."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="rounded-3xl border border-border overflow-hidden">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.05}>
                <div className="group grid grid-cols-[100px_1fr_auto] md:grid-cols-[140px_1fr_auto_auto] gap-4 md:gap-8 items-center px-6 md:px-8 py-6 border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
                  <div className="font-serif text-3xl md:text-4xl text-maroon-ink">
                    {event.date}
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {event.category}
                    </div>
                    <div className="mt-1 font-serif text-xl md:text-2xl">
                      {event.title}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>
                  </div>

                  <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-maroon hover:text-maroon-ink transition">
                    <QrCode className="h-4 w-4" />
                    Check-in
                  </button>

                  <button className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 md:px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-maroon-dark transition">
                    <Calendar className="h-4 w-4" />
                    RSVP
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
