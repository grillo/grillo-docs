---
sidebar_position: 6
title: Configuring Sensors
---

# Configuring Sensors

Learn how to configure sensor settings remotely from the Grillo Cloud dashboard.

## Accessing configuration

1. Navigate to the sensor detail pane
2. Click the **"Configuration"** tab or **"Edit"** button
3. The configuration form will open

![Sensor configuration](/img/screenshots/08-sensor-edit.png)

## Configuration categories

### Station identification

Configure how the sensor is identified in the seismic data community:

| Field | Description | Example |
|-------|-------------|---------|
| Station code | FDSN station identifier | "GRIL01" |
| Network code | Network identifier | "GR" |
| Location code | Location modifier | "00" |

[Detailed station naming guide →](/dashboard/sensors/station-naming)

### Location information

Set the sensor's geographic position:

| Field | Description |
|-------|-------------|
| Latitude | Decimal degrees (-90 to 90) |
| Longitude | Decimal degrees (-180 to 180) |
| Elevation | Meters above sea level |
| Site name | Location description |

[Detailed location guide →](/dashboard/sensors/location-info)

### Display settings

Configure how the sensor appears in the dashboard:

| Field | Description |
|-------|-------------|
| Display name | Friendly name for the sensor |
| Description | Notes about the installation |
| Tags | Labels for organization |

### Data settings

Configure data collection parameters:

<!-- TODO: Confirm available data settings -->

| Setting | Options |
|---------|---------|
| Sample rate | Standard, High, Low |
| Data format | Native, miniSEED |
| Compression | Enabled, Disabled |

## Making changes

### Edit process

1. Open the configuration form
2. Make your changes
3. Review the changes
4. Click **"Save"**

### Configuration sync

After saving:
1. Changes are stored in Grillo Cloud
2. Configuration is sent to the sensor
3. Sensor acknowledges receipt
4. Status updates to show new config

:::note
Configuration sync requires the sensor to be online. Changes will be applied when offline sensors reconnect.
:::

### Pending changes

If the sensor is offline:
- Changes are queued
- Status shows "Pending configuration"
- Applied when sensor reconnects

## Bulk configuration

### Updating multiple sensors

To apply the same configuration to multiple sensors:

<!-- TODO: Confirm bulk config process -->

1. Select sensors in table view
2. Click **"Bulk edit"**
3. Choose fields to update
4. Enter new values
5. Apply to selected sensors

### Configuration templates

<!-- TODO: Confirm if templates are available -->

Save common configurations as templates:
1. Configure a sensor as desired
2. Click **"Save as template"**
3. Apply template to other sensors

## Advanced settings

### Network communication

Settings affecting how the sensor communicates:

| Setting | Description |
|---------|-------------|
| Heartbeat interval | Status update frequency |
| Data upload interval | How often data is sent |
| Retry behavior | How connection failures are handled |

### Firmware updates

Manage sensor firmware:

1. Check current firmware version
2. View available updates
3. Schedule or apply updates

:::warning
Firmware updates may cause brief disconnection. Plan accordingly.
:::

### Factory reset

Reset sensor to default configuration:

1. Navigate to Advanced settings
2. Click **"Factory reset"**
3. Confirm the action
4. Sensor will reset and need reconfiguration

## Configuration validation

### Required fields

Some fields are required:
- Station code (for FDSN compliance)
- Location coordinates (for map display)

### Format validation

Fields are validated for correct format:
- Coordinates must be valid ranges
- Station codes follow FDSN rules
- Names have character limits

### Error messages

If configuration fails:
- Error message explains the issue
- Invalid fields are highlighted
- Correct errors and retry

## Configuration history

### Viewing history

See past configuration changes:
1. Open sensor details
2. Navigate to History tab
3. View configuration changelog

### Reverting changes

To undo a configuration change:
1. Find the previous configuration in history
2. Click **"Restore"**
3. Confirm the revert

## Best practices

### Before configuring

- Ensure sensor is online for immediate sync
- Document current settings before changing
- Test changes on one sensor before bulk apply

### Naming conventions

- Use consistent station code formats
- Include meaningful location information
- Document any non-standard configurations

### Change management

- Log significant configuration changes
- Coordinate changes with your team
- Monitor sensors after changes

## Troubleshooting

### Changes not applying

1. Verify sensor is online
2. Check pending configuration status
3. Refresh the page
4. Try saving again

### Validation errors

1. Check error messages
2. Verify field formats
3. Ensure required fields are filled
4. Review FDSN conventions

### Sensor not responding

1. Check sensor status
2. Verify network connectivity
3. Try restarting the sensor
4. Contact support if issues persist

## Related guides

- [Station naming (FDSN)](/dashboard/sensors/station-naming)
- [Location info](/dashboard/sensors/location-info)
- [Sensor status](/dashboard/sensors/sensor-status)
