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
      },
      backgroundSize: {
        sm: '2rem',
        md: '4rem',
      },
      spacing: {
        xl: '650px',
        lg: '550px',
        sm: '340px',
        5: '5%',
        xs: '60px',
        xs2: '1.4rem',
        xs3: '1rem',
      },
    },
  },
  plugins: [],
}
