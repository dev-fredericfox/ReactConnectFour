module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        purple: "#ce357f",
        midnight: "#15032e",
        bermuda: "#752fee",
        sun: "#fbe752",
        orange: "#f4b95b",
        nova: "#f09652",
        red: "#eb038d",
        pink: "#e838df",
        teal: "#7df9ff",
      },
      boxShadow: {
        glow: "0 0 .2rem #000, 0 0 .2rem #000, 0 0 2rem #752fee, 0 0 0.8rem #752fee, 0 0 1.5rem #752fee, inset 0 0 1.3rem #752fee",
        glowOrange: "0 0 .2rem #000, 0 0 .2rem #000, 0 0 2rem #f4b95b, 0 0 0.8rem #f4b95b, 0 0 1.5rem #f4b95b, inset 0 0 1.3rem #f4b95b",
      },
      fontFamily: {
        'eightyone': ['Indelible'],
        'eightynine': ['Commando']
      }
    },
  },
  plugins: [],
};
