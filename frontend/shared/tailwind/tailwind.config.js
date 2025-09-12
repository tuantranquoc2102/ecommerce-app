/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../admin/src/**/*.{js,ts,jsx,tsx}",
    "../../customer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",  // xanh chủ đạo
        secondary: "#f97316", // cam chủ đạo
      },
    },
  },
  plugins: [],
}