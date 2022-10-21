const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        darkcardheader: "#AAA6DE",
        lightmodestartbg: "#FCE4EC",
        lightmodeendbg: "#E1ACBD",
        darkmodestartbg: "#BD607F",
        darkmodeendbg: "#B15B78",
        landingbuttonbg: "#B8E3FF",
        landingiconcolor: "#89A3B3",
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
