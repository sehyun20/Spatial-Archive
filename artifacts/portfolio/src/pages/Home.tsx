import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Project images
import contextBreakOff from "@/assets/projects/context-break-off.png";
import floatingGround from "@/assets/projects/floating-ground.png";
import museumMoving from "@/assets/projects/museum-moving.png";
import artPathHouse from "@/assets/projects/art-path-house.png";
import futureChurch from "@/assets/projects/future-church.jpg";
import simbiont from "@/assets/projects/simbiont.png";

const works = [
  {
    title: "Context Break Off",
    category: "Urban Machinery",
    year: "2025",
    location: "Gwanghwamun, Seoul",
    desc: "Political conflict and social fragmentation demand spatial response. An inflatable urban machine intervenes temporarily on Sejong-daero — breaking the one-directional axis of Gwanghwamun Square to create space for dialogue, ritual, and encounter across difference.",
    img: contextBreakOff,
    keywords: "ekklesia, membrane structure, inflatable vehicle, protest, ritual, urban dialogue",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Floating Ground",
    category: "Middle School",
    year: "2024",
    location: "Bukak-dong, Seoul",
    desc: "School envisioned not as an enclosed institution but as an open hillside landscape. A floating slab lifts the building, freeing the ground for a public park shared between students and local residents — blurring the boundary between learning and everyday neighborhood life.",
    img: floatingGround,
    keywords: "floating slab, open school, hillside, public circulation, Bukak-dong, community",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Museum is Moving",
    category: "Museum Renovation",
    year: "2024",
    location: "Haehwa-dong, Seoul",
    desc: "Architecture archives resist passive display. This renovation transforms a museum into a Larchiveum — Library, Archive, and Museum fused into one adaptive space — where movable wall units reconfigure the interior between cinema, open library, festival, and exhibition modes.",
    img: museumMoving,
    keywords: "larchiveum, movable wall, flexible museum, Marronnier Park, archive, cinematic",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Art Path House",
    category: "Artists' Housing",
    year: "2024",
    location: "Jeongreong-dong, Seoul",
    desc: "Collective housing conceived around the path as the primary social space. 100 rooms across three module types for artists of diverse disciplines — where spontaneous encounters, shared processes, and the act of selling talent become catalysts for creative life.",
    img: artPathHouse,
    keywords: "collective living, artist community, path, Jeongreong-dong, interdisciplinary, circulation",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Future Church",
    category: "Religious Park",
    year: "2023",
    location: "Virtual site — where the small church used to be",
    desc: "As small churches disappear, so do the communities they held. Gabion walls recycle the material and spatial memory of the original church — forming an open sanctuary park that continues to serve the neighborhood as a place of worship, rest, and communal gathering.",
    img: futureChurch,
    keywords: "gabion, adaptive reuse, open sanctuary, memory, community, Bronze Prize",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Simbiont : Live Life",
    category: "Pavilion",
    year: "2025",
    location: "Seoul City Hall Square",
    desc: "The Bromeliad forms a micro-ecosystem in the water held between its leaves. This pavilion spatializes that system — visitors shift from observers to participants, from consumers to resource providers, inhabiting a cycle of coexistence between human and nature.",
    img: simbiont,
    keywords: "symbiosis, bromeliad, micro-ecosystem, water cycle, pavilion, Seoul Square",
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
                      <span className="font-sans text-[10px] text-muted-foreground">{work.location}</span>
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
            <div className="md:col-span-1 flex flex-col gap-8">
              <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</h2>
              <div className="font-sans text-xs text-muted-foreground space-y-1 leading-relaxed">
                <p>Kookmin University</p>
                <p>Dept. of Architecture</p>
                <p>Seoul, Korea</p>
                <p className="pt-3 text-[10px] uppercase tracking-widest">BArch, 4th Year</p>
              </div>
            </div>
            <div className="md:col-span-3 space-y-10">
              <p className="font-serif text-2xl md:text-4xl leading-snug tracking-tight text-foreground/90">
                Sehyun Kim is a fourth-year architecture student at Kookmin University, Seoul —
                currently on leave. His work operates at the intersection of urban ritual,
                spatial flow, and adaptive systems, proposing architecture as a mediating device
                between political fragmentation, ecological coexistence, and collective memory.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-border">
                {["Urban Ritual", "Spatial Flow", "Adaptive Systems", "Multisensory Architecture", "Public Interaction", "Collective Memory"].map(interest => (
                  <span key={interest} className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{interest}</span>
                ))}
              </div>
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
                    <span className="text-muted-foreground">Department of Architecture, BArch</span>
                    <span className="text-muted-foreground">4th Year — Currently on Leave</span>
                    <span className="text-xs text-muted-foreground mt-1">Mar 2020 – Present</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Awards</h3>
                <ul className="space-y-5">
                  <li className="flex flex-col">
                    <span className="font-medium">UAUS Competition</span>
                    <span className="text-muted-foreground">Excellence Prize (3rd) &amp; Citizen Choice Prize</span>
                    <span className="text-xs text-muted-foreground mt-1">2025</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Design Excellence Scholarship</span>
                    <span className="text-muted-foreground">7th &amp; 8th Architecture Studio</span>
                    <span className="text-xs text-muted-foreground mt-1">2025</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Future Church Contest</span>
                    <span className="text-muted-foreground">Bronze Prize — Kukmin Ilbo</span>
                    <span className="text-xs text-muted-foreground mt-1">2023</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Dokdo Guest House Contest</span>
                    <span className="text-muted-foreground">Award</span>
                    <span className="text-xs text-muted-foreground mt-1">2020</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">Experience</h3>
                <ul className="space-y-5">
                  <li className="flex flex-col">
                    <span className="font-medium">UAUS</span>
                    <span className="text-muted-foreground">Union of Architecture University Students</span>
                    <span className="text-xs text-muted-foreground mt-1">2025.06 – 2025.10</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Rural Architectural Volunteer</span>
                    <span className="text-muted-foreground">Field Work</span>
                    <span className="text-xs text-muted-foreground mt-1">2025.06 – 2025.07 &amp; 2024.06 – 2024.07</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Samoonan Church</span>
                    <span className="text-muted-foreground">Youth Ministry Group Leader</span>
                    <span className="text-xs text-muted-foreground mt-1">2025.01 – 2025.12</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Architectural Research Society</span>
                    <span className="text-muted-foreground">Kookmin University</span>
                    <span className="text-xs text-muted-foreground mt-1">2023.03 – 2025.06</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Korea Air Force</span>
                    <span className="text-muted-foreground">Air Traffic Control (ATC)</span>
                    <span className="text-xs text-muted-foreground mt-1">2021.02 – 2022.10</span>
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
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-muted-foreground">
                  {["Rhinoceros 8", "Grasshopper", "SketchUp", "AutoCAD", "Revit", "Enscape", "D5 Render", "Photoshop", "Illustrator", "InDesign", "Excel", "PowerPoint"].map(sw => (
                    <li key={sw}>{sw}</li>
                  ))}
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
            <a href="mailto:sehyun20@icloud.com">sehyun20@icloud.com</a>
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
