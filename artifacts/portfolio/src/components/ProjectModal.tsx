import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectDetail {
  title: string;
  category: string;
  year: string;
  location: string;
  status: string;
  instructor?: string;
  prologue: string;
  concepts: { label: string; text: string }[];
  program?: string[];
  img: string;
  pages: string[];
  keywords: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setImgError({});
      panelRef.current?.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            key="modal-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 h-full w-full md:w-[65vw] lg:w-[58vw] bg-[#f5f4f0] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-0 ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-sans text-foreground/40 hover:text-foreground transition-colors py-5 px-8 bg-[#f5f4f0]/90 backdrop-blur-sm w-full justify-end z-10"
            >
              Close ✕
            </button>

            {/* Cover image */}
            <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-200 -mt-[42px]">
              <motion.img
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title block */}
            <div className="px-8 md:px-12 pt-10 pb-8 space-y-4 border-b border-black/8">
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-3xl md:text-[2.6rem] tracking-tight leading-tight">{project.title}</h2>
                <span className="font-sans text-xs text-foreground/35 ml-4 shrink-0">{project.year}</span>
              </div>
              <div className="flex flex-wrap gap-4 font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/40 pt-1">
                <span>{project.category}</span>
                <span className="text-foreground/20">·</span>
                <span>{project.location}</span>
                <span className="text-foreground/20">·</span>
                <span>{project.status}</span>
                {project.instructor && (
                  <>
                    <span className="text-foreground/20">·</span>
                    <span>Instructor — {project.instructor}</span>
                  </>
                )}
              </div>
            </div>

            {/* Prologue */}
            <div className="px-8 md:px-12 py-10 border-b border-black/8">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/35 mb-5">Prologue</p>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/80">
                {project.prologue}
              </p>
            </div>

            {/* PDF pages gallery interspersed with concepts */}
            <div className="space-y-0">
              {project.pages.map((src, i) => {
                const concept = project.concepts[i];
                return (
                  <div key={src}>
                    {/* Page image */}
                    {!imgError[src] && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px", root: panelRef }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full bg-white border-t border-b border-black/5"
                      >
                        <img
                          src={src}
                          alt={`${project.title} — page ${i + 1}`}
                          className="w-full h-auto block"
                          onError={() => setImgError(prev => ({ ...prev, [src]: true }))}
                        />
                      </motion.div>
                    )}

                    {/* Concept text after each image */}
                    {concept && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px", root: panelRef }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="px-8 md:px-12 py-10 border-b border-black/8"
                      >
                        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/35 mb-4">{concept.label}</p>
                        <p className="font-sans text-sm leading-relaxed text-foreground/65 whitespace-pre-line">{concept.text}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}

              {/* Remaining pages after all concepts */}
              {project.pages.slice(project.concepts.length).map((src, i) => {
                const realIdx = project.concepts.length + i;
                return !imgError[src] ? (
                  <motion.div
                    key={`extra-${src}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px", root: panelRef }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full bg-white border-t border-b border-black/5"
                  >
                    <img
                      src={src}
                      alt={`${project.title} — page ${realIdx + 1}`}
                      className="w-full h-auto block"
                      onError={() => setImgError(prev => ({ ...prev, [src]: true }))}
                    />
                  </motion.div>
                ) : null;
              })}
            </div>

            {/* Program + keywords */}
            {project.program && project.program.length > 0 && (
              <div className="px-8 md:px-12 py-10 border-t border-black/8">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/35 mb-6">Program</p>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {project.program.map((item) => (
                    <li key={item} className="font-sans text-xs text-foreground/55 border-b border-black/5 pb-2">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="px-8 md:px-12 py-8 border-t border-black/8">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/25">{project.keywords}</p>
            </div>

            <div className="h-16" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
