---
title: Plans
---

# Plans

Every Grillo Cloud project has a plan. The plan decides how your sensors record, and which data tools you get. Prices and the full feature comparison are on the [Grillo pricing page](https://grillo.io/pricing).

| Plan | Best for | Sensors record | Main tools |
|---|---|---|---|
| **Structural** | Buildings, warehouses, infrastructure | Triggered | [Triggers](/dashboard/triggers), [trigger alerts](/dashboard/alerts) |
| **Network** | Seismic networks that run their own processing | Continuous | **Archive**, [real-time export](/dashboard/data/realtime-export) |
| **Seismic** | Networks wanting automatic earthquake catalogs | Continuous | **Events**, **Live map**, **Archive** |
| **Enterprise** | National systems and earthquake early warning | Continuous | **Events**, **Live map**, **Archive** |

## Included in every plan

- Sensor health, status, and over-the-air firmware updates
- Live traces from your sensors
- Unlimited users in the project
- The [Data API](/dashboard/data/api)
- 12 months of data retention, unless your contract says otherwise

## Structural

Sensors measure all the time but upload only when shaking crosses their threshold. Each recording, called a **trigger**, keeps the waveform from before the threshold was crossed until the shaking stops. You see each trigger's peak ground acceleration and velocity, and you can get an email when shaking reaches an alert level.

See [Structural Monitoring](/modules/structural-health-monitoring).

## Network

Sensors stream continuously. You can review and [download the waveforms](/dashboard/data/waveforms) as miniSEED and CSV, and [stream them live to your own ringserver](/dashboard/data/realtime-export) for your own processing.

## Seismic

Everything in Network, plus [automatic earthquake detection](/events): an event catalog, a live map of detections, and in-app notifications.

## Enterprise

Everything in Seismic, scoped to your system. Enterprise can include earthquake early warning, more data retention and export destinations, private-cloud or on-premises hosting, and consultancy. [Contact Grillo](/support/contact) to scope it.

## See your plan

Project owners can see the plan, billing, and contract on the [Billing page](/dashboard/billing).

## Change your plan

Grillo changes plans for you. [Contact Grillo Support](/support/contact) to move to another plan.

When the plan changes between Structural and another plan, sensors that follow the plan switch between triggered and continuous recording at their next check-in, within about a minute. Sensors that have their [own recording mode](/dashboard/sensors/recording-mode) keep it.

## Pages outside your plan

If you open a page your plan does not include, for example **Events** on a Structural project, Grillo Cloud says it is not part of your plan and links to the page that is.
