import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useModals } from "@/providers/modal-provider";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

const PLANS = [
  {
    name: "Starter",
    tag: "One module to get started.",
    monthly: "PKR 25k",
    yearly: "PKR 20k",
    cta: "Get started",
    variant: "outline" as const,
    action: "pricing" as const,
    features: [
      "Flights or Umrah module",
      "Up to 10 sub-agents",
      "Ledgers & payment vouchers",
      "Printable QR vouchers",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    tag: "Both modules and a branded portal.",
    monthly: "PKR 60k",
    yearly: "PKR 48k",
    cta: "Get started",
    variant: "default" as const,
    action: "pricing" as const,
    features: [
      "Flights + Umrah modules",
      "Up to 50 sub-agents",
      "White-label portal on your domain",
      "Real-time dashboards",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    tag: "Large networks and integrations.",
    monthly: "Custom",
    yearly: "Custom",
    cta: "Contact sales",
    variant: "blue" as const,
    action: "demo" as const,
    features: [
      "Unlimited sub-agents",
      "Multiple tenants & branches",
      "Third-party & API integrations",
      "Dedicated onboarding",
      "SLA & account manager",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { openDemo } = useModals();

  return (
    <section id="pricing" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-24 sm:px-8 lg:px-[120px] lg:py-28">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="eyebrow text-[13px] font-bold tracking-[0.12em]">PRICING</span>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[44px]">
            Plans that grow with your network.
          </h2>
          <Tabs
            value={billing}
            onValueChange={(v) => setBilling(v as Billing)}
            className="mt-2"
          >
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly · Save 20%</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            const isCustom = price === "Custom";
            return (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col gap-7 rounded-[20px] p-9",
                  plan.popular
                    ? "bg-brand-navy text-white shadow-float outline outline-[3px] -outline-offset-[3px] outline-gold"
                    : "border border-border bg-card"
                )}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                    {plan.popular && (
                      <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-gold-foreground">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className={cn("text-sm", plan.popular ? "text-[#B6C3E6]" : "text-muted-foreground")}>
                    {plan.tag}
                  </p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[40px] font-bold tracking-[-0.03em]">
                    {price}
                  </span>
                  {!isCustom && (
                    <span className={cn("text-sm", plan.popular ? "text-[#B6C3E6]" : "text-muted-foreground")}>
                      / month
                    </span>
                  )}
                </div>

                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  onClick={plan.action === "demo" ? openDemo : undefined}
                  asChild={plan.action !== "demo"}
                >
                  {plan.action === "demo" ? (
                    <span>{plan.cta}</span>
                  ) : (
                    <a href="#top">{plan.cta}</a>
                  )}
                </Button>

                <div className="flex flex-col gap-3 text-sm">
                  {plan.features.map((f) => (
                    <span key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.popular ? "text-gold" : "text-brand-blue"
                        )}
                        strokeWidth={2.6}
                      />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
