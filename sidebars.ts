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
      label: 'Sensors',
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
          link: {type: 'doc', id: 'hardware/grillo-one/index'},
          items: ['hardware/grillo-one/setup'],
        },
        {
          type: 'category',
          label: 'Grillo Slide',
          link: {type: 'doc', id: 'hardware/grillo-slide/index'},
          items: [
            'hardware/grillo-slide/sim-and-apn',
            'hardware/grillo-slide/installation',
            'hardware/grillo-slide/troubleshooting',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Grillo Cloud',
      link: {type: 'doc', id: 'dashboard/index'},
      items: [
        'dashboard/account/creating-account',
        'dashboard/organizations/index',
        'dashboard/organizations/managing-members',
        'dashboard/overview',
        {
          type: 'category',
          label: 'Sensors',
          link: {type: 'doc', id: 'dashboard/sensors/index'},
          items: [
            'dashboard/sensors/adding-sensor',
            'dashboard/networks/creating-network',
            'dashboard/sensors/table-view',
            'dashboard/sensors/map-view',
            'dashboard/sensors/sensor-details',
            'dashboard/sensors/configuring-sensor',
            'dashboard/sensors/sensor-status',
            'dashboard/sensors/firmware-updates',
          ],
        },
        'dashboard/data/data-server',
        'dashboard/data/realtime-export',
        {
          type: 'category',
          label: 'SISTEM Add-on',
          link: {type: 'doc', id: 'events/index'},
          items: [
            'dashboard/data/waveforms',
            'events/event-catalog',
            'events/event-details',
            'events/live-map',
            'events/how-detection-works',
          ],
        },
        'dashboard/billing',
        'modules/structural-health-monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Grillo Cloud for Slide',
      link: {type: 'doc', id: 'slide-cloud/index'},
      items: [
        'slide-cloud/sites-and-devices',
        'slide-cloud/exports',
        'slide-cloud/firmware-and-api',
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
        'concepts/landslide-monitoring',
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
