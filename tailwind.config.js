/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Readex Pro', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'rise':    'rise 1.1s cubic-bezier(.2,.7,.2,1) both',
        'drift':   'drift 18s ease-in-out infinite',
        'ping-slow': 'ping-slow 2.6s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%':   { transform: 'translate3d(-2%,0,0) scale(1.05)', opacity: '0.55' },
          '50%':  { transform: 'translate3d(2%,-1%,0) scale(1.08)', opacity: '0.8' },
          '100%': { transform: 'translate3d(-2%,0,0) scale(1.05)', opacity: '0.55' },
        },
        'ping-slow': {
          '0%':       { transform: 'scale(1)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
