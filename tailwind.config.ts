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
        "fixnix-lightpurple": "#70436b", 
        "fixnix-darkpurple": "#472a44",  
        "fixnix-white": "#ffffff",  
      },
    },
  },
  plugins: [],
} satisfies Config;
