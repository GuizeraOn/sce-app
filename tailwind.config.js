/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                surface: '#0F0F0F',
                primary: '#D4AF37',
                'text-primary': '#E5E5E5',
                'text-secondary': '#A3A3A3',
                border: '#262626',
                success: '#10B981',
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F1C40F 100%)',
            }
        },
    },
    plugins: [],
}
