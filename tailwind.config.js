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
        xl2: '800px',
        xl: '650px',
        lg: '550px',
        sm: '340px',
        5: '5%',
        xs: '60px',
        xs2: '1.4rem',
        xs3: '1rem',
      },
      keyframes: {
        move: {
          '100%': { transform: 'translateY(0)' },
          '0%': { transform: 'translateY(100%)' },
        },
        moveReverse: {
          '100%': { transform: 'translateY(0)' },
          '0%': { transform: 'translateY(-100%)' },
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
