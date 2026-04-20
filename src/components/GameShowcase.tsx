"use client";
import { easeOut, motion } from "motion/react";
import { Gamepad2, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function GameShowcase() {
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, easeOut },
    },
  };

  return (
    <section className="relative w-full max-w-6xl py-16 md:py-24" id="game">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight text-primary"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            My Latest Game
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center p-6 md:p-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
        >
          {/* Subtle aurora bg */}
          <div className="absolute inset-0 -z-0 pointer-events-none">
            <div className="absolute -top-10 left-1/4 w-[60vw] h-[60vh] rounded-full bg-accent/10 blur-3xl animate-aurora" />
          </div>

          {/* App icon */}
          <div className="relative z-10 shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
            <Image
              width={200}
              height={200}
              src="/game-logo.webp"
              alt="Racing Team: Grand Prix icon"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 flex flex-col gap-4 text-center md:text-left flex-1">
            <div>
              {/* "Latest" badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20 mb-3">
                <Sparkles size={11} />
                Latest game
              </span>
              <h3
                className="text-2xl md:text-3xl font-medium text-primary tracking-tight"
                style={{ fontFamily: "var(--font-catamaran)" }}
              >
                Racing Team: Grand Prix
              </h3>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              A mobile racing game I built from the ground up. Manage your team,
              collect new cars, buy the best pilots, and compete for the
              championship.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["Unity", "C#", "Game Design", "Mobile"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 shrink-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.LFSGames.RacingTeamGrandPrix&hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/40 text-accent text-sm font-medium hover:bg-accent/10 hover:border-accent/70 transition-all duration-200"
            >
              View on Play Store
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
