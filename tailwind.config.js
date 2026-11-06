/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"DM Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        ink: { 950: '#070A16', 900: '#0A0E1F', 800: '#11172E' },
        iris: '#7C7CFF',
        lagoon: '#2DD4BF',
        apricot: '#FFB68A',
        mist: '#E8ECFF',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(3%,-4%,0) scale(1.08)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
