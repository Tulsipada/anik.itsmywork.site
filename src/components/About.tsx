import { motion } from "framer-motion";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Summary
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 shadow-[0_0_30px_rgba(0,217,255,0.1)]">
            <p className="text-lg text-foreground/90 leading-relaxed">
              QA Automation Engineer with experience building scalable Selenium frameworks using 
              <span className="text-primary font-semibold"> Java, TestNG, and Maven</span>. 
              During my internship at <span className="text-primary font-semibold">Cognizant</span>, 
              I automated regression tests for enterprise web applications, reducing manual testing time by 
              <span className="text-accent font-semibold"> 30%</span>. 
              Proficient in test design, execution, and reporting using ExtentReports, with a proven ability 
              to deliver high-quality outcomes in Agile teams.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
