import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Tamkeen Technology",
    position: "Senior Quality Assurance and Testing",
    period: "Dec 2021 - Present",
    location: "Riyadh, Saudi Arabia",
    description: "Lead QA initiatives for enterprise applications, implementing automation frameworks and mentoring team members.",
    achievements: [
      "Developed automated test scripts using Playwright, reducing regression testing time",
      "Performed cross-browser testing across Chrome, Firefox, Safari, and Edge",
      "Mentored 2 junior testers, accelerating their productivity by 40%",
      "Implemented shift-left testing practices with Product and Dev teams",
      "Reduced production incidents by 90% through root cause analysis",
      "Led performance testing initiative using JMeter"
    ],
    technologies: ["Playwright", "JMeter", "Postman", "TypeScript", "Agile"]
  },
  {
    company: "Tamkeen Technology",
    position: "Laravel Developer",
    period: "Sep 2020 - Nov 2021",
    location: "Riyadh, Saudi Arabia",
    description: "Full-stack development building front-end components and back-end APIs.",
    achievements: [
      "Developed front-end components using HTML, CSS, JavaScript with React/Vue.js",
      "Built back-end logic and APIs using Laravel/PHP",
      "Designed and implemented database models and operations",
      "Performed unit testing to ensure code quality"
    ],
    technologies: ["Laravel", "PHP", "React", "Vue.js", "JavaScript", "MySQL"]
  },
  {
    company: "Lam Firm",
    position: "Developer",
    period: "Jan 2020 - Mar 2020",
    location: "Saudi Arabia",
    description: "Front-end development creating user interfaces and components.",
    achievements: [
      "Developed and maintained front-end components and user interfaces",
      "Built responsive layouts using HTML, CSS, and JavaScript"
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    company: "Al Arabi Heavy Equipment Company",
    position: "Help Desk",
    period: "Feb 2013 - Aug 2015",
    location: "Saudi Arabia",
    description: "IT support providing technical assistance and troubleshooting.",
    achievements: [
      "Provided technical support and troubleshooting",
      "Managed IT help desk operations"
    ],
    technologies: ["IT Support", "Troubleshooting"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From IT support to senior QA engineer, my journey has been driven by a passion for quality and continuous improvement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border" style={{ top: '2rem', bottom: '2rem' }} />

          {/* Timeline line - mobile */}
          <div className="md:hidden absolute left-4 w-0.5 bg-border" style={{ top: '2rem', bottom: '2rem' }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative pb-8 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot - desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Timeline dot - mobile */}
              <div className="md:hidden absolute left-4 transform -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Card */}
              <div
                className={`ml-10 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 hover:glow-primary transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        <span className="text-primary mr-2">&bull;</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
