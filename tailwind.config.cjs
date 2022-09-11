/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      colors: {
        beigeBG: "#f5eed0",
        mainDark: "#000",
        emeraldGreen: "#177369",
      },
    },
  },
  plugins: [],
};
