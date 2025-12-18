---
sidebar_position: 5
title: Provisioning
---

# Provisioning - Grillo One

Provisioning connects your Grillo One sensor to your Grillo Cloud account, enabling remote monitoring and configuration.

## Prerequisites

Before provisioning, ensure you have:

- [ ] A Grillo Cloud account at [cloud.grillo.io](https://cloud.grillo.io)
- [ ] An organization created in the dashboard
- [ ] A network created within your organization
- [ ] Your sensor connected to the internet (WiFi or Ethernet)
- [ ] Your sensor's serial number (found on bottom of device)

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
   - Scan the QR code on the bottom of your sensor

5. **Confirm registration**
   - Verify the serial number matches your device
   - Click "Register" or "Confirm"

6. **Wait for connection**
   - The sensor will connect to your network within 1-2 minutes
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
   - Serial number (found on bottom of device)
   - Device type: Grillo One

5. **Complete registration**
   - Click "Register"
   - Wait for sensor to appear online

## After provisioning

Once your sensor is provisioned and online:

### 1. Verify data streaming

- Check the sensor's detail page in the dashboard
- You should see real-time or recent data indicators
- Waveform preview may be available

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

## Provisioning status

| Status | Meaning |
|--------|---------|
| Pending | Sensor registered but not yet connected |
| Online | Sensor connected and streaming data |
| Offline | Sensor registered but not currently connected |
| Error | Configuration or connection issue |

## Troubleshooting

### Sensor stays "Pending"

1. Verify the sensor has power (LED is on)
2. Check network connectivity
3. Ensure firewall allows outbound connections
4. Try restarting the sensor (unplug and replug power)

### Wrong network

If you accidentally added the sensor to the wrong network:

1. Remove the sensor from the current network
2. Re-add it to the correct network using the same process

### Serial number not recognized

1. Verify you're entering the correct serial number
2. Check for typos (0 vs O, 1 vs l)
3. Contact support if the sensor isn't in the system

## Deprovisioning

To remove a sensor from your network:

1. Navigate to the sensor in the dashboard
2. Open sensor settings
3. Click "Remove" or "Delete"
4. Confirm the action

:::warning
Deprovisioning removes the sensor from your network but does not factory reset the device. The sensor's network configuration (WiFi credentials) will remain intact.
:::

## Factory reset

To completely reset a sensor and clear all configuration:

1. Locate the reset button on the back of the device
2. Hold the reset button for 10+ seconds
3. Release when the LED changes pattern
4. The sensor will restart in setup mode

## Next steps

With your sensor provisioned:

1. [Configure sensor settings](/dashboard/sensors/configuring-sensor)
2. [Monitor sensor status](/dashboard/sensors/sensor-status)
3. [Set up additional sensors](/dashboard/sensors/adding-sensor)
