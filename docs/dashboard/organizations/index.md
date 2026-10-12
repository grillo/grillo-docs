---
title: Projects
---

# Projects

A project holds one team's sensors, events, and members. Everything you see in Grillo Cloud belongs to the active project.

Grillo creates and manages projects for you. To get a new project, or to change an existing one, [contact Grillo Support](/support/contact).

## Switch projects

If you belong to more than one project, use the project switcher at the top of the sidebar. Grillo Cloud reloads and shows that project's sensors, events, and members.

## What Grillo manages for you

These are handled by Grillo's administrators. Ask Grillo Support to change any of them:

- Creating a project, and its name and FDSN network code
- The project's [plan](/dashboard/plans) and contract
- Adding and removing people, and their roles
- [API keys](/dashboard/data/api#get-an-api-key)
- The project's logo and branding
- Where the project's sensors send their seismic data. See [Send Data to Your Own Server](/dashboard/data/data-server).

Grillo staff use the **Admin** page for this; it is not available to customers.

## Project Settings

Open **Project Settings** in the sidebar to see the project's settings. Owners and admins can also change these:

- **Trigger defaults** (Structural plan): the trigger channel, threshold, and pre- and post-event times for triggered sensors. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode#set-the-projects-trigger-defaults).
- **Trigger alerts** (Structural plan): the alert level and who gets the emails. See [Trigger Alerts](/dashboard/alerts).
- **Real-time data export** (Network, Seismic, and Enterprise plans): stream live waveforms to your own ringserver. See [Stream Data to Your Own Ringserver](/dashboard/data/realtime-export).

## Roles

Each person in a project has a role, which controls what they can do with its sensors.

| Role | Can do |
|---|---|
| **Member** | Claim sensors, and see sensors, their health, triggers, events, and waveforms |
| **Admin** | Everything a member can, plus edit a sensor's station code and location, set its [recording mode and threshold](/dashboard/sensors/recording-mode), update its firmware, unclaim it, and change **Project Settings** |
| **Owner** | Everything an admin can, plus see [Billing](/dashboard/billing) |

To change someone's role, [contact Grillo Support](/support/contact).

## Leave a project

Open **Account** from the user menu. Your projects are listed there, each with a **Leave** button. Leaving removes your access to that project's sensors.
