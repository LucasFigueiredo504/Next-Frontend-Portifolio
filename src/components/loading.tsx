"use client";
import { useState, useEffect } from "react";
import TextType from "./TextType";

export function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHello, setShowHello] = useState(true);
  const [fadeHello, setFadeHello] = useState(false);
  const [randomValues, setRandomValues] = useState<number[]>([]);

  useEffect(() => {
    const values = Array.from(
      { length: 40 },
      () => (Math.random() - 0.2) * 100
    );
    setRandomValues(values);

    // Start fading hello text after 1.3 seconds
    const fadeTimer = setTimeout(() => {
      setFadeHello(true);
    }, 1300);

    // Hide hello text after fade completes
    const helloTimer = setTimeout(() => {
      setShowHello(false);
    }, 1500);

    // Start strips animation after hello text disappears (add small delay)
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(helloTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const renderStrips = (startIndex: number, originClass: string) => {
    return Array.from({ length: 20 }).map((_, i) => {
      const distanceFromCenter = Math.abs(i - 9.5);
      const delay = distanceFromCenter * 80;

      const centerFactor = 5 - distanceFromCenter / 10;
      const randomVariation =
        (randomValues[startIndex + i] || 0) * (0.5 + centerFactor * 1.5);

      const duration = 600 + randomVariation;

      return (
        <div
          key={i}
          className={`h-full bg-background transition-transform ${originClass} ${
            isAnimating ? "scale-y-0 scale-x-100" : "scale-y-100 scale-x-100"
          }`}
          style={{
            width: "5%",
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
            animation: "ease-out",
          }}
        ></div>
      );
    });
  };

  return (
    <div className="fixed pointer-events-none inset-0 flex flex-col justify-between h-screen w-screen z-50">
      {/* Hello text overlay */}
      {showHello && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 text-xl uppercase transition-opacity duration-500 ${
            fadeHello ? "opacity-0" : "opacity-100"
          }`}
        >
          <TextType
            text={["hello"]}
            typingSpeed={25}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>
      )}

      <div className="flex flex-1">{renderStrips(0, "origin-top ")}</div>
      <div className="flex flex-1">{renderStrips(20, "origin-bottom ")}</div>
    </div>
  );
}
