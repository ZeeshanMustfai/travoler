export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-[120px]">
        <p className="w-full shrink-0 text-sm font-bold leading-snug lg:w-[230px]">
          Built for agencies managing{" "}
          <span className="text-gold">thousands of bookings</span>
        </p>
        <div className="grid w-full grow grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[46px] items-center justify-center rounded-[10px] border border-dashed border-surface-strong font-mono text-[11px] text-muted-foreground"
            >
              [LOGO]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
