import { Logo } from "@/components/logo";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Flight inventory", href: "#modules" },
      { label: "Umrah packages", href: "#modules" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#customers" },
      { label: "Contact", href: "#demo" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Data processing", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 pb-10 pt-16 sm:px-8 lg:px-[120px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo size={30} className="text-footer-foreground" />
            <p className="max-w-[320px] text-sm leading-relaxed text-[#B6C3E6]">
              Flight inventory and Umrah operations for travel wholesalers and
              their agent networks.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3 text-sm">
              <span className="font-bold text-gold">{col.heading}</span>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[#B6C3E6] transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-[#1F3478] pt-6 text-[13px] text-[#B6C3E6] sm:flex-row sm:justify-between">
          <span>© 2026 Travoler. All rights reserved.</span>
          <span>Lahore, Pakistan · hello@travoler.app</span>
        </div>
      </div>
    </footer>
  );
}
