import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golf-green': '#2D5016',
        'golf-light-green': '#4A7C2E',
        'golf-cream': '#F5F5DC',
      },
    },
  },
  plugins: [],
}
export default config