import { ThreeBackground } from "@/components/ThreeBackground";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
          <p>© 2025 Anik Mitra. Built with React, Three.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
