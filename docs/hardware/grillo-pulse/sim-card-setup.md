---
sidebar_position: 5
title: SIM Card Setup
---

# SIM Card Setup - Grillo Pulse

This guide covers how to install and configure a SIM card in your Grillo Pulse for cellular connectivity.

## SIM card requirements

### Compatible SIM types

<!-- TODO: Confirm supported technologies -->

| Technology | Supported | Notes |
|------------|-----------|-------|
| LTE Cat-M1 | Yes | Recommended |
| NB-IoT | Yes | Lower power, higher latency |
| 4G LTE | TBD | Check compatibility |
| 3G/2G | No | Not supported |

### SIM card size

- **Standard size:** TBD (Mini/Micro/Nano)
- Adapters may be included if needed

### Data plan requirements

- Minimum: TBD MB/month
- Recommended: TBD MB/month or unlimited
- M2M/IoT data plans work well

## Supported carriers

<!-- TODO: Add region-specific carrier information -->

### North America

| Carrier | Compatible | Notes |
|---------|------------|-------|
| TBD | TBD | TBD |

### Latin America

| Carrier | Compatible | Notes |
|---------|------------|-------|
| TBD | TBD | TBD |

### Europe

| Carrier | Compatible | Notes |
|---------|------------|-------|
| TBD | TBD | TBD |

:::note
Contact Grillo support for carrier compatibility in your region.
:::

## Installing the SIM card

### Before you begin

- Power off the sensor
- Work in a clean, dry environment
- Have a small Phillips screwdriver ready

### Installation steps

<!-- TODO: Add actual installation process with images -->

1. **Power off the sensor**
   - Disconnect power cable
   - Wait 30 seconds for complete shutdown

2. **Open the enclosure**
   - Locate the enclosure screws
   - Remove screws carefully (keep track of them)
   - Gently separate the enclosure halves

3. **Locate the SIM slot**
   - Find the SIM card holder on the circuit board
   - Note the orientation diagram near the slot

4. **Insert the SIM card**
   - Orient the SIM according to the diagram
   - Slide into the slot until it clicks
   - Do not force - it should slide in smoothly

5. **Close the enclosure**
   - Align the enclosure halves
   - Ensure no cables are pinched
   - Replace and tighten all screws
   - Verify weatherproof seal is intact

6. **Reconnect power**
   - Connect the power cable
   - Wait for boot sequence to complete

![SIM card installation diagram](/img/placeholder-sim-install.svg)
<!-- TODO: Replace with actual installation image -->

## Activating your SIM

### Pre-activated SIM (included with some units)

If your Pulse came with a pre-activated SIM:
1. SIM should connect automatically
2. Check dashboard for online status
3. No additional activation needed

### Carrier-provided SIM

If using a SIM from your carrier:

1. **Purchase data plan**
   - Contact carrier for IoT/M2M plan
   - Provide device IMEI if requested

2. **Activate SIM**
   - Follow carrier's activation process
   - This may take up to 24 hours

3. **Note APN settings**
   - Get APN name from carrier
   - Username/password if required

4. **Install and configure**
   - Install SIM in sensor
   - Configure APN if needed (see below)

## APN configuration

Most carriers work with automatic APN detection. Manual configuration may be needed for some carriers.

### Accessing APN settings

<!-- TODO: Add actual APN configuration interface -->

1. Connect to sensor's configuration interface
2. Navigate to Cellular settings
3. Enter APN information

### Common APN settings

<!-- TODO: Add actual carrier APNs -->

| Carrier | APN | Username | Password |
|---------|-----|----------|----------|
| Example Carrier | internet.example.com | (blank) | (blank) |

### APN troubleshooting

If cellular won't connect after APN configuration:

1. Verify APN spelling exactly matches carrier's info
2. Check if username/password required
3. Restart sensor after changes
4. Contact carrier to verify APN

## Verifying cellular connection

After SIM installation:

1. **Check LED status**
   - Should show cellular connection indicator
   - May take 2-5 minutes for initial connection

2. **Check signal strength**
   - View in configuration interface or dashboard
   - Minimum 2 bars recommended

3. **Verify in dashboard**
   - Log into cloud.grillo.io
   - Check sensor shows "Online"
   - Verify connection type shows "Cellular"

## SIM card management

### Monitoring data usage

- Check usage through your carrier's portal
- Dashboard may show data statistics
- Set up alerts for high usage

### Changing SIM cards

To replace or change SIM:

1. Power off sensor
2. Open enclosure
3. Remove old SIM (press to eject if spring-loaded)
4. Insert new SIM
5. Close enclosure
6. Update APN settings if needed

### SIM security

- Some carriers support SIM PIN protection
- Consider for high-security deployments
- Note: PIN entry may require physical access

## Troubleshooting

### SIM not detected

1. Power off and reseat the SIM
2. Verify SIM orientation
3. Check for bent pins in slot
4. Try SIM in a phone to verify it works

### No cellular connection

1. Verify SIM is activated with carrier
2. Check cellular coverage at location
3. Verify antenna is connected
4. Check APN settings

### Intermittent connection

1. Check signal strength
2. Reposition antenna
3. Verify data plan is active
4. Check for carrier outages

[Full troubleshooting guide →](/hardware/grillo-pulse/troubleshooting)

## Next steps

After SIM setup:

1. [Configure network settings](/hardware/grillo-pulse/network-setup)
2. [Provision to Grillo Cloud](/hardware/grillo-pulse/provisioning)
