/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warning: "#E6BB23",
        success: "#2EBE7B",
        "bg-warning-secondary": "#FFF1C2",
        "text-warning-tertiary": "#BF6A02",
        "bg-success": "rgba(2, 177, 90, 0.15)",
        "text-success": "#02B15A",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
