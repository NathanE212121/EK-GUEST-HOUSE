import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ek-logo.jpg.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-11 h-11 rounded-xl bg-[#0a1028] shadow-gold flex items-center justify-center overflow-hidden ring-1 ring-border/50 group-hover:scale-110 transition-transform">
            <img src={logo.url} alt="EK Pension logo" className="w-9 h-9 object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-semibold ${scrolled ? "text-foreground" : "text-foreground"}`}>
              EK Pension
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Chelenko · Oromia</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground rounded-full bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-warm text-primary-foreground shadow-gold hover:shadow-3d hover:-translate-y-0.5 transition-all"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border animate-rise">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-secondary text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-center font-semibold rounded-full bg-gradient-warm text-primary-foreground"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
