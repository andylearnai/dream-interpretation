// tailwind.config.ts
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui(
      {
        themes: {
          light: {
            colors: {
              primary: {
                DEFAULT: "#7828c8",
                foreground: "#FFFFFF",
              },
            }
          },
          dark: {
            colors: {
              primary: {
                DEFAULT: "#9353d3",
                foreground: "#FFFFFF",
              },
            }
          },
        },
      }
    ),
  ],
};

export default config;