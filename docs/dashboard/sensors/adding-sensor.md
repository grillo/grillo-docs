---
sidebar_position: 2
title: Adding a Sensor
---

# Adding a Sensor

Register a provisioned Grillo sensor to your network in the dashboard.

## Prerequisites

Before adding a sensor, ensure:

- [ ] Sensor is physically installed ([Grillo One](/hardware/grillo-one) | [Grillo Pulse](/hardware/grillo-pulse))
- [ ] Sensor is connected to the internet
- [ ] Sensor is provisioned to Grillo Cloud
- [ ] You have the sensor's serial number
- [ ] You have User role or higher in the organization

## Adding a sensor

### Step 1: Navigate to your network

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Select your organization
3. Click on the network where you want to add the sensor

### Step 2: Start the add process

1. Click **"Add Sensor"** button
2. Or click the **"+"** icon in the sensors section

![Add sensor button](/img/placeholder-add-sensor.svg)
<!-- TODO: Replace with actual screenshot -->

### Step 3: Identify your sensor

#### Option A: Scan QR code (Recommended)

1. Select **"Scan QR code"**
2. Use your device camera to scan the QR code on the sensor
3. The serial number will be automatically entered

#### Option B: Enter serial number manually

1. Select **"Enter manually"**
2. Type the sensor's serial number
3. Serial number is found on the bottom/label of the device

### Step 4: Select sensor type

Choose the correct device type:
- **Grillo One** - Indoor sensor with WiFi/Ethernet
- **Grillo Pulse** - Outdoor sensor with WiFi/Cellular

### Step 5: Confirm and add

1. Verify the serial number is correct
2. Click **"Add to network"**
3. Wait for confirmation

## After adding

### Sensor status

After adding, the sensor will show:
- **Pending** - Waiting for sensor to connect
- **Online** - Successfully connected and streaming

If the sensor stays "Pending":
1. Verify the sensor has power
2. Check network connectivity on the device
3. Wait a few minutes for connection
4. See [troubleshooting guides](/hardware/grillo-one/troubleshooting)

### Next steps

After the sensor shows "Online":

1. **Set station name** - [Configure FDSN station code](/dashboard/sensors/station-naming)
2. **Set location** - [Add coordinates and metadata](/dashboard/sensors/location-info)
3. **Configure settings** - [Adjust sensor parameters](/dashboard/sensors/configuring-sensor)

## Adding multiple sensors

### One at a time

Repeat the process above for each sensor. This is recommended for:
- First-time setup
- When sensors need individual configuration
- When verifying each sensor works

### Bulk import

<!-- TODO: Confirm if bulk import is available -->

For adding many sensors at once:

1. Click **"Add Sensor"** → **"Bulk import"**
2. Upload a CSV file with serial numbers
3. Map columns to fields
4. Import all sensors

CSV format:
```csv
serial_number,type,name
ABC123,grillo-one,Sensor 1
DEF456,grillo-pulse,Sensor 2
```

## Moving sensors between networks

To move a sensor to a different network:

1. Remove the sensor from the current network
2. Add it to the new network using the same serial number

The sensor will retain its provisioning and connect to the new network.

## Replacing a sensor

If you need to replace a faulty sensor:

1. Note the current sensor's configuration (station name, location, etc.)
2. Remove the old sensor from the network
3. Add the new sensor
4. Apply the same configuration to the new sensor

## Troubleshooting

### "Serial number not found"

1. Verify the serial number is entered correctly
2. Check for typos (O vs 0, l vs 1)
3. Ensure the sensor has been provisioned
4. Contact support if the sensor should exist

### "Sensor already in use"

The sensor is registered to another network:
1. If it's your network, remove it first then re-add
2. If it's another organization's, contact support

### Sensor won't come online

1. Check sensor has power (LED on)
2. Verify network connectivity (WiFi/Ethernet/Cellular)
3. Check firewall isn't blocking connections
4. Review hardware troubleshooting guides

### Wrong network

If you added a sensor to the wrong network:
1. Go to the sensor's settings
2. Click **"Remove from network"**
3. Navigate to the correct network
4. Add the sensor again

## Related guides

- [Grillo One provisioning](/hardware/grillo-one/provisioning)
- [Grillo Pulse provisioning](/hardware/grillo-pulse/provisioning)
- [Configuring sensors](/dashboard/sensors/configuring-sensor)
