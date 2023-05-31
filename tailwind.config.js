/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth:{
                '1/3': '100%'
            }
        },
    },
    plugins: [],
}

