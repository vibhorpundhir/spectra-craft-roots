import { motion, useScroll, useSpring } from "motion/react";

/** Thin gold reading-progress line pinned to the bottom edge of the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gold"
    />
  );
}
