import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Code2, TestTube2, Database, GitBranch, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "HTML", "CSS"],
    color: "from-primary to-primary-glow"
  },
  {
    title: "Testing Tools",
    icon: TestTube2,
    skills: ["Selenium WebDriver", "TestNG", "JUnit"],
    color: "from-accent to-primary"
  },
  {
    title: "Build & Reporting",
    icon: Wrench,
    skills: ["Maven", "ExtentReports"],
    color: "from-primary-glow to-accent"
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "from-primary to-accent"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL"],
    color: "from-accent to-primary-glow"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Communication", "Analytical Thinking", "Teamwork"],
    color: "from-primary-glow to-primary"
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border p-6 h-full hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground/90 border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-6 inline-block">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">Other:</span> POM, Manual Testing, Agile, Bug Reporting
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
