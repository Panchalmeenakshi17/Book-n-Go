/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        expand:['Hedvig Letters Sans', 'sans-serif'],
        new:['Montserrat', 'sans-serif'],
        more:['Gruppo', 'sans-serif'] ,
        scnd:[ 'Comfortaa', 'sans-serif'],
        char:[ 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

