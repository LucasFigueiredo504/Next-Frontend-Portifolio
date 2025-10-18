import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/loading";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center text-zinc-200 scroll overflow-hidden">
      {/* Aurora layers */}
      <div className="absolute z-10 -top-10 left-1/2 w-[100vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
      <div className="absolute z-10 -top-10 left-1/2 w-[80vw] h-[100vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-10s]" />
      <LoadingScreen />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
