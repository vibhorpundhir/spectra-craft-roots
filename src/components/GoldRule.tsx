import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A gold hairline that draws itself left-to-right when scrolled into view —
 * like a furrow being ploughed across a field.
 */
export function GoldRule({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const base = "block h-[2px] w-10 origin-left bg-gold";
  if (reduce) return <span className={cn(base, className)} />;
  return (
    <motion.span
      aria-hidden
      className={cn(base, className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
