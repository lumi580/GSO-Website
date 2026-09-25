import { Calendar, FileText, Video } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const upcoming = [
  { day: "08", month: "Oct", title: "General Assembly", detail: "5:30pm · Boylan 3127" },
  { day: "15", month: "Oct", title: "Cabinet Meeting", detail: "4:00pm · GSO Office" },
  { day: "22", month: "Oct", title: "Finance Committee", detail: "3:00pm · Zoom" },
  { day: "29", month: "Oct", title: "DEI Committee", detail: "5:00pm · Ingersoll 205" },
];

const archive = [
  { icon: FileText, label: "Meeting Minutes" },
  { icon: Video, label: "Recorded Meetings" },
  { icon: Calendar, label: "Full Calendar" },
  { icon: FileText, label: "Attendance Log" },
  { icon: FileText, label: "Public Notices" },
];

export default function Meetings() {
  return (
    <>
      <PageHero
        eyebrow="Meetings"
        title="Public. Recorded. On the record."
        description="All GSO meetings are open to graduate students. Agendas, minutes, and recordings live here."
      />

      <section className="py-16">
        <div className="container-page grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-serif text-2xl mb-4">Upcoming</h2>

            {upcoming.map((meeting, i) => (
              <Reveal key={meeting.title} delay={i * 0.06}>
                <div className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6">
                  <div className="text-center min-w-[70px]">
                    <div className="font-serif text-3xl text-maroon-ink">
                      {meeting.day}
                    </div>
                    <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {meeting.month}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-serif text-lg">{meeting.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {meeting.detail}
                    </div>
                  </div>
                  <button className="text-sm text-maroon-ink font-medium">
                    Agenda
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-4">Archive</h2>
            <div className="space-y-3">
              {archive.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-maroon/50 transition"
                >
                  <item.icon className="h-4 w-4 text-maroon-ink" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
