module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main':                '#009788',
        'main-text':           '#1f2937',
        'main-text-secondary': '#6b7280',
      },
      fontSize: {
        '2xs': '0.65rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
