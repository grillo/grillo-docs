---
title: Frequently Asked Questions
---

# Frequently Asked Questions

## Which products do these docs cover?

Grillo Pulse, Grillo One, and Grillo Slide sensors; Grillo Cloud for Pulse and One, with its SISTEM add-on; and Grillo Cloud for Slide.

## Where do I sign in?

- Pulse and One: [cloud.grillo.io](https://cloud.grillo.io)
- Slide: [slide.grillo.io](https://slide.grillo.io)

The two use separate accounts.

## How do I get an account?

Grillo Cloud accounts are by invitation. Grillo invites the owner of a new project, and owners and admins invite their colleagues. See [Create an Account](/dashboard/account/creating-account). For Slide, Grillo creates your sign-in.

## What is a Device ID?

For Pulse and One, the Device ID is the sensor's 12-character uppercase hexadecimal identifier, for example `A0B1C2D3E4F5`. It is on the sensor label. Record it before installing or sealing the device.

Slide devices are labelled with an ID that starts with `slide-`.

## What is the difference between claiming and connecting?

**Claiming** adds a sensor to your project in Grillo Cloud. **Connecting** is setting up the sensor's Ethernet, Wi-Fi, or cellular link. A claimed sensor stays offline until it is powered and connected.

## Why is my claimed sensor offline?

A sensor is online when Grillo Cloud has heard from it in the last 2.5 minutes. Check the project, the Device ID, power, and the connection. Follow [Verify Sensor Status](/dashboard/sensors/sensor-status).

## How should I power a Pulse?

Use only the 12 V DC supply provided with it. It cannot be powered from USB, and a powered USB cable can damage it. Do not open the enclosure unless Grillo Support asks you to.

## Does Pulse automatically switch between connection types?

No. Pulse Cellular uses the mobile network and Pulse Ethernet uses a wired network. The Wi-Fi hardware is not used as a fallback.

## Can I download my seismic data?

With the [SISTEM add-on](/events), yes. In Grillo Cloud, open the waveform review page and select **Download native CSV + metadata**. See [View and Download Waveforms](/dashboard/data/waveforms). For a continuous feed into your own seismic software, [send the data to your own server](/dashboard/data/data-server).

## Can I update firmware remotely?

For Grillo One and earlier Pulse units on firmware 1.x, yes. The current Pulse is updated by Grillo for now: see [Update Firmware](/dashboard/sensors/firmware-updates). Slide firmware is also updated over the air, the base over LTE and the rovers through the base: see [Firmware updates](/slide-cloud/firmware-and-api#firmware-updates).

## What is SISTEM?

SISTEM is an optional add-on to Grillo Cloud that detects earthquakes automatically and builds an event catalog. It also adds waveform viewing and download. Without it, Grillo Cloud covers sensor management. See [SISTEM](/events).

## Is there a public API?

Grillo Cloud for Pulse and One does not have a public API or API keys yet. Grillo Cloud for Slide offers read-only [API tokens](/slide-cloud/firmware-and-api#api-tokens).

## Is the Live map an official earthquake warning?

No. In Live mode it shows your project's real detections, and in Simulation mode it shows a made-up earthquake. Neither is a public warning service. See [Live Map](/events/live-map).

## How do I get help?

[Contact Grillo Support](/support/contact) with the Device ID, firmware version, the last-seen time shown in Grillo Cloud, and relevant photographs or screenshots.
