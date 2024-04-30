/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-orange": "#ED6309",
        "medium-orange": "#EA7D36",
        "light-orange": "#ED8A4A",
        "board-black": "#000000",
        "board-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
