/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-black": "1000",
      black: "900",
    },
    extend: {
      colors: {
        primary: "#5CB0FF",
        "hero-green": "#C8FFEC",
        "hero-yellow": "#FAFFE4",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      textUnderlineOffset: {
        10: "10px",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(0,0,0,1)",
        none: "0px 0px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
