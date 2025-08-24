/** @type {import('tailwindcss').Config} */
export default {
  content: ['~/app.vue', '~/components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        gold: {
          text: '#a8915b'
        },
        primary: '#111F42',
        dark: '#111928',
        gray: {
          DEFAULT: '#272e35',
          light: '#555f6d'
        },
        light: '#f9fafb',
        muted: '#D7DADE',
      }
    },
  },
  plugins: [],
}