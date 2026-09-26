import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ProjectModal, { type ProjectDetail } from "@/components/ProjectModal";

import contextBreakOff from "@/assets/projects/context-break-off.png";
import floatingGround from "@/assets/projects/floating-ground.png";
import museumMoving from "@/assets/projects/museum-moving.png";
import artPathHouse from "@/assets/projects/art-path-house.png";
import futureChurch from "@/assets/projects/future-church.jpg";
import simbiont from "@/assets/projects/simbiont.png";

function sortedPages(glob: Record<string, string>): string[] {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => v);
}

const p1 = sortedPages(import.meta.glob("../assets/projects/01-context-break-off/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);
const p2 = sortedPages(import.meta.glob("../assets/projects/02-floating-ground/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);
const p3 = sortedPages(import.meta.glob("../assets/projects/03-museum-is-moving/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);
const p4 = sortedPages(import.meta.glob("../assets/projects/04-art-path-house/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);
const p5 = sortedPages(import.meta.glob("../assets/projects/05-future-church/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);
const p6 = sortedPages(import.meta.glob("../assets/projects/06-simbiont/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>);

const works: ProjectDetail[] = [
  {
    title: "Context Break Off",
    category: "Urban Machinery",
    year: "2025",
    location: "Gwanghwamun, Seoul",
    status: "Academic Thesis — Individual",
    instructor: "Park Hee Chan",
    img: contextBreakOff,
    pages: p1,
    keywords: "ekklesia, membrane structure, inflatable vehicle, protest, ritual, urban dialogue",
    prologue:
      "In the contemporary era, we increasingly encounter a breakdown in dialogue, accompanied by a tendency toward rigid, binary modes of thinking. Individuals often regard their own positions as entirely correct, thereby perceiving differing viewpoints not as alternatives, but as fundamentally 'wrong.' Within this context of political conflict and social fragmentation, an important question arises: what role can religion play?",
    concepts: [
      {
        label: "Three Questions",
        text: "Q1. Why do cities need 'Rituals'?\nQ2. How can we minimize conflict on Sejong-daero?\nQ3. Could the Architecture intervene these phenomena?\n\nGwanghwamun Square — Seoul's only major civic plaza — is characterized by an elongated rectangular form aligned with the axis of Sejong-daero, reinforcing a unidirectional visual experience. It functions less as a site for listening and dialogue, and more as a platform for one-way expression.",
      },
      {
        label: "Ekklesia — Strategy",
        text: "The 'Ekklesia' was the Athenian assembly — a living community holding political discourse, worship, market, and festival simultaneously in the agora. This project proposes an intentional 'Context Break Off': a temporary, variable architectural intervention that disrupts the linear flow of the street and creates a center for healthy political discourse and ritual.",
      },
      {
        label: "IV-25 — Inflated Vehicle",
        text: "A wall made of large air-filled membranes goes beyond a simple boundary — acting as a flexible structure that divides space, controls light, and functions like furniture. The IV-25 machine moves through the city on wheels, deploys its air units and robot arms, and inflates to create platforms, stages, bridges, and forums. It responds to the city's events and leaves for another city when the chaos ends.\n\nCity Sequence: Chaos in the city → Inflated Vehicle appears → Rise and Expand → Connected by Robot units → Respond to city Events → Machine leaves to another city.",
      },
      {
        label: "Spatial Levels",
        text: "Sky Level — Unity Platform (화합 플랫폼): a space above the conflict where people experience something together regardless of side, religion, or gender.\nUpper Level — Protest Space (시위 공간): the existing energy of the city, preserved and acknowledged.\nGround Level — Platform Entrance (플랫폼 입구): pedestrian flow and visitor movement.",
      },
    ],
    program: [
      "IV-25 Core Unit", "IV-25 Air Unit", "IV-25 Robot Unit",
      "Air Seat Mode", "Bridge Mode", "Forum Mode",
      "Plaza Mode (~30 people)", "Square Mode (~50N people)",
      "Dome Screen", "Outdoor Stage", "Projection Mapping",
    ],
  },
  {
    title: "Floating Ground",
    category: "Middle School",
    year: "2024",
    location: "Bukak-dong, Seoul",
    status: "Academic Study — Individual",
    instructor: "Lee Seung-Tek",
    img: floatingGround,
    pages: p2,
    keywords: "floating slab, open school, hillside, public circulation, Bukak-dong, community",
    prologue:
      "School is envisioned not just as an educational facility, but as an open and lively environment where students and children can freely run, play, and explore — blurring the boundary between learning and everyday life. Generous open spaces and interconnected pathways encourage spontaneous movement, interaction, and play, allowing the school to function as a shared landscape that supports both education and the everyday rhythms of the neighborhood.",
    concepts: [
      {
        label: "Site Conditions",
        text: "Bukak-dong is a dense hillside neighborhood surrounding Bukak Middle School. Despite visible greenery from nearby mountains, residents lack accessible open spaces where they can comfortably gather. The site presents three core problems: an unusable steep slope, lack of community spaces, and cultural events — addressed through the 'Bukakjae' local festival centered on the school.",
      },
      {
        label: "Design Strategy — Mass Progress",
        text: "1. Slope Site → 2. Surrounded Plaza → 3. Float the slab → 4. Transform Slope → 5. Consider Sun path → 6. Add Servant Space.\n\nBy lifting the building mass as a floating slab, the ground level is freed entirely for a public park accessible to local residents at all times. After 17:00 on weekdays and all day on weekends, the school opens its circulation, rooftop terrace, and community areas to the neighborhood.",
      },
      {
        label: "Shared Circulation",
        text: "The building is organized across five levels: B1 (Parking, GYM, Cafeteria, Gallery), 1F (Local Park — always open), 2F (Community Area, Auditorium, Studio, Lounge, Library), 3F (Classrooms, Lab, Homebass), RF (Rooftop Terrace). The vertical section creates a layered landscape where public and educational programs are interwoven rather than separated.",
      },
    ],
    program: [
      "Local Park (1F — always open)", "Cafeteria", "GYM", "Gallery",
      "Auditorium", "Studio", "Lounge", "Library",
      "Music Classroom", "Laboratory", "Classroom (×multiple)",
      "Rooftop Terrace", "Parking Lot",
    ],
  },
  {
    title: "Museum is Moving",
    category: "Museum Renovation",
    year: "2024",
    location: "Haehwa-dong, Seoul",
    status: "Academic Study — Individual",
    img: museumMoving,
    pages: p3,
    keywords: "larchiveum, movable wall, flexible museum, Marronnier Park, archive, cinematic",
    prologue:
      "Due to the nature of Marronnier Park — a large gathering of people drawn to architecture — it is difficult for the general public to understand intangible culture in the form of records such as drawings or texts. The architectural museum should not be limited to archives or model exhibitions, but should be a spatial experience in architecture itself.",
    concepts: [
      {
        label: "Larchiveum — Library + Archive + Museum",
        text: "The solution is a flexible Larchiveum: a hybrid space that fuses Library, Archive, and Museum into a single adaptive system. Six types of movable wall units — each embedded as architectural objects — reconfigure the interior across four distinct modes. The wall itself is the architecture; moving it is the experience.",
      },
      {
        label: "Six Wall Unit Types",
        text: "Entrance · Stage · Wall · Storage · Wall · Stair (structural layer)\nWall · Terrace · Partition · Movie Wall · Shelf · Partition (adaptive layer)\n\nEach unit can be repositioned to transform the entire spatial layout of the museum — from an intimate cinema to a fully open library or festival ground.",
      },
      {
        label: "Four Modes",
        text: "Cinema Mode (GL +2400): walls close around a projection surface — intimate and dark, like watching 'Dong-ju' at night.\nOpen Library Mode: archive shelves unfold outward; the entire building becomes readable.\nFestival Mode: busking stage deploys at the opposite side of the entrance; open market spills onto the plaza.\nOutdoor Reverse Mode: interior programs — terrace, stairs, storage — flip outside; the boundary dissolves.",
      },
    ],
    program: [
      "B1 Floor — Archive / Storage",
      "1F — Entrance / Exhibition",
      "2F — Cinema / Larchiveum",
      "3F — Open Library / Archive",
      "4F — Terrace / Collaboration",
      "Outdoor — Busking Stage / Open Market",
    ],
  },
  {
    title: "Art Path House",
    category: "Artists' Housing",
    year: "2024",
    location: "Jeongreong-dong, Seoul",
    status: "Academic Study — Team",
    instructor: "Seongbeom Mo",
    img: artPathHouse,
    pages: p4,
    keywords: "collective living, artist community, path, Jeongreong-dong, interdisciplinary, circulation",
    prologue:
      "Welcome to the Artist House. An interdisciplinary living environment that fosters both collaboration and autonomy, cultivating creative exchange within a collective residential framework. 100 rooms across three module types — for individual residents, work-life hybrid residents, and collaborative work-life residents.",
    concepts: [
      {
        label: "Artist Area Since 1600s",
        text: "Since the Joseon Dynasty, literary figures and artists settled at the foothills of Bukhansan in Jeongneung-dong. Following Korea's liberation, the area became a clustered village attracting even more artists. Kim Hwanki, Yun Isang, Park Yeon Hee, and dozens of others shaped this neighborhood across the 20th century — their workshops and ateliers still scattered throughout the area.",
      },
      {
        label: "The Path as Primary Space",
        text: "The path is not a corridor — it is the main social space. It encourages spontaneous encounters and shared processes, where everyday living becomes a catalyst for artistic exploration. Individuality and community coexist here, continuously shaping and enriching one another.\n\nMass Progress: Follow the context → Control height for sun → Open the mass → Make the path → Put the Experience Space → Extra Path.",
      },
      {
        label: "Three Room Types",
        text: "Type 1 — Life Room: private residence, individual creative work.\nType 2 — Work-Life Room: combined living and studio space, semi-public edge.\nType 3 — Full Work-Life Room: dedicated studio with access to the path, selling talent directly to visiting residents and guests on weekends.",
      },
    ],
    program: [
      "100 Individual Rooms (3 types)",
      "Pop-up Stores (1F)",
      "Talent Selling Space (3F stairs)",
      "Artist Performance Terrace (2F)",
      "Shared Studio Corridor",
      "Public Path (main circulation)",
    ],
  },
  {
    title: "Future Church",
    category: "Religious Park",
    year: "2023",
    location: "Virtual site — where the church used to be",
    status: "Contest — Bronze Prize (Team)",
    instructor: "Team Project",
    img: futureChurch,
    pages: p5,
    keywords: "gabion, adaptive reuse, open sanctuary, memory, community, Bronze Prize",
    prologue:
      "A long-standing church inevitably forms deep ties with its surrounding community. For some, it is a place of worship; for others, a place of support and shared experiences — accumulating layers of memories over time. While the church has long contributed to the community as a religious facility, its sudden disappearance — despite challenges like aging and declining attendance — would be deeply felt.",
    concepts: [
      {
        label: "Small Church Crisis",
        text: "The distribution of small churches in Korea is rapidly declining. When a church disappears, the community it held also breaks. This project begins from that rupture — proposing not demolition but transformation: reusing the spatial and material qualities of the original church through gabion walls filled with the reclaimed stones and rubble of the structure itself.",
      },
      {
        label: "Gabion — Material Memory",
        text: "Gabion walls become the conceptual and material core of the project. The walls of the old church are dismantled, and their stones are packed into wire mesh gabion baskets — preserving the materiality, texture, and memory of the original building while forming new spatial boundaries for the open park.\n\nProcess: Small local church forms community → Church is removed, community breaks → Materials reused through gabions → Wall is the new church, including memories.",
      },
      {
        label: "Open Sanctuary",
        text: "Nine spatial conditions are created within the gabion landscape:\n1. Follow the gabion wall  2. Surrounded by wall  3. Private space for each  4. Continuous accessibility  5. View through gabion gap  6. Opened sanctorum  7. Corten steel statue  8. Space for community  9. Space for worship\n\nThis project respects the existing church and its relationships, reimagining it as an open park that continues to serve the community — a new form of open sanctuary that preserves the essence of the original place.",
      },
    ],
    program: [
      "Open Sanctuary (worship / rest)",
      "Oratory — Prayer Space",
      "Community Gathering Space",
      "Corten Steel Memorial Statue",
      "Gabion Wall Landscape",
      "Accessible Park Circulation",
    ],
  },
  {
    title: "Simbiont : Live Life",
    category: "Pavilion",
    year: "2025",
    location: "Seoul City Hall Square",
    status: "UAUS — Excellence Prize (3rd) + Citizen Choice Prize (Team)",
    instructor: "Team Project",
    img: simbiont,
    pages: p6,
    keywords: "symbiosis, bromeliad, micro-ecosystem, water cycle, pavilion, Seoul Square",
    prologue:
      "How does nature coexist? How can humans coexist with nature? In this era, humans tend to see nature only as a 'resource.' However, the pavilion Simbiont models an ecological operation — proposing a space of symbiosis by imitating nature's cyclical systems.",
    concepts: [
      {
        label: "Bromeliad System",
        text: "The Bromeliad forms a micro-ecosystem in the water held between its leaves — sheltering insects, frogs, and microorganisms within a self-contained cycle. The pavilion spatializes this system, translating the bromeliad's four ecological functions into architectural components:\n\nA — Leaf Water Collection\nB — Leaf Water Storage\nC — Microalgae cultivation\nD — Outer Leaf Shading",
      },
      {
        label: "Structural System",
        text: "The pavilion consists of a recycled wood roof, polycarbonate cylinder walls (3D printed connections), a water tank system with oxygen injection, and a light control panel. Seating is detailed in recycled wood; structure connections use T-clamps. The 1:1 built pavilion was installed in Seoul City Hall Square.",
      },
      {
        label: "From Observer to Participant",
        text: "Visitors shift from observers to participants, from consumers to resource providers — inhabiting a cycle of coexistence between human and nature. The pavilion does not display ecology; it enacts it. Microalgae produces oxygen; the water tank recycles rainfall; the shading leaves respond to sun angle. The visitor becomes part of the system.",
      },
    ],
    program: [
      "Roof — Recycled Wood",
      "Cylinder Wall — Polycarbonate / 3D Printed",
      "Water Tank + Oxygen Injection",
      "Microalgae Cultivation Unit",
      "Light Control Panel",
      "Seat — Recycled Wood",
      "Leaf Water Collection System",
    ],
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

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

      {/* Hero */}
      <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 bg-black text-white overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
        />
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "4rem 4rem" }}
        />
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
                  className={`group relative ${colSpan} ${colStart} flex flex-col gap-6 cursor-pointer`}
                  onClick={() => setSelectedProject(work)}
                  data-testid={`project-card-${idx}`}
                >
                  <div className={`overflow-hidden bg-muted w-full ${
                    idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}>
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
                      <h3 className="font-serif text-2xl md:text-3xl group-hover:italic transition-all duration-500">{work.title}</h3>
                      <span className="font-sans text-xs text-muted-foreground">{work.year}</span>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                      <span className="font-sans text-xs uppercase tracking-wider">{work.category}</span>
                      <span className="font-sans text-[10px] text-muted-foreground">{work.location}</span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm">
                      {work.prologue.slice(0, 120)}…
                    </p>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                      {work.keywords}
                    </p>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30 mt-2 group-hover:text-foreground/60 transition-colors">
                      View Project →
                    </span>
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
            <a href="mailto:sehyun20@icloud.com" data-testid="link-email">sehyun20@icloud.com</a>
          </div>

          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-sans">
            <a
              href="https://www.instagram.com/se_hyun20/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-400 transition-colors"
              data-testid="link-instagram"
            >
              Instagram
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors" data-testid="link-pdf">
              PDF Portfolio
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
