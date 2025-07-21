import type { Config } from "tailwindcss";

export default {
  darkMode: "class",

  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        keyframes: {
          slideDown: {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
          },
            slideUp: {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
        },
        animation: {
          slideDown: 'slideDown 0.3s ease-in-out',
          slideUp: 'slideUp 0.3s ease-in-out',
        },
    },
  },
  plugins: [],
} satisfies Config;
