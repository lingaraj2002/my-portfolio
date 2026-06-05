"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Lingaraj deployed our web platform infrastructure flawlessly. Visual speeds metrics hit peak optimal rates inside our production tracking bounds.",
    author: "Enterprise Project Controller",
    role: "SaaS Systems",
  },
  {
    quote:
      "Exceptional mastery over minimal typography hierarchies and black & white UI configurations. An elite frontend engineer.",
    author: "Lead Product Designer",
    role: "Interface Core",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 border-t border-neutral-900 bg-black overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-6">
          SYSTEM VERIFICATIONS
        </span>

        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="font-display text-lg md:text-2xl font-medium italic text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                {`"${testimonials[active].quote}"`}
              </p>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {testimonials[active].author}
                </h4>
                <p className="font-mono text-[10px] text-neutral-500 uppercase mt-0.5">
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-1.5 h-1.5 transition-all ${i === active ? "w-6 bg-white" : "bg-neutral-800"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
