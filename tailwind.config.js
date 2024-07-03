/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A4FFF",
        secondary: "#C3BEF7",
        transparent: "transparent",
        white: "white",
        ...colors, // Включаем стандартные цвета Tailwind
      },
      animation: {
        "skeleton-loading": "skeleton-loading 1.5s infinite",
      },
      keyframes: {
        "skeleton-loading": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
