import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Layers,
  Award,
  Hammer,
  ExternalLink,
} from "lucide-react";
import { useCallback, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { site, whatsappLink } from "@/data/site";

export interface LightboxItem {
  id?: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  artisanGroup?: string;
  story?: string;
  materials?: string;
  craftTechnique?: string;
  cluster?: string;
  isOrderable?: boolean;
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

  if (!open || !current) return null;

  const title = current.title || current.alt;
  const isProduct = current.isOrderable ?? current.category === "Finished Products";

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 backdrop-blur-md p-2 sm:p-4 md:p-6 lg:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
      >
        {/* Modal Window Container */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col w-full max-w-6xl max-h-[94vh] rounded-2xl border border-gold/30 bg-card shadow-2xl overflow-hidden text-foreground"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-gold/20 px-5 py-3.5 bg-muted/20 shrink-0">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-gold text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30">
                {current.category || "Visual Archive"}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Item <strong className="text-foreground">{index !== null ? index + 1 : 1}</strong>{" "}
                of {count}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Prev / Next buttons in header for easy reach */}
              <div className="flex items-center gap-1 border border-border/80 rounded-lg p-0.5 bg-background/80">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photograph"
                  className="inline-flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photograph"
                  className="inline-flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 text-muted-foreground transition-colors hover:border-gold hover:text-foreground hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Body: Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto min-h-0">
            {/* Visual View (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-7 relative flex items-center justify-center bg-ink/90 p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[420px] lg:min-h-full">
              {/* Navigation Arrows on Image Side */}
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-cream/90 border border-gold/30 backdrop-blur-sm shadow-lg hover:scale-105 hover:border-gold hover:text-gold transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="max-h-[60vh] lg:max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl cursor-grab active:cursor-grabbing border border-gold/15"
              />

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-cream/90 border border-gold/30 backdrop-blur-sm shadow-lg hover:scale-105 hover:border-gold hover:text-gold transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Watermark / Accreditation */}
              <span className="absolute bottom-3 left-4 text-[0.62rem] uppercase tracking-widest text-cream/50 pointer-events-none">
                Pahchan Leather Work · SPECTRA &amp; NABARD
              </span>
            </div>

            {/* Story & Craft Dossier (Right on Desktop, Bottom on Mobile) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-card space-y-6">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-leather mb-1.5">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <span className="eyebrow text-[0.62rem] text-leather font-bold">
                      {current.artisanGroup || "Artisan Collective Craft"}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    {title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground italic">{current.alt}</p>
                </div>

                {/* Artisan & Heritage Story */}
                <div className="rounded-xl border border-gold/25 bg-sand/30 p-4 sm:p-5">
                  <h3 className="eyebrow text-[0.62rem] text-leather font-bold flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-gold" /> Artisan &amp; Heritage Story
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90 font-serif">
                    {current.story ||
                      "Handcrafted by rural artisan families of Ismailpur and Kishangarh Bas, preserved through generations and supported by SPECTRA Organisation and NABARD Bank to build dignified livelihoods."}
                  </p>
                </div>

                {/* Craft Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {current.craftTechnique && (
                    <div className="rounded-lg border border-border/80 bg-muted/20 p-3">
                      <span className="eyebrow text-[0.6rem] text-muted-foreground flex items-center gap-1">
                        <Hammer className="h-3 w-3 text-gold" /> Technique
                      </span>
                      <p className="mt-1 font-semibold text-foreground">{current.craftTechnique}</p>
                    </div>
                  )}

                  {current.materials && (
                    <div className="rounded-lg border border-border/80 bg-muted/20 p-3">
                      <span className="eyebrow text-[0.6rem] text-muted-foreground flex items-center gap-1">
                        <Layers className="h-3 w-3 text-gold" /> Materials
                      </span>
                      <p className="mt-1 font-semibold text-foreground">{current.materials}</p>
                    </div>
                  )}

                  {current.cluster && (
                    <div className="rounded-lg border border-border/80 bg-muted/20 p-3 sm:col-span-2">
                      <span className="eyebrow text-[0.6rem] text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gold" /> Craft Cluster
                      </span>
                      <p className="mt-1 font-semibold text-foreground">{current.cluster}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons & Concierge */}
              <div className="pt-4 border-t border-border/80 space-y-3">
                {isProduct ? (
                  <>
                    <a
                      href={whatsappLink(
                        `Hello! I saw the "${title}" in your gallery archive and would like to ask about custom sizing, pricing, or ordering.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full rounded-md inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold shadow-md text-center"
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire About This Juti on WhatsApp
                    </a>

                    <Link
                      to="/contact"
                      search={{ product: title }}
                      onClick={onClose}
                      className="btn-secondary w-full rounded-md inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-center border border-gold/40 hover:border-gold"
                    >
                      Bespoke Sizing &amp; Official Order Form{" "}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </>
                ) : (
                  <a
                    href={whatsappLink(
                      `Hello! I am viewing your documentary archive piece "${title}" and would like to know more about visiting the CFC studio or partnering with your artisan enterprise.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full rounded-md inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold shadow-md text-center"
                  >
                    <MessageCircle className="h-4 w-4" /> Connect With Enterprise Coordinator
                  </a>
                )}

                <p className="text-[0.68rem] text-center text-muted-foreground">
                  Promoted by SPECTRA Organisation &amp; NABARD Bank · 200 Rural Artisans
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
