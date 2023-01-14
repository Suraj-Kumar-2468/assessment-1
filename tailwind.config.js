/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: { 1: "#CB0736" },
        white: "#fff",
        freeSpeechRed: {
          1: "#DA0000",
        },
        whiteSmoke: {
          1: "#F3F3F3",
        },
        suvaGrey: {
          1: "#8b8b8b",
        },

        aliceBlue: {
          1: "#F7F8FA",
        },
      },
    },
  },
  plugins: [],
};
