/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "black-text": "#22262A",
      },
      screens: {
        sm: "480px",
      },
      keyframes: {
        "fade-right": {
          "0%": {
            transform: "translateX(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "fade-bottom": {
          "0%": {
            transform: "translatey(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-right": "fade-right 1s ease-in",
        "fade-left": "fade-left 1s ease-in",
        "fade-bottom": "fade-bottom 1s ease-in",
      },
    },
  },
  plugins: [],
};
