/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  // darkMode: false,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
  plugins: [require("daisyui")],
}
