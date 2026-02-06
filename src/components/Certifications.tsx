import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen } from "lucide-react";

const certification = {
  title: "ISTQB® Certified Tester Foundation Level (CTFL)",
  year: "2024",
};

const education = {
  degree: "Bachelor of Information Technology, Software Testing",
  institution: "Swinburne University of Technology in Australia",
  year: "2019",
};

const courses = [
  {
    title: "Introduction to Software Testing",
    provider: "University of Minnesota",
    year: "2024",
  },
  {
    title: "Full-Stack Developer Nanodegree",
    provider: "Udacity",
  },
  {
    title: "MBSC Leadership Essentials Online Program",
    provider: "MBSC",
  },
  {
    title: "Agile Certified Practitioner (PMI-ACP)®",
    provider: "Meirc Training & Consulting",
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

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Certifications & Education
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Certification */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{certification.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{certification.year}</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{education.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {education.institution} | {education.year}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Courses & Training</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="font-medium text-sm">{course.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {course.provider}
                    {course.year && ` | ${course.year}`}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
