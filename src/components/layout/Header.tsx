import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsoSeal from "@/assets/gso-seal.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Clubs", href: "/clubs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const isHome = pathname === "/";
  // The homepage opens on a full-bleed dark hero, so the bar stays transparent
  // until the reader scrolls past it. Every other page starts on light ground.
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={gsoSeal}
            alt=""
            width={576}
            height={576}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <div className="leading-tight">
            <div
              className={cn(
                "text-[13px] font-semibold tracking-wide",
                solid ? "text-foreground" : "text-ink"
              )}
            >
              Brooklyn College GSO
            </div>
            <div
              className={cn(
                "text-[10px] uppercase tracking-[0.18em]",
                solid ? "text-muted-foreground" : "text-ink/75"
              )}
            >
              Graduate Student Organization
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 text-sm rounded-md transition-colors",
                  solid
                    ? "text-foreground/70 hover:text-maroon-ink hover:bg-secondary"
                    : "text-ink/85 hover:text-ink hover:bg-white/25",
                  isActive &&
                    (solid ? "text-maroon-ink font-medium" : "text-ink font-semibold")
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto lg:ml-0">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((v) => !v)}
            className={cn(
              "hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              solid
                ? "hover:bg-secondary text-foreground/80"
                : "hover:bg-white/25 text-ink"
            )}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="https://forms.gle/YQNXsVhWvFYRuT3x8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-maroon px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-maroon-dark transition-colors"
          >
            Join GSO
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md",
              solid ? "text-foreground" : "text-ink"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-secondary text-maroon-ink font-medium"
                      : "text-foreground/80 hover:bg-secondary"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://forms.gle/YQNXsVhWvFYRuT3x8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-maroon px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Join GSO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
