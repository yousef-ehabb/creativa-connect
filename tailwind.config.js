/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creativa: {
          blue: {
            DEFAULT: '#004e9e',
            dark: '#003b78',
            light: '#e6eff8',
            tint: '#f0f5fa',
            hover: '#004287'
          },
          gold: {
            DEFAULT: '#f8af43',
            dark: '#e59d30',
            light: '#fef3e2',
            hover: '#f7a42b'
          },
          charcoal: '#222222',
          body: '#616161',
          mute: '#9e9e9e',
          hairline: '#e5e5e5',
          'hairline-strong': '#d4d4d4',
          surface: {
            canvas: '#ffffff',
            soft: '#fafafa',
            subtle: '#f8fafc'
          }
        }
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['"thmanyahsans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 78, 158, 0.08), 0 8px 10px -6px rgba(0, 78, 158, 0.04)',
        'card-featured': '0 20px 30px -10px rgba(0, 78, 158, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'glow-sm': '0 0 15px -3px rgba(0, 78, 158, 0.25)',
      },
      borderRadius: {
        'card': '1.25rem', // 20px
        'card-lg': '1.5rem', // 24px
      }
    },
  },
  plugins: [],
}
