module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Open-Sans': ["Open Sans"],
      'Roboto': ["Roboto"]
    },
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
