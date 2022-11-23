/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s linear infinite'
      },
      height: {
        '128': '27rem',
        '130': '32rem'
      },
    },
  },
  plugins: [],
}
