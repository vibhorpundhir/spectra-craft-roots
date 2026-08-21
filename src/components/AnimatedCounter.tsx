import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts a numeric value up when it scrolls into view — a harvest being tallied.
 * Non-numeric values (e.g. "FPO & OFPO") are rendered as-is.
 * SSR-safe: renders the final value on the server, animates only on client.
 */
export function AnimatedCounter({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = /^(\D*)(\d[\d,]*)(.*)$/.exec(value);
  const target = match ? Number(match[2].replace(/,/g, "")) : null;

  // Always start with the final value (SSR-safe), then reset to 0 on mount if animating
  const [display, setDisplay] = useState(value);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reset to 0 for animation start (only on client)
    if (!reduce && target !== null && match) {
      setDisplay(`${match[1]}0${match[3]}`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!mounted || !inView || reduce || target === null || !match) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      setDisplay(`${match[1]}${current.toLocaleString("en-IN")}${match[3]}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [mounted, inView, reduce, target, duration, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
