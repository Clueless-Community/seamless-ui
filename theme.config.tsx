import { useConfig } from "nextra-theme-docs";

const Head = () => {
  const { frontMatter, title } = useConfig();
  return (
    <>
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/logo.png"
      />
      <link rel="manifest" href="/logo.png" />
      <link
        rel="mask-icon"
        href="/logo.png"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content={
          frontMatter?.description ||
          "The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS static website or a React, Vue, Angular or Next.js Complex app. Zero JS and no-plugins installed."
        }
      />
      <meta
        name="og:description"
        content={
          frontMatter.description ||
          "The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS static website or a React, Vue, Angular or Next.js Complex app. Zero JS and no-plugins installed."
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@by_clueless" />
      <meta
        name="twitter:image"
        content={
          frontMatter.image ||
          "https://user-images.githubusercontent.com/9113740/140682117-5e9f460e-c8f1-447c-88a0-e75f80779260.png"
        }
      />
      <meta
        name="og:title"
        content={title ? title + " – SWC" : "SWC: Speedy Web Compiler"}
      />
      <meta
        name="og:image"
        content={
          frontMatter.image ||
          "https://user-images.githubusercontent.com/9113740/140682117-5e9f460e-c8f1-447c-88a0-e75f80779260.png"
        }
      />
      <meta name="apple-mobile-web-app-title" content="SWC" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        // onLoad="this.media='all'"
      />
    </>
  );
};
/** @type import('nextra-theme-docs').DocsThemeConfig */
export default {
  project: {
    link: "https://github.com/Clueless-Community/seamless-ui",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SeamLess UI",
    };
  },
  toc: {
    float: true,
  },
  head: <Head />,
  logo: () => (
    <>
      <img src="/logo.png" width="50px" loading="lazy" />
      <span className="mx-2 font-extrabold hidden md:inline select-none">
        SeamLess UI
      </span>
      <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
        Your UI Library
      </span>
    </>
  ),
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: () => (
      <a
        href="https://clueless.link"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center no-underline text-current font-semibold"
      >
        <span className="mr-1">Powered by</span>
        <span>
          ClueLess
        </span>
      </a>
    ),
  },
};
