"use client";
import Image from "next/image";
import LaptopImage from "../assets/laptop.png";
import { useIsVisible } from "@/hook/useIsVisible";
import { useRef } from "react";
import picture from "../assets/picture.webp";

export function About() {
  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-6xl py-24 md:py-32 bg-background text-primary"
      id="about"
    >
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-16">
          <h2 className="text-4xl font-light tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-accent mt-4 rounded-full" />
        </div>

        <div className="flex flex-col gap-24">
          <div
            className={`grid grid-cols-2 items-center justify-center gap-8 transition-all ease-out duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={picture || "/placeholder.svg"}
                    alt="Lucas Emanoel"
                    className="w-96 h-64 md:w-96 md:h-80  object-cover "
                  />
                </div>
                {/* <a
                  href="/files/curriculo.pdf"
                  download
                  className="text-lg font-semibold text-background bg-accent rounded-full py-3 px-10 transition-transform transform hover:scale-105 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                >
                  Download CV
                </a> */}
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="max-w-2xl text-lg text-slate-300 text-left space-y-4 leading-8">
              <p>
                My journey into technology began in 2018, driven by a passion
                for the infinite possibilities it unlocks. I started with C#
                game development in Unity, but my curiosity led me to the
                dynamic world of{" "}
                <strong className="text-accent font-semibold">
                  Web Development
                </strong>{" "}
                in 2021.
              </p>
              <p>
                Since then, I've been honing my skills through dedicated
                projects, continuous learning, and independent study. My
                expertise is centered on modern{" "}
                <strong className="text-accent font-semibold">
                  Frontend Technologies
                </strong>
                , where I focus on creating seamless and engaging user
                experiences. I also bring a keen eye for design, frequently
                using tools like Photoshop to bridge the gap between vision and
                reality.
              </p>
            </div>
          </div>{" "}
          <div
            className={`grid grid-cols-2 items-center justify-center gap-8 transition-all ease-out duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Right: Text Content */}
            <div className="max-w-2xl text-lg text-slate-300 text-left space-y-4 leading-8">
              <p>
                My journey into technology began in 2018, driven by a passion
                for the infinite possibilities it unlocks. I started with C#
                game development in Unity, but my curiosity led me to the
                dynamic world of{" "}
                <strong className="text-accent font-semibold">
                  Web Development
                </strong>{" "}
                in 2021.
              </p>
              <p>
                Since then, I've been honing my skills through dedicated
                projects, continuous learning, and independent study. My
                expertise is centered on modern{" "}
                <strong className="text-accent font-semibold">
                  Frontend Technologies
                </strong>
                , where I focus on creating seamless and engaging user
                experiences. I also bring a keen eye for design, frequently
                using tools like Photoshop to bridge the gap between vision and
                reality.
              </p>
            </div>

            {/* Left: Image */}
            <div className="flex-shrink-0">
              <Image
                src={LaptopImage}
                alt="Laptop with code"
                className="w-[350px] lg:w-[450px] h-auto mx-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
