import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        primaryClr: '#FF8A56',
        whiteClr: {
          dark: '#1B1B1B',
          DEFAULT: '#fff',
        },
        backgroundClr: {
          dark: '#1B1B1B',
          DEFAULT: '#fff',
        },
        lightText: {
          dark: 'rgba(217, 217, 217, 0.4)',
          DEFAULT: 'rgba(27, 27, 27, 0.2)',
        },
      },
      fontFamily: {
        kamron: ['Kameron', 'serif'],
        kiteOne: ['Kite One', 'sans-serif'],
      },
      backgroundImage: {
        linearDark: 'linear-gradient(120deg, rgba(27, 27, 27, 0.4), rgba(129, 129, 129, 0.2))',
        linearLight: 'linear-gradient(120deg, rgba(27, 27, 27, 0.03), rgba(129, 129, 129, 0.06))',
        gradientTopToBottom: 'linear-gradient(transparent, blur(4))'
      },
      borderWidth: {
        borderLine: '1px',
      },
      borderColor: {
        borderLine: 'rgba(234, 234, 234, 0.6)',
        lightBorderLine: 'rgba(27, 27, 27, 0.2)',
      },
      borderRadius: {
        20: '20px',
      },
      dropShadow: {
        textShadow: `-1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000`
      },

      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
