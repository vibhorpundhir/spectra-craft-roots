import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "field",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "field" | "leather" | "muted";
  className?: string;
}) {
  const toneClass =
    tone === "leather"
      ? "text-leather"
      : tone === "muted"
        ? "text-muted-foreground"
        : "text-primary";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <>
          <p className={cn("eyebrow", toneClass)}>{eyebrow}</p>
          <span className={cn("gold-rule mt-4", align === "center" && "mx-auto")} />
        </>
      ) : null}
      <h2 className="mt-6 text-[2rem] sm:text-4xl md:text-[3.25rem]">{title}</h2>
      {intro ? (
        <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
