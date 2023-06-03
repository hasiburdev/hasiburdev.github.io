/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        light: "#EFEEEE",
        dark: "#1b1b1b",
        primary: "#863e96",
        "primary-dark": "#58e6d9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin-reverse 8s linear infinite",
        "spin-skill-slow": "spin 32s linear infinite",
        "spin-skill-reverse": "spin-reverse 32s linear infinite",
      },
      backgroundImage: {
        "circular-light":
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
        "circular-dark":
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
  darkMode: "class",
};
