import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        // One club red — used sparingly for CTAs and key accents
        shrimp: {
          DEFAULT: '#981915',
          50: '#faf6f6',
          100: '#f3e9e8',
          200: '#e6d0ce',
          300: '#d0a4a0',
          400: '#b45c56',
          500: '#981915',
          600: '#7f1512',
          700: '#68110e',
          800: '#520e0c',
          900: '#3d0b09',
        },
        gold: {
          DEFAULT: '#C5A076',
          50: '#faf7f2',
          100: '#f3ebde',
          200: '#e8d8bc',
          300: '#d9c091',
          400: '#C5A076',
          500: '#b08d5f',
          600: '#94764f',
          700: '#786041',
          800: '#624f36',
          900: '#52432e',
        },
        // Neutral charcoal for surfaces and text — not another red family
        pitch: {
          DEFAULT: '#1c1c1c',
          50: '#f7f7f7',
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#c4c4c4',
          400: '#989898',
          500: '#6e6e6e',
          600: '#555555',
          700: '#404040',
          800: '#2a2a2a',
          900: '#141414',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-source-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        club: '0 8px 30px -6px rgba(28, 28, 28, 0.12)',
        'club-lg': '0 16px 48px -12px rgba(28, 28, 28, 0.18)',
      },
      backgroundImage: {
        'pitch-lines':
          'linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 51%)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.78) 45%, rgba(152,25,21,0.55) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
