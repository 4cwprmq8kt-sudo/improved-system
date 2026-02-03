/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"] ,
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1d4ed8",
        "brand-ink": "#0f172a",
        "brand-slate": "#1e293b"
      }
    }
  },
  plugins: []
};
