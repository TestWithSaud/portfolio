import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("saudalshamsi92@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main Large Card */}
            <div className="md:col-span-2 bg-card border border-border hover:border-primary/30 transition-colors duration-300 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group">
              <div className="mb-10">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  Have a testing challenge or need help building a quality assurance strategy? I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:saudalshamsi92@gmail.com"
                    className="flex-1 flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-transparent hover:border-primary/30 transition-all duration-300 group/email"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover/email:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Email Me</p>
                        <p className="font-semibold text-foreground text-sm sm:text-base break-all group-hover/email:text-primary transition-colors">
                          saudalshamsi92@gmail.com
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-4 p-3 rounded-xl bg-background border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 z-10"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </a>

                  <div className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-transparent">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Column */}
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/TestWithSaud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(163,230,53,0.1)] transition-all duration-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <Github className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">GitHub</p>
                  <p className="text-sm text-muted-foreground mt-1">Review my code</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/alshamsidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(163,230,53,0.1)] transition-all duration-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <Linkedin className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">LinkedIn</p>
                  <p className="text-sm text-muted-foreground mt-1">Grow network</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
