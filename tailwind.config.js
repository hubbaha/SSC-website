module.exports = {
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
        primary: "var(--fixnix-primary)",
        "fixnix-lightpurple": "#70436b",
        "fixnix-darkpurple": "#472a44",
        "fixnix-white": "#ffffff",
      },
      boxShadow: {
        "light-purple": "0 4px 6px rgba(112, 67, 107, 0.3)"
 , // Light purple shadow
      },
    },
  },

  plugins: [],
};
