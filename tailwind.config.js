export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        agency: { bg: '#0a0a0a', card: '#141414', border: '#1f1f1f' },
        brand: { orange: '#ff6b35', teal: '#4ecdc4', yellow: '#ffe66d', pink: '#ff6b9d' }
      },
      fontFamily: { sans: ['Outfit', 'Inter', 'sans-serif'] }
    }
  },
  plugins: []
}
