import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * High-performance, silky-smooth numeric counter.
 * - Non-numeric strings (e.g. "FPO & OFPO", "Non-profit") render immediately without animation.
 * - Numeric values animate smoothly once in view with snappy ease-out deceleration.
 * - Guaranteed to settle exactly to the target value without hitching, restarting, or lag.
 */
export function AnimatedCounter({
  value,
  className,
  duration = 800,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  const reduce = useReducedMotion();

  // Stable parsing of prefix, number, and suffix
  const parsed = useMemo(() => {
    const match = /^(\D*)(\d[\d,]*)(.*)$/.exec(value);
    if (!match) {
      return { prefix: "", target: 0, suffix: value, isNumeric: false };
    }
    return {
      prefix: match[1],
      target: Number(match[2].replace(/,/g, "")),
      suffix: match[3],
      isNumeric: true,
    };
  }, [value]);

  const [display, setDisplay] = useState(value);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!parsed.isNumeric || reduce) {
      setDisplay(value);
      return;
    }

    if (inView && !animatedRef.current) {
      animatedRef.current = true;
      let frame = 0;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        // Fast rise with smooth quartic ease-out for immediate visible motion
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(parsed.target * eased);

        if (progress < 1) {
          setDisplay(`${parsed.prefix}${current.toLocaleString("en-IN")}${parsed.suffix}`);
          frame = requestAnimationFrame(tick);
        } else {
          // Final exact settle
          setDisplay(value);
        }
      };

      frame = requestAnimationFrame(tick);
      return () => {
        if (frame) cancelAnimationFrame(frame);
      };
    }
  }, [inView, parsed, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
