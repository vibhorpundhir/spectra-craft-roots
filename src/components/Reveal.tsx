import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

type Variant = "rise" | "fade" | "clip" | "left";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants = {
  // gentle lift, like a page turning
  rise: { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  // grows open from the bottom — a seed becoming a frame
  clip: {
    initial: { opacity: 0, clipPath: "inset(14% 0% 0% 0%)", y: 10 },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 },
  },
  left: { initial: { opacity: 0, x: -18 }, animate: { opacity: 1, x: 0 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "rise",
  duration = 0.55,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On server or reduced-motion: render children visible immediately (no flash)
  if (reduce || !mounted) return <div className={className}>{children}</div>;

  const v = variants[variant];
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay: delay * 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
