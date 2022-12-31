module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",],
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
          'dark_old': '#191B1F',
          'button_dark': '#616E7C',
          'button_hover_dark': '#313749',
          'home_blue' : '#8E92FF',
        },
      },
    },
    plugins: [],
  }