import { motion } from "framer-motion";
import {
  MousePointerClick,
  Globe,
  Plug,
  Gauge,
  Bug
} from "lucide-react";

const skills = [
  {
    icon: MousePointerClick,
    title: "Manual Testing",
    description: "Exploratory testing, test case design, regression testing, and comprehensive bug reporting",
    tools: ["Jira", "Cross-Browser Testing"],
  },
  {
    icon: Globe,
    title: "Web Automation",
    description: "End-to-end browser testing with modern automation frameworks and page object patterns",
    tools: ["Playwright", "TypeScript"],
  },
  {
    icon: Plug,
    title: "API Testing",
    description: "RESTful API validation and automated API test suites",
    tools: ["Postman"],
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description: "Load testing, stress testing, and performance bottleneck identification",
    tools: ["JMeter"],
  },
  {
    icon: Bug,
    title: "Web Development",
    description: "Full-stack development with modern frameworks and back-end APIs",
    tools: ["Laravel", "PHP", "React", "Vue.js", "Java Spring Boot"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Testing Skills & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive testing expertise across the software development lifecycle, 
            from manual exploration to fully automated test pipelines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
