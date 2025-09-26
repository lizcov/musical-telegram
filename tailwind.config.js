/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'charcoal': '#222222',
        'plum': '#470068',
        'subtle-plum': 'rgba(71, 0, 104, 0.20)',
        'light-gray': '#E5E5E5',
        'red': '#A60202', // Keep the original red for reference or rename it
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}
