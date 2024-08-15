module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
      },
      colors: {
        main: "#F4F7FF",
        "bold-blue": "#55246A",
        "bold-dark": "#333",
        "light-dark": "#797979",
        "light-white": "#f3f3f3",
      },
      spacing: {
        "40x": "40%",
      },
      width: {
        half: "calc(50% - 12px)",
      },
      fontSize: {
        xs: "12px",
        min: "8px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1180px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
