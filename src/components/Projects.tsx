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
      "Performed cross-browser testing across Chrome, Firefox, Safari, and Edge",
      "Mentored 2 junior testers, accelerating their productivity by 40%",
    ],
    category: "Web Automation",
    type: "Professional",
  },
  {
    title: "Performance Testing",
    description: "Identify performance bottlenecks and ensure application can handle expected user load.",
    technologies: ["JMeter"],
    impact: [
      "Identified critical bottlenecks that improved page load time",
      "Reduced similar production incidents by 90% through root cause analysis",
      "Implemented shift-left testing practices with Product and Dev teams",
    ],
    category: "Performance",
    type: "Professional",
  },
  {
    title: "Sauce Demo - Playwright Automation",
    description: "Personal project demonstrating Playwright test automation skills by automating end-to-end tests for the Sauce Demo e-commerce application.",
    technologies: ["Playwright", "TypeScript", "Node.js"],
    impact: [
      "Implemented Page Object Model design pattern for maintainable test code",
      "Cross-browser testing across Chromium, Firefox, and WebKit",
      "Covered login, inventory, cart, and checkout flows with data-driven tests",
    ],
    category: "Web Automation",
    type: "Personal",
    link: "https://github.com/TestWithSaud/sauceLab",
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    project.type === "Professional"
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}>
                    {project.type}
                  </span>
                </div>
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

              {project.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
