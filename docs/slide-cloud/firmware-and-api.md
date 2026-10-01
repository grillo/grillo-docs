---
title: Firmware and API Access
---

# Firmware and API Access

## Firmware updates

Grillo publishes and rolls out Slide firmware. You do not need to visit the site or start anything.

- The **base** downloads its update over LTE after an upload.
- **Rovers** receive their update from the base over the radio mesh during a cycle.
- A device that cannot run the new firmware rolls back to the previous version by itself and reports that it did.

Updates are delivered during the normal 6-hour cycles, so a rollout takes a few cycles to reach every device.

To see what a device is running, open its details and select the **Firmware** tab. **Running firmware** shows the installed version, and any update in progress shows its state.

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
