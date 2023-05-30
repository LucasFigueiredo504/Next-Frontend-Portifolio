import Image from "next/image";
import LaptopImage from "../assets/laptop.png";

export function About() {
  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-secondary via-secondary to-terciary "
      id="about"
    >
      <h1 className="text-center mb-28 text-4xl font-bold text-primary">
        Sobre mim
      </h1>
      <div className="flex sm:container sm:mx-auto">
        {/*Left*/}
        <div className="flex items-center w-1/2">
          <Image
            src={LaptopImage}
            alt={"laptop"}
            className="w-[450px] h-auto"
          />
        </div>
        {/*Right*/}
        <div className="w-1/2">
          <p className="text-lg">
            Meu nome é Lucas e eu sou apaixonado por tecnologia. Iniciei minha
            jornada na programação em 2018, desenvolvendo jogos em C# na
            plataforma Unity, em 2021 comecei a me interessar pelo
            Desenvolvimento Web e foi a partir desse ponto que passei a me
            aprofundar na área, criando projetos, realizando cursos e estudando
            por conta própria.
            <br />
            <br />
            Atualmente disponho de conhecimento de tecnologias voltadas para o
            Front-end, assim como domino habilidades em design utilizando o
            Photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}
