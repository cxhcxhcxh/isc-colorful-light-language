/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2D1810',
        'brand-brown': '#3D2520',
        'brand-coral': '#FF6B6B',
        'brand-orange': '#FF8A65',
        'brand-gold': '#FFB74D',
        'brand-cream': '#FFF3E0',
        'brand-highlight': '#FF4100',
      },
      backgroundImage: {
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #FF8A65 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF8A65 0%, #FFB74D 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 107, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
