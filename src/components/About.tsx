"use client";
import Image from "next/image";
import { easeOut, motion } from "motion/react";
import gamesImage from "../assets/games.jpg";
import picture from "../assets/picture.webp";

export function About() {
  // Animation variants for subtle appear effect
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        easeOut,
      },
    }),
  };

  return (
    <section
      className="w-full max-w-6xl pb-8 pt-16 md:pt-24 lg:pt-32 bg-background text-primary lg:-mb-12"
      id="about"
    >
      <div className="container px-6">
        {/* Header with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            Who am I
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Text Content on Left */}
          <div className="text-base sm:text-lg text-slate-300 space-y-6 leading-relaxed order-2 lg:order-1 -mt-28 md:-mt-16 lg:mt-0">
            <p>
              My journey into technology began in 2018 with{" "}
              <strong className="text-accent font-semibold">
                Game Development
              </strong>{" "}
              in Unity, but my curiosity led me to{" "}
              <strong className="text-accent font-semibold">
                Web Development
              </strong>{" "}
              in 2021.
            </p>
            <p>
              Since then, I've been honing my skills in modern{" "}
              <strong className="text-accent font-semibold">
                Frontend Technologies
              </strong>
              , creating seamless user experiences with a keen eye for design.
            </p>
            <p>
              My name is{" "}
              <strong className="text-accent font-semibold">Lucas</strong>, and
              I look forward to working with a passionate team to create amazing
              digital experiences!
            </p>
          </div>

          {/* Images with Diagonal Split Layout */}
          <div className="relative w-full h-96 sm:h-[28rem] max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
            {/* Top Right - Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={imageVariants}
              className="absolute top-0 sm:top-4 lg:-top-4 right-0 w-[62%] sm:w-[60%] lg:w-[62%] h-[60%] sm:h-[62%] lg:h-[60%] z-10"
            >
              <Image
                src={picture || "/placeholder.svg"}
                alt="Lucas Emanoel"
                className="w-full h-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                width={450}
                height={380}
              />
            </motion.div>
            {/* Top Left - Game Dev */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={imageVariants}
              className="absolute top-8 sm:top-24 lg:-top-16 left-0 w-[59%] sm:w-[58%] lg:w-[59%] h-[59%] sm:h-[60%] lg:h-[59%] z-10"
            >
              <Image
                src={gamesImage}
                alt="Game Development"
                className="w-full h-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                width={380}
                height={280}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
