const timelineData = [
  {
    pos: "Senior Frontend Engineer",
    dur: "2025 - Present",
    tech: ["Next.js 15", "TypeScript", "Tailwind Layering"],
    desc: "Architecting visual UI performance vectors and streaming asset dynamic layout integrations.",
  },
  {
    pos: "Full Stack Developer",
    dur: "2024 - 2025",
    tech: ["Node.js", "Express.js", "NoSQL Clusters"],
    desc: "Engineered secure modular data transfer endpoints linking custom frontend rendering models.",
  },
  {
    pos: "Independent Game Architect",
    dur: "2023 - 2024",
    tech: ["Phaser Canvas", "State Management Engine"],
    desc: "Assembled physics matrices and layout rendering components for remote digital game clients.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-neutral-950/20 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
            // 05. TRACK RECORD
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
            Career Engine Timeline
          </h2>
        </div>

        <div className="relative border-l border-neutral-900 pl-8 space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-black border-2 border-neutral-800 group-hover:border-white transition-colors rounded-full" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  {item.pos}
                </h3>
                <span className="font-mono text-xs text-neutral-500 bg-neutral-950 px-3 py-1 border border-neutral-900">
                  {item.dur}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 max-w-2xl">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] uppercase bg-neutral-950 border border-neutral-900 px-2 py-0.5 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
