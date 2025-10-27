import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anikmitradell@gmail.com",
    href: "mailto:anikmitradell@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7001592584",
    href: "tel:+917001592584"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mushidabad, WB, 742226",
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/anik-mitra07",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Anikdell",
    gradient: "from-accent to-primary"
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    href: "https://anikdigitalspace.netlify.app/",
    gradient: "from-primary-glow to-accent"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                    </div>
                  );

                  return contact.href ? (
                    <a key={index} href={contact.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Button
                        asChild
                        variant="secondary"
                        className="w-full justify-start bg-secondary hover:bg-secondary/80 transition-all group"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${link.gradient} mr-3`}>
                            <Icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <span className="flex-1 text-left">{link.label}</span>
                          <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border/50">
                <p className="text-sm text-muted-foreground">
                  Open to relocation and remote opportunities. Passionate about learning new tools and improving automation efficiency.
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
