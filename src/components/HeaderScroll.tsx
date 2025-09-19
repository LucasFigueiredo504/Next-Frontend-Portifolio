"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";

// Header Component
export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNearTop, setIsNearTop] = useState(true);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    // Check if we're near the top of the page (adjust 100 to your preference)
    const nearTop = currentScrollY < 100;
    setIsNearTop(nearTop);

    if (isMenuOpen || nearTop) {
      setIsVisible(true);
      return;
    }

    if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsVisible(true);
    } else {
      // Scrolling down
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };
  //updates header pos based on scroll y
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY, isMenuOpen]);

  //needed to set the initial y scroll when page mounts
  useEffect(() => {
    controlHeader();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "About Me", href: "#about" },
    { label: "My Projects", href: "#projects" },
    { label: "Tech Stack", href: "#skilld" },
    { label: "Get in Touch", href: "#contact" },
  ];

  return (
    <>
      {/* Single Header */}
      <header
        className={`top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out mx-5 ${
          isMenuOpen
            ? "fixed pt-10 bg-secondary backdrop-blur-md rounded-b-3xl"
            : isNearTop
            ? "fixed pt-10 bg-transparent"
            : isVisible
            ? "fixed bg-secondary backdrop-blur-md rounded-b-3xl"
            : "fixed -translate-y-full bg-secondary backdrop-blur-md rounded-b-3xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={"/"} className="flex items-center space-x-2">
                {/* <Image src={Logo} alt="Logo" className="w-44" /> */}
                Lucas
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex gap-8">
              <a href="#contact">
                <button
                  className={`w-full hidden sm:block hover:cursor-pointer px-6 py-1 rounded-lg transition-all duration-200 transform bg-white text-secondary`}
                >
                  Get in touch
                </button>
              </a>
              <button
                onClick={toggleMenu}
                className="text-white hover:cursor-pointer transition-colors duration-200 py-1"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Enhanced Backdrop with Blur */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={toggleMenu}
          aria-label="Close menu"
        />

        {/* Menu Content with Improved Animations */}
        <div
          className={`absolute top-0 left-0 right-0 bg-secondary backdrop-blur-md rounded-b-3xl transform transition-all duration-300 ease-out mx-2 sm:mx-5 pt-32 pb-10 shadow-2xl border-b border-white/10 ${
            isMenuOpen
              ? "translate-y-0 scale-100"
              : "-translate-y-full scale-95"
          }`}
        >
          {/* Subtle Top Border Accent */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full opacity-60" />

          <div className="max-w-7xl mx-auto px-12 pt-20">
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className={`inline-block text-white text-2xl hover:text-[hsl(123,18%,80%)] transition-all duration-200 transform ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                      fontFamily: "var(--font-libre)",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-white/10" />
            <div className="flex space-x-12 justify-center">
              <a
                href="#"
                className="w-10 h-10  hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10  hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Facebook className="w-6 h-6 text-white group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10  hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Twitter className="w-6 h-6 text-white group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
