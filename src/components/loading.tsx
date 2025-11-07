"use client";
import { useState, useEffect } from "react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

function TextType({
  text,
  typingSpeed = 50,
  pauseDuration = 1000,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= text.length) {
      return;
    }

    const currentLine = text[currentLineIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentLine.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && currentIndex === currentLine.length) {
      setIsPaused(true);
    } else if (isDeleting && currentIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentLine.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setCurrentLineIndex(currentLineIndex + 1);
    }
  }, [
    currentIndex,
    currentLineIndex,
    isDeleting,
    isPaused,
    text,
    typingSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
}

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

    const fadeTimer = setTimeout(() => {
      setFadeHello(true);
    }, 1300);

    const helloTimer = setTimeout(() => {
      setShowHello(false);
    }, 1500);

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
            width: "calc(5% + 1px)",
            marginLeft: i === 0 ? "0" : "-1px",
            willChange: "transform",
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "ease-out",
          }}
        ></div>
      );
    });
  };

  return (
    <div className="fixed pointer-events-none inset-0 flex flex-col justify-between h-screen w-screen z-50">
      {showHello && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 text-xl uppercase transition-opacity duration-500 ${
            fadeHello ? "opacity-0" : "opacity-100"
          }`}
        >
          <TextType
            text={["hello!"]}
            typingSpeed={25}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>
      )}

      <div className="flex flex-1">{renderStrips(0, "origin-top")}</div>
      <div className="flex flex-1">{renderStrips(20, "origin-bottom")}</div>
    </div>
  );
}
