/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#264653",
        secondary: "#E76F51"
      },
      fontFamily:{
        'french': ['IM Fell French Canon SC', "serif"]
      }
    },
  },
  plugins: [],
}

