// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Portfolio",
  tagline: "Technical Writer",
  favicon: "img/logs.png",

  future: {
    v4: true,
  },

  url: "https://writetech-accelerator-portfolio-que.vercel.app/",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          chimoney: {
            specPath: "static/chimoney-api.yaml",
            outputDir: "docs/api-documentation/reference",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    image: "img/logs.png",
    navbar: {
      title: "Portfolio",
      logo: {
        alt: 'Queendoline"s logo',
        src: "img/logs.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "projectSidebar",
          position: "left",
          label: "Projects",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/TechSis01/writetech-accelerator-portfolio-Queendoline",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          label: "Let's Connect on LinkedIn",
          href: "https://www.linkedin.com/in/queendoline-akpan/",
        },
        {
          label: "Visit my Blog",
          href: "/blog",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
