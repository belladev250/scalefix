/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        ataero: ['Ataero', 'sans-serif'],

      },

      colors:{
        violet:'#634FED',
        frame:' #0A081E'
      }
    },
  },
  plugins: [],
}

