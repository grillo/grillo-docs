---
sidebar_position: 1
title: Networks
---

# Networks

A seismic network in Grillo Cloud is a collection of sensors working together to monitor ground motion in a geographic area.

## What is a network?

A network represents:
- A group of related sensors
- A geographic monitoring area
- A unit for event detection (if enabled)
- An organizational boundary for data

## Examples of networks

- **Regional network** - Sensors across a city or state
- **Campus network** - Sensors around a university or corporate campus
- **Building network** - Sensors monitoring a single structure
- **Research network** - Sensors for a specific study or project

## Network hierarchy

```
Organization
└── Network
    ├── Sensor 1
    ├── Sensor 2
    ├── Sensor 3
    └── Events (detected from network data)
```

A network belongs to one organization and contains multiple sensors.

## Creating a network

To create a new network:

1. Navigate to your organization
2. Click **"Networks"** in the sidebar
3. Click **"Create network"**
4. Enter network name and details
5. Click **"Create"**

[Detailed guide →](/dashboard/networks/creating-network)

## Network features

### Sensor management

- Add sensors to the network
- View all sensors on a map
- Monitor sensor health and status
- Configure sensor settings

### Data visualization

- Map view of sensor locations
- Table view of sensor data
- Individual sensor detail panels
- Real-time data streaming

### Event detection (Premium)

With the events add-on:
- Automatic earthquake detection
- Event catalog generation
- Real-time alerts
- API access to events

[Learn about Events →](/events)

## Network settings

Configure your network:

| Setting | Description |
|---------|-------------|
| Name | Display name for the network |
| Description | Purpose or coverage area |
| Location | Geographic center (for map view) |
| Timezone | Default timezone for the network |
| Event detection | Enable/disable (if subscribed) |

[Network settings guide →](/dashboard/networks/network-settings)

## Network limits

<!-- TODO: Confirm actual limits -->

| Resource | Limit |
|----------|-------|
| Sensors per network | TBD |
| Networks per organization | TBD |

## Guides in this section

- [Creating a network](/dashboard/networks/creating-network)
- [Network settings](/dashboard/networks/network-settings)
- [Network best practices](/dashboard/networks/network-best-practices)

## Best practices

### Network organization

**By geography:**
- "Northern California Network"
- "Mexico City Network"

**By purpose:**
- "Research Network - Project Alpha"
- "Early Warning Network"

**By building/campus:**
- "Main Campus Sensors"
- "Building A Monitoring"

### Single vs multiple networks

**Use one network when:**
- All sensors serve the same purpose
- You want unified event detection
- Sensors are in the same general area

**Use multiple networks when:**
- Sensors serve different purposes
- You need separate event detection
- You want to organize by location/building
- Different teams manage different sensors
