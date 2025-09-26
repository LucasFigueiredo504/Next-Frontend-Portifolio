"use client";
import Image from "next/image";
import LaptopImage from "../assets/laptop.png";
import { motion } from "motion/react";
import picture from "../assets/picture.webp";

export function About() {
  // Animation variants for subtle appear effect
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full max-w-6xl py-16 md:py-24 lg:py-32 bg-background text-primary"
      id="about"
    >
      <div className="container mx-auto px-4">
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

        <div className="flex flex-col gap-16 md:gap-24">
          {/* First Section: Image + Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 md:gap-8"
          >
            {/* Image */}
            <div className="flex-shrink-0 order-1 md:order-none">
              <div className="flex flex-col gap-6 mt-6 md:mt-0">
                <div className="mx-auto">
                  <Image
                    src={picture || "/placeholder.svg"}
                    alt="Lucas Emanoel"
                    className="w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-2xl object-cover"
                    width={360}
                    height={360}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="max-w-2xl text-base sm:text-lg text-slate-300 text-left space-y-4 leading-7 sm:leading-8 order-2 md:order-none">
              <p>
                My journey into technology began in 2018, driven by a passion
                for the infinite possibilities it unlocks. I started with C#
                game development in Unity, but my curiosity led me to{" "}
                <strong className="text-accent font-semibold">
                  Web Development
                </strong>{" "}
                in 2021.
              </p>
              <p>
                Since then, I've been honing my skills through dedicated
                projects and continuous learning. My expertise centers on modern{" "}
                <strong className="text-accent font-semibold">
                  Frontend Technologies
                </strong>
                , creating seamless user experiences. I also bring a keen eye
                for design, using tools like Photoshop to bridge vision and
                reality.
              </p>
            </div>
          </motion.div>

          {/* Second Section: Text + Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 md:gap-8"
          >
            {/* Text Content */}
            <div className="max-w-2xl text-base sm:text-lg text-slate-300 text-left space-y-4 leading-7 sm:leading-8 order-2 md:order-none">
              <p>
                Driven by the desire to create and learn new things, I became a{" "}
                <strong className="text-accent font-semibold">
                  Game Developer
                </strong>{" "}
                to create the worlds I wanted to visit, then transitioned to{" "}
                <strong className="text-accent font-semibold">
                  Web Development
                </strong>{" "}
                to reach even higher and expand my horizons. My name is{" "}
                <strong className="text-accent font-semibold">Lucas</strong> and
                I look forward to working with a passionate team!
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 order-1 md:order-none">
              <Image
                src={LaptopImage}
                alt="Laptop with code"
                className="w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] mx-auto rounded-2xl object-cover drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
