import { Button } from "@/components/ui/button";
import { useModals } from "@/providers/modal-provider";

export function CTA() {
  const { openDemo } = useModals();

  return (
    <section id="demo" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-[120px] lg:py-28">
      <div className="grid items-center gap-8 rounded-[28px] bg-gold p-8 text-gold-foreground sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:p-[72px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[44px]">
            Run your agency from one platform.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#1B2A5C]">
            A 30-minute walkthrough of your flight inventory, Umrah packages and
            agent ledgers.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="navy" size="lg" asChild>
            <a href="#top">Get started</a>
          </Button>
          <Button variant="blue" size="lg" onClick={openDemo}>
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
