import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // A4 dimensions: 210mm x 297mm at 96 DPI
      width: {
        'a4': '794px', // 210mm at 96 DPI
      },
      height: {
        'a4': '1123px', // 297mm at 96 DPI
      },
      maxWidth: {
        'a4': '794px',
      },
      maxHeight: {
        'a4': '1123px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      spacing: {
        'a4-margin': '40px',
      },
    },
  },
  plugins: [],
} satisfies Config;