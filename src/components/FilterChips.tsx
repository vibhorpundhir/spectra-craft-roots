import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ChipOption {
  key: string;
  label: string;
}

/**
 * Filter chips where the active state slides between options (shared layout id),
 * so switching a category feels continuous rather than a hard repaint.
 */
export function FilterChips({
  options,
  value,
  onChange,
  label,
  layoutId,
  tone = "field",
}: {
  options: readonly ChipOption[];
  value: string;
  onChange: (key: string) => void;
  label: string;
  layoutId: string;
  tone?: "field" | "leather";
}) {
  return (
    <div className="flex flex-wrap gap-2.5" role="group" aria-label={label}>
      {options.map((o) => {
        const active = o.key === value;
        return (
          <button
            key={o.key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.key)}
            className={cn(
              "eyebrow relative isolate overflow-hidden border px-5 py-2.5 transition-colors duration-200",
              active
                ? "border-transparent text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground active:scale-[0.97]",
            )}
          >
            {active ? (
              <motion.span
                layoutId={layoutId}
                aria-hidden
                className={cn(
                  "absolute inset-0 -z-10",
                  tone === "leather" ? "bg-leather" : "bg-primary",
                )}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
