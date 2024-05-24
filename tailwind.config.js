/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caviari: ['Caviari', 'sans-serif'],
      },
    },
  },
   lightMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"], // Adicionando temas dark e light
  },
}