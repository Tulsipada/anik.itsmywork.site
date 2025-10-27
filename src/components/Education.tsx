import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Kalyani Government Engineering College, MAKAUT",
    period: "2019-2022",
    score: "CGPA: 9.0",
    gradient: "from-primary to-primary-glow"
  },
  {
    degree: "Diploma in Computer Software Technology",
    institution: "Sheikhpara Abdur Rahman Memorial Polytechnic, WBSCTE",
    period: "2016-2019",
    score: "OGPA: 7.5",
    gradient: "from-accent to-primary"
  }
];

export const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6 h-full hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-bl-full`} />
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${edu.gradient}`}>
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-foreground/80 mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
