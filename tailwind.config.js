/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#EBE3DA',
          300: '#DDD4C8',
          400: '#C8BEAF',
        },
        charcoal: {
          900: '#1C1917',
          800: '#292524',
          700: '#44403C',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
          300: '#D6D3D1',
        },
        rose: {
          50: '#FDF8F9',
          100: '#F7EDF1',
          200: '#EFDBE3',
          300: '#DFC0CD',
          400: '#C69BAA',
          500: '#9C5369',
          600: '#874256',
          700: '#713344',
          800: '#5A2635',
          900: '#431B27',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 2px 4px rgba(28, 25, 23, 0.04), 0 10px 24px -4px rgba(28, 25, 23, 0.06)',
        'editorial-hover': '0 4px 8px rgba(28, 25, 23, 0.05), 0 16px 36px -4px rgba(28, 25, 23, 0.1)',
        'subtle': '0 1px 3px rgba(28, 25, 23, 0.05)',
      },
    },
  },
  plugins: [],
};
