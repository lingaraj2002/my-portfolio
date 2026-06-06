const experienceData = [
  {
    pos: "Full Stack Developer",
    dur: "2023 - Present",
    tech: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS"],
    desc: "Developing modern web applications with a focus on performance, scalability, and user experience. Building responsive interfaces, REST APIs, and full-stack solutions using modern technologies.",
  },
  {
    pos: "Game Development Journey",
    dur: "2023 - Present",
    tech: ["Phaser.js", "JavaScript", "HTML5 Canvas", "Cocos Creator"],
    desc: "Exploring browser game development, game mechanics, pixel art workflows, and interactive experiences through personal projects and continuous learning.",
  },
  {
    pos: "Master's Degree (Distance Education)",
    dur: "2024 - 2026",
    tech: ["Advanced Computing", "Software Engineering"],
    desc: "Completed postgraduate studies through distance education while continuing professional development in web and game development.",
  },
  {
    pos: "Backend Development Trainee",
    dur: "Nov 2023 - Dec 2023",
    tech: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    desc: "Completed hands-on training in backend development, focusing on API development, database management, authentication, and scalable server-side applications.",
  },
  {
    pos: "Frontend Development Trainee",
    dur: "2022 - 2023",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
    desc: "Learned modern frontend development by building responsive websites and interactive user interfaces using industry-standard technologies and best practices.",
  },
  {
    pos: "Bachelor's Degree",
    dur: "2019 - 2022",
    tech: ["Computer Science", "Programming Fundamentals"],
    desc: "Completed undergraduate studies while building a strong foundation in programming, software development, and problem-solving.",
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
            05. EXPERIENCE
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
            Professional Journey
          </h2>
        </div>

        <div className="relative border-l border-neutral-900 pl-8 space-y-12">
          {experienceData.map((item, index) => (
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
