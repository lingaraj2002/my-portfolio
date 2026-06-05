"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "TypeScript", category: "Frontend", level: 95 },
  { name: "Next.js 15", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 98 },
  { name: "HTML5/CSS3", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Express.js", category: "Backend", level: 88 },
  { name: "REST APIs", category: "Backend", level: 92 },
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "MySQL", category: "Database", level: 85 },
  { name: "Git / GitHub", category: "Tools", level: 90 },
  { name: "Figma", category: "Tools", level: 85 },
  { name: "Blender", category: "Tools", level: 70 },
  { name: "Phaser.js", category: "Game Dev", level: 90 },
  { name: "Cocos Creator", category: "Game Dev", level: 75 },
  { name: "JavaScript Games", category: "Game Dev", level: 95 },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Game Dev",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
              02. TECHNOLOGY MATRIX
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
              Technical Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`h-9 px-4 font-mono text-xs uppercase tracking-wider border transition-colors ${activeCategory === cat ? "bg-white text-black border-white" : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="p-5 border border-neutral-900 bg-neutral-950/40 relative group overflow-hidden hover:border-neutral-500 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold tracking-tight text-white">
                  {skill.name}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  {skill.category}
                </span>
              </div>
              <div className="w-full h-[2px] bg-neutral-900 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-white"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
