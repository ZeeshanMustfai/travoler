import { ArrowLeftRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const FLIGHT_FEATURES = [
  "Airlines & routes",
  "Seat blocks & allotments",
  "Dynamic deal pricing",
  "Bookings & PNR tracking",
  "Third-party integrations",
];

const UMRAH_FEATURES = [
  "Makkah & Madinah hotels, room rates",
  "Transport & visa",
  "Pilgrim & group management",
  "KSA visa status tracking",
  "Printable QR vouchers",
];

export function Modules() {
  return (
    <section
      id="modules"
      className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 py-24 sm:px-8 lg:px-[120px] lg:py-28"
    >
      <SectionHeading
        eyebrow="TWO CORE MODULES"
        title="Two halves of your business. One platform."
        subtitle="Flights and Umrah packages share agents, ledgers and dashboards — so nothing is entered twice."
      />

      <div className="relative grid overflow-hidden rounded-3xl lg:grid-cols-2">
        {/* Module 01 — Flights (blue) */}
        <div className="flex flex-col gap-6 bg-brand-blue p-8 text-white sm:p-12 lg:pr-16">
          <span className="font-mono text-xs tracking-[0.08em] text-[#C7D4FA]">MODULE 01</span>
          <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] sm:text-[30px]">
            Flight Inventory &amp; Ticketing
          </h3>
          <p className="text-base leading-relaxed text-[#DCE4FC]">
            Buy seat blocks, price them dynamically and let your agent network
            book against live availability.
          </p>
          <div className="flex flex-col gap-3 text-[15px]">
            {FLIGHT_FEATURES.map((f) => (
              <span key={f} className="flex items-center gap-2.5">
                <Check className="h-[17px] w-[17px] shrink-0 text-gold" strokeWidth={2.4} />
                {f}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 rounded-2xl bg-[#1A43BE] p-4 text-xs">
            <ProgressRow label="LHE → JED · 12 Oct" note="32 / 40 sold" pct={80} />
            <ProgressRow label="ISB → MED · 15 Oct" note="18 / 30 sold" pct={60} />
          </div>
        </div>

        {/* Module 02 — Umrah (gold) */}
        <div className="flex flex-col gap-6 bg-gold p-8 text-gold-foreground sm:p-12 lg:pl-16">
          <span className="font-mono text-xs tracking-[0.08em]">MODULE 02</span>
          <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] sm:text-[30px]">
            Umrah Package Management
          </h3>
          <p className="text-base font-medium leading-relaxed text-[#1B2A5C]">
            Build packages from hotels, transport and visas, then track every
            pilgrim from booking to departure.
          </p>
          <div className="flex flex-col gap-3 text-[15px] font-medium">
            {UMRAH_FEATURES.map((f) => (
              <span key={f} className="flex items-center gap-2.5">
                <Check className="h-[17px] w-[17px] shrink-0 text-brand-navy" strokeWidth={2.4} />
                {f}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3.5 rounded-2xl bg-white p-3.5 text-xs text-[#0E1B3D]">
            <QrGlyph />
            <div className="flex grow flex-col gap-1">
              <span className="font-bold">Hotel voucher · UMR-1042</span>
              <span className="text-[#475472]">Makkah 7N · Madinah 5N · 24 pilgrims</span>
              <span className="w-fit rounded-full bg-[#DBE5FD] px-2 py-0.5 font-bold text-[#1E3A8A]">
                Visa issued
              </span>
            </div>
          </div>
        </div>

        {/* Center swap badge */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-navy text-gold shadow-[0_0_0_6px_hsl(var(--background))] lg:flex">
          <ArrowLeftRight className="h-7 w-7" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}

function ProgressRow({ label, note, pct }: { label: string; note: string; pct: number }) {
  return (
    <>
      <div className="flex justify-between">
        <span className="font-mono">{label}</span>
        <span className="text-[#C7D4FA]">{note}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#2F5CE0]">
        <div className="h-1.5 rounded-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}

function QrGlyph() {
  return (
    <svg width="64" height="64" viewBox="0 0 21 21" className="shrink-0" role="img" aria-label="Voucher QR code">
      <g fill="#0C1B47">
        <path d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2z" fillRule="evenodd" />
        <path d="M14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3z" fillRule="evenodd" />
        <path d="M0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2z" fillRule="evenodd" />
        <rect x="9" y="1" width="2" height="2" />
        <rect x="8" y="5" width="3" height="1" />
        <rect x="9" y="8" width="2" height="3" />
        <rect x="12" y="9" width="3" height="1" />
        <rect x="16" y="9" width="2" height="2" />
        <rect x="1" y="9" width="3" height="2" />
        <rect x="12" y="13" width="2" height="2" />
        <rect x="15" y="15" width="3" height="1" />
        <rect x="9" y="15" width="2" height="3" />
        <rect x="17" y="18" width="3" height="2" />
        <rect x="12" y="18" width="3" height="2" />
      </g>
    </svg>
  );
}
