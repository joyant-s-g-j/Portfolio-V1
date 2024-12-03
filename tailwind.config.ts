import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 50%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 50%, transparent)",
        },
      });
    }),
  ],
};
export default config;
