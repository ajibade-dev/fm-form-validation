/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tomato: "#ff6257",
        "dark-slate-grey": "#242742",
        "charcoal-grey": "#36384e",
        grey: "#9294a0"
      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

