import { Link } from "react-router-dom";
import { ExternalLink, Instagram, Mail, Phone } from "lucide-react";
import gsoSeal from "@/assets/gso-seal.png";

const columns = [
  {
    title: "Organization",
    links: [
      { label: "About GSO", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Structure", href: "/structure" },
      { label: "Governing Documents", href: "/governing-documents" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Events", href: "/events" },
      { label: "Clubs", href: "/clubs" },
      { label: "Meetings", href: "/meetings" },
      { label: "Get Involved", href: "/get-involved" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Advocacy", href: "/advocacy" },
      { label: "Elections", href: "/elections" },
    ],
  },
  {
    title: "Transparency",
    links: [
      { label: "Reports", href: "/transparency" },
      { label: "Media", href: "/media" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={gsoSeal}
              alt=""
              width={576}
              height={576}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <div>
              <div className="font-semibold">Brooklyn College GSO</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Graduate Student Organization
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted-foreground max-w-sm text-balance">
            The official governing body representing more than 2,751 graduate
            students at Brooklyn College.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon-ink"
            >
              <Mail className="h-4 w-4" />
              GSOPresident@brooklyn.cuny.edu
            </a>
            <a
              href="tel:+17189515503"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon-ink"
            >
              <Phone className="h-4 w-4" />
              718-951-5503
            </a>
            <a
              href="https://instagram.com/bc_gso"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon-ink"
            >
              <Instagram className="h-4 w-4" />
              @bc_gso
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
              {column.title}
            </div>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-maroon-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Brooklyn College Graduate Student
            Organization. All rights reserved.
          </div>
          <a
            href="https://www.brooklyn.edu/dosa/student-support-services/ce/government/gso"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-maroon-ink"
          >
            brooklyn.edu/dosa
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
