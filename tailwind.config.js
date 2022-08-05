module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
    theme: {
     

      extend: {
        fontFamily: {
          goldleaf: ["goldleaf", "sans-serif"],
          kelvingi: ["kelvingi", "sans-serif"],
          bondjlo: ["bondjlo", "sans-serif"],
          lato: ["Lato", "sans-serif"]
        },  
  
        colors:{
          'dark': '#191B1F',
          'button_dark': '#5A647E',
          'home_blue' : '#8E92FF',
        },
      },
    },
    plugins: [],
  }