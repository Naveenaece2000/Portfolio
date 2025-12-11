import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        lightNavy: "#112240",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        white: "#e6f1ff",
        green: "#64ffda",
      },
    },
  },
  plugins: [],
};
export default config;