/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "{'./public/index.html",
  ],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        Danfo: ["Danfo", "serif"],
        Reenie: ["Reenie Beanie", "cursive"],
        kobajeon: ["kobajeon", "cursive"],
        Cinzel: ["cinzel", "serif"],
        Fuzzy: ["Fuzzy Bubbles", "serif"],
      },
    },
  },
  plugins: [],
};
