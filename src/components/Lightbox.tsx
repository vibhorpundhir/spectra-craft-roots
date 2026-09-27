import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export interface LightboxItem {
  src: string;
  alt: string;
  category?: string;
}

export interface LightboxProps {
  items?: LightboxItem[];
  item?: LightboxItem;
  index: number | null;
  total?: number;
  onClose: () => void;
  onIndexChange?: (i: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function Lightbox({
  items,
  item,
  index,
  total,
  onClose,
  onIndexChange,
  onPrev,
  onNext,
}: LightboxProps) {
  const open = index !== null;
  const list = items ?? (item ? [item] : []);
  const count = total ?? list.length;
  const current = item ?? (index !== null && list[index] ? list[index] : list[0]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (dir === -1 && onPrev) {
        onPrev();
        return;
      }
      if (dir === 1 && onNext) {
        onNext();
        return;
      }
      if (index === null || list.length === 0 || !onIndexChange) return;
      onIndexChange((index + dir + list.length) % list.length);
    },
    [index, list.length, onIndexChange, onNext, onPrev],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, go]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-100 flex flex-col bg-ink/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <span className="eyebrow text-gold">{current.category}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-11 w-11 items-center justify-center text-cream/80 transition-colors hover:text-cream"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center px-3 pb-4 sm:px-8">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[76svh] w-auto max-w-full cursor-grab object-contain active:cursor-grabbing"
            />
          </div>

          <div
            className="flex items-center justify-between gap-4 px-5 pb-7 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="inline-flex h-11 w-11 items-center justify-center border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="max-w-xl text-center">
              <p className="text-sm leading-snug text-cream/90">{current.alt}</p>
              {count > 1 && (
                <p className="mt-1 text-[0.7rem] uppercase tracking-widest text-gold font-mono">
                  {index !== null ? index + 1 : 1} of {count}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="inline-flex h-11 w-11 items-center justify-center border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
