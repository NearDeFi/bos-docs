// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blockchain Operating System (BOS)',
  tagline: 'Frontend without Limits',
  url: 'https://docs.bos.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NearDeFi', // Usually your GitHub org/user name.
  projectName: 'bos-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NearDeFi/bos-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ["@saucelabs/theme-github-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: false,
        indexBlog: false,
        docsRouteBasePath: ['/'],
        docsDir: ["./docs"],
        language: ["en"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'NEAR',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'vm-api',
            position: 'left',
            label: 'API Reference',
          },
          {
            href: 'https://github.com/NearDeFi/bos-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'BOS',
                to: 'https://bos.gg',
              },
              {
                label: 'BOS Docs',
                href: 'https://docs.bos.gg',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+ARDO0IPdsr43ZjAx',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/NearDeFi/bos-docs',
              },
              {
                label: 'Terms of Use',
                href: 'https://bos.gg/#/thebos.near/widget/Terms',
              },
              {
                label: 'Privacy Policy',
                href: 'https://bos.gg/#/thebos.near/widget/Privacy',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "rust", "java", "python", "ruby", "go", "toml"
        ]
      },
    }),
};

module.exports = config;
