// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grillo Docs',
  tagline: 'Make sense of shaking',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.grillo.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grillo', // Usually your GitHub org/user name.
  projectName: 'grillo-docs', // Usually your repo name.

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      es: {        
        htmlLang: 'es-MX',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/grillo/grillo-docs/tree/main/',
          routeBasePath: '/', // Serve the docs at the site's root
        /* other docs plugin options */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/grillo/grillo-docs/tree/main/',
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
      image: 'img/grillo-logo-colour-1000x1000.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Grillo Logo',
          src: 'img/grillo-black-logo.svg',
          srcDark: 'img/grillo-white-logo.svg'         
        },
        items: [

          {
            href: 'https://grillo.io/', 
            label: 'Grillo Site', 
            target: '_self',
            position: 'right'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },          
          
          //{type: 'localeDropdown',position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Console',
                to: '/docs/category/grillo-console',
              },
              {
                label: 'Sensors',
                to: '/docs/category/grillo-sensors',
              },
              {
                label: 'Guides',
                to: '/docs/category/how-to-guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [              
              {
                label: 'Discord',
                href: 'https://discord.gg/ejedMU8m',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/grilloshake',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grillo',
              },
              {
                label: 'OpenEEW',
                href: 'https://github.com/openeew',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grillo Holdings Inc.`,
      },
      colorMode: {
       defaultMode: 'dark',
       disableSwitch: true,
       respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
