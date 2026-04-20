import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Footer } from "@/components/Footer";
import Aurora from "../components/Aurora";
import { Navbar } from "@/components/Navbar";
import { GameShowcase } from "@/components/GameShowcase";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center text-zinc-200 scroll ">
      <div className="pointer-events-none absolute inset-0 -z-10 h-screen">
        <Aurora
          colorStops={["#00f7ff", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={0.5}
          speed={1}
        />
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <GameShowcase />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
