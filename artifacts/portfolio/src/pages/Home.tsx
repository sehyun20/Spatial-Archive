import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Project images
import contextBreakOff from "@/assets/projects/context-break-off.png";
import floatingGround from "@/assets/projects/floating-ground.png";
import museumMoving from "@/assets/projects/museum-moving.png";
import artPathHouse from "@/assets/projects/art-path-house.png";
import futureChurch from "@/assets/projects/future-church.png";
import simbiont from "@/assets/projects/simbiont.png";

const works = [
  {
    title: "Context Break Off",
    category: "Urban Machinery",
    year: "2025",
    desc: "Temporary inflatable urban architecture exploring political rituals, public discourse, and spatial mediation in Gwanghwamun, Seoul.",
    img: contextBreakOff,
    keywords: "ritual, protest, membrane structure, urban conflict",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Floating Ground",
    category: "Middle School",
    year: "2024",
    desc: "A school envisioned as an open public landscape where students and local residents share circulation, parks, and community spaces.",
    img: floatingGround,
    keywords: "floating slab, open school, hillside architecture",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Museum is Moving",
    category: "Museum Renovation",
    year: "2024",
    desc: "A flexible museum transforming architectural archives into spatial experiences through movable walls and multisensory interaction.",
    img: museumMoving,
    keywords: "moving wall systems, larchiveum, adaptive museum",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Art Path House",
    category: "Artists' Housing",
    year: "2024",
    desc: "Collective housing for artists encouraging spontaneous encounters, collaboration, and shared creative life.",
    img: artPathHouse,
    keywords: "collective living, artistic community, circulation",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Future Church",
    category: "Religious Park",
    year: "2023",
    desc: "Transformation of disappearing local churches into open communal sanctuaries preserving memory and social relationships.",
    img: futureChurch,
    keywords: "gabion wall, memory, adaptive reuse, open sanctuary",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Simbiont : Live Life",
    category: "Pavilion",
    year: "2025",
    desc: "A pavilion inspired by ecological symbiosis and bromeliad systems, creating coexistence between humans and nature.",
    img: simbiont,
    keywords: "symbiosis, ecology, pavilion, water cycle",
    aspect: "aspect-square"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            data-testid="loading-screen"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.3em] font-sans"
            >
              Between Flow & Friction
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-40 p-6 md:p-12 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.8, duration: 1 }}
          className="text-sm font-medium tracking-widest pointer-events-auto"
        >
          SK
        </motion.div>
        <motion.ul 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.8, duration: 1 }}
          className="flex flex-col items-end gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] pointer-events-auto"
        >
          <li><a href="#works" className="hover:opacity-50 transition-opacity">Works</a></li>
          <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
          <li><a href="#cv" className="hover:opacity-50 transition-opacity">CV</a></li>
          <li><a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a></li>
        </motion.ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 bg-black text-white overflow-hidden">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
        />
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

        <div className="relative z-10 mt-auto pb-24 md:pb-32">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.85] font-serif tracking-tighter"
          >
            SEHYUN KIM
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 1, ease: "easeOut" }}
            className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <p className="text-sm md:text-base font-sans tracking-wide text-neutral-400 uppercase">
              Architectural Portfolio 2023–2025
            </p>
            <div className="max-w-md text-xs md:text-sm font-sans leading-relaxed text-neutral-400 text-left md:text-right">
              <p className="text-white mb-2">Between Flow & Friction</p>
              <p>Architecture operating as a spatial device — twisting spatial flows and mediating urban interaction through multisensory networks.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="works" className="py-32 px-6 md:px-12 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-24"
          >
            Selected Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-8">
            {works.map((work, idx) => {
              // Asymmetric layout logic
              const isLeft = idx % 2 === 0;
              const colSpan = idx % 3 === 0 ? "md:col-span-8" : "md:col-span-6";
              const colStart = isLeft ? "md:col-start-1" : (idx % 3 === 0 ? "md:col-start-5" : "md:col-start-7");
              
              return (
                <motion.div 
                  key={work.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative ${colSpan} ${colStart} flex flex-col gap-6`}
                >
                  <div className={`overflow-hidden bg-muted w-full ${work.aspect}`}>
                    <motion.img 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      src={work.img} 
                      alt={work.title}
                      className="w-full h-full object-cover filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline border-b border-border pb-4">
                      <h3 className="font-serif text-2xl md:text-3xl">{work.title}</h3>
                      <span className="font-sans text-xs text-muted-foreground">{work.year}</span>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                      <span className="font-sans text-xs uppercase tracking-wider">{work.category}</span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm">
                      {work.desc}
                    </p>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                      {work.keywords}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-48 px-6 md:px-12 bg-neutral-100 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            <div className="md:col-span-1">
              <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</h2>
            </div>
            <div className="md:col-span-3">
              <p className="font-serif text-2xl md:text-4xl leading-snug tracking-tight text-foreground/90">
                Sehyun Kim is an architecture student at Kookmin University, Seoul. 
                Focusing on urban ritual, spatial flow, and adaptive systems, 
                exploring how architecture can operate as a spatial device to mediate 
                public interaction through multisensory networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-32 px-6 md:px-12 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground sticky top-32">Curriculum Vitae</h2>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 font-sans text-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Education</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-medium">Kookmin University</span>
                    <span className="text-muted-foreground">Department of Architecture</span>
                    <span className="text-xs text-muted-foreground mt-1">2020 – Present</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Experience</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-medium">Architecture Studio Internship</span>
                    <span className="text-muted-foreground">Seoul, Korea</span>
                    <span className="text-xs text-muted-foreground mt-1">2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Research Assistant</span>
                    <span className="text-muted-foreground">Urban Systems Lab</span>
                    <span className="text-xs text-muted-foreground mt-1">2023 – 2024</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Competitions & Awards</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-medium">Architecture Student Competition</span>
                    <span className="text-muted-foreground">Finalist Entry</span>
                    <span className="text-xs text-muted-foreground mt-1">2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Academic Recognition Award</span>
                    <span className="text-muted-foreground">Kookmin University</span>
                    <span className="text-xs text-muted-foreground mt-1">2023</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Software</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li>Rhino</li>
                  <li>Grasshopper</li>
                  <li>AutoCAD</li>
                  <li>Revit</li>
                  <li>Adobe Suite</li>
                  <li>Figma</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-48 px-6 md:px-12 bg-black text-white flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-12 text-center"
        >
          <div className="font-serif text-4xl md:text-6xl tracking-tight hover:italic transition-all cursor-pointer">
            <a href="mailto:sehyunkim@kookmin.ac.kr">sehyunkim@kookmin.ac.kr</a>
          </div>
          
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-sans">
            <a href="https://instagram.com/sehyun.kim" target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              PDF Portfolio
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
