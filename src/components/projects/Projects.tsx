"use client";
import { useState, useRef, useEffect } from "react";
import { projectList } from "../../lib/lists";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

// Define the project type based on your data structure
interface Project {
  title: string;
  content?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => {
          const projectIndex = projectRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          return {
            entry,
            projectIndex,
            boundingRect: entry.boundingClientRect,
          };
        })
        .filter(({ projectIndex }) => projectIndex !== -1)
        .sort((a, b) => a.boundingRect.top - b.boundingRect.top);

      if (intersectingEntries.length > 0) {
        const topProject = intersectingEntries[0];
        setActiveProject(projectList[topProject.projectIndex] as Project);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 gap-12">
          <div className="lg:sticky lg:top-10 lg:h-fit">
            <div className="mb-20">
              <h2
                className="text-4xl font-medium tracking-tight text-primary"
                style={{ fontFamily: "var(--font-catamaran)" }}
              >
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-accent mt-4 rounded-full" />
            </div>

            <div className="transition-all duration-500 ease-in-out">
              {activeProject ? (
                <div className="space-y-6 opacity-100">
                  {activeProject.content && (
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {activeProject.content}
                    </p>
                  )}

                  {activeProject.technologies &&
                    activeProject.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    )}

                  {(activeProject.githubUrl || activeProject.liveUrl) && (
                    <div className="flex gap-4">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          View Code
                          <ArrowRight size={16} />
                        </a>
                      )}
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          Live Demo
                          <ArrowRight size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="opacity-50">
                  <p className="text-lg text-gray-400">
                    Scroll through the projects to see details
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-16">
            {projectList.map((project: Project, i: number) => (
              <div
                key={i}
                ref={(el: HTMLDivElement | null) =>
                  (projectRefs.current[i] = el)
                }
                className="flex flex-col gap-2 w-full scroll-project-item"
              >
                <div className="bg-white/10 w-full h-96 rounded-lg transition-all duration-300 hover:bg-white/15" />
                <h3 className="text-xl font-thin">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA Button */}
        {/* <div className="text-center mt-20">
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
        </div> */}
      </div>
    </section>
  );
}
