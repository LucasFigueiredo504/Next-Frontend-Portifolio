"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { projectList } from "../lib/lists";
import { ArrowUpRight, Github } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  content?: string;
  technologies?: string[];
  githubUrl?: string;
  link?: string;
  images: string[] | [];
}

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [api, setApi] = useState<CarouselApi>();

  const highlightTitles = (text: string): string => {
    if (!text) return text;

    let result = text;
    projectList.forEach((project) => {
      if (!project.title) return;

      const safeTitle = project.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b(${safeTitle})\\b`, "gi");
      result = result.replace(regex, `<span class="text-accent">$1</span>`);
    });

    return result;
  };

  const updateActiveProject = useCallback(() => {
    if (!containerRef.current) return;

    let topmostIndex = 0;
    let minTopDistance = Infinity;

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const rect = ref.getBoundingClientRect();
      const topDistance = Math.abs(rect.top);

      if (
        rect.top >= -rect.height &&
        rect.bottom <= window.innerHeight + rect.height
      ) {
        if (topDistance < minTopDistance) {
          minTopDistance = topDistance;
          topmostIndex = index;
        }
      }
    });

    setActiveProjectIndex(topmostIndex);
  }, []);

  const checkIsDesktop = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    if (!api) return;

    // No need to reinit, the loop option is already set in opts
    api.scrollSnapList();
  }, [api]);

  useEffect(() => {
    checkIsDesktop();

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveProject();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      checkIsDesktop();
      updateActiveProject();
    };

    updateActiveProject();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateActiveProject, checkIsDesktop]);

  const activeProject = projectList[activeProjectIndex];

  return (
    <section className="relative w-full py-24 md:py-32" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 gap-24">
          {/* Sticky description for large screens */}
          <div className="hidden lg:block lg:sticky lg:top-40 lg:h-fit">
            <div className="mb-16">
              <h2
                className="text-4xl font-medium tracking-tight text-primary"
                style={{ fontFamily: "var(--font-catamaran)" }}
              >
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-accent mt-4 rounded-full" />
            </div>

            <div className="transition-all duration-500 ease-out">
              {activeProject ? (
                <div className="space-y-6 opacity-100">
                  {activeProject.content && (
                    <p
                      className="text-lg text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: highlightTitles(activeProject.content),
                      }}
                    />
                  )}

                  {activeProject.link && (
                    <div className="flex gap-4">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        Live
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}

                  {activeProject.technologies?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
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

          {/* Project list */}
          <div ref={containerRef} className="flex flex-col gap-16">
            {projectList.map((project: Project, i: number) => (
              <div
                key={i}
                ref={(el) => {
                  projectRefs.current[i] = el;
                }}
                className={`flex flex-col gap-2 w-full scroll-project-item transition-all duration-300 ${
                  i === activeProjectIndex ? "opacity-100" : "opacity-70"
                }`}
              >
                <div className="bg-white/5 border border-white/10  w-full flex justify-center items-center rounded-lg p-4 relative overflow-hidden">
                  {/* Aurora Effect - only show on active project */}
                  {i === activeProjectIndex && (
                    <div className="absolute inset-0 z-0">
                      <div className="absolute -top-10 left-1/2 w-[100vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
                      <div className="absolute -top-10 left-1/2 w-[80vw] h-[100vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-10s]" />
                    </div>
                  )}

                  <Carousel
                    className="w-full h-full relative"
                    setApi={setApi}
                    opts={{
                      loop: true,
                      align: "center",
                    }}
                  >
                    <CarouselContent className="h-full">
                      {project.images.map((image, index) => (
                        <CarouselItem
                          key={index}
                          className="relative z-10 h-full pl-4"
                        >
                          <div className="h-full w-full border border-slate-600 rounded-lg overflow-hidden bg-white/10 transition-all duration-300 hover:bg-white/15">
                            {image ? (
                              <img
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-auto object-contain"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-white/10 flex items-center justify-center">
                                <span className="text-gray-400 text-lg">
                                  {project.title}
                                </span>
                              </div>
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Navigation buttons - only show if there are multiple images */}
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 z-30 bg-background/40 text-white border-white/20 hover:bg-black/70 hover:text-white" />
                        <CarouselNext className="right-2 z-30 bg-background/40 text-white border-white/20 hover:bg-black/70 hover:text-white" />
                      </>
                    )}
                  </Carousel>
                </div>

                {/* Mobile project info */}
                <div className="lg:hidden space-y-6 mt-6">
                  <p
                    className="text-lg text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightTitles(project.content || ""),
                    }}
                  />
                  {(project.githubUrl || project.link) && (
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          Live Demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  )}
                  {project.technologies?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
