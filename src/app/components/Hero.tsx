export function Hero() {
  return (
    <section className="w-full py-56 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary">
      <div className="flex max-w-7xl mx-auto">
        {/*Left*/}
        <div className="flex items-center w-1/2">
          <h2 className="text-4xl font-bold text-primary">
            Olá,
            <br /> me chamo
            <br /> Lucas Emanoel{"</>"}
          </h2>
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
