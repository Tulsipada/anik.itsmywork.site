import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_rgba(0,217,255,0.5)]">
              <img 
                src={profilePhoto} 
                alt="Anik Mitra - QA Automation Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ANIK MITRA
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl text-foreground/90 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          QA Automation Engineer
        </motion.p>
        
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Building scalable Selenium frameworks with Java, TestNG, and Maven. 
          Specialized in automating enterprise applications and delivering high-quality outcomes.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
          >
            <a href="https://github.com/Anikdell" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/80 transition-all"
          >
            <a href="https://linkedin.com/in/anik-mitra07" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/80 transition-all"
          >
            <a href="https://anikdigitalspace.netlify.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Portfolio
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/80 transition-all"
          >
            <a href="mailto:anikmitradell@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
