---
title: Projects and settings
---

A project holds one team's sensors, events or triggers, alerts, and members. Everything you see in Grillo Cloud belongs to the project picked in the project selector, at the top right. If you belong to more than one project, pick another there to switch the whole dashboard to it.

To get a new project, or to change a project's [plan](/dashboard/plans), [contact Grillo Support](/support/contact).

## Settings

Open the account menu (your initials, top right) and choose **Your settings** or **Project settings**. The sections are listed on the left.

**You**

| Section | Use it to |
|---|---|
| **Profile** | Change your name and password, and the Google or Microsoft accounts you sign in with. See [Your settings](/dashboard/account/creating-account#your-settings). |

**Project**

| Section | Use it to | Who sees it |
|---|---|---|
| **Members** | See who belongs to the project; add, remove, and change the role of members; manage pending invitations. See [Add Colleagues](/dashboard/organizations/managing-members). | Members see the list; owners and admins change it |
| **General** | Rename the project, and see its plan and network code | Owners and admins |
| **Sensors** | Claim a sensor by its Device ID, or unclaim one. See [Claim a Sensor](/dashboard/sensors/adding-sensor). | Owners and admins |
| **Triggers** | The project's trigger settings: channel, threshold, and how much is recorded before and after the shaking. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode). | Owners, on the Structural plan |
| **Trigger alerts** | Who gets alerts when shaking reaches the alert level, by email, webhook, or SMS. See [Trigger Alerts](/dashboard/alerts). | Owners and admins, on the Structural plan |
| **Earthquake alerts** | Who gets alerts when Grillo detects an earthquake, and from what magnitude. See [Earthquake Alerts](/events/earthquake-alerts). | Owners and admins, on the Seismic and Enterprise plans |
| **Data destination** | The server your sensors send their seismic data to. See [Send Data to Your Own Server](/dashboard/data/data-server). | Members see it; owners and admins change it. Network plan only |
| **Ownership** | Transfer the project to another member, or delete it | Owners |

A section your role or plan does not include is not listed. Opening it directly says why.

## Roles

Each person in a project has a role.

| Role | Can do |
|---|---|
| **Viewer** | See **Live**, **Events**, and **Alerts** (on Structural: **Live** and **Triggers**), without sensor pages or waveforms. On the Network plan, see the sensor list. Viewers cannot change anything. |
| **Member** | Use every page, and see the members list. Cannot change settings. |
| **Admin** | Everything a member can, plus add and remove members, rename the project, claim, unclaim, and edit sensors, and set up trigger and earthquake alerts |
| **Owner** | Everything an admin can, plus send settings to sensors, change the project's trigger settings, make someone else an owner, and transfer or delete the project |

Owners and admins change roles in **Project settings → Members**. Only an owner can make someone an owner or change another owner's role.

## Transfer or delete a project

Owners can do both in **Project settings → Ownership**.

- **Transfer ownership:** choose a member under **New owner** and confirm. They become the owner, and you become an admin.
- **Delete project:** type the project's name to confirm, then select **Delete project**. This deletes the project and every membership in it, and cannot be undone.

## Leave a project

Owners and admins can leave in **Project settings → Members**: select **Remove** on your own row and confirm **Leave project**. A project's last owner cannot leave; transfer ownership first.

Members and viewers: ask an owner or admin of the project to remove you.
