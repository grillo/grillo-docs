---
title: Firmware and API Access
---

# Firmware and API Access

## Firmware updates

Slide firmware is updated over the air. Nobody needs to visit the site.

- The **base** downloads its update over LTE after it uploads its readings.
- The base then passes the update to the **rovers** over the radio mesh during a cycle, to all of them at once.
- A new version is on trial until it proves it can still deliver readings. If it cannot, the device rolls back to the previous version by itself, reports it, and refuses that version from then on.

Updates are delivered during the normal 6-hour cycles, so a rollout takes a cycle or two to reach every device. Updates only run when the device has enough battery and storage.

### See what a device is running

Open the device's details and select the **Firmware** tab. **Running firmware** shows the installed version, and **Updates** lists each update with its state for every device.

### Roll out an update

Firmware updates are started by a release manager. If your account is not one, the Firmware tab shows that you can read firmware status only, and Grillo rolls out updates for you.

If you are a release manager:

1. Open the site, select the devices to update, and open **Firmware**.
2. Choose a **Release channel** (**Stable**, **Pilot canary**, or **Development**) and pick a release from **Compatible releases**.
3. Select **Review update**, check the target list, and confirm.
4. You can approve a development rollout yourself. Other releases need approval from a different release manager before they go out.

While an update is in progress you can **Pause** and **Resume** it, or **Cancel pending updates**. Cancelling stops devices that have not started; it does not interrupt an installation already underway.

## API tokens

To read your data from your own tools, create a personal API token.

1. Open **Settings** and select **Manage API tokens**.
2. Enter a **Token name**.
3. Choose the **Authorized scope** and the read-only capabilities the token needs.
4. Choose when it expires. Tokens last at most 90 days.
5. Create the token and select **Copy secret**.

The secret is shown once. Store it in a password manager or secret store straight away; if you lose it, revoke the token and create a new one.

Tokens are read-only and limited to the scope you chose. Select **Revoke** to disable a token immediately.

On pages that offer it, **Copy API request** gives you the request for the data you are looking at, and the **API / field dictionary** link on the Exports page describes the fields.
