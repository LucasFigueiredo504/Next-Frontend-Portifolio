import { projectList } from "../../lib/lists";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section className="w-full py-24 md:py-32 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4">
          {projectList.map((project, i) => (
            <ProjectCard
              coverImage={project.image}
              link={project.link}
              title={project.title}
              technology={project.technology}
              content={project.content}
              key={i}
            />
          ))}
        </div>

        {/* GitHub CTA Button */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/lucastheldl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-background bg-accent rounded-full py-3 px-8 
                       transition-transform transform hover:scale-105 hover:bg-accent/90 focus:outline-none 
                       focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            View All on GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
