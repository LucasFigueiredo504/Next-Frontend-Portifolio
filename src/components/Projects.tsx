"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { projectList } from "../lib/lists";

import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

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

  const handleVideoLoaded = (index: number) => {
    setVideosLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const updateActiveProject = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height;

    let closestIndex = 0;
    let closestDistance = Infinity;

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const rect = ref.getBoundingClientRect();
      const projectCenter = rect.top + rect.height;
      const distance = Math.abs(containerCenter - projectCenter);

      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveProjectIndex(closestIndex);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && video.readyState >= 3) {
        handleVideoLoaded(index);
      }
    });

    // Throttled scroll handler for better performance
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

    // Initial calculation
    updateActiveProject();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveProject, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveProject);
    };
  }, [updateActiveProject]);

  const activeProject = projectList[activeProjectIndex];

  return (
    <section className="relative w-full py-24 md:py-32" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 gap-24">
          <div className="lg:sticky lg:top-20 lg:h-fit">
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
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {activeProject.content}
                    </p>
                  )}
                  {(activeProject.githubUrl || activeProject.link) && (
                    <div className="flex gap-4">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {activeProject.link && (
                        <a
                          href={activeProject.link}
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

          <div ref={containerRef} className="flex flex-col gap-16">
            {projectList.map((project: Project, i: number) => (
              <div
                key={i}
                ref={(el: HTMLDivElement | null) => {
                  projectRefs.current[i] = el;
                }}
                className={`flex flex-col gap-2 w-full scroll-project-item transition-all duration-300 ${
                  i === activeProjectIndex ? "opacity-100" : "opacity-70"
                }`}
              >
                <div className="bg-accent/20 h-96 w-full flex justify-center items-center rounded-lg p-4">
                  <div className="relative w-full border border-slate-600 h-60 rounded-lg overflow-hidden bg-white/10 transition-all duration-300 hover:bg-white/15">
                    {project.videoUrl ? (
                      <>
                        {!videosLoaded[i] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse" />
                        )}

                        <video
                          ref={(el: HTMLVideoElement | null) => {
                            videoRefs.current[i] = el;
                          }}
                          autoPlay
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
                <h3
                  className={`text-xl font-thin transition-colors duration-300 ${
                    i === activeProjectIndex ? "text-accent" : "text-gray-400"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
