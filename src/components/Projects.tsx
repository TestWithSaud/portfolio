import { motion } from "framer-motion";
import { ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Test Automation Initiative",
    description: "Shift regression testing from manual to automated to reduce testing cycles and improve efficiency.",
    technologies: ["Playwright", "TypeScript"],
    impact: [
      "Reduced regression testing time significantly",
      "Automated manual test cases for faster release cycles",
      "Improved overall testing efficiency and coverage",
    ],
    category: "Web Automation",
  },
  {
    title: "Performance Testing",
    description: "Identify performance bottlenecks and ensure application can handle expected user load.",
    technologies: ["JMeter"],
    impact: [
      "Identified critical performance bottlenecks",
      "Improved page load time",
      "Ensured application stability under expected user load",
    ],
    category: "Performance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world testing projects that delivered measurable impact on software quality and team productivity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
                <GitBranch className="w-5 h-5 text-muted-foreground" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Key Results
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary hover:bg-primary/10 p-0"
              >
                View Details
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
