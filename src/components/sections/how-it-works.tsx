import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    n: "01",
    title: "Set up your inventory",
    body: "Load airlines, routes and seat blocks, plus hotels, room rates, transport and visa packages.",
    gold: false,
  },
  {
    n: "02",
    title: "Onboard your agents",
    body: "Invite sub-agents to your branded portal with their own credit limits, markups and access.",
    gold: false,
  },
  {
    n: "03",
    title: "They book, you track",
    body: "Agents book in real time. Ledgers, vouchers and receivables update automatically.",
    gold: true,
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-16 px-5 py-24 sm:px-8 lg:px-[120px] lg:py-28">
      <SectionHeading
        eyebrow="HOW IT WORKS"
        title="From setup to settled ledgers in three steps."
      />
      <div className="relative grid gap-10 md:grid-cols-3">
        <div className="absolute left-[60px] right-[60px] top-[31px] hidden h-0.5 bg-gold md:block" />
        {STEPS.map((s) => (
          <div key={s.n} className="relative flex flex-col gap-[18px]">
            <span
              className={
                (s.gold
                  ? "bg-gold text-gold-foreground"
                  : "bg-brand-blue text-white") +
                " flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold shadow-[0_0_0_8px_hsl(var(--background))]"
              }
            >
              {s.n}
            </span>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="max-w-[330px] text-[15px] leading-relaxed text-muted-foreground">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
