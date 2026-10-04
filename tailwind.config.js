/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'data-green': '#22d3ee',
        'neon-green': '#a78bfa',
        'data-dark': '#070b14',
        'data-gray': '#0b1120',
        'data-light': '#111a2e',
        'dark-green': '#0891b2',
        'light-green': '#c4b5fd'
      },
      fontFamily: {
        data: ['JetBrains Mono', 'Consolas', 'monospace'],
        modern: ['Inter', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.12)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in .4s ease-out forwards',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, .2, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
