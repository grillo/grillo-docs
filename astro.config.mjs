// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import starlightLinksValidator from 'starlight-links-validator';

const INTERCOM_APP_ID = 'hkgzlx5c';

/** @param {string} slug */
const overview = (slug) => ({slug, label: 'Overview'});

export default defineConfig({
  site: 'https://docs.grillo.io',
  // Same URLs as the Docusaurus site: /hardware/grillo-pulse, served from hardware/grillo-pulse.html.
  // 'preserve' writes page.html files like 'file', but keeps links and canonical URLs extensionless.
  trailingSlash: 'never',
  build: {format: 'preserve'},
  integrations: [
    // Must come before Starlight so it sees ```mermaid blocks first.
    mermaid({
      theme: 'base',
      autoTheme: false,
      enableLog: false,
      mermaidConfig: {
        fontFamily: 'Geist, system-ui, sans-serif',
        flowchart: {curve: 'basis', htmlLabels: true},
      },
    }),
    starlight({
      title: 'Grillo Docs',
      description: 'Earthquake and landslide monitoring made simple',
      favicon: '/favicon.svg',
      head: [
        {tag: 'link', attrs: {rel: 'icon', href: '/favicon.ico', sizes: '32x32'}},
        {tag: 'link', attrs: {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}},
        {tag: 'meta', attrs: {property: 'og:image', content: 'https://docs.grillo.io/img/grillo-cloud-social-structural-v1.jpg'}},
        {tag: 'meta', attrs: {name: 'twitter:image', content: 'https://docs.grillo.io/img/grillo-cloud-social-structural-v1.jpg'}},
        // Intercom Messenger boots itself from window.intercomSettings once the widget script loads.
        {
          tag: 'script',
          content: `window.intercomSettings={api_base:'https://api-iam.intercom.io',app_id:'${INTERCOM_APP_ID}'};`,
        },
        {tag: 'script', attrs: {src: `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`, defer: true}},
      ],
      editLink: {baseUrl: 'https://github.com/grillo/grillo-docs/edit/main/'},
      customCss: ['./src/styles/grillo.css'],
      routeMiddleware: './src/routeData.ts',
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        PageTitle: './src/components/PageTitle.astro',
        Search: './src/components/Search.astro',
      },
      plugins: [starlightLinksValidator({errorOnLocalLinks: false})],
      sidebar: [
        {slug: 'index', label: 'Home'},
        {
          label: 'Start here',
          items: [
            overview('getting-started'),
            'getting-started/what-is-grillo',
            'getting-started/choosing-your-sensor',
            {slug: 'hardware', label: 'All sensors'},
          ],
        },
        {
          label: 'Grillo Pulse',
          collapsed: true,
          items: [
            overview('hardware/grillo-pulse'),
            'hardware/grillo-pulse/quick-start',
            'hardware/grillo-pulse/whats-in-the-box',
            'hardware/grillo-pulse/provisioning',
            'hardware/grillo-pulse/network-setup',
            'hardware/grillo-pulse/sim-card-setup',
            'hardware/grillo-pulse/physical-installation',
            'hardware/grillo-pulse/troubleshooting',
          ],
        },
        {
          label: 'Grillo One',
          collapsed: true,
          items: [overview('hardware/grillo-one'), 'hardware/grillo-one/setup'],
        },
        {
          label: 'Grillo Slide',
          collapsed: true,
          items: [
            overview('hardware/grillo-slide'),
            'hardware/grillo-slide/sim-and-apn',
            'hardware/grillo-slide/installation',
            'hardware/grillo-slide/troubleshooting',
          ],
        },
        {
          label: 'Grillo Cloud',
          collapsed: true,
          items: [
            overview('dashboard'),
            'dashboard/account/creating-account',
            'dashboard/organizations',
            'dashboard/organizations/managing-members',
            'dashboard/plans',
            'dashboard/overview',
            'dashboard/billing',
          ],
        },
        {
          label: 'Sensors in Grillo Cloud',
          collapsed: true,
          items: [
            overview('dashboard/sensors'),
            'dashboard/sensors/adding-sensor',
            'dashboard/networks/creating-network',
            'dashboard/sensors/table-view',
            'dashboard/sensors/sensor-details',
            'dashboard/sensors/configuring-sensor',
            'dashboard/sensors/recording-mode',
            'dashboard/sensors/sensor-status',
            'dashboard/sensors/firmware-updates',
          ],
        },
        {
          label: 'Structural monitoring',
          collapsed: true,
          items: [overview('modules/structural-health-monitoring'), 'dashboard/triggers', 'dashboard/alerts'],
        },
        {
          label: 'Earthquake detection',
          collapsed: true,
          items: [
            overview('events'),
            'events/event-catalog',
            'events/event-details',
            'events/live-map',
            'events/earthquake-alerts',
            'events/how-detection-works',
          ],
        },
        {
          label: 'Data',
          collapsed: true,
          items: [
            'dashboard/data/waveforms',
            'dashboard/data/realtime-export',
            'dashboard/data/data-server',
            'dashboard/data/api',
          ],
        },
        {
          label: 'Grillo Cloud for Slide',
          collapsed: true,
          items: [
            overview('slide-cloud'),
            'slide-cloud/sites-and-devices',
            'slide-cloud/exports',
            'slide-cloud/firmware-and-api',
          ],
        },
        {
          label: 'Concepts',
          collapsed: true,
          items: [
            'concepts/seismic-networks',
            'concepts/sensor-placement',
            'concepts/data-quality',
            'concepts/earthquake-early-warning',
            'concepts/landslide-monitoring',
            'concepts/iot-approach',
          ],
        },
        {
          label: 'Support',
          collapsed: true,
          items: ['support/faq', 'support/contact'],
        },
      ],
    }),
    react(),
  ],
});
