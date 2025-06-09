"use client";
import { useState } from "react";
import Image from "next/image";
import { skillsList } from "@/lib/lists"; // Assuming this is your updated list

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);

  return (
    <section
      className="w-full py-24 md:py-32 bg-background text-primary"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left: Skill Icons */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {skillsList.map((skill) => (
              <button
                key={skill.title}
                onClick={() => setSelectedSkill(skill)}
                className={`p-4 rounded-lg transition-all duration-300 ease-in-out
                  ${
                    selectedSkill.title === skill.title
                      ? "bg-accent/20 scale-110"
                      : "grayscale hover:grayscale-0 hover:bg-white/10"
                  }`}
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </button>
            ))}
          </div>

          {/* Right: Skill Description */}
          <div className="relative w-full max-w-md h-48 lg:h-56 flex items-center justify-center">
            {/* We use a key to force re-render with animation on state change */}
            <div
              key={selectedSkill.title}
              className="text-center lg:text-left animate-slide-up"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">
                {selectedSkill.title}
              </h3>
              <p className="text-lg text-slate-300">
                {selectedSkill.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
