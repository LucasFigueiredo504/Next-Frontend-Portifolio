import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-background text-primary ">
      {/* Aurora Background Effect with Dot Mask */}
      {/* <div
        className="absolute inset-0 -z-1"
        style={{
          maskImage: `radial-gradient(circle, black 3.5px, transparent 5px)`,
          maskSize: "10px 10px",
          WebkitMaskImage: `radial-gradient(circle, black 3.5px, transparent 5px)`,
          WebkitMaskSize: "10px 10px",
          background: "transparent",
        }}
      > */}
      {/* Aurora layers */}
      <div className="absolute -top-10 left-1/2 w-[100vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
      <div className="absolute -top-10 left-1/2 w-[80vw] h-[100vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-15s]" />

      {/* Additional fade mask for edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 100%, #0d1117 90%)",
          mixBlendMode: "multiply",
        }}
      />
      {/* </div> */}

      <div className="container mx-auto max-w-6xl z-10 flex flex-col-reverse md:flex-row gap-12 py-20 px-4">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-1 text-center md:text-left md:items-start">
          <h1 className="text-xl md:text-3xl font-light tracking-tight text-accent">
            Lucas Emanoel
          </h1>
          <p
            className="text-5xl md:text-7xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            Web & Game Developer
          </p>
          <p className="max-w-xl text-lg text-slate-300 mt-2">
            I build elegant and responsive web applications, turning complex
            problems into beautiful, intuitive digital experiences.
          </p>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
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
