/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-clash)', 'sans-serif'],
      },
      colors: {
        neon: {
          purple: '#9333ea',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
        dark: {
          900: '#030305',
          800: '#0a0a12',
          700: '#0f0f1a',
          600: '#141424',
          500: '#1a1a30',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scanline': 'scanline 4s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(147,51,234,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(147,51,234,0.8), 0 0 100px rgba(59,130,246,0.4)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(147,51,234,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(147,51,234,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
