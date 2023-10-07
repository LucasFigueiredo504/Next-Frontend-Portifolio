"use client";
import Image from "next/image";
import LaptopImage from "../assets/laptop.png";
import { useIsVisible } from "@/hook/useIsVisible";
import { useRef } from "react";

export function About() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-secondary via-secondary to-terciary "
      id="about"
    >
      <h2 className="text-center mb-28 text-4xl font-bold text-primary">
        Sobre mim
      </h2>
      <div className="flex flex-col gap-5 items-center xl:container mx-auto px-5 sm:flex-row">
        {/*Left*/}
        <div className="flex items-center flex-1">
          <Image
            src={LaptopImage}
            alt={"laptop"}
            className="w-[450px] h-auto mx-auto"
          />
        </div>
        {/*Right*/}
        <div
          className={`transition-opacity ease-in duration-700 ${
            isVisible1
              ? "opacity-100 flex-1 sm:mt-10"
              : "opacity-0 flex-1 sm:mt-10"
          }`}
          ref={ref1}
        >
          <p className="text-lg text-justify px-10">
            Sou apaixonado por tecnologia e pelas infinitas possibilidades que
            ela proporciona a todos nós. Iniciei minha trajetória na programação
            no ano de 2018, focado no desenvolvimento de jogos em C# na
            plataforma Unity. No entanto, em 2021, despertei um grande interesse
            pelo <strong className="text-primary">Desenvolvimento Web</strong>,
            o que me levou a aprofundar-me nessa área por meio da criação de
            projetos, realização de cursos e estudos independentes.
            <br />
            <br />
            No momento, possuo conhecimentos em tecnologias voltadas para o{" "}
            <strong className="text-primary">Front-End</strong>, assim como
            domino habilidades em design utilizando o Photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}
