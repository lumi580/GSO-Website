import { useState } from "react";
import {
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const channels = [
  {
    icon: Mail,
    label: "President",
    value: "GSOPresident@brooklyn.cuny.edu",
    href: "mailto:GSOPresident@brooklyn.cuny.edu",
  },
  {
    icon: Mail,
    label: "Office",
    value: "officeassistant.bcgso@gmail.com",
    href: "mailto:officeassistant.bcgso@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "718-951-5503",
    href: "tel:+17189515503",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bc_gso",
    href: "https://instagram.com/bc_gso",
    external: true,
  },
  {
    icon: ExternalLink,
    label: "Official page",
    value: "brooklyn.edu/dosa/…/gso",
    href: "https://www.brooklyn.edu/dosa/student-support-services/ce/government/gso",
    external: true,
  },
];

const fieldClass =
  "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring";
const labelClass = "text-xs uppercase tracking-[0.14em] text-muted-foreground";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the GSO."
        description="The office is open to every graduate student — for advocacy, funding questions, or a coffee."
      />

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-maroon/50 transition"
                >
                  <channel.icon className="h-5 w-5 text-maroon mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {channel.label}
                    </div>
                    <div className="mt-1 font-medium">{channel.value}</div>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <MapPin className="h-5 w-5 text-maroon mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Campus
                  </div>
                  <div className="mt-1 font-medium">
                    2900 Bedford Ave, Brooklyn, NY 11210
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="rounded-3xl border border-border bg-card p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="font-serif text-2xl">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We reply within two business days.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className={labelClass}>Name</span>
                  <input required className={fieldClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input type="email" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Subject</span>
                  <input className={fieldClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Message</span>
                  <textarea rows={5} required className={fieldClass} />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-maroon-dark"
              >
                <Send className="h-4 w-4" />
                Send
              </button>

              {sent && (
                <p className="mt-4 text-sm text-maroon">
                  Thanks — your message is on its way to the GSO office.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
