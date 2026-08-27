import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Start Here',
      link: {type: 'doc', id: 'getting-started/index'},
      items: [
        'getting-started/what-is-grillo',
        'getting-started/choosing-your-sensor',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      link: {type: 'doc', id: 'hardware/index'},
      items: [
        {
          type: 'category',
          label: 'Grillo Pulse',
          link: {type: 'doc', id: 'hardware/grillo-pulse/index'},
          items: [
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
          type: 'category',
          label: 'Grillo One',
          link: {
            type: 'generated-index',
            slug: '/hardware/grillo-one',
            description: 'Documentation for Grillo One is coming soon.',
          },
          items: ['hardware/grillo-one/coming-soon'],
        },
        {
          type: 'category',
          label: 'Grillo Slide',
          link: {
            type: 'generated-index',
            slug: '/hardware/grillo-slide',
            description: 'Product and setup documentation for Grillo Slide is coming soon.',
          },
          items: ['hardware/grillo-slide/coming-soon'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Grillo Platform',
      link: {type: 'doc', id: 'dashboard/index'},
      items: [
        'dashboard/account/creating-account',
        'dashboard/organizations/index',
        'dashboard/organizations/managing-members',
        'dashboard/networks/creating-network',
        'dashboard/sensors/adding-sensor',
        'dashboard/sensors/table-view',
        'dashboard/sensors/map-view',
        'dashboard/sensors/sensor-details',
        'dashboard/sensors/configuring-sensor',
        'dashboard/sensors/sensor-status',
        'dashboard/billing',
        {
          type: 'category',
          label: 'Modules',
          items: [
            {
              type: 'category',
              label: 'Earthquake Monitoring',
              link: {type: 'doc', id: 'events/index'},
              items: [
                'events/event-catalog',
                'events/event-details',
                'events/live-map',
                'events/how-detection-works',
              ],
            },
            {
              type: 'category',
              label: 'Structural Health Monitoring',
              link: {type: 'doc', id: 'modules/structural-health-monitoring'},
              items: ['modules/structural-health-monitoring-status'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/seismic-networks',
        'concepts/sensor-placement',
        'concepts/data-quality',
        'concepts/earthquake-early-warning',
        'concepts/iot-approach',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: ['support/faq', 'support/contact'],
    },
  ],
};

export default sidebars;
