"use client";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/10 mt-20 max-w-6xl">
      <div className="relative container mx-auto px-6 pt-16 pb-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary mb-6">Menu</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-slate-400 hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-400 hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a
                href="#works"
                className="text-slate-400 hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#about"
                className="text-slate-400 hover:text-accent transition-colors"
              >
                Experiences
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-accent transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary mb-6">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/lucas-emanoel-388733234/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group"
              >
                <Linkedin size={20} />
                <span className="group-hover:underline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/lucastheldl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group"
              >
                <Github size={20} />
                <span className="group-hover:underline">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary mb-6">
              Get in Touch
            </h3>
            <a
              href="mailto:lucasfigueiredo.emanoel@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group"
            >
              <Mail size={20} />
              <span className="group-hover:underline">
                lucasfigueiredo.emanoel@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Lucas Emanoel. All rights reserved.
          </div>

          <div className="text-slate-400 text-sm">
            <span className="uppercase tracking-wide">Local Time</span>
            <div className="text-accent font-mono">
              {new Date().toLocaleTimeString("en-US", {
                hour12: false,
                timeZoneName: "short",
              })}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 text-slate-400 hover:text-accent transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
