import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = {
  degree: "Bachelor of Information Technology, Software Testing",
  university: "Swinburne University of Technology in Australia",
  year: "2019",
};

const certifications = [
  {
    title: "ISTQB\u00AE Certified Tester Foundation Level (CTFL)",
    year: "2024",
  },
];

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
    title: "Agile Certified Practitioner (PMI-ACP)\u00AE",
    provider: "Meirc Training & Consulting",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Education & Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Degree */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 md:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {education.university}
                </p>
                <span className="text-sm text-primary font-medium">
                  {education.year}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">&bull;</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.title}</p>
                    {cert.year && (
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Courses</h3>
            </div>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">&bull;</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{course.title}</p>
                    <span className="text-xs text-muted-foreground">
                      {course.provider}
                      {course.year && ` | ${course.year}`}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
