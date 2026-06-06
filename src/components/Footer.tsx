"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-900 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-black tracking-tighter text-sm uppercase text-white">
            LINGARAJ
          </span>
          <p className="font-mono text-[10px] text-neutral-600 uppercase mt-1">
            © 2026 Lingaraj. Built with passion and creativity. All rights
            reserved.
          </p>
        </div>

        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 border border-neutral-900 hover:border-neutral-500 flex items-center justify-center text-neutral-500 hover:text-white transition-colors"
          title="Back to top"
        >
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
