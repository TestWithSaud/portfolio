import { motion } from "framer-motion";
import { CheckCircle, Calendar, Briefcase, Award, Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  { icon: Calendar, label: "Years Experience", value: "5+" },
  { icon: CheckCircle, label: "Available for Hire", value: "Yes" },
  { icon: Award, label: "ISTQB Certified", value: "Yes" },
];

const qualities = [
  "Developer background: reads source code to pinpoint root causes, not just symptoms",
  "Builds and maintains Playwright automation suites in TypeScript end-to-end",
  "Reduced production incidents by 90% through structured root cause analysis",
  "Bridges QA and development — communicates defects in language devs act on",
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
                  <img
                    src="/portfolio/saud.jpg"
                    alt="Saud Alshamsi - QA Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border-2 border-primary/30 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Senior QA Specialist with 5+ years in manual, automation, and performance testing across large-scale web platforms.
                ISTQB® Certified with hands-on experience in Playwright, JMeter, and Postman. Former software developer — which means
                I understand the code I'm testing, communicate effectively with dev teams, and catch critical issues before they reach
                production. Building toward SDET.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass-panel text-center p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Qualities */}
              <div className="space-y-3">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{quality}</span>
                  </div>
                ))}
              </div>

              {/* Download Resume Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-6"
              >
                <a
                  href="/portfolio/saudResume.pdf"
                  download="saudResume.pdf"
                  className="block group"
                >
                  <div className="glass-panel p-5 rounded-2xl flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/40 relative overflow-hidden">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <div className="flex items-center gap-4 z-10 w-full min-w-0">
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate">saudResume.pdf</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">PDF Document</span>
                          <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-primary/80 whitespace-nowrap">104.6 KB</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center w-full xl:w-auto justify-end gap-3 z-10">
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground group-hover:bg-primary/90 glow-primary font-semibold flex-shrink-0 pointer-events-none"
                      >
                        <Download className="mr-2 h-4 w-4 flex-shrink-0" />
                        Download
                      </Button>
                    </div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
