/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 3000s linear infinite",
      
      },
      colors: {
        black_90:"rgba(0, 0, 0, 0.9)",
        black_70:"rgba(0, 0, 0, 0.7)",
        black_50:"rgba(0, 0, 0, 0.5)",
        customWhite:"#F7F9FC",
        customGray:"#4A4A4A",
        bgBlack:"#1d1d1d",
        containerLine:"#EBEBEB",
      },
      fontFamily: {
        saans: ['"Saans TRIAL"', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
  require('tailwindcss-motion'),
  
  // ✅ Custom .paused utility
  function ({ addUtilities }) {
    addUtilities({
      '.paused': {
        'animation-play-state': 'paused',
      },
    })
  },
],

}


