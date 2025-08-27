import Image from "next/image";
//components
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center text-zinc-200 scroll">
      {/* <Navbar /> */}
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
