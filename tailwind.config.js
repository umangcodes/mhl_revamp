module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FEFFFF",
        primaryLight:"#3AAFA9",
        primaryDark:"#17252A",
        secondary:"#FEFFFF",
        secondaryLight:"#FFFFFF",
        secondaryDark:"#DEF2F1",
        // primary:"#eeeeee",
        // primaryLight:"#ffffff",
        // primaryDark:"#bcbcbc",
        // secondary:"#90a4ae",
        // secondaryLight:"#c1d5e0",
        // secondaryDark:"#62757f",

      }
    },
    fontFamily:{
      'sans': ['sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}