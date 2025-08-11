"use client";
import { useState } from "react";
import Image from "next/image";
import { skillsList } from "@/lib/lists";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(skillsList.map((skill) => skill.category || "webdev")),
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsList
      : skillsList.filter(
          (skill) => (skill.category || "webdev") === selectedCategory
        );

  return (
    <section className="w-full py-24 md:py-32  text-white" id="skills">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            My Tech Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Technologies I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize
                  ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Card */}
                <div
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm 
                  hover:bg-white/10 hover:border-accent/90 hover:shadow-2xl hover:shadow-blue-500/10
                  transition-all duration-500 ease-out group-hover:scale-105
                  opacity-100 animate-fade-in-up"
                >
                  {/* Skill Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3
                    className="text-center text-sm font-semibold text-slate-200 group-hover:text-accent
                    transition-colors duration-300"
                  >
                    {skill.title}
                  </h3>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Floating Tooltip */}
                {hoveredSkill?.title === skill.title && (
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50
                    opacity-100 animate-fade-in"
                  >
                    <div
                      className="bg-slate-900 border border-blue-500/20 rounded-lg px-4 py-3 max-w-xs
                      shadow-2xl shadow-blue-500/20 backdrop-blur-md"
                    >
                      <div className="text-accent font-semibold text-sm mb-1">
                        {skill.title}
                      </div>
                      <div className="text-slate-300 text-xs leading-relaxed">
                        {skill.description}
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div
                          className="w-0 h-0 border-l-4 border-r-4 border-t-4 
                          border-transparent border-t-slate-900"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/3 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
