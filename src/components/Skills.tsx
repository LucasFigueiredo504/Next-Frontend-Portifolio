"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { skillsList, Skill } from "@/lib/lists";

export function Skills() {
  // Group skills by category
  const groupedSkills = skillsList.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Animation variants for subtle appear effect
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-24 lg:py-32 text-white"
      id="skills"
    >
      <div className="absolute inset-0 -z-1">
        <div className="absolute -bottom-10 right-1/2 w-[80vw] sm:w-[70vw] h-[80vh] sm:h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-aurora" />
        <div className="absolute -bottom-10 right-1/2 w-[60vw] sm:w-[50vw] h-[70vh] sm:h-[80vh] -translate-x-1/3 -translate-y-2/3 rounded-full bg-secondary/20 blur-3xl animate-aurora [animation-delay:-15s]" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            Tech Stack
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent rounded-full" />
        </motion.div>

        {/* Three-Column Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
        >
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={appearVariants}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <h3
                className="text-xl sm:text-2xl font-semibold text-accent mb-4 sm:mb-6 text-left"
                style={{ fontFamily: "var(--font-catamaran)" }}
              >
                {category}
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={appearVariants}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-2xl text-white">
                      <skill.icon />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base sm:text-lg font-medium text-white">
                        {skill.title}
                      </h4>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xs">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
