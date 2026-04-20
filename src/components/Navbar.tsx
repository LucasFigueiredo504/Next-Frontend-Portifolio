"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
        <div
          className={`flex items-center justify-between w-full max-w-6xl px-5 py-3.5 mt-4 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-background/85 backdrop-blur-xl border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-accent font-light text-lg tracking-tight"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            L <span className="text-primary font-thin">F</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-slate-300 hover:text-accent text-sm transition-colors duration-200 group pb-0.5"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-accent/40 text-accent text-sm hover:bg-accent/10 hover:border-accent/70 transition-all duration-200"
          >
            Let's Talk
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-slate-400 rounded transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[6.5px] rotate-45 !bg-accent" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-slate-400 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-slate-400 rounded transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45 !bg-accent" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="text-slate-400 hover:text-accent text-4xl font-thin tracking-tight transition-colors duration-200"
                style={{ fontFamily: "var(--font-catamaran)" }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.06 + 0.1,
                duration: 0.3,
              }}
              className="mt-4 px-8 py-3 rounded-full border border-accent/40 text-accent text-base hover:bg-accent/10 transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
