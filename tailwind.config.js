module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  variantOrder: ["hover", "focus"],
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      borderColor: ["hover", "focus"],
      divideColor: ["hover", "focus"],
      gradientColorStops: ["hover", "focus"],
      placeholderColor: ["hover", "focus"],
      ringColor: ["hover", "focus"],
      ringOffsetColor: ["hover", "focus"],
      textColor: ["hover", "focus"]
    }
  },
  plugins: []
};
