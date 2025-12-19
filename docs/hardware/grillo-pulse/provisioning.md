---
sidebar_position: 6
title: Provisioning
---

# Provisioning - Grillo Pulse

Provisioning connects your Grillo Pulse sensor to your Grillo Cloud account, enabling remote monitoring and configuration.

## Prerequisites

Before provisioning, ensure you have:

- [ ] A Grillo Cloud account at [cloud.grillo.io](https://cloud.grillo.io)
- [ ] An organization created in the dashboard
- [ ] A network created within your organization
- [ ] Your sensor connected to the internet (WiFi or cellular)
- [ ] Your sensor's Device ID (found on PCB label or packaging)

## Provisioning methods

### Method 1: QR code scan (Recommended)

The fastest way to provision your sensor:

1. **Open the Grillo Cloud dashboard**
   - Log into [cloud.grillo.io](https://cloud.grillo.io)

2. **Navigate to your network**
   - Select your organization
   - Select the network where you want to add the sensor

3. **Click "Add Sensor"**
   - Look for the add/plus button in the sensors section

4. **Scan QR code**
   - Use your phone's camera or the dashboard's scanner
   - Scan the QR code on the Pulse enclosure

5. **Select device type**
   - Choose "Grillo Pulse" when prompted

6. **Confirm registration**
   - Verify the Device ID matches your device
   - Click "Register" or "Confirm"

7. **Wait for connection**
   - The sensor will connect within 1-5 minutes
   - Status will change from "Pending" to "Online"

### Method 2: Manual entry

If QR scanning isn't available:

1. **Open the Grillo Cloud dashboard**
   - Log into [cloud.grillo.io](https://cloud.grillo.io)

2. **Navigate to your network**
   - Select your organization and network

3. **Click "Add Sensor"**
   - Choose "Manual entry" option

4. **Enter sensor details**
   - Device ID (found on PCB label or packaging)
   - Device type: Grillo Pulse

5. **Complete registration**
   - Click "Register"
   - Wait for sensor to appear online

## After provisioning

Once your sensor is provisioned and online:

### 1. Verify data streaming

- Check the sensor's detail page in the dashboard
- You should see real-time or recent data indicators
- Connection type should show WiFi or Cellular

### 2. Configure sensor settings

Set important metadata:

- **Station name** - FDSN-compatible station code
- **Location** - Coordinates (latitude, longitude)
- **Elevation** - Height above sea level
- **Site description** - Notes about the installation

[Learn more about sensor configuration →](/dashboard/sensors/configuring-sensor)

### 3. Verify on map

- Navigate to the map view
- Your sensor should appear at its configured location
- Click to verify details

### 4. Check connectivity details

For Pulse sensors, also verify:
- Connection type (WiFi vs Cellular)
- Signal strength
- Battery status (if applicable)

## Provisioning status

| Status | Meaning |
|--------|---------|
| Pending | Sensor registered but not yet connected |
| Online | Sensor connected and streaming data |
| Offline | Sensor registered but not currently connected |
| Error | Configuration or connection issue |

## Remote deployment considerations

For sensors deployed in remote locations:

### Pre-provision before deployment

1. Set up sensor on WiFi in your office/lab
2. Complete provisioning and verify it works
3. Configure settings (station name, etc.)
4. Then deploy to remote location with cellular

### Verify cellular before leaving site

When deploying remotely:
1. Install and power on sensor
2. Wait for cellular connection (up to 5 minutes)
3. Verify "Online" status in dashboard before leaving
4. Check signal strength is adequate

## Troubleshooting

### Sensor stays "Pending"

1. Verify the sensor has power (LED is on)
2. Check network connectivity (WiFi or cellular)
3. For cellular: verify SIM is active and has signal
4. Try restarting the sensor

### Wrong network

If you accidentally added the sensor to the wrong network:

1. Remove the sensor from the current network
2. Re-add it to the correct network using the same process

### Device ID not recognized

1. Verify you're entering the correct Device ID from the PCB label
2. Check for typos (0 vs O, 1 vs l)
3. Contact support if the sensor isn't in the system

### Cellular connection but not provisioning

1. Verify firewall/network allows connection to grillo.io
2. Check cellular data plan is active
3. Verify APN settings are correct

## Deprovisioning

To remove a sensor from your network:

1. Navigate to the sensor in the dashboard
2. Open sensor settings
3. Click "Remove" or "Delete"
4. Confirm the action

:::warning
Deprovisioning removes the sensor from your network but does not factory reset the device. Network configuration (WiFi credentials, cellular settings) will remain intact.
:::

## Factory reset

To completely reset a Grillo Pulse:

1. Open the enclosure (see [installation guide](/hardware/grillo-pulse/physical-installation))
2. Locate the reset button on the circuit board
3. Hold the reset button for 10+ seconds
4. Release when the LED changes pattern
5. Close and seal the enclosure
6. The sensor will restart in setup mode

## Next steps

With your sensor provisioned:

1. [Configure sensor settings](/dashboard/sensors/configuring-sensor)
2. [Monitor sensor status](/dashboard/sensors/sensor-status)
3. [Set up additional sensors](/dashboard/sensors/adding-sensor)
