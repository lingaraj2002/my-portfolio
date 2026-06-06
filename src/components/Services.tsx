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
    desc: "Custom websites and web applications built with modern technologies for performance, scalability, and user experience.",
    specs: ["Next.js Development", "Responsive Design", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    desc: "Modern user interfaces built with React, TypeScript, and responsive design principles.",
    specs: ["React & Next.js", "Tailwind CSS", "Interactive Animations"],
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "Complete web solutions from frontend interfaces to backend systems and databases.",
    specs: ["Node.js APIs", "Database Integration", "Authentication Systems"],
  },
  {
    icon: Cpu,
    title: "UI/UX Design",
    desc: "User-focused interfaces designed to improve usability, engagement, and visual consistency.",
    specs: ["Wireframing", "Prototyping", "Figma Design"],
  },
  {
    icon: Terminal,
    title: "Landing Page Development",
    desc: "High-converting landing pages optimized for marketing campaigns, products, and services.",
    specs: ["SEO Ready", "Fast Loading", "Conversion Focused"],
  },
  {
    icon: ShieldCheck,
    title: "Portfolio Websites",
    desc: "Professional portfolio websites for developers, designers, freelancers, and businesses.",
    specs: ["Modern Design", "Responsive Layout", "Custom Branding"],
  },
  {
    icon: Trophy,
    title: "Browser Game Development",
    desc: "Interactive browser-based games developed with modern web technologies and optimized performance.",
    specs: ["Phaser.js", "HTML5 Games", "Mobile Support"],
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
            03. SERVICES
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
            What I Can Help You Build
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
