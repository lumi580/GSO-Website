import { Link } from "react-router-dom";
import { ExternalLink, Instagram, Mail, Phone } from "lucide-react";

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
      { label: "Committees", href: "/committees" },
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
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-maroon text-primary-foreground font-serif text-xl">
              G
            </span>
            <div>
              <div className="font-semibold">Brooklyn College GSO</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Graduate Student Organization
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted-foreground max-w-sm text-balance">
            The official governing body representing more than 2,600 graduate
            students at Brooklyn College — City University of New York.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon"
            >
              <Mail className="h-4 w-4" />
              GSOPresident@brooklyn.cuny.edu
            </a>
            <a
              href="tel:+17189515503"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon"
            >
              <Phone className="h-4 w-4" />
              718-951-5503
            </a>
            <a
              href="https://instagram.com/bc_gso"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-maroon"
            >
              <Instagram className="h-4 w-4" />
              @bc_gso
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {column.title}
            </div>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-maroon"
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
            className="inline-flex items-center gap-1 hover:text-maroon"
          >
            brooklyn.edu/dosa
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
