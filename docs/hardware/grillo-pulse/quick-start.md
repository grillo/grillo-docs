---
title: Pulse Quick Start
---

# Pulse Quick Start

Bench-test a Grillo Pulse before you take it to site. It takes about 15 minutes and catches most problems while they are still easy to fix.

:::warning Before you connect anything
Power the sensor only from 9–16 V DC (12 V nominal), through its M12 power connector. Do not connect a USB cable. Open the enclosure only to plug in the geophone (step 3), or when Grillo Support asks you to.
:::

## 1. Inspect and record

- [ ] Check whether the sensor is Pulse Cellular or Pulse Ethernet.
- [ ] Record the 12-character Device ID from the label.
- [ ] Photograph the label and its QR code.
- [ ] Check the enclosure, connectors, and accessories for damage, and against your packing list. See [What's in the Box](/hardware/grillo-pulse/whats-in-the-box).

Stop and [contact support](/support/contact) if anything is damaged, missing, or does not match your order.

## 2. Claim it in Grillo Cloud

1. Sign in at [cloud.grillo.io](https://cloud.grillo.io).
2. Select your project in the project switcher.
3. Open **Sensors** and select the **+** button.
4. Type the Device ID or scan the QR code.
5. Enter the station code you have planned and select **Claim Device**.

The sensor appears in the list as **offline**. That is expected until it is powered and connected.

## 3. Plug in the geophone

The geophone ships unplugged. Do this once, with the power disconnected:

1. Open the enclosure lid.
2. Plug the geophone's JST lead into its JST connector on the circuit board. Push it fully home.
3. Leave the USB ports and the SIM alone.
4. Close the lid, checking that the seal is seated and no lead is trapped.

Without it, the sensor records no geophone data (channel `EHZ`).

## 4. Connect it

**Pulse Cellular**

- [ ] Screw the cellular antenna onto the SMA cellular connector, and the GPS puck antenna onto the SMA GPS connector.
- [ ] Check that you have mobile coverage where you are testing.

If Grillo supplied the SIM, it is already set up; there is nothing to configure.

**Pulse Ethernet**

- [ ] Connect the M12-to-Ethernet cable to the M12 Ethernet connector, and the other end to a port that gives out addresses automatically (DHCP).
- [ ] To use GPS timing, screw the GPS puck antenna onto the SMA GPS connector.
- [ ] Make sure the network allows outbound UDP on ports 5683 and 5684.

## 5. Power on

Connect the M12-to-DC power cable to the M12 power connector, then connect it to a 9–16 V DC supply (12 V nominal) or solar kit. The sensor starts, connects, and begins reporting.

- Pulse Ethernet usually comes online within a minute.
- Pulse Cellular can take up to 5 minutes the first time, while it registers on the mobile network and sets its clock.

The status lights are inside the enclosure and cannot be seen from outside, so use Grillo Cloud to check the sensor.

## 6. Check Grillo Cloud

- [ ] Find the sensor by Device ID or station code.
- [ ] It shows **online**.
- [ ] **Last Seen** is current.
- [ ] The connection type is **Cellular** or **Ethernet**, matching the variant.
- [ ] A firmware version is shown.
- [ ] For Pulse Cellular, signal strength is shown.

If any check fails, see [Troubleshooting](/hardware/grillo-pulse/troubleshooting) before you go to site.

## 7. Prepare for the site

- [ ] Plan where the sensor, antennas, and cables will go.
- [ ] Bring a level and suitable fixings for the mounting surface.
- [ ] Bring a phone to capture the coordinates at the sensor.

Continue with [Physical Installation](/hardware/grillo-pulse/physical-installation).
