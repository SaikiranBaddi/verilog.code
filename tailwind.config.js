/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36a9f7',
          500: '#0c8de9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b83',
          900: '#0c3f6e',
          950: '#082849',
        },
        circuit: {
          bg: '#090d16',
          card: '#0f172a',
          border: '#1e293b',
          glow: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          accent: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)' }
        }
      }
    },
  },
  plugins: [],
}
