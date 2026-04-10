import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFCB05',
          'yellow-soft': '#FFE680',
          green: '#1F5E2B',
          'green-deep': '#0F3D18',
          'green-soft': '#E6F2E0',
          red: '#E63946',
          orange: '#F77F00',
          blue: '#1D8BCE',
          purple: '#9B5DE5',
          cream: '#FFF8E7',
          ink: '#2A1F14',
          paw: '#5C3A21',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'cursive'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        fun: '24px',
      },
      boxShadow: {
        fun: '6px 6px 0 #0F3D18',
        'fun-lg': '10px 12px 0 #0F3D18',
        soft: '0 10px 30px rgba(31, 94, 43, 0.15)',
      },
      animation: {
        bob: 'bob 6s ease-in-out infinite',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-4deg)' },
          '50%': { transform: 'translateY(-12px) rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
