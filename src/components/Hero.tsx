"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowUpRight,
//   Github,
//   Linkedin,
//   Twitter,
//   Terminal,
// } from "lucide-react";

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "Game Developer",
  "UI/UX Designer",
  "Pixel Artist",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-neutral-800 px-3 py-1 bg-neutral-950/50 rounded-full max-w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400">
              Available for Enterprise Contracts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            LINGARAJ <br />
            <span className="text-neutral-500">DIGITAL ARCHITECT</span>
          </motion.h1>

          <div className="h-16 flex items-center mt-4 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIdx]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-lg md:text-2xl text-neutral-400 flex items-center gap-3"
              >
                {/* <Terminal size={20} className="text-white" /> */}
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-400 max-w-xl text-sm md:text-base mb-10 leading-relaxed font-sans"
          >
            Building high-end interactive systems, performance-optimized
            responsive applications, and pixel-perfect modular visual
            interfaces. Engineered with architectural precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group h-12 px-6 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-none flex items-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              View Projects
              {/* <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              /> */}
            </a>
            <a
              href="#contact"
              className="h-12 px-6 border border-neutral-800 bg-transparent text-white text-xs font-semibold uppercase tracking-widest rounded-none flex items-center hover:bg-neutral-950 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Accent Column */}
        <div className="hidden lg:col-span-4 lg:flex flex-col gap-6 justify-end items-end h-full font-mono text-right">
          <div>
            <span className="block text-xs uppercase text-neutral-500 tracking-wider">
              Based In
            </span>
            <span className="text-sm text-white">Global Remote</span>
          </div>
          <div>
            <span className="block text-xs uppercase text-neutral-500 tracking-wider">
              Design Standard
            </span>
            <span className="text-sm text-white">Strict Monochrome</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 border border-neutral-900 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors"
            >
              {/* <Github size={18} /> */}
            </a>
            <a
              href="#"
              className="p-2 border border-neutral-900 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors"
            >
              {/* <Linkedin size={18} /> */}
            </a>
            <a
              href="#"
              className="p-2 border border-neutral-900 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors"
            >
              {/* <Twitter size={18} /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
