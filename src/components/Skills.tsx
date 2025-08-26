"use client";
import { useState } from "react";
import Image from "next/image";
import { skillsList } from "@/lib/lists";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  return (
    <section className="relative w-full py-24 md:py-32 text-white" id="skills">
      <div className="absolute inset-0 -z-1">
        <div className="absolute -bottom-20 right-1/2 w-[80vw] h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
        <div className="absolute -bottom-20 right-1/2 w-[70vw] h-[80vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-15s]" />
      </div>
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl font-light tracking-tight mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative overflow-hidden rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={40}
                  height={40}
                  className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Skill Title */}
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-accent transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Skill Description */}
              <p className="text-slate-400 text-center text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {skill.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border border-accent/20 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
