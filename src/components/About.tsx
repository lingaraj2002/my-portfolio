"use client";
import {
  useInView,
  // motion
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      const totalMiliseconds = 1500;
      const incrementTime = Math.floor(totalMiliseconds / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-neutral-950/30 border-y border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
              01. ABOUT ME
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
              Building Digital Experiences Through Code & Creativity
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-neutral-400 text-base leading-relaxed">
            <p>
              I’m Lingaraj, a Full Stack Developer and Game Developer passionate
              about building modern web applications, interactive games, and
              engaging digital experiences. I enjoy transforming ideas into
              scalable products through clean code, thoughtful design, and
              performance-focused development.
            </p>
            <p>
              My expertise includes React, Next.js, TypeScript, Node.js, game
              development with Phaser, and UI/UX design. I continuously explore
              new technologies and creative workflows to build products that are
              both functional and visually appealing.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-neutral-900">
              <div>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white">
                  <Counter value={2} />+
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white">
                  <Counter value={5} />+
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 mt-2">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white">
                  <Counter value={10} />+
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 mt-2">
                  Technologies Used
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
