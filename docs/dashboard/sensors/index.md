---
sidebar_position: 1
title: Sensors
---

# Sensors

The Sensors section of Grillo Cloud allows you to monitor, configure, and manage your Grillo devices.

## Overview

After adding sensors to a network, you can:
- View sensors on a map or in a table
- Monitor real-time sensor status
- Configure sensor settings remotely
- View detailed sensor information
- Export sensor data

## Accessing sensors

1. Navigate to your network
2. Sensors are shown in the main dashboard area
3. Switch between Map and Table views

## Sensor views

### Map view

Visualize sensor locations geographically:
- Sensors shown as markers on the map
- Color-coded by status
- Click for quick info
- Zoom and pan to explore

[Map view guide →](/dashboard/sensors/map-view)

### Table view

View sensors in a tabular format:
- Sortable columns
- Filterable by status
- Quick access to details
- Bulk operations

[Table view guide →](/dashboard/sensors/table-view)

### Sensor detail pane

View comprehensive information for a single sensor:
- Real-time status
- Configuration details
- Recent data
- Health metrics

[Sensor details guide →](/dashboard/sensors/sensor-details)

## Sensor lifecycle

```
1. Provision → 2. Add to Network → 3. Configure → 4. Monitor → 5. Maintain
```

| Stage | Description |
|-------|-------------|
| **Provision** | Connect sensor to Grillo Cloud |
| **Add to network** | Register sensor to a specific network |
| **Configure** | Set station name, location, metadata |
| **Monitor** | View status and data in dashboard |
| **Maintain** | Update settings, troubleshoot issues |

## Sensor status

Sensors can have the following statuses:

| Status | Icon | Description |
|--------|------|-------------|
| Online | Green | Connected and streaming data |
| Offline | Gray | Not currently connected |
| Warning | Yellow | Connected but with issues |
| Error | Red | Problem requiring attention |

## Guides in this section

- [Adding a sensor](/dashboard/sensors/adding-sensor)
- [Map view](/dashboard/sensors/map-view)
- [Table view](/dashboard/sensors/table-view)
- [Sensor details](/dashboard/sensors/sensor-details)
- [Configuring sensors](/dashboard/sensors/configuring-sensor)
- [Station naming (FDSN)](/dashboard/sensors/station-naming)
- [Location info](/dashboard/sensors/location-info)
- [Sensor status](/dashboard/sensors/sensor-status)

## Quick actions

Common sensor tasks:

| Task | How to |
|------|--------|
| Add a sensor | Click "Add Sensor" in network view |
| Find a sensor | Use search or filter in table view |
| Check status | View status column/icon |
| Edit settings | Click sensor → Settings tab |
| Remove sensor | Sensor settings → Remove |

## Permissions

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View sensors | Yes | Yes | Yes | Yes |
| Add sensors | Yes | Yes | Yes | No |
| Configure sensors | Yes | Yes | Yes | No |
| Remove sensors | Yes | Yes | Yes | No |
| Export data | Yes | Yes | Yes | No |
