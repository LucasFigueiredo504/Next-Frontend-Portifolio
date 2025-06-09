import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="w-full bg-background border-t border-white/10"
      id="contact"
    >
      <div className="container mx-auto px-6 py-16 flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Get In Touch
        </h2>
        <p className="max-w-md text-slate-400">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a
            href="mailto:LucasFigueiredo.emanoel@gmail.com"
            className="flex items-center gap-3 text-lg text-slate-300 hover:text-accent transition-colors group"
          >
            <Mail size={24} />
            <span className="group-hover:underline">
              lucasfigueiredo.emanoel@gmail.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-slate-300 hover:text-accent transition-colors group"
          >
            <Linkedin size={24} />
            <span className="group-hover:underline">LinkedIn</span>
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 w-full pt-8 text-center">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Lucas Emanoel. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
