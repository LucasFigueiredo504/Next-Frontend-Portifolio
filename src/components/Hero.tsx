import { Github, Linkedin } from "lucide-react";
import TextType from "./TextType";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-background text-primary">
      {/* Additional fade mask for edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 100%, #0d1117 90%)",
          mixBlendMode: "multiply",
        }}
      />

      <div className="container mx-auto max-w-6xl z-10 flex flex-col-reverse md:flex-row gap-12 py-20 px-6 md:px-4">
        {/* Text Content */}
        <div className="flex flex-col gap-2 md:gap-1 text-center md:text-left items-center md:items-start">
          {/* Name and Social Links */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-8 mb-2 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-accent">
              Lucas Emanoel
            </h1>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/lucas-emanoel-388733234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/LucasFigueiredo504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Typing Animation Title */}
          <TextType
            text={["Web & Game Developer"]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            initialDelay={1500}
            className="text-5xl md:text-7xl font-thin tracking-tight leading-tight"
          />

          {/* Description */}
          <p className="max-w-xl text-base sm:text-lg text-slate-300 px-4 md:px-0 leading-relaxed">
            I build elegant and responsive web applications, turning complex
            problems into beautiful, intuitive digital experiences.
          </p>

          {/* CTA Button */}
          <div className="mt-8 md:mt-6">
            <a
              href="/files/curriculo.pdf"
              download
              className="inline-block text-base sm:text-lg font-semibold text-background bg-accent rounded-full py-3 px-8 sm:px-10 transition-all duration-300 transform hover:scale-105 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
