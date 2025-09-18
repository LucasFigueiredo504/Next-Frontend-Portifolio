"use client";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomValues, setRandomValues] = useState<number[]>([]);

  useEffect(() => {
    const values = Array.from(
      { length: 40 },
      () => (Math.random() - 0.2) * 100
    );
    setRandomValues(values);

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
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
          className={`h-full bg-background transition-transform ${originClass} border-1 border-white/20 ${
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
      <div className="flex flex-1">
        {renderStrips(0, "origin-top border-b")}
      </div>
      <div className="flex flex-1">
        {renderStrips(20, "origin-bottom border-t")}
      </div>
    </div>
  );
}
