import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primaryColor": "#E12503",
        "modalOverlay": "rgb(0,0,0, 0.5)"
      },
      colors: {
        "primaryColor": "#E12503"
      },
      borderColor: {
        "primaryColor": "#E12503"
      }
    },
  },
  plugins: [],
};
export default config;
