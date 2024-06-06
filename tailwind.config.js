/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        spinIn: {
          to: { transform: "rotate(18deg)" },
        },
        // spinOut: {
        //   to: { transform: "rotate(360deg)" },
        // },
      },
      // animation: {
      //   spinIn: "spinIn 30s linear infinite",
      //   spinout: "spinIn 10s linear infinite",
      // },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#22C55E",
        custom: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
