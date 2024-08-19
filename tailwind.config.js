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
        "light-blue": "#d8dff3",
        "light-grey": "#E7EBF4",
        "back-blue": "#DEE0E7",
        pink: "#FAA1CC",
        green: "#B1FBB4",
        bor: "#e6e6e6",
        "bold-pink": "#55246A",
      },
      spacing: {
        "40x": "40%",
        50:'200px',
        62:'248px',
        70:'280px',
        140: "560px",
        
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
          xl: "1185px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
