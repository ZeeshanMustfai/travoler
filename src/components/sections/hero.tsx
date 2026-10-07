import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModals } from "@/providers/modal-provider";

const CHECKS = ["Multi-tenant", "White-label portal", "Role-based access"];

const FLIGHTS = [
  { time: "08:40", flight: "PK 759", route: "LHE → JED", seats: "32/40", status: "ON SALE", tone: "text-emerald-300" },
  { time: "11:15", flight: "SV 723", route: "ISB → MED", seats: "18/30", status: "ON SALE", tone: "text-emerald-300" },
  { time: "14:05", flight: "EK 601", route: "KHI → DXB", seats: "9/25", status: "DEAL −8%", tone: "text-gold" },
  { time: "19:30", flight: "PK 741", route: "LHE → RUH", seats: "40/40", status: "SOLD OUT", tone: "text-red-300" },
];

export function Hero() {
  const { openDemo } = useModals();

  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-16 lg:px-[120px] lg:py-[104px]"
    >
      {/* Copy */}
      <div className="flex flex-col gap-7 animate-fade-in">
        <span className="flex w-fit items-center gap-2 rounded-full border border-surface-strong px-3.5 py-[7px] text-[13px] font-bold text-gold">
          <span className="h-[7px] w-[7px] rounded-full bg-gold" />
          For flight wholesalers &amp; Umrah operators
        </span>
        <h1 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[56px]">
          One platform to run your{" "}
          <span className="text-gold">flight inventory</span> &amp;{" "}
          <span className="text-gold">Umrah operations.</span>
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
          Manage seat blocks, hotel allocations, transport and visas in one
          place — then give your sub-agents a branded portal where they book,
          pay and print vouchers, while every transaction posts to the ledger
          automatically.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#pricing">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={openDemo}>
            Book a demo
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-muted-foreground">
          {CHECKS.map((c) => (
            <span key={c} className="flex items-center gap-1.5">
              <Check className="h-[15px] w-[15px] text-gold" strokeWidth={2.4} />
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard mock */}
      <div className="relative min-h-[420px] lg:h-[540px]">
        <div className="overflow-hidden rounded-[18px] border border-surface-strong bg-card shadow-float lg:absolute lg:right-0 lg:top-0 lg:w-[660px]">
          <div className="flex items-center justify-between border-b border-surface-strong px-5 py-4">
            <span className="flex items-center gap-2 text-[13px] font-bold text-card-foreground">
              <span className="h-5 w-5 rounded-md bg-gold" />
              Al-Noor Travel
            </span>
            <span className="flex gap-1 rounded-lg bg-background p-[3px] text-xs font-semibold">
              <span className="rounded-md bg-brand-blue px-3 py-[5px] text-white">Flights</span>
              <span className="px-3 py-[5px] text-muted-foreground">Umrah</span>
              <span className="px-3 py-[5px] text-muted-foreground">Ledgers</span>
            </span>
          </div>
          <div className="flex flex-col gap-4 p-5">
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Seats available" value="1,248" />
              <Stat label="Blocks on sale" value="36" />
              <Stat label="Receivables due" value="PKR 4.2M" gold />
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-brand-navy p-4 font-mono text-xs text-white">
              <div className="grid grid-cols-[0.8fr_0.9fr_1.3fr_0.8fr_1fr] border-b border-surface-strong pb-2 text-[10px] tracking-[0.08em] text-[hsl(224,49%,71%)]">
                <span>TIME</span><span>FLIGHT</span><span>ROUTE</span><span>SEATS</span><span>STATUS</span>
              </div>
              {FLIGHTS.map((f) => (
                <div key={f.flight} className="grid grid-cols-[0.8fr_0.9fr_1.3fr_0.8fr_1fr] py-[7px]">
                  <span className="text-gold">{f.time}</span>
                  <span>{f.flight}</span>
                  <span>{f.route}</span>
                  <span>{f.seats}</span>
                  <span className={f.tone}>{f.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating ledger card */}
        <div className="mt-4 flex w-full max-w-[290px] flex-col gap-3 rounded-2xl border-t-[5px] border-gold bg-white p-[18px] text-[#0E1B3D] shadow-card lg:absolute lg:-left-4 lg:bottom-0 lg:mt-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#475472]">Agent ledger</span>
            <span className="rounded-full bg-emerald-100 px-2 py-[3px] text-[11px] font-bold text-emerald-800">
              Posted
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold">Sky Link Travels</span>
            <span className="text-xs text-[#475472]">Payment voucher PV-00318</span>
          </div>
          <div className="flex items-baseline justify-between border-t border-[#EEF1F9] pt-2.5">
            <span className="text-xs text-[#475472]">Balance</span>
            <span className="font-display text-xl font-bold text-brand-blue">PKR 1.2M</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, gold }: { label: string; value: string; gold?: boolean }) {
  return (
    <div
      className={
        gold
          ? "flex flex-col gap-1 rounded-xl bg-gold p-3.5 text-gold-foreground"
          : "flex flex-col gap-1 rounded-xl bg-surface-alt p-3.5"
      }
    >
      <span className={gold ? "text-[11px] font-bold" : "text-[11px] font-semibold text-muted-foreground"}>
        {label}
      </span>
      <span className="font-display text-[22px] font-bold">{value}</span>
    </div>
  );
}
