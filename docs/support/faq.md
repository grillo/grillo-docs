---
sidebar_position: 1
title: FAQ
---

# Frequently Asked Questions

Common questions about Grillo sensors and the Grillo Cloud platform.

## General

### What is Grillo?

Grillo is an earthquake technology company that provides affordable IoT-enabled seismic sensors and a cloud platform for earthquake monitoring and early warning.

### What can I do with Grillo sensors?

- Monitor earthquakes in your area
- Build seismic networks for your organization
- Receive earthquake early warnings
- Contribute to seismological research
- Protect critical infrastructure

### Do I need technical expertise?

No. Grillo sensors are designed for easy installation and the dashboard is user-friendly. Basic technical comfort is helpful but not required.

## Hardware

### What's the difference between Grillo One and Grillo Pulse?

| Feature | Grillo One | Grillo Pulse |
|---------|------------|--------------|
| Connectivity | WiFi / Ethernet | WiFi / Cellular |
| Use case | Indoor, fixed locations | Remote / outdoor |
| Battery backup | No | Yes |
| Best for | Offices, schools, homes | Field deployments |

[Detailed comparison →](/getting-started/choosing-your-sensor)

### What do I need to install a sensor?

- Power outlet nearby
- WiFi network (2.4 GHz) or Ethernet connection
- Stable, solid surface for mounting
- Grillo Cloud account

### Where should I place my sensor?

For best data quality:
- Ground floor or basement
- On solid surface (concrete ideal)
- Away from HVAC, appliances, traffic
- Level and stable

[Detailed placement guide →](/concepts/sensor-placement)

### Can I use my sensor outdoors?

- **Grillo One:** Indoor use only
- **Grillo Pulse:** Designed for outdoor use with weatherproof enclosure

### Does the sensor work without internet?

No. Sensors need an internet connection to stream data to Grillo Cloud. If connection is lost, the sensor will reconnect when internet is restored, but data during the outage is not recorded.

## Dashboard & Account

### How do I create an account?

Visit [cloud.grillo.io](https://cloud.grillo.io) and sign up using Google, Microsoft, or email.

[Account creation guide →](/dashboard/account/creating-account)

### Can I belong to multiple organizations?

Yes. You can be a member of multiple organizations and switch between them in the dashboard.

### What are user roles?

| Role | Can do |
|------|--------|
| Viewer | View data and sensors |
| Member | Add and configure sensors |
| Admin | Manage members and networks |
| Owner | Full control, billing, delete org |

[Roles guide →](/dashboard/organizations/user-roles)

### How do I add someone to my organization?

1. Go to Members section
2. Click "Invite member"
3. Enter their email
4. Select their role
5. Send invitation

[Managing members →](/dashboard/organizations/managing-members)

## Sensors & Networks

### How do I add a sensor to my network?

1. Ensure sensor is installed and powered
2. Go to your network in the dashboard
3. Click "Add Sensor"
4. Scan QR code or enter serial number

[Adding sensors →](/dashboard/sensors/adding-sensor)

### Why is my sensor showing offline?

Common causes:
- Power outage at sensor location
- Internet/WiFi connectivity lost
- Network configuration changed
- Sensor hardware issue

[Troubleshooting →](/hardware/grillo-one/troubleshooting)

### How many sensors do I need?

Depends on your goals:
- Basic monitoring: 1+ sensors
- Event detection: 4+ sensors minimum
- Accurate location: 6-10+ sensors
- Early warning: Dense network

[Network design →](/dashboard/networks/network-best-practices)

### Can I move a sensor to a different network?

Yes. Remove the sensor from its current network, then add it to the new network.

## Events & Detection

### What is the Events feature?

Events is an add-on feature that provides automatic earthquake detection, event cataloging, and alerting from your network's data.

[Events overview →](/events)

### How does earthquake detection work?

The system analyzes data from multiple sensors, detects earthquake signals, confirms across stations, calculates location and magnitude, and generates alerts.

[How detection works →](/events/how-detection-works)

### How fast are alerts?

Typically 5-20 seconds from earthquake origin to alert delivery, depending on:
- Distance from earthquake to nearest sensor
- Network density
- Processing time

### Will I get a warning before the earthquake?

The warning comes after the earthquake starts but before strong shaking reaches your location (if you're far enough from the epicenter). This is earthquake early warning, not prediction.

[About EEW →](/concepts/earthquake-early-warning)

## Data & Privacy

### Who owns the data from my sensors?

You retain ownership of data from your sensors. See terms of service for details.

### Can I export my data?

Yes. You can export event catalogs and sensor data in various formats (CSV, JSON, etc.).

[Data export →](/events/data-export)

### How long is data retained?

<!-- TODO: Confirm actual retention -->
- Sensor data: Varies by subscription tier
- Event catalog: Long-term retention
- Contact support for specific retention policies

### Is my data secure?

Yes. Grillo uses encryption in transit and at rest, and follows security best practices. See privacy policy for details.

## Billing & Subscriptions

### How much does Grillo cost?

Contact [Grillo sales](https://grillo.io) for current pricing on hardware and subscription plans.

### What's included in the basic subscription?

- Sensor connectivity and management
- Dashboard access
- Basic monitoring features

### What's the Events add-on?

Events is a premium feature adding:
- Automatic earthquake detection
- Event catalog
- Real-time alerts
- API access

## Technical

### What API access is available?

The Grillo API provides access to sensor data, events, and platform functionality.

[API documentation →](/api)

### Can I integrate with other systems?

Yes, via:
- REST API
- Webhooks for real-time events
- Data export

### What browsers are supported?

Modern versions of:
- Chrome
- Firefox
- Safari
- Edge

### Is there a mobile app?

The dashboard is mobile-responsive. Dedicated apps may be available—check grillo.io for current offerings.

## Getting help

### Where can I get support?

- This documentation
- [Contact support](/support/contact)
- Email: support@grillo.io

### I found a bug. How do I report it?

[Contact support](/support/contact) with:
- Description of the issue
- Steps to reproduce
- Screenshots if applicable
- Browser/device information
