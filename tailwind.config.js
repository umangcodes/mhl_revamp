module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#eeeeee",
        primaryLight:"#ffffff",
        primaryDark:"#bcbcbc",
        secondary:"#90a4ae",
        secondaryLight:"#c1d5e0",
        secondaryDark:"#62757f",

      }
    },
    fontFamily:{
      'sans': ['sans-serif']
    }
  },
  plugins: [],
}