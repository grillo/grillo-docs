---
sidebar_position: 1
title: Getting Started
---

# Getting Started with Grillo

Welcome to Grillo! This guide will help you understand the Grillo ecosystem and get your earthquake monitoring system up and running.

## Overview

Grillo provides a complete earthquake monitoring solution consisting of:

1. **Hardware Sensors** - Grillo One or Grillo Pulse devices that detect ground motion
2. **Grillo Cloud** - A web dashboard (cloud.grillo.io) for managing sensors and viewing data
3. **Events System** - Advanced earthquake detection and alerting (optional add-on)

## Choose your deployment mode

Before getting started, decide how you want to use Grillo:

| | Full Cloud | Hybrid (Cloud + On-Premise) |
|-|-----------|---------------------------|
| **SOH / device monitoring** | Grillo Cloud | Grillo Cloud |
| **Seismic data processing** | Grillo Cloud | Your own server |
| **Earthquake detection** | Automatic via Grillo Cloud | Your own pipeline (Earthworm, etc.) |
| **Best for** | Turnkey deployments | Institutions with existing infrastructure |

**[Full Cloud](/getting-started/deployment-modes#mode-1-full-cloud-grillo-cloud-handles-everything):** Grillo Cloud ingests everything — SOH and seismic data — and handles detection, alerting, and visualization. Follow this guide as-is.

**[Hybrid](/getting-started/deployment-modes#mode-2-hybrid-cloud-monitoring--on-premise-seismic-processing):** Grillo Cloud monitors your devices via SOH, but seismic data goes to your server where [coap2seis](/guides/on-premise-integration) converts it for Earthworm or MiniSEED. Follow this guide for initial setup, then see [On-Premise Integration](/guides/on-premise-integration) to configure the data redirect.

[Learn more about deployment modes](/getting-started/deployment-modes)

## Getting started checklist

### 1. Choose your sensor

| Feature | Grillo One | Grillo Pulse |
|---------|------------|--------------|
| Connectivity | WiFi / Ethernet | WiFi / Cellular |
| Power | AC powered | AC powered with battery backup |
| Best for | Indoor, fixed installations | Remote or field deployments |
| [Learn more](/getting-started/choosing-your-sensor) | [Setup Guide](/hardware/grillo-one) | [Setup Guide](/hardware/grillo-pulse) |

### 2. Create your account

Sign up for a Grillo Cloud account at [cloud.grillo.io](https://cloud.grillo.io) using:
- Google account
- Microsoft account
- Email and password

[Account Setup Guide](/dashboard/account/creating-account)

### 3. Set up your organization

Organizations help you manage teams and multiple seismic networks. Create or join an organization to start adding sensors.

[Organizations Guide](/dashboard/organizations)

### 4. Create a network

A seismic network is a collection of sensors working together. Even a single sensor needs to belong to a network.

[Creating a Network](/dashboard/networks/creating-network)

### 5. Install and provision your sensor

Follow the hardware-specific guide to physically install your sensor and connect it to the cloud:
- [Grillo One Installation](/hardware/grillo-one/physical-installation)
- [Grillo Pulse Installation](/hardware/grillo-pulse/physical-installation)

### 6. Add your sensor to the dashboard

Register your sensor to your network and start receiving data.

[Adding a Sensor](/dashboard/sensors/adding-sensor)

## Next steps

Once your sensor is online:

- [Configure sensor settings](/dashboard/sensors/configuring-sensor) - Set station name, location, and metadata
- [Monitor sensor health](/dashboard/sensors/sensor-status) - Check connectivity and data quality
- **Full Cloud users:** [Explore the Events system](/events) - Set up earthquake detection and alerts
- **Hybrid users:** [Set up on-premise integration](/guides/on-premise-integration) - Configure coap2seis and redirect seismic data to your server

## Typical setup time

Most users complete their first sensor setup in **15-30 minutes**. This includes:
- Account creation (~2 minutes)
- Physical installation (~10 minutes)
- Network provisioning (~5 minutes)
- Dashboard configuration (~5 minutes)
