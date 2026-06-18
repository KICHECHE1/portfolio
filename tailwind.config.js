/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        "accent-ink": "rgb(var(--color-accent-ink) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        night: "rgb(var(--color-night) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        subtle: "rgb(var(--color-subtle) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        portrait: "rgb(var(--color-portrait) / <alpha-value>)",
      },
      boxShadow: {
        card: "0 18px 50px rgb(var(--color-ink) / 0.1)",
      },
    },
  },
  plugins: [],
};
