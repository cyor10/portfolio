/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      },
      colors: {
        black: "#000",
        deepSkyBlue: "#30C5FF",
        gunmetal: "#2A2D34",
        turquoise: "#2DD4BF",
        ivory: "#F5FBEF",
        white: "#FFFFFF",
      }
    }
  },
  plugins: [],
}

