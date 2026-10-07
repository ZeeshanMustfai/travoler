import {
  ArrowRight,
  BarChart3,
  BookText,
  Boxes,
  Layers,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useModals } from "@/providers/modal-provider";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  gold?: boolean;
};

const FEATURES: Feature[] = [
  { icon: Users, title: "Agent network management", body: "Credit limits, markups and permissions per agent or group." },
  { icon: BookText, title: "Ledgers & payment vouchers", body: "Every booking posts to the agent’s ledger, with a full audit trail.", gold: true },
  { icon: Boxes, title: "Printable QR vouchers", body: "Hotels and drivers scan to verify — public access, no login.", gold: true },
  { icon: BarChart3, title: "Real-time dashboards", body: "Seats sold, rooms filled, visas pending and receivables — live." },
  { icon: Search, title: "Global search", body: "Any PNR, pilgrim, passport, group, agent or voucher — one search bar." },
  { icon: Layers, title: "Multi-tenant white-label", body: "Your logo, colors and domain; each tenant’s data isolated.", gold: true },
];

export function Features() {
  const { openDemo } = useModals();

  return (
    <section
      id="features"
      className="border-y border-border bg-secondary"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20 lg:px-[120px] lg:py-28">
        <div className="flex flex-col gap-5">
          <span className="eyebrow text-[13px] font-bold tracking-[0.12em]">PLATFORM</span>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[44px]">
            Built for how B2B travel actually works.
          </h2>
          <p className="text-[17px] leading-relaxed text-muted-foreground">
            Your sub-agents, your money and your brand — handled with the
            controls a wholesaler needs.
          </p>
          <button
            type="button"
            onClick={openDemo}
            className="flex w-fit items-center gap-2 text-[15px] font-bold text-gold hover:underline"
          >
            See it in a demo
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </button>
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex gap-[18px] border-t border-surface-strong py-[26px]"
            >
              <span
                className={
                  f.gold
                    ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground"
                    : "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white"
                }
              >
                <f.icon className="h-[21px] w-[21px]" strokeWidth={1.9} />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[17px] font-bold">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
