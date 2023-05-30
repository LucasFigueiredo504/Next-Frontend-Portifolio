import { ArrowUpLeft } from "lucide-react";
import { projectList } from "../../lib/lists";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-secondary via-secondary to-terciary"
      id="projects"
    >
      <h1 className="text-center mb-28 text-5xl font-bold text-primary">
        Projetos
      </h1>
      <div className="sm:container sm:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {projectList.map((project, i) => {
            return (
              <ProjectCard
                coverImage={project.image}
                link={project.link}
                title={project.title}
                content={project.content}
                key={i}
              />
            );
          })}
        </div>
        <a
          href="https://github.com/lucastheldl"
          target="blank"
          className="flex justify-center"
        >
          <p className="flex items-center gap-1 mt-20 text-2xl font-bold text-zinc-200 cursor-pointer transition-colors hover:text-primary">
            <ArrowUpLeft size={30} /> Repositórios Github
          </p>
        </a>
      </div>
    </section>
  );
}
