module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
        hero:"url('/images/hero-background.jpg')",
        watchlist:"url('/images/6.jpg')"

      }),
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
