import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Grillo Docs',
  tagline: 'Earthquake monitoring made simple',
  favicon: 'img/grillo-mark-orange.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.grillo.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'grillo', // Usually your GitHub org/user name.
  projectName: 'grillo-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    './plugins/suppress-casing-warnings.js',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs as homepage
          // Enable "edit this page" links pointing to your repo
          editUrl: ({ docPath }) =>
            `https://github.com/grillo/grillo-docs/tree/main/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/screenshots/11-live-map.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'grillo · docs',
      logo: {
        alt: 'Grillo',
        src: 'img/grillo-mark-orange.png',
      },
      items: [
        {
          href: 'https://cloud.grillo.io',
          label: 'Open Grillo Platform',
          position: 'right',
          className: 'navbar__platform-link',
        },
        {
          href: 'https://grillo.io',
          label: 'Grillo.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Install Grillo Pulse',
              to: '/hardware/grillo-pulse',
            },
            {
              label: 'Grillo Platform',
              to: '/dashboard',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Grillo Pulse',
              to: '/hardware/grillo-pulse',
            },
            {
              label: 'Grillo Platform',
              href: 'https://cloud.grillo.io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Grillo.io',
              href: 'https://grillo.io',
            },
            {
              label: 'Contact Support',
              to: '/support/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grillo Ltd. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
