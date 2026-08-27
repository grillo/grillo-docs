---
sidebar_position: 1
slug: /
title: Grillo Documentation
---

# Grillo Documentation

Set up Grillo seismic sensors, manage them in Grillo Platform, and understand the earthquake information produced by your network.

<div className="docs-journey-grid">
  <div className="docs-journey-card">
    <h2>Install a Grillo Pulse</h2>
    <p>Identify your hardware, claim the sensor, prepare connectivity, install it, and verify that it is reporting.</p>
    <a href="/hardware/grillo-pulse/quick-start">Start the Pulse guide →</a>
  </div>
  <div className="docs-journey-card">
    <h2>Set up Grillo Platform</h2>
    <p>Create an account and organization, create a seismic network, and claim your first sensor.</p>
    <a href="/dashboard">Start the Platform guide →</a>
  </div>
  <div className="docs-journey-card">
    <h2>Use Platform modules</h2>
    <p>Explore Earthquake Monitoring and learn about modules planned for other monitoring applications.</p>
    <a href="/events">Explore Earthquake Monitoring →</a>
  </div>
</div>

:::note Current scope
These docs cover Grillo Pulse and the hosted Grillo Platform at [cloud.grillo.io](https://cloud.grillo.io). Grillo One and Grillo Slide are listed as coming soon; their setup documentation will be published when ready.
:::

## New installation checklist

1. Confirm the model, hardware revision, and connectivity variant on your order or device label.
2. [Create your Platform account](/dashboard/account/creating-account).
3. Create or select an organization.
4. [Create a seismic network](/dashboard/networks/creating-network).
5. [Claim the sensor](/dashboard/sensors/adding-sensor) with its 12-character Device ID.
6. Follow the installation guide for your exact sensor variant.
7. Verify its status, last-seen time, connectivity, and power information in Platform.

:::warning Verify hardware before applying power
Pulse power and USB requirements vary by hardware revision. Do not use a generic power supply or assume USB can power the sensor. Follow the documentation supplied with your unit or contact Grillo Support if its revision-specific instructions are unavailable.
:::

## Need help?

Read the [support FAQ](/support/faq) or [contact Grillo Support](/support/contact). Include the Device ID, hardware revision, connectivity variant, and a description of what you see in Platform.
