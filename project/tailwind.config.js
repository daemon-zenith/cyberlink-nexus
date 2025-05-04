/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
      colors: {
        'cyber-black': '#050505',
        'cyber-dark': '#0a0a0a',
        'cyber-blue': {
          400: '#00f7ff',
          500: '#00d8ff',
        },
        'cyber-green': {
          400: '#00ff95',
          500: '#00e085',
        },
        'cyber-pink': {
          400: '#ff00ff',
          500: '#d400d4',
        },
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        'space': ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 5px rgba(0, 247, 255, 0.5), 0 0 10px rgba(0, 247, 255, 0.3)',
            boxShadow: '0 0 5px rgba(0, 247, 255, 0.5), 0 0 10px rgba(0, 247, 255, 0.3)',
          },
          '100%': {
            textShadow: '0 0 10px rgba(0, 247, 255, 0.7), 0 0 20px rgba(0, 247, 255, 0.5)',
            boxShadow: '0 0 10px rgba(0, 247, 255, 0.7), 0 0 20px rgba(0, 247, 255, 0.5)',
          },
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-bg.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
