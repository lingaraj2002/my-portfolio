import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#000000",
          elevation: "#0A0A0A",
          surface: "#171717",
          card: "#121212",
        },
      },
      animation: {
        "grid-fade": "gridFade 8s ease-in-out infinite alternate",
      },
      keyframes: {
        gridFade: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
