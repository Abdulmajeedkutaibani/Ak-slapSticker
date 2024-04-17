module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2266dd",
        secondary: "#96CAA8",
        background: "#eee",
        text: "#fff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-elevation")(["responsive"])],
};
