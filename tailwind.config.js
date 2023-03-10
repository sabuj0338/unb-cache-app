/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            // 'sans': ['ui-sans-serif', 'system-ui'],
            // 'serif': ['ui-serif', 'Georgia'],
            // 'mono': ['ui-monospace', 'SFMono-Regular'],
            'sans': ['Roboto Mono'],
            'roboto': ['Roboto Mono'],
            // 'display': ['Roboto Mono'],
            // 'body': ['Roboto Mono'],
        }
    },
    plugins: [],
}
