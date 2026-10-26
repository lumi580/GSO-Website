import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { INTEREST_FORM_URL as JOIN_URL } from "@/lib/links";
import gsoLogo from "@/assets/gso-logo.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Clubs", href: "/clubs" },
  { label: "Events", href: "/events" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Contact", href: "/#contact" },
];


export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const isHome = pathname === "/";
  // The homepage opens on a full-bleed dark hero, so the bar stays transparent
  // (white type) until the reader scrolls past it. Every other page starts on
  // the light ground.
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-400",
        solid
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-page grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-6 transition-[height] duration-300",
          solid ? "h-[72px]" : "h-24"
        )}
      >
        <Link to="/" className="flex items-center gap-3 justify-self-start">
          <img
            src={gsoLogo}
            alt=""
            width={512}
            height={512}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <div className="leading-tight">
            <div
              className={cn(
                "font-serif text-[17px] tracking-[-0.01em]",
                solid ? "text-foreground" : "text-white"
              )}
            >
              Brooklyn College GSO
            </div>
            <div
              className={cn(
                "font-mono text-[9.5px] uppercase tracking-[0.2em]",
                solid ? "text-muted-foreground" : "text-white/70"
              )}
            >
              Graduate Student Organization
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-[13.5px] transition-[color,transform] duration-200 hover:-translate-y-px",
                  solid
                    ? "text-foreground/75 hover:text-maroon-ink"
                    : "text-white/85 hover:text-white",
                  isActive &&
                    item.href !== "/#contact" &&
                    (solid ? "text-maroon-ink" : "text-white")
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((v) => !v)}
            className={cn(
              "hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              solid
                ? "hover:bg-secondary text-foreground/75"
                : "hover:bg-white/15 text-white/85"
            )}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "shine group hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors",
              solid
                ? "bg-maroon text-white hover:bg-maroon/85"
                : "bg-white text-maroon hover:bg-light"
            )}
          >
            Join GSO
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md",
              solid ? "text-foreground" : "text-white"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 grid">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "border-b border-border py-3.5 font-serif text-2xl transition-colors",
                    isActive && item.href !== "/#contact"
                      ? "text-maroon-ink"
                      : "text-foreground hover:text-maroon-ink"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              Join GSO
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
