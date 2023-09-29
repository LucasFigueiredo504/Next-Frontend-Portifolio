import { AlignJustify } from "lucide-react";

export function BurguerMenu() {
  function handleCloseBurguerMenu() {
    const burguerMenu = document.querySelector("#burguerMenu");

    burguerMenu?.classList.replace("right-0", "-right-40");
    burguerMenu?.classList.replace("opacity-100", "opacity-0");
  }
  return (
    <div
      className="-right-40 opacity-0 mx-auto absolute top-0 p-6 h-screen z-20 bg-secondary transition-all"
      id="burguerMenu"
    >
      <ul className="mt-[9px] flex flex-col gap-5 items-center justify-between text-lg">
        <li className="cursor-pointer ml-auto hover:text-primary transition-colors">
          <button
            className=" text-primary transition-colors"
            onClick={handleCloseBurguerMenu}
          >
            <AlignJustify width={42} />
          </button>
        </li>
        <li className=" cursor-pointer hover:text-primary transition-colors">
          <a href="#about">Sobre mim</a>
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors">
          <a href="#projects">Projetos</a>
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors">
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}
