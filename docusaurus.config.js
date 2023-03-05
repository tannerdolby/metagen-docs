// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metagen Docs',
  tagline: 'Quickly generate document metadata for your 11ty site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://metagendocs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tannerdolby', // Usually your GitHub org/user name.
  projectName: 'metagen-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/tannerdolby/metagen-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Metagen',
        logo: {
          alt: 'Metagen Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/tannerdolby/metagen-docs',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Usage',
                to: '/docs/category/usage'
              },
              {
                label: 'Options',
                to: '/docs/category/options'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Feature Requests',
                href: 'https://github.com/tannerdolby/eleventy-plugin-metagen/issues',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tannerdolby',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://tannerdolby.com/writing',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tannerdolby/metagen-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metagen Docs - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
