import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="eyebrow text-[13px] font-bold tracking-[0.12em]">
        {eyebrow}
      </span>
      <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[40px] lg:text-[44px]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[17px] leading-relaxed text-muted-foreground",
            align === "center" && "max-w-[620px]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
