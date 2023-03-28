/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      colors: {
        primary: "#FF7A57",
        secondary: "#313131",
        tertiary: "#626262",
        offwhite: "#f3f3f3",
        cardborder: "#dddddd",
      },
      fontFamily: {
        open: ["var(--open-sans)", "sans-serif"],
        pop: ["var(--poppins)", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
