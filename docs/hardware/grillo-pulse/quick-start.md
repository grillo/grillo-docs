---
title: Pulse Quick Start
---

# Pulse Quick Start

Use this checklist to bench-test a Grillo Pulse before field installation.

:::warning Before connecting the sensor
Use only the supplied power adapter and barrel jack. Do not open the enclosure, change internal components, or connect a service cable unless instructed by Grillo Support.
:::

## 1. Inspect and record

- [ ] Confirm whether the sensor uses cellular or Ethernet.
- [ ] Record the 12-character Device ID from the external label.
- [ ] Photograph the label before installation.
- [ ] Check the enclosure, power adapter, antennas, cables, and mounting parts for damage.
- [ ] Compare the shipment with its packing list.

Stop and [contact support](/support/contact) if an item is damaged, missing, or does not match the supplied instructions.

## 2. Prepare Grillo Cloud

1. Sign in at [cloud.grillo.io](https://cloud.grillo.io).
2. Select the intended project in the project switcher.
3. Open **Sensors** and select the **+** button.
4. Enter or scan the Device ID.
5. Assign the planned FDSN station code and select **Claim Device**.

The sensor can remain Offline until it is powered and connected.

## 3. Prepare connectivity

### Cellular sensor

- Confirm that cellular service is active for the supplied SIM.
- Connect the supplied antennas to their labelled enclosure connectors.
- Test coverage at the intended site.
- Ask Grillo Support before replacing the SIM or changing cellular settings.

### Ethernet sensor

- Connect the sensor to a network with internet access.
- Ask the network administrator to permit its outbound connection.
- Use the supplied weatherproof connection procedure for outdoor installations.

## 4. Power on

1. Connect the supplied adapter to the sensor's barrel jack.
2. Connect the adapter to power.
3. Allow the sensor time to start and establish its network connection.

Use Grillo Cloud—not internal LEDs—as the primary setup indicator.

## 5. Verify in Grillo Cloud

- [ ] Select the correct project.
- [ ] Find the exact Device ID and station code.
- [ ] Confirm **online**.
- [ ] Confirm **Last Seen** is current.
- [ ] Confirm the expected connection type.
- [ ] Confirm the firmware version is displayed.

Some health fields vary by sensor configuration. A blank or unavailable field does not necessarily indicate a fault.

If the sensor does not pass these checks, use [Pulse troubleshooting](/hardware/grillo-pulse/troubleshooting) before field deployment.

## 6. Prepare the field installation

- [ ] Record final coordinates and elevation.
- [ ] Choose a rigid, low-noise mounting surface.
- [ ] Plan antenna placement, drainage, cable strain relief, and physical security.
- [ ] Take the supplied enclosure and mounting instructions to the site.
- [ ] Repeat the Grillo Cloud checks at the final location before leaving.

Continue with [Physical Installation](/hardware/grillo-pulse/physical-installation).
