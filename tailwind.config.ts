import type { Config } from "tailwindcss";
// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray100: 'var(--gray-100)',
        gray200: 'var(--gray-200)',
        slate: {
          800: '#2B4057',  // Base color
          900: '#1F2E40',  // Darker shade
        },
        gray: {
          400: 'rgb(156, 163, 175)', // Add this to your gray palette
       500: 'rgb(107, 114, 128)',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, var(--gray-100), var(--gray-200))',
      },
      animation: {
        // Define a custom animation with a specific duration
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      clip: {
        'rect': 'rect(0, 0, 0, 0)',
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
