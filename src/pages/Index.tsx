import { ThreeBackground } from "@/components/ThreeBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="py-8 text-center text-muted-foreground border-t border-border/50" id="site-footer">
      <div className="space-y-2">
        <p>© 2025 Anik Mitra. Built with React, Three.js & Tailwind CSS</p>
        <p className="text-sm">
          Created by Anik and <a href="https://tulsipada.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tulsipada</a>
        </p>
      </div>
    </footer>
  );
};

const Index = () => {
  useEffect(() => {
    const checkFooter = setInterval(() => {
      const footer = document.getElementById('site-footer');
      if (!footer) {
        console.error('Footer removed - site protected');
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;"><h1>Site Protection Active</h1><p>Please do not remove the footer.</p></div>';
      }
    }, 1000);
    
    return () => clearInterval(checkFooter);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
