/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
