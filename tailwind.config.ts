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
        shrimp: {
          DEFAULT: '#941D1E',
          50: '#fdf5f5',
          100: '#f9e8e8',
          200: '#f0cfcf',
          300: '#e0a8a8',
          400: '#c86a6a',
          500: '#941D1E',
          600: '#7a1819',
          700: '#621314',
          800: '#4f1011',
          900: '#3d0d0e',
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
        pitch: {
          DEFAULT: '#2a0f10',
          50: '#faf8f8',
          100: '#f0ebeb',
          200: '#ddd4d4',
          300: '#bfb3b3',
          400: '#948888',
          500: '#6b6060',
          600: '#524a4a',
          700: '#3f3334',
          800: '#2a0f10',
          900: '#1a0809',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-source-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        club: '0 8px 30px -6px rgba(148, 29, 30, 0.18)',
        'club-lg': '0 16px 48px -12px rgba(148, 29, 30, 0.24)',
      },
      backgroundImage: {
        'pitch-lines':
          'linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 51%)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(26,8,9,0.94) 0%, rgba(148,29,30,0.88) 50%, rgba(26,8,9,0.96) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
