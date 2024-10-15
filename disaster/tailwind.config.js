/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      backgroundColor: {
        "dark-gray": "#E4E4E7",
        orange: "#F26922"
      },
      colors: {
        accent: "#71717A",
        "normal-accent": "#A1A1AA"
      },
      fontSize: {
        twelve: "12px"
      }
    },
  },
  plugins: [],
}