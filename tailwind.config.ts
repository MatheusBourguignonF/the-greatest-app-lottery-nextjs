import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#707070",
        secondary: "#B5C401"
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;