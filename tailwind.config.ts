import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F6F6F6",
        unik: "#2F6835",
        unik2: "#EAF0EA",
        abu: "#71717A",
        abu2: "#D9D9D9",
        merah: "#B83030",
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(0.5)', opacity: "0" },
          '100%': { transform: 'scale(1)', opacity: "1" }
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        "popup": 'popup 0.3s ease-out',
        "slideIn": 'slideIn 0.3s ease-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
