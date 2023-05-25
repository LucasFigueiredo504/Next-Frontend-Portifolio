export function Skills() {
  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary"
      id="skills"
    >
      <h1 className="text-center mb-28 text-5xl font-bold text-primary">
        Habilidades
      </h1>
      <div className="flex gap-7 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-5 items-center w-1/2 bg-secondary p-5 rounded-xl">
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
          <div className="w-32 h-32 bg-terciary rounded-md border border-zinc-900 transition-colors hover:border-primary"></div>
        </div>
        {/**right */}
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus
          modi impedit error officia culpa ab labore dignissimos eius soluta
          iusto fugit, debitis, eligendi esse voluptatibus, perspiciatis
          inventore. Provident, at!
        </div>
      </div>
    </section>
  );
}
