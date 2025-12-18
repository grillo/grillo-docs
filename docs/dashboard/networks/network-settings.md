---
sidebar_position: 3
title: Network Settings
---

# Network Settings

Configure your seismic network's settings and preferences.

## Accessing network settings

1. Navigate to your network
2. Click **"Settings"** in the sidebar or toolbar
3. Or click the gear icon next to the network name

![Network settings](/img/placeholder-network-settings.svg)
<!-- TODO: Replace with actual screenshot -->

## General settings

### Network name

Change how the network is displayed:

1. Find "Network name" field
2. Enter the new name
3. Click **"Save"**

### Description

Add or update the network description:

- Purpose of the network
- Geographic coverage
- Notes for team members

### Default location

Set the geographic center for the map view:

1. Enter coordinates (latitude, longitude), or
2. Search for a location by name
3. The map will center here when viewing the network

### Timezone

Set the default timezone:

- Affects time displays in the dashboard
- Select from the dropdown list
- Users can override in their profile settings

## Data settings

<!-- TODO: Confirm available data settings -->

### Sample rate

If configurable at network level:

| Option | Use case |
|--------|----------|
| Standard | Normal monitoring |
| High-rate | Detailed analysis |
| Low-rate | Low bandwidth situations |

### Data retention

How long sensor data is stored:

| Tier | Retention |
|------|-----------|
| Free | TBD days |
| Standard | TBD days |
| Premium | TBD days |

## Event detection settings

If your network has event detection enabled:

### Detection parameters

<!-- TODO: Confirm detection settings -->

| Setting | Description |
|---------|-------------|
| Sensitivity | Detection threshold |
| Minimum stations | Sensors required to trigger |
| Coverage area | Geographic bounds for detection |

### Alert settings

Configure how events trigger alerts:

1. Navigate to Alert settings
2. Set magnitude thresholds
3. Configure notification channels
4. Save settings

[Learn more about alerts →](/events/alerts)

## Access settings

### Network visibility

<!-- TODO: Confirm visibility options -->

| Setting | Description |
|---------|-------------|
| Private | Only organization members can view |
| Public | Data visible to anyone (read-only) |

### API access

Enable or disable API access to network data:

1. Toggle API access
2. Generate API keys if needed
3. Set rate limits

[API documentation →](/api)

## Advanced settings

### Data export

Configure automatic data exports:

1. Enable scheduled exports
2. Set export frequency
3. Choose format (CSV, JSON, etc.)
4. Configure destination

### Integrations

Connect to external services:

<!-- TODO: Confirm available integrations -->

- Webhook endpoints
- Third-party monitoring systems
- Custom integrations via API

## Danger zone

Critical actions that cannot be undone:

### Archive network

Temporarily disable a network:
- Sensors stop reporting
- Data is preserved
- Can be reactivated later

### Delete network

Permanently remove the network:

1. Click **"Delete network"**
2. Type the network name to confirm
3. Click **"Permanently delete"**

:::danger
Deleting a network:
- Removes all sensor associations
- Deletes network configuration
- May affect event history
- **Cannot be undone**
:::

## Settings by role

| Setting | Owner | Admin | Member | Viewer |
|---------|-------|-------|--------|--------|
| View settings | Yes | Yes | Yes | Yes |
| Edit general settings | Yes | Yes | No | No |
| Edit data settings | Yes | Yes | No | No |
| Edit event settings | Yes | Yes | No | No |
| Delete network | Yes | Yes | No | No |

## Troubleshooting

### Settings not saving

1. Check your internet connection
2. Verify you have Admin or Owner role
3. Refresh the page and try again
4. Check for validation errors

### Can't find a setting

Some settings may be:
- Available only on certain subscription tiers
- Located in organization settings instead
- Accessible only to specific roles

## Next steps

- [Review network best practices](/dashboard/networks/network-best-practices)
- [Add sensors to your network](/dashboard/sensors/adding-sensor)
- [Configure event detection](/events)
