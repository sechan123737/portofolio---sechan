/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0C1D',
        panel: '#FFFFFF',
        panel2: '#E4ECF5',
        ink: '#0E2033',
        inkdim: '#57718D',
        accent: '#C2760A',
        cyan: '#0E7C86',
        line: 'rgba(14,32,51,0.14)',
        onDark: '#F5F6FA',
        onDarkDim: '#A6ABC9',
        lime: '#C6FF3B',
        blobPink: '#FF5FA2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}