/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E69FF",
                accent: "#D4FF00",
                dark: "#010101",
            },
            boxShadow: {
                'card': '0 24px 64px -16px rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
}
