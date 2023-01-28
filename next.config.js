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
        source: "/docs/usage-swc-cli",
        destination: "/docs/usage/cli",
        permanent: true,
      },
      {
        source: "/docs/usage-swc-wasm",
        destination: "/docs/usage/wasm",
        permanent: true,
      },
      {
        source: "/docs/usage-spack-cli",
        destination: "/docs/usage/bundling",
        permanent: true,
      },
      {
        source: "/docs/usage-swc-loader",
        destination: "/docs/usage/swc-loader",
        permanent: true,
      },
      {
        source: "/docs/usage-swc-jest",
        destination: "/docs/usage/jest",
        permanent: true,
      },
      {
        source: "/docs/usage-core",
        destination: "/docs/usage/core",
        permanent: true,
      },
      {
        source: "/docs/usage-plugin",
        destination: "/docs/usage/plugins",
        permanent: true,
      },
      {
        source: "/docs/installation",
        destination: "/docs/getting-started",
        permanent: true,
      },
      {
        source: "/docs/configuring-swc",
        destination: "/docs/configuration/swcrc",
        permanent: true,
      },
      {
        source: "/docs/preset-env",
        destination: "/docs/configuration/supported-browsers",
        permanent: true,
      },
      {
        source: "/docs/config-js-module",
        destination: "/docs/configuration/modules",
        permanent: true,
      },
      {
        source: "/docs/config-js-minify",
        destination: "/docs/configuration/minification",
        permanent: true,
      },
      {
        source: "/docs/spack-basic",
        destination: "/docs/configuration/bundling",
        permanent: true,
      },
      {
        source: "/docs/spack-multi-bundle",
        destination: "/docs/configuration/bundling",
        permanent: true,
      },
      {
        source: "/docs/migrating-from-babel-core",
        destination: "/docs/migrating-from-babel",
        permanent: true,
      },
      {
        source: "/docs/migrating-from-babel-cli",
        destination: "/docs/migrating-from-babel",
        permanent: true,
      },
      {
        source: "/docs/comparison-babel",
        destination: "/docs/migrating-from-babel",
        permanent: true,
      },
      {
        source: "/docs/benchmark-autogen",
        destination: "/docs/benchmarks",
        permanent: true,
      },
      {
        source: "/docs/benchmark-transform",
        destination: "/docs/benchmarks",
        permanent: true,
      },
      {
        source: "/docs/online-repl",
        destination: "/playground",
        permanent: true,
      },
      {
        source: "/blog/2019/02/08/Introducing-swc-1.0",
        destination: "/blog/swc-1",
        permanent: true,
      },
      {
        source: "/blog/2020/02/16/why-is-swc-fast",
        destination: "/blog/why-is-swc-fast",
        permanent: true,
      },
    ];
  },
});
