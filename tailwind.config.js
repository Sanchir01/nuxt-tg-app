/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./src/**/*.vue",
    "./src/**/*.{js.ts}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT:"333ms"
    },
    transitionTimingFunction: {
      DEFAULT:"ease-in-out"
    },
    extend: {},
  },
  plugins: [],
}