"use client";
import { AlignJustify } from "lucide-react";
import { BurguerMenu } from "./BurguerMenu";

export function Navbar() {
  function handleBurguerMenu() {
    const burguerMenu = document.querySelector("#burguerMenu");

    burguerMenu?.classList.replace("-right-40", "right-0");
    burguerMenu?.classList.replace("opacity-0", "opacity-100");
  }
  return (
    <nav className="w-full py-5 text-slate-800 fixed border-b-2 border-primary bg-secondary z-10">
      <div className="flex container mx-auto px-2 items-center justify-between">
        <a href="#" className="text-[2rem] text-primary font-bold">
          {"< / >"}
        </a>
        <ul className="sm:flex items-center hidden justify-between text-lg">
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#about">Sobre mim</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#projects">Projetos</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#skills">Habilidades</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <button
          className="sm:hidden hover:text-primary transition-colors"
          onClick={handleBurguerMenu}
        >
          <AlignJustify width={42} />
        </button>
      </div>
      <BurguerMenu />
    </nav>
  );
}
