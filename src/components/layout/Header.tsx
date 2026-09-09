import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Committees", href: "/committees" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
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
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-maroon text-primary-foreground font-serif text-lg">
            G
          </span>
          <div className="leading-tight">
            <div
              className={cn(
                "text-[13px] font-semibold tracking-wide",
                solid ? "text-foreground" : "text-white"
              )}
            >
              Brooklyn College GSO
            </div>
            <div
              className={cn(
                "text-[10px] uppercase tracking-[0.18em]",
                solid ? "text-muted-foreground" : "text-white/70"
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
                    ? "text-foreground/70 hover:text-maroon hover:bg-secondary"
                    : "text-white/85 hover:text-white hover:bg-white/10",
                  isActive &&
                    (solid ? "text-maroon font-medium" : "text-white font-medium")
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
                : "hover:bg-white/10 text-white"
            )}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="/get-involved"
            className="hidden md:inline-flex items-center rounded-full bg-maroon px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-maroon-dark transition-colors"
          >
            Join GSO
          </Link>

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
          <nav className="container-page py-4 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-secondary text-maroon font-medium"
                      : "text-foreground/80 hover:bg-secondary"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-maroon px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Join GSO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
