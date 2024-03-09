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
        primary: "#7dbfff",
        secondary: "#004E99",
        terciary: "#051A2D",
      },
      grayscale: {
        100: "100%",
      },
      screens: {
        smartphone: "640px",
        // => @media (min-width: 640px) { ... }
      },
      keyframes: {
        cursor: {
          "50%": { borderColor: "transparent" },
        },
        typing: {
          from: { width: "0" },
        },
      },
      animation: {
        cursor: "0.4s step-end infinite alternate",
        typing: "2s steps()",
      },
    },
  },
  plugins: [],
};
