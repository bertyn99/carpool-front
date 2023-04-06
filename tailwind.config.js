/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    
        extend: { 
            colors: {
                "dark-green": "#003127",
                "light-green": "#00B894",
                "pastel-green": "#859382",            
                brown: "#A17C6B",
                cream: "#FEF5EF",
            },
            fontFamily: {
                sans: ["Helvetica", "Arial", "sans-serif"],
            },
                fontFamily: {
                    montserrat: ["var(--font-MontserratAlt1)"],
                    helvetica: ["var(--font-Helvetica)"],
                },
        },
    },
    plugins: [],
};
