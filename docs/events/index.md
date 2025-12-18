---
sidebar_position: 4
title: Events
---

# Events & Detection

The Events system is Grillo Cloud's advanced feature for automatic earthquake detection, cataloging, and alerting.

:::info Premium Feature
Event detection is available as an add-on to the standard Grillo Cloud subscription. [Contact sales](https://grillo.io) for pricing.
:::

## Overview

The Events system provides:
- **Automatic detection** - Earthquakes detected from your network's data
- **Event catalog** - Searchable database of detected events
- **Real-time alerts** - Immediate notification of significant events
- **API access** - Programmatic access to event data

## How it works

```
Sensor Data → Detection Algorithm → Event Processing → Alerts/Catalog
```

1. **Data collection** - Sensors stream data to Grillo Cloud
2. **Detection** - Algorithms analyze data for earthquake signals
3. **Processing** - Events are characterized (location, magnitude)
4. **Output** - Alerts sent and events added to catalog

## Key features

### Automatic detection

The system continuously monitors your network:
- P-wave detection for early warning
- Multi-station confirmation
- False positive filtering
- 24/7 automatic operation

[How detection works →](/events/how-detection-works)

### Event catalog

A searchable database of detected earthquakes:
- Date, time, location, magnitude
- Event details and parameters
- Export capabilities
- Historical records

[Using the event catalog →](/events/event-catalog)

### Real-time alerts

Get notified immediately when events occur:
- Email notifications
- Webhook/API delivery
- Configurable thresholds
- Multiple delivery channels

[Alert configuration →](/events/alerts)

### API integration

Access event data programmatically:
- Real-time event stream
- Historical queries
- Webhook delivery
- Standard formats

[API integration →](/events/alerts/api-integration)

## Getting started with Events

### 1. Subscribe to Events

Contact Grillo to add Events to your subscription:
- [Contact sales](https://grillo.io)
- Events enabled per network

### 2. Configure your network

Ensure your network is ready:
- Minimum number of sensors (typically 4+)
- Accurate sensor locations
- Sensors online and streaming

### 3. Enable detection

Once subscribed:
1. Navigate to Network Settings
2. Enable "Event Detection"
3. Configure detection parameters

### 4. Set up alerts

Configure how you receive event notifications:
1. Go to Alert Configuration
2. Set magnitude thresholds
3. Choose notification channels
4. Test your setup

## Requirements

### Minimum network requirements

<!-- TODO: Confirm actual requirements -->

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Sensors | 4 | 10+ |
| Coverage | 10 km radius | 50+ km radius |
| Online sensors | 3+ | 80%+ |
| Location accuracy | 100m | 10m |

### Detection capabilities

Detection quality depends on:
- Number of sensors
- Sensor distribution
- Data quality
- Network coverage

## Guides in this section

- [How detection works](/events/how-detection-works)
- [Event catalog](/events/event-catalog)
- [Event details](/events/event-details)
- [Alerts](/events/alerts)
- [Data export](/events/data-export)

## Use cases

### Early warning

Use event detection for:
- Public alert systems
- Automatic safety systems
- Emergency response activation

### Seismic monitoring

Create earthquake catalogs for:
- Research and analysis
- Regulatory compliance
- Historical records

### Infrastructure protection

Integrate alerts with:
- Building management systems
- Industrial safety systems
- Transportation networks
