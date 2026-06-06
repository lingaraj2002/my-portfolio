"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  // Frontend
  { name: "HTML5", category: "Frontend", level: 96 },
  { name: "XML", category: "Frontend", level: 85 },
  { name: "JSON", category: "Frontend", level: 95 },
  { name: "CSS3", category: "Frontend", level: 95 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "React.js", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "Redux", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 80 },
  { name: "Bootstrap", category: "Frontend", level: 90 },
  { name: "Sass", category: "Frontend", level: 88 },

  // Backend
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express.js", category: "Backend", level: 88 },
  { name: "REST APIs", category: "Backend", level: 92 },
  { name: "Python", category: "Backend", level: 80 },
  { name: "FastAPI", category: "Backend", level: 75 },
  { name: "Firebase", category: "Backend", level: 80 },

  // Database
  { name: "MySQL", category: "Database", level: 85 },
  { name: "MongoDB", category: "Database", level: 80 },

  // Game Development
  { name: "JavaScript Games", category: "Game Dev", level: 95 },
  { name: "Phaser.js", category: "Game Dev", level: 85 },
  { name: "HTML Canvas", category: "Game Dev", level: 85 },
  { name: "Three.js", category: "Game Dev", level: 80 },
  { name: "Cocos Creator", category: "Game Dev", level: 75 },
  { name: "Unity", category: "Game Dev", level: 70 },
  { name: "Unity Ads", category: "Game Dev", level: 75 },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 90 },
  { name: "VS Code", category: "Tools", level: 95 },
  { name: "Postman", category: "Tools", level: 90 },
  { name: "Figma", category: "Tools", level: 85 },
  { name: "Cloudinary", category: "Tools", level: 85 },
  { name: "Vercel", category: "Tools", level: 90 },
  { name: "Render", category: "Tools", level: 80 },
  { name: "Railway", category: "Tools", level: 75 },
  { name: "Aseprite", category: "Tools", level: 80 },
  { name: "Blender", category: "Tools", level: 70 },
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
              02. SKILLS & TOOLS
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
              Technologies I Work With
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
