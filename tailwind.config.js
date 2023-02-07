const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'urbanist': ['Urbanist', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#5252D4',
                secondary: '#4A4A68',
                tertiary: '#ECF1F4',
                quaternary: '#F8F8F9'
            },
            maxWidth: {
                '8xl': '1536px',
            },
            backgroundImage: {
                'autentikasi': "url('/assets/img/Autentikasi Scan.png')",
            }
        },
    },
    plugins: [],
}
