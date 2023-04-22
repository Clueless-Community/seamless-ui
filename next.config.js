const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  flexsearch: {
    codeblocks: false,
  },
  unstable_staticImage: true,
});

module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        permanent: false,
      },
      {
        source: "/docs/components/button",
        destination: "/docs/components/button",
        permanent: true,
      }
    ];
  },
});
