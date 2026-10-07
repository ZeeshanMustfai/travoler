import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useModals } from "@/providers/modal-provider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Platform", href: "#modules" },
  { label: "Flights", href: "#modules" },
  { label: "Umrah", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export function Navbar() {
  const { openLogin, openDemo } = useModals();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Platform");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[120px]">
        <a href="#top" aria-label="Travoler home">
          <Logo />
        </a>

        {/* Desktop pill nav */}
        <nav className="hidden items-center gap-1.5 rounded-full bg-surface-alt p-1.5 text-sm font-semibold lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={cn(
                "rounded-full px-4 py-2 transition-colors",
                active === link.label
                  ? "bg-gold text-gold-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="hidden font-semibold text-foreground sm:inline-flex"
            onClick={openLogin}
          >
            Sign in
          </Button>
          <Button
            variant="white"
            className="hidden shadow-sm sm:inline-flex"
            onClick={openDemo}
          >
            Book a demo
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-surface-alt hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setMobileOpen(false);
                openLogin();
              }}
            >
              Sign in
            </Button>
            <Button
              onClick={() => {
                setMobileOpen(false);
                openDemo();
              }}
            >
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
