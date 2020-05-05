module.exports = {
  purge: ["src/*.html", "src/*.vue", "src/*.js", "src/*.css"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
      },
      colors: {
        customBlue: "#41B0FF",
        cutomegrey: "#F7F7F7",
        customblack: "#242424",
        customecyan: "#11F7FF",
      },
    },
  },
  variants: {},
  plugins: [],
};
