module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.ts",
    "./components/**/*.tsx",
    "./database/**/*.ts",
    "./database/**/*.tsx",
    "./pages/**/*.md",
    "./pages/**/*.mdx",
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./theme.config.js",
    "./styles.css",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
};
