module.exports = {
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')({
        strategy: 'base', // only generate global styles
        strategy: 'class', // only generate classes
      }),
    ],
  }