/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'otec-blue': '#003B7A',
        'otec-orange': '#FF6B35',
        'otec-dark': '#0A1628',
        'otec-light': '#F5F5F5',
        'otec-purple': '#6B46C1',
        'otec-lime': '#39FF14',
        'otec-purple-dark': '#4C1D95',
      },
    },
  },
  plugins: [],
}
