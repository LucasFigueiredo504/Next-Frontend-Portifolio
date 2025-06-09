/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        terciary: "#051A2D",
        background: "#0D1117", // Deep charcoal
        primary: "#e2e8f0", // Soft white for text
        accent: "#22d3ee", // Vibrant cyan
        secondary: "#8b5cf6", // Muted purple
      },
      grayscale: {
        100: "100%",
      },
      screens: {
        smartphone: "640px",
        // => @media (min-width: 640px) { ... }
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translateX(0%) translateY(0%)" },
          "25%": { transform: "translateX(20%) translateY(-15%)" },
          "50%": { transform: "translateX(0%) translateY(-30%)" },
          "75%": { transform: "translateX(-20%) translateY(-15%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        cursor: "0.4s step-end infinite alternate",
        typing: "2s steps()",
        aurora: "aurora 60s linear infinite",
        "slide-up": "slide-up 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
