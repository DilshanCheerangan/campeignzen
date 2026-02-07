import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        zen: {
          stone: {
            50: "var(--zen-stone-50)",
            100: "var(--zen-stone-100)",
            200: "var(--zen-stone-200)",
            300: "var(--zen-stone-300)",
            400: "var(--zen-stone-400)",
            500: "var(--zen-stone-500)",
            600: "var(--zen-stone-600)",
            700: "var(--zen-stone-700)",
            800: "var(--zen-stone-800)",
            900: "var(--zen-stone-900)",
          },
          accent: "var(--zen-accent)",
          "accent-hover": "var(--zen-accent-hover)",
          "accent-muted": "var(--zen-accent-muted)",
          "accent-subtle": "var(--zen-accent-subtle)",
          coral: "var(--zen-coral)",
          "coral-muted": "var(--zen-coral-muted)",
          violet: "var(--zen-violet)",
          "violet-muted": "var(--zen-violet-muted)",
        },
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        glow: "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        bounce: "var(--ease-bounce)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        smooth: "var(--duration-smooth)",
      },
    },
  },
  plugins: [],
};
export default config;
