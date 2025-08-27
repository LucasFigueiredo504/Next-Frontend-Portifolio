import Image from "next/image";
import picture from "../assets/picture.webp";
import { Github, Linkedin } from "lucide-react";
import pattern from "../assets/pattens.jpg";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-background text-primary">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 -z-1">
        <div className="absolute -top-10 left-1/2 w-[100vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
        <div className="absolute -top-10 left-1/2 w-[80vw] h-[100vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-15s]" />
      </div>
      {/* <Image
        src={pattern}
        className="absolute top-10 right-10 mix-blend-lighten"
        width={600}
        height={1000}
        alt=""
      /> */}

      <div className="container mx-auto max-w-6xl z-10 flex flex-col-reverse md:flex-row gap-12 py-20 px-4">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-1 text-center md:text-left md:items-start">
          <h1 className="text-5xl md:text-3xl font-light tracking-tight text-accent">
            Lucas Emanoel
          </h1>
          <p className="text-2xl md:text-7xl font-medium ">
            Frontend Developer
          </p>
          <p className="max-w-xl text-lg text-slate-300 mt-2">
            I build elegant and responsive web applications, turning complex
            problems into beautiful, intuitive digital experiences.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/lucas-emanoel-388733234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/lucastheldl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        {/* Right: Image and CTA */}
        {/* <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
          <div className="overflow-hidden rounded-full border-accent/50 border-2">
            <Image
              src={picture || "/placeholder.svg"}
              alt="Lucas Emanoel"
              className="w-64 h-64 md:w-80 md:h-80  object-cover "
            />
          </div>
          <a
            href="/files/curriculo.pdf"
            download
            className="text-lg font-semibold text-background bg-accent rounded-full py-3 px-10 transition-transform transform hover:scale-105 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Download CV
          </a>
        </div> */}
      </div>
    </section>
  );
}
