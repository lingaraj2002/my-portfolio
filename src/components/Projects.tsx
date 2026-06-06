"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, FolderKanban } from "lucide-react";
import { FaGithubSquare as GithubIcon } from "react-icons/fa";

interface Project {
  title: string;
  desc: string;
  category: string;
  tech: string[];
  git: string;
  live: string;
}

const projectsData: Project[] = [
  {
    title: "Personal Portfolio",
    desc: "High-end developer application utilizing strict black and white aesthetics.",
    category: "Web Apps",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    git: "#",
    live: "#",
  },
  {
    title: "Click The Color Game",
    desc: "Interactive game engine assessing pattern identification matrix logic.",
    category: "Games",
    tech: ["JavaScript", "Phaser.js", "Web Audio API"],
    git: "#",
    live: "#",
  },
  {
    title: "Dino Runner Game",
    desc: "Infinite velocity state platformer tracking real-time layout metrics.",
    category: "Games",
    tech: ["HTML5 Canvas", "TypeScript", "State Engines"],
    git: "#",
    live: "#",
  },
  {
    title: "Flight Booking UI",
    desc: "Deep layout grid structure with real-time optimization filters.",
    category: "UI/UX",
    tech: ["Figma", "Tailwind Component Design"],
    git: "#",
    live: "#",
  },
  {
    title: "Dashboard Application",
    desc: "Highly technical analytic application plotting telemetry grids.",
    category: "Web Apps",
    tech: ["React.js", "Node.js", "Chart Frameworks"],
    git: "#",
    live: "#",
  },
];

const cats = ["All", "Web Apps", "Games", "UI/UX"];

export default function Projects() {
  const [activeCat, setActiveCat] = useState("All");
  const [modalProj, setModalProj] = useState<Project | null>(null);

  const filtered = projectsData.filter(
    (p) => activeCat === "All" || p.category === activeCat,
  );

  return (
    <section id="projects" className="py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
              04. PROJECTS
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
              Featured Work
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`h-9 px-4 font-mono text-xs uppercase tracking-wider border transition-colors ${activeCat === c ? "bg-white text-black border-white" : "bg-transparent text-neutral-400 border-neutral-800 hover:border-white"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={proj.title}
                onClick={() => setModalProj(proj)}
                className="group border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between cursor-pointer hover:border-neutral-400 transition-colors"
              >
                <div>
                  <div className="w-full h-48 bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-600 transition-colors">
                    <FolderKanban
                      size={32}
                      className="text-neutral-600 group-hover:text-neutral-400 transition-colors"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-tight group-hover:text-neutral-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-neutral-900">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-neutral-400 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal Layer */}
      <AnimatePresence>
        {modalProj && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-950 border border-neutral-800 w-full max-w-xl p-8 relative"
            >
              <button
                onClick={() => setModalProj(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                {modalProj.category}
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight mt-1 mb-4">
                {modalProj.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {modalProj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {modalProj.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-white uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={modalProj.git}
                  className="flex-1 h-11 border border-neutral-800 hover:border-neutral-500 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-white transition-colors"
                >
                  <GithubIcon size={14} /> View Source
                </a>
                <a
                  href={modalProj.live}
                  className="flex-1 h-11 bg-white hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-black transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
