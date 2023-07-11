/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "appear-slow": "ping .3s cubic-bezier(0, 0.2, 0.4, 1) forwards reverse",
      },
    },
  },
  plugins: [],
};
