/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dff0ff',
          200: '#bfe6ff',
          300: '#8fd6ff',
          400: '#5ec0ff',
          500: '#007aff',
          600: '#0061d6',
          700: '#004a9d',
          800: '#003470',
          900: '#00234b',
        },
        neutral: {
          50: '#ffffff',
          100: '#f8f9fb',
          200: '#f1f3f5',
          300: '#e9ecef',
          400: '#dee2e6',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          50: '#fbfcff',
          100: '#f3f6ff',
          200: '#e6eeff',
          300: '#d2e6ff',
          400: '#b8d7ff',
          500: '#5aa8ff',
          600: '#4a8ee6',
          700: '#3470b3',
          800: '#24507a',
          900: '#18344d',
        }
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'spin': 'spin 2s linear infinite',
        'bounce': 'bounce 1s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
