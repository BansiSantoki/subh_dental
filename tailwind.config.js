/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Official Blue & White Palette for Dr. Naik's Shubh Smile
        primary: {
          DEFAULT: '#087FAE',
          50: '#F4F9FC',
          100: '#EAF4FA',
          200: '#DCEFF8',
          300: '#7EC4E5',
          400: '#3BA3D2',
          500: '#087FAE',
          600: '#076D96',
          700: '#123B59',
          800: '#0E2E47',
          900: '#091D2C',
          dark: '#123B59',
          soft: '#087FAE',
        },
        navy: {
          DEFAULT: '#123B59',
          deep: '#0A2033',
          dark: '#0D273D',
          light: '#1A4D73',
          border: '#235780',
        },
        secondary: {
          DEFAULT: '#EAF4FA',
          light: '#F4F9FC',
          dark: '#087FAE',
        },
        lightBlue: '#EAF4FA',
        softBlue: '#F4F9FC',
        softGrey: '#F4F9FC',
        bodyText: '#34465A',
        borderColor: '#E2EAF0',
        brandBlue: '#087FAE',
        whatsapp: '#25D366',

        // Backward compatibility mappings (prevents broken green styles while preserving theme integrity)
        forest: {
          DEFAULT: '#123B59',
          deep: '#0A2033',
          soft: '#087FAE',
        },
        sage: {
          DEFAULT: '#DCEFF8',
          deep: '#B8E0F2',
        },
        champagne: {
          DEFAULT: '#087FAE',
          light: '#F2F8FC',
        },
        charcoal: '#34465A',
        stone: '#F2F8FC',
        sand: '#DCEFF8',
        ivory: '#FFFFFF',
        brandLime: '#087FAE',
        muted: '#64748B',
      },
      fontFamily: {
        serif: ['"Lora"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Lora"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '"Inter"', 'sans-serif'],
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollcue: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        softpulse: {
          '0%': { transform: 'scale(1)', opacity: '0.45' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        scrollcue: 'scrollcue 2.4s cubic-bezier(0.65,0,0.35,1) infinite',
        softpulse: 'softpulse 2.8s cubic-bezier(0.23,1,0.32,1) infinite',
      },
    },
  },
  plugins: [],
};
