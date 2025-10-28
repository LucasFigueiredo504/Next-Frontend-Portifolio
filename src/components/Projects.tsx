"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { projectList } from "../lib/lists";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  content?: string;
  technologies?: string[];
  githubUrl?: string;
  link?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(
    new Array(projectList.length).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const handleVideoLoaded = (index: number) => {
    setVideosLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

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

  // ✅ FIXED: works on both mobile and desktop
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
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeProjectIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeProjectIndex]);

  useEffect(() => {
    checkIsDesktop();

    videoRefs.current.forEach((video, index) => {
      if (video && video.readyState >= 3) {
        handleVideoLoaded(index);
      }
    });

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

    updateActiveProject();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      checkIsDesktop();
      updateActiveProject();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("resize", updateActiveProject);
    };
  }, [updateActiveProject, checkIsDesktop]);

  const activeProject = projectList[activeProjectIndex];

  return (
    <section className="relative w-full py-24 md:py-32" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 gap-24">
          {/* Sticky description for large screens */}
          <div className="hidden lg:block lg:sticky lg:top-20 lg:h-fit">
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
                <div className="bg-white/5 border border-white/10 h-96 w-full flex justify-center items-center rounded-lg p-4 relative overflow-hidden">
                  {/* Aurora Effect - only show on active project */}
                  {i === activeProjectIndex && (
                    <div className="absolute inset-0 z-0">
                      <div className="absolute -top-10 left-1/2 w-[100vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
                      <div className="absolute -top-10 left-1/2 w-[80vw] h-[100vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-10s]" />
                    </div>
                  )}

                  <div className="relative z-10 w-full border border-slate-600 h-60 rounded-lg overflow-hidden bg-white/10 transition-all duration-300 hover:bg-white/15">
                    {project.videoUrl ? (
                      <>
                        {!videosLoaded[i] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse" />
                        )}
                        <video
                          ref={(el) => {
                            videoRefs.current[i] = el;
                          }}
                          muted
                          loop
                          playsInline
                          onCanPlay={() => handleVideoLoaded(i)}
                          className={`w-full h-full object-cover transition-opacity duration-300 ${
                            videosLoaded[i] ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </>
                    ) : project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
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
