import { motion } from "framer-motion";
import { CheckCircle, Calendar, Briefcase, Award, Download } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  { icon: Calendar, label: "Years Experience", value: "4+" },
  { icon: Briefcase, label: "Projects Completed", value: "20+" },
  { icon: Award, label: "ISTQB Certified", value: "Yes" },
];

const qualities = [
  "Strong analytical and problem-solving skills",
  "Experience with Agile/Scrum methodologies",
  "Excellent attention to detail",
  "Passionate about delivering quality software",
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
                    src="/portfolio/profile.svg"
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
                I'm an <span className="text-foreground font-medium">ISTQB-certified QA Engineer</span> with
                4+ years of hands-on experience in manual, automation, and performance testing, plus 1 year
                in web development. Proficient in modern testing tools including Playwright, JMeter, and Postman,
                with additional Java Spring Boot skills.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Proven track record of implementing efficient testing processes, mentoring team members,
                and delivering high-quality software solutions. I believe that quality is not just about
                finding bugs—it's about preventing them through smart test design and continuous collaboration
                with development teams.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 py-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
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

              {/* Download Resume Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
                  asChild
                >
                  <a href="/portfolio/saud_Alshamsi_cv.pdf" download="Saud_Alshamsi_CV.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
