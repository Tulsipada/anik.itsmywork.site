import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website Automation",
    date: "Jun 23, 2025",
    description: "Built an automation suite using Selenium, Java, and TestNG to validate user login, product search, filter options, and cart functionality. Integrated ExtentReports for HTML report generation and configured screenshot capture for failures. Applied Page Object Model (POM) for scalability.",
    link: "https://github.com/Anikdell",
    gradient: "from-primary to-primary-glow"
  },
  {
    title: "Timesheet Automation",
    date: "Sep 6, 2023",
    description: "Automated timesheet processing with features like login validation, date filtering, and timesheet submission. Used Maven for build management and property files for test configuration.",
    link: "https://github.com/Anikdell",
    gradient: "from-accent to-primary"
  },
  {
    title: "JustDial Website Automation",
    date: "Jun 12, 2023",
    description: "Automated discovery of car wash services and gym facility listings using Selenium and Java. Extracted sub-menu items and structured them with corresponding names for reporting.",
    link: "https://github.com/Anikdell",
    gradient: "from-primary-glow to-accent"
  },
  {
    title: "Alert Handling Automation",
    date: "Apr 3, 2023",
    description: "Automated handling of JavaScript alerts, confirmation boxes, and popups using Selenium's Alert interface and Actions class.",
    link: "https://github.com/Anikdell",
    gradient: "from-primary to-accent"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6 h-full hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="bg-secondary hover:bg-secondary/80 transition-all group/btn"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      View on GitHub
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
