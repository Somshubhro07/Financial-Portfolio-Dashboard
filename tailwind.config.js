// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Optional: if you want to support light/dark mode toggle later
  theme: {
    extend: {
      colors: {
        // Refined Dark Palette
        'base-bg': '#0a0f17',         // Slightly deeper blue/black base
        'content-bg': '#161e2b',     // Card background - deep blue/gray
        'content-bg-alt': '#222b3a', // Slightly lighter card background
        'sidebar-bg': '#0f172a',     // Sidebar - dark slate blue
        'primary': '#a78bfa',         // Lavender Purple accent (Tailwind violet-400)
        'secondary': '#34d399',       // Emerald Green accent (Tailwind emerald-400)
        'tertiary': '#fb7185',       // Rose Red accent (Tailwind rose-400)

        'text-primary': '#e2e8f0',     // Lighter gray/slate primary text
        'text-secondary': '#94a3b8',   // Slate gray secondary text
        'text-dark': '#0a0f17',
        'border-color': '#334155',     // Slate border color
        'border-accent': '#475569',   // Slightly more visible border

        'chart-green': '#34d399',
        'chart-red': '#fb7185',
        'chart-blue': '#60a5fa', // Tailwind blue-400
        'chart-yellow': '#facc15',// Tailwind yellow-400
        'chart-purple': '#a78bfa',
        'chart-pink': '#f472b6', // Tailwind pink-400
      },
      fontFamily: {
        sans: ['Manrope', /* ... */ ],
      },
       boxShadow: {
        'glow-primary': '0 0 20px 0 rgba(167, 139, 250, 0.35)', // Enhanced glow
        'glow-secondary': '0 0 20px 0 rgba(52, 211, 153, 0.35)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #161e2b 0%, #0f172a 100%)', // Subtle gradient example
      }
    },
  },
}