import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This scans EVERYTHING in src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-white": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;