/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071526',
        navy: '#0b2038',
        teal: '#0a7f83',
        cyan: '#4fd1d9',
        mist: '#eef6f7',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(4, 20, 38, 0.12)',
      },
    },
  },
  plugins: [],
}
