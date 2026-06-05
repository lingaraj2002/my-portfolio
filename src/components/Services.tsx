import {
  Layers,
  ShieldCheck,
  Cpu,
  Layout,
  Smartphone,
  Trophy,
  Terminal,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    desc: "Production grade web applications engineered from strategic layout components.",
    specs: ["Next.js SSR", "Performance Core", "Edge Rendering"],
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    desc: "Highly interactive fluid visual states with granular responsive compliance.",
    specs: [
      "Tailwind Infrastructure",
      "Framer Micro-interactions",
      "Accessible Tree",
    ],
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end deployment arrays coupling reactive UI states to scalable storage layers.",
    specs: ["Node Rest Frameworks", "Secured DB Integration", "State Sync"],
  },
  {
    icon: Cpu,
    title: "UI/UX Architecture",
    desc: "Minimalist visual identity mockups translating data logic into premium aesthetics.",
    specs: [
      "High-End Wireframes",
      "Typography Optimization",
      "Figma Ecosystem",
    ],
  },
  {
    icon: Terminal,
    title: "Landing Page Development",
    desc: "Conversion optimized structural layouts with ultra-precise responsive tuning.",
    specs: ["SEO Data Structures", "Light Weight Payload", "High CTR UX"],
  },
  {
    icon: ShieldCheck,
    title: "Portfolio Systems",
    desc: "Executive level monochrome branding sites designed for ultimate personal exposure.",
    specs: ["Stagger Transitions", "Clean Code Execution", "Fluid Scrollers"],
  },
  {
    icon: Trophy,
    title: "Browser Game Development",
    desc: "State machine architecture executing smooth standard loop games within web clients.",
    specs: [
      "Phaser Canvas Layers",
      "Optimized Asset Pipelines",
      "Mobile Touch Controls",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-neutral-950/20 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
            // 03. CAPABILITIES
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
            Premium Architecture Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, index) => {
            const IconComp = srv.icon;
            return (
              <div
                key={index}
                className="p-8 border border-neutral-900 bg-neutral-950/40 hover:border-neutral-400 group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center bg-black mb-6 text-neutral-400 group-hover:text-white group-hover:border-white transition-colors">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-3 text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <ul className="border-t border-neutral-900 pt-4 space-y-2">
                  {srv.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="font-mono text-[10px] text-neutral-500 uppercase flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-neutral-500 rounded-full" />{" "}
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
