import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: 'Work Sans',
      default: 'Work Sans',
      display: 'Work Sans',
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'pink': '#AD28EB',
      'light-pink': 'hsl(275, 100%, 97%)',
      'grayish-purple': 'hsl(292, 16%, 49%)',
      'dark-purple': 'hsl(292, 42%, 14%)',
    },
    boxShadow: {
      'default': '0px 32px 56px 0px rgba(80, 0, 118, 0.10)'
    }
  },
  plugins: [],
}
export default config
