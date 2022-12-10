/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    clipPath:{
      mypolygon:'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      polygon2:'polygon(0 0%, 100% 15%, 100% 100%, 0 100%)'
    }
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
