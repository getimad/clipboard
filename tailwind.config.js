/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#323232",
        secondary: "#626262",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
