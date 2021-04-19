module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        boxShadow: {
          DEFAULT: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        logo: ['Righteous', 'cursive'],
        delta: ['Dela Gothic One', 'cursive']
      },
      colors: {
         primary: "#ff5043",
         secondary: "#fff",
         white: "#fff",
         black: "#2d2d2d",
         dark: "#010001",
         grey: "#eaeaea",
         accent: "#acacac",
         darkAccent: "#080808"
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }