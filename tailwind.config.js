/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fpheader4: ["merriweather", "serif"],
      libre: ["libre-franklin", "sans-serif"],
      space: ["owners-wide", "sans-serif"],
      roboto: ["obvia-expanded", "sans-serif"],
    },
  },
  plugins: [],
};
