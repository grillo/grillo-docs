---
title: Grillo Cloud
---

# Grillo Cloud

Grillo Cloud at [cloud.grillo.io](https://cloud.grillo.io) is where you watch your Grillo Pulse and Grillo One sensors and work with their data: see earthquakes as they are detected, check every sensor's health, browse the event catalog, and download recorded waveforms.

Grillo Slide uses a separate dashboard. See [Grillo Cloud for Slide](/slide-cloud).

## What you can do

On every plan:

- See every sensor as tiles, in a table, or on a map, with its status and the reason for it
- Check each sensor's connectivity over the last 24 hours and 30 days, its signal, power, firmware, and location
- Read your project's data from your own software with the [Data API](/dashboard/data/api)

Then, depending on your project's [plan](/dashboard/plans):

- **Structural:** sensors record [triggers](/dashboard/triggers) when shaking crosses their threshold, and Grillo emails you when shaking reaches an [alert level](/dashboard/alerts)
- **Network:** sensors stream continuously; [download recorded waveforms](/dashboard/data/waveforms) and [stream them to your own ringserver](/dashboard/data/realtime-export)
- **Seismic and Enterprise:** everything in Network, plus [automatic earthquake detection](/events), an event catalog, and a [live map](/events/live-map)

## Navigation

The menu bar along the top of every page has:

| Page | Use it to |
|---|---|
| **Live map** | Watch stations and earthquake detections as they happen. This is the first page you see after signing in. See [Live Map](/events/live-map). |
| **Sensors** | Check the health of every sensor and open its details. See [Sensors](/dashboard/sensors). |
| **Events** | Browse the earthquakes Grillo Cloud has detected in the last 90 days. See [Event Catalog](/events/event-catalog). |
| **Archive** | Download recorded waveforms for a time window and a set of sensors. See [Download Waveforms](/dashboard/data/waveforms). |
| **Alerts** | The log of trigger email alerts sent for the project in the last 90 days. See [Trigger Alerts](/dashboard/alerts). |
| **Settings** | Your profile, and the project's members, recording and trigger settings, data settings, and billing. See [Settings](/dashboard/organizations). |

At the right of the menu bar:

- **Project.** If you belong to more than one project, choose the project here. Grillo Cloud reloads on the Live map of the project you chose. With one project, its name is shown instead.
- **Language.** **EN**, **FR**, or **KR** switches the dashboard between English, French, and Haitian Creole.
- **Account menu.** The circle with your initials shows your name and email, opens your **Profile**, and has **Log out**.

What you see depends on your [role](/dashboard/organizations#roles). Viewers and members see the same pages but cannot change sensors; see [What You Can Do as a Viewer or Member](/dashboard/account/viewer-and-member).

The browser tab shows the page and the project name, for example **Sensors · Grillo | My Project**.

## Pages from the previous dashboard

Some tasks are still on the pages of the previous Grillo Cloud dashboard. They are not in the menu bar, but they work at these addresses:

| Address | Use it to |
|---|---|
| [cloud.grillo.io/triggers](https://cloud.grillo.io/triggers) | Browse [triggers](/dashboard/triggers) recorded by Structural sensors |
| [cloud.grillo.io/organization](https://cloud.grillo.io/organization) | Change trigger defaults, [trigger alerts](/dashboard/alerts), and the [real-time export](/dashboard/data/realtime-export) |
| [cloud.grillo.io/waveforms](https://cloud.grillo.io/waveforms) | View recorded waveforms as charts |
| [cloud.grillo.io/account](https://cloud.grillo.io/account) | Leave a project |
| [cloud.grillo.io/billing](https://cloud.grillo.io/billing) | Open **Manage billing** to update your card |

Project owners and admins add sensors and change sensor settings. For firmware updates, [contact Grillo Support](/support/contact) with the Device ID.

Grillo creates projects and sets plans. Owners and admins invite and remove members themselves. See [Projects and Settings](/dashboard/organizations).
