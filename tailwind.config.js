// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    screens: {
      'xs': '480px',
    },
  },
}
,
  plugins: [],
  darkMode: 'class', // or 'media
}
