module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgba(38, 194, 153, 1)',
        blue: 'rgba(10, 64, 161, 1)',
        rose: 'rgba(250, 191, 186, 1)',
        grey: 'rgba(51, 51, 48, 1)',
      },
      backgroundSize: {
        sm: '2rem',
        md: '4rem',
      },
      spacing: {
        xl2: '50rem',
        xl: '40.625rem',
        lg: '34.375rem',
        sm: '21.25rem',
        5: '5%',
        s: '5rem',
        xs: '3.75rem',
        xs2: '1.4rem',
        xs3: '1rem',
      },
      keyframes: {
        move: {
          '100%': { transform: 'translateY(0)', opacity: '1' },
          '0%': { transform: 'translateY(100%)', opacity: '0.5' },
        },
        moveReverse: {
          '100%': { transform: 'translateY(0)', opacity: '1' },
          '0%': { transform: 'translateY(-100%)', opacity: '0.5' },
        },
      },
      animation: {
        move: 'move 0.5s ease',
        moveReverse: 'moveReverse 0.5s ease',
      },
    },
  },
  plugins: [],
}
