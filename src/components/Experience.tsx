import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 shadow-[0_0_30px_rgba(0,217,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Certified Skill Development Internship
                </h3>
                <p className="text-xl text-primary font-semibold mb-2">
                  Cognizant, Bangalore
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Feb 28, 2023 - Nov 9, 2023</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-foreground/90">
                  Developed automated test cases using <span className="text-primary font-semibold">Java and Selenium WebDriver</span> for enterprise applications.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-foreground/90">
                  Built a modular <span className="text-primary font-semibold">TestNG framework with Maven</span> and integrated ExtentReports for detailed reporting.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-foreground/90">
                  Reduced manual testing time by <span className="text-accent font-semibold">30%</span> through regression suite automation.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-foreground/90">
                  Completed <span className="text-primary font-semibold">3 projects</span>, focusing on login flow, UI alerts, and workflow validations.
                </p>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
