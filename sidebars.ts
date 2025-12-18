import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/what-is-grillo',
        'getting-started/choosing-your-sensor',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      link: {
        type: 'doc',
        id: 'hardware/index',
      },
      items: [
        {
          type: 'category',
          label: 'Grillo One',
          link: {
            type: 'doc',
            id: 'hardware/grillo-one/index',
          },
          items: [
            'hardware/grillo-one/whats-in-the-box',
            'hardware/grillo-one/physical-installation',
            'hardware/grillo-one/network-setup',
            'hardware/grillo-one/provisioning',
            'hardware/grillo-one/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Grillo Pulse',
          link: {
            type: 'doc',
            id: 'hardware/grillo-pulse/index',
          },
          items: [
            'hardware/grillo-pulse/whats-in-the-box',
            'hardware/grillo-pulse/physical-installation',
            'hardware/grillo-pulse/network-setup',
            'hardware/grillo-pulse/sim-card-setup',
            'hardware/grillo-pulse/provisioning',
            'hardware/grillo-pulse/troubleshooting',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      link: {
        type: 'doc',
        id: 'dashboard/index',
      },
      items: [
        {
          type: 'category',
          label: 'Account',
          items: [
            'dashboard/account/creating-account',
            'dashboard/account/accepting-invites',
            'dashboard/account/profile-settings',
            'dashboard/account/security',
          ],
        },
        {
          type: 'category',
          label: 'Organizations',
          link: {
            type: 'doc',
            id: 'dashboard/organizations/index',
          },
          items: [
            'dashboard/organizations/creating-org',
            'dashboard/organizations/managing-members',
            'dashboard/organizations/user-roles',
          ],
        },
        {
          type: 'category',
          label: 'Networks',
          link: {
            type: 'doc',
            id: 'dashboard/networks/index',
          },
          items: [
            'dashboard/networks/creating-network',
            'dashboard/networks/network-settings',
            'dashboard/networks/network-best-practices',
          ],
        },
        {
          type: 'category',
          label: 'Sensors',
          link: {
            type: 'doc',
            id: 'dashboard/sensors/index',
          },
          items: [
            'dashboard/sensors/adding-sensor',
            'dashboard/sensors/map-view',
            'dashboard/sensors/table-view',
            'dashboard/sensors/sensor-details',
            'dashboard/sensors/configuring-sensor',
            'dashboard/sensors/station-naming',
            'dashboard/sensors/location-info',
            'dashboard/sensors/sensor-status',
          ],
        },
        {
          type: 'category',
          label: 'Settings',
          link: {
            type: 'doc',
            id: 'dashboard/settings/index',
          },
          items: [
            'dashboard/settings/notifications',
            'dashboard/settings/api-keys',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'doc',
        id: 'events/index',
      },
      items: [
        'events/how-detection-works',
        'events/event-catalog',
        'events/event-details',
        {
          type: 'category',
          label: 'Alerts',
          link: {
            type: 'doc',
            id: 'events/alerts/index',
          },
          items: [
            'events/alerts/alert-configuration',
            'events/alerts/api-integration',
          ],
        },
        'events/data-export',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/seismic-networks',
        'concepts/iot-approach',
        'concepts/earthquake-early-warning',
        'concepts/sensor-placement',
        'concepts/data-quality',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        'api/authentication',
        'api/endpoints',
        'api/webhooks',
        'api/rate-limits',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/faq',
        'support/contact',
        'support/warranty',
      ],
    },
  ],
};

export default sidebars;
