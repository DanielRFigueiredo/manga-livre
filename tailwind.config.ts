import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'topnav-bg': "url('/topnav-bg.png')",
        'logo': "url('/logo.webp')",
      },
      colors: {
        'primary': '#e5d5a7',
        'boxshadow-color': '#5A574F'
      },
      animation: {
        'entrada': 'aparece .5s linear',
        'saida': 'sair .5s linear',
      },
      keyframes: {
        aparece: {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
        sair: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
