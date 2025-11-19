"use client";
import { useState, useEffect } from "react";
import { easeOut, motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    // Set initial values
    const now = new Date();
    setCurrentYear(now.getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants for subtle appear effect
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, easeOut },
    },
  };

  return (
    <footer className="relative w-full border-t border-white/10 mt-12 md:mt-20 max-w-6xl">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8 md:pb-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Menu Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="space-y-4"
          >
            <h3 className="text-base sm:text-lg font-medium text-primary mb-4 md:mb-6">
              Menu
            </h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-slate-400 hover:text-accent transition-colors text-sm sm:text-base"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-400 hover:text-accent transition-colors text-sm sm:text-base"
              >
                Projects
              </a>
              <a
                href="#works"
                className="text-slate-400 hover:text-accent transition-colors text-sm sm:text-base"
              >
                About
              </a>
              <a
                href="#about"
                className="text-slate-400 hover:text-accent transition-colors text-sm sm:text-base"
              >
                Experiences
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-accent transition-colors text-sm sm:text-base"
              >
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="space-y-4"
          >
            <h3 className="text-base sm:text-lg font-medium text-primary mb-4 md:mb-6">
              Connect
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group text-sm sm:text-base"
              >
                <Linkedin size={18} />
                <span className="group-hover:underline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/LucasFigueiredo504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group text-sm sm:text-base"
              >
                <Github size={18} />
                <span className="group-hover:underline">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="space-y-4"
          >
            <h3 className="text-base sm:text-lg font-medium text-primary mb-4 md:mb-6">
              Get in Touch
            </h3>
            <a
              href="mailto:lucasfigueiredo.emanoel@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group text-sm sm:text-base"
            >
              <Mail size={18} />
              <span className="group-hover:underline">
                lucasfigueiredo.emanoel@gmail.com
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="flex flex-col gap-4"
        >
          <div className="flex justify-between items-center">
            <div className="text-slate-400 text-xs sm:text-sm">
              © {currentYear} Lucas Emanoel. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 text-slate-400 hover:text-accent transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
