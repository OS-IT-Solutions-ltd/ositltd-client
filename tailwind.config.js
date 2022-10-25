/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1270px",
    },
    container: {
      center: true,
      screens: {
        desktop: "1140px",
      }
    },
    extend: {},
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    }
  },
  plugins: [],
}
