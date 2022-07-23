/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#a3a5ae",
          200: "#4c4e61"
        },
        secondary: "#45d3d3" ,
        tertiary: "#eb5454;",
        karma: "#fcaf4a",
        calculator:"#549ef2",
      },
      fontFamily: {
        body: ["poppins"]
      }
    },
  },
  plugins: [],
}
