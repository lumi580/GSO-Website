import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import gsoLogo from "@/assets/gso-logo.png";

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
      { label: "Get Involved", href: "/get-involved" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Advocacy", href: "/advocacy" },
      { label: "AI & Innovation Lab", href: "/initiatives" },
      { label: "Elections", href: "/elections" },
      { label: "Reports", href: "/transparency" },
      { label: "Media", href: "/media" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-maroon text-white">
      <div className="h-px gold-underline" />

      <div className="container-page py-14 md:py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={gsoLogo}
              alt=""
              width={512}
              height={512}
              className="h-12 w-12 shrink-0 rounded-full object-contain ring-2 ring-white/80"
            />
            <div>
              <div className="font-serif text-xl">Brooklyn College GSO</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Graduate Student Organization
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-sm text-balance">
            The official governing body representing more than 2,751 graduate
            students at Brooklyn College, City University of New York.
          </p>

          <div className="mt-8 border-t border-white/15 pt-6 space-y-3 text-sm">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
              Office
            </div>
            <a
              href="mailto:GSOPresident@brooklyn.cuny.edu"
              className="flex items-center gap-2.5 text-white/80 hover:text-white"
            >
              <Mail className="h-4 w-4 text-white/50" />
              GSOPresident@brooklyn.cuny.edu
            </a>
            <a
              href="tel:+17189515503"
              className="flex items-center gap-2.5 text-white/80 hover:text-white"
            >
              <Phone className="h-4 w-4 text-white/50" />
              718-951-5503
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {columns.map((column) => (
            <div key={column.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {column.title}
              </div>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
              Connect
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/bc_gso"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/75 hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:officeassistant.bcgso@gmail.com"
                  className="text-white/75 hover:text-white"
                >
                  Email the office
                </a>
              </li>
              <li>
                <Link to="/#contact" className="text-white/75 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] tracking-[0.06em] text-white/55">
          <div>
            © {new Date().getFullYear()} Brooklyn College Graduate Student
            Organization
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/bc_gso"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.brooklyn.edu/dosa/student-support-services/ce/government/gso"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              brooklyn.edu
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
