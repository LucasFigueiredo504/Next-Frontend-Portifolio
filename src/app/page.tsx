import Image from "next/image";
//components
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-slate-950 text-zinc-200">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
