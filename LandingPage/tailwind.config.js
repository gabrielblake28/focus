/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2563eb",
        "dark-blue": "#1e40af",
        "light-blue": "#3b82f6",
        "accent-purple": "#7c3aed",
        "accent-green": "#059669",
        "neutral-gray": "#6b7280",
        "light-gray": "#f8fafc",
        "dark-gray": "#374151",
        "success-green": "#10b981",
        "warm-orange": "#f59e0b",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        "gradient-accent": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        medium:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        large:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
