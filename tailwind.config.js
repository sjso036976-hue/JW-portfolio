/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#0047AB",
        "royal-dark": "#003380",
        "royal-light": "#1a5bc4",
        court: "#0a1628",
        "court-mid": "#0d1f3c",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "court-lines":
          "repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.04) 80px)",
      },
    },
  },
  plugins: [],
};
