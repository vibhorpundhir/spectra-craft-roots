import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

/** Ultra-smooth gold reading progress line pinned to header. Optimized for zero scroll lag. */
export function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress }}
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-gold via-ember to-gold will-change-transform pointer-events-none"
    />
  );
}
