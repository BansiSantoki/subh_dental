export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F3',
        forest: {
          DEFAULT: '#173F3A',
          deep: '#0F2C28',
          soft: '#2A5A53',
        },
        charcoal: '#252B29',
        sage: {
          DEFAULT: '#DCE7DF',
          deep: '#C5D6CA',
        },
        champagne: {
          DEFAULT: '#D6C3A3',
          light: '#EDE3D1',
        },
        muted: '#646B66',
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
