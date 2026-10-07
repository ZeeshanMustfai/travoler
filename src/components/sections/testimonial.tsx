import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QUOTES = [
  {
    quote:
      "We replaced three spreadsheets and a WhatsApp group. Flights, Umrah packages and every agent ledger now live in one place — and nothing gets entered twice.",
    name: "Ayesha Rahman",
    role: "Director, Al-Noor Travel",
  },
  {
    quote:
      "Our sub-agents book against live seat blocks and print vouchers themselves. Receivables that used to take a week to reconcile now post the moment a booking is made.",
    name: "Bilal Qureshi",
    role: "Operations Head, Sky Link Travels",
  },
  {
    quote:
      "During Umrah season we tracked 2,000+ pilgrims, visas and hotel allocations without losing a single voucher. The white-label portal made us look enterprise overnight.",
    name: "Fatima Siddiqui",
    role: "Founder, Haramain Journeys",
  },
];

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const active = QUOTES[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + QUOTES.length) % QUOTES.length);

  return (
    <section id="customers" className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-[120px] lg:pb-28">
      <div className="grid items-center gap-12 rounded-3xl border border-surface-strong bg-card p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 lg:p-[72px]">
        <figure className="m-0 flex flex-col gap-7">
          <span className="eyebrow text-[13px] font-bold tracking-[0.12em]">CUSTOMERS</span>
          <blockquote className="m-0 font-display text-2xl font-semibold leading-[1.35] tracking-[-0.015em] sm:text-[30px]">
            “{active.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-strong font-display text-sm font-bold text-foreground">
              {active.name.split(" ").map((w) => w[0]).join("")}
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[15px] font-bold">{active.name}</span>
              <span className="text-sm text-muted-foreground">{active.role}</span>
            </span>
          </figcaption>
        </figure>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-surface-strong text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </button>
          </div>
          <div className="flex gap-1.5">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-surface-strong"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
