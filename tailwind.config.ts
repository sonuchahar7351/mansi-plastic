import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          dark: "#0B3A63",
        },
        secondary: "#1E6BA8",
        accent: {
          DEFAULT: "#F39C12",
          dark: "#D9840A",
        },
        section: "#F7F8FA",
        body: "#222222",
        borderc: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 2px 10px rgba(15, 76, 129, 0.08)",
        "card-hover": "0 8px 24px rgba(15, 76, 129, 0.14)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        kenburns: "kenburns 7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
