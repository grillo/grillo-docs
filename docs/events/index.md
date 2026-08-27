---
title: Earthquake Monitoring
---

# Earthquake Monitoring

Earthquake Monitoring, powered by SISTEM, is a Grillo Platform module for real-time earthquake detection, event cataloging, and earthquake early-warning workflows. It uses data from the sensor networks managed in Platform.

Availability and alert delivery depend on the organization's deployment.

## Events

The current Events interface supports:

- Events for the selected seismic network
- Start and end date filtering
- Sorting by time or magnitude
- Pagination
- Table and map views
- Event location, magnitude, depth, and issue time
- Associated picks and amplitudes when available
- Refresh when a new event notification arrives

[Use the event catalog →](/events/event-catalog)

## Live

The current Live page is a simulation and visualization tool built with mock event and station data. It must not be treated as an operational real-time warning display.

[Use the Live simulation →](/events/live-map)

:::warning Not a protective-action authority
Do not rely on the Live simulation as an official public warning source. Earthquake detection and early warning have unavoidable uncertainty and blind-zone limitations. Follow instructions from the responsible local authorities.
:::

## Availability

Module configuration, alert delivery, exports, and integrations depend on the deployment. Self-service email, SMS, webhook, API-key, and export controls are not currently available in the Platform interface.
