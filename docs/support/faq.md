---
title: Frequently Asked Questions
---

# Frequently Asked Questions

## Which products do these docs cover?

The supported navigation currently covers Grillo Pulse, hosted Grillo Platform, and its Earthquake Monitoring module. Grillo One is awaiting a separate documentation review. Local Platform installation documentation will be added later.

## Where is Grillo Platform?

Open [cloud.grillo.io](https://cloud.grillo.io).

## What is a Device ID?

A Device ID is the sensor's 12-character uppercase hexadecimal identifier, for example `A0B1C2D3E4F5`. Record it before installing or sealing the device.

## What is the difference between claiming and provisioning?

**Claiming** assigns a pre-registered sensor to an organization and seismic network in Platform. **Network provisioning** configures the sensor's Ethernet, cellular, or supported Wi-Fi connection. Claiming does not make an unconnected sensor Online.

## Why is my claimed sensor offline?

Check the active organization and network, Device ID, last-seen time, approved power arrangement, and variant-specific connectivity. Follow [Verify Sensor Status](/dashboard/sensors/sensor-status).

## How should I power a Pulse?

Use only the supplied power adapter through the sensor's barrel jack. Do not power it through a service port or open the enclosure unless instructed by Grillo Support.

## Does Pulse automatically switch between connection types?

Connection options depend on the sensor configuration supplied for the deployment. Do not assume automatic fallback between cellular, Ethernet, or Wi-Fi. Check the order information or contact support.

## Does Platform have a public API?

The current application has authenticated internal API routes, but these docs do not publish a supported external API contract. Contact Grillo about a specific integration. A public reference will return when a deployed, versioned contract is available.

## Is Live an operational earthquake feed?

No. The current Live page uses generated mock events and stations. It is a simulation, not a protective-action or public-warning service.

## How do I get help?

[Contact Grillo Support](/support/contact) with the Device ID, hardware revision, connectivity variant, firmware version, Platform last-seen time, and relevant photographs or screenshots.
