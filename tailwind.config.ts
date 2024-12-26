
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
      "2xl": "2560px",
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
        sans: ['"Avant Garde"', 'sans-serif'],
        display: ['"Nunito Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'extra-widest': '0.25em', 
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient-r": {
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        },
        ".mask-gradient-b": {
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 50%, transparent)",
        }
      });
    }),
  ],
};
export default config;
