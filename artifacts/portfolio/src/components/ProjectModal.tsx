import { useEffect } from "react";
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
  keywords: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          data-testid="modal-backdrop"
        >
          <motion.div
            key="modal-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 h-full w-full md:w-[60vw] lg:w-[52vw] bg-[#f5f5f0] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-panel"
          >
            <button
              onClick={onClose}
              data-testid="modal-close"
              className="fixed top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-xs uppercase tracking-widest font-sans text-foreground/50 hover:text-foreground transition-colors"
            >
              ✕
            </button>

            <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-200">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-8 md:px-12 py-12 space-y-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
                  <h2 className="font-serif text-3xl md:text-5xl tracking-tight">{project.title}</h2>
                  <span className="font-sans text-xs text-foreground/40">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-6 font-sans text-xs text-foreground/50 uppercase tracking-widest pt-1">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                  <span>{project.status}</span>
                  {project.instructor && <span>Instructor — {project.instructor}</span>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-3"
              >
                <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/40">Prologue</h3>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/85">
                  {project.prologue}
                </p>
              </motion.div>

              {project.concepts.map((concept, i) => (
                <motion.div
                  key={concept.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.8 }}
                  className="space-y-3 border-t border-black/8 pt-10"
                >
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/40">{concept.label}</h3>
                  <p className="font-sans text-sm leading-relaxed text-foreground/70">{concept.text}</p>
                </motion.div>
              ))}

              {project.program && project.program.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="border-t border-black/8 pt-10 space-y-4"
                >
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/40">Program</h3>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {project.program.map((item) => (
                      <li key={item} className="font-sans text-xs text-foreground/60 border-b border-black/5 pb-2">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="border-t border-black/8 pt-10"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/30">{project.keywords}</p>
              </motion.div>

              <div className="h-12" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
