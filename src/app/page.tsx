import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      {/* Background Layer */}
      <BackgroundGrid />

      {/* Structural Headers */}
      <Navbar />

      {/* Architectural Engine Assembly Layout */}
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />

      {/* Core Termination Base */}
      <Footer />
    </main>
  );
}
