/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          lg: "1165px",
          xl: "1165px",
          "2xl": "1165px",
        },
      },
      fontFamily: {
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        "custom-gray": "#666666",
        "custom-gray2": "#777777",
        "custom-gray3": "#888888",
        "custom-gray4": "#999999",
        "custom-gray5": "#aaaaaa",
        "custom-gray6": "#cccccc",
        "custom-gray7": "#dadada",
        "custom-gray8": "#eeeeee",
        "custom-gray9": "#f1f1f1",
        "custom-gray10": "#f5f5f5",
        "custom-gray11": "#222222",
        "custom-gray12": "#333333",
        "custom-gray13": "#4b5d74",
        "custom-gray14": "#555555",
        "custom-rose": "#a94442",
        "custom-blue": "#1155cc",
        "custom-blue2": "#1f7cc3",
        "custom-blue3": "#337ab7",
        "custom-blue4": "#204d74",
        "custom-blue5": "#286090",
        "custom-red": "#ac2925",
        "custom-red2": "#e32424",
        "custom-yellow": "#e0a800",
        "custom-lime": "#f6f7d9",
        "custom-lime2": "#29910d",
      },
      boxShadow: {
        // around: "0 0 15px 0 rgba(0, 0, 0, .1)",
        "around-sm": "0 0 4px 0 rgba(0, 0, 0, .1)",
        "around-blue": "0 0 7px 2px rgba(15, 10, 220, .1)",
      },
    },
  },
  plugins: [],
};
