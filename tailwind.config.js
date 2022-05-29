module.exports = {
  content: ['index.html', 'about.html', 'create.html', 'lobby.html', 'login.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: '#dc2626',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}