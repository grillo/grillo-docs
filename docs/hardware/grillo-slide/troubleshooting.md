---
title: Troubleshooting
---

# Grillo Slide Troubleshooting

Slide devices sleep between cycles, so most checks mean waiting for the next 6-hour slot: 00:00, 06:00, 12:00, or 18:00 UTC.

## Grillo Field app

| Problem | What to do |
|---|---|
| QR code will not scan | Select **Enter code manually** and type the `slide-…` ID printed on the label. |
| The app does not connect to the base | Power the base off and on, then hold the button inside the case for 2 seconds within 10 seconds of power-on. Bluetooth stays open for 2 minutes. Keep the phone close, with Bluetooth on and the app's permissions allowed. |
| "Nothing is available for your account" | You are signed in with an account that has no access to the kit. Check the email address, or contact Grillo Support. |
| The app is not on your phone's store | The app is Android-only for now and is installed from the link Grillo sends you. |

## Nothing arrives on the dashboard

1. Wait for the next 6-hour slot to pass, then refresh.
2. Check that the base has power and its solar panel is connected.
3. Check the SIM is active, has data, and has coverage at the base.
4. [Set the APN again](/hardware/grillo-slide/sim-and-apn). A wrong APN stops every upload and cannot be fixed remotely.

If the base cannot upload, readings from the rovers do not reach the dashboard either.

## A rover is missing or overdue

- Check its power and solar panel.
- Check its GNSS antenna is connected.
- Check it is within radio reach of the base or another rover. Try moving it closer for one cycle to confirm.
- If you powered devices on in the wrong order, wait for the next slot. All devices meet again at the next 6-hour mark.

## A rover reports but shows no movement value

The rover reached the base but did not get a precise position fix in that cycle. It gives up on a fix after 7 minutes.

- Give its antenna a clearer view of the sky.
- Check the base also has a clear sky view; rovers depend on its corrections.
- Look at the next cycle. A single missed fix is not a fault.

## Movement looks wrong

- **Every rover jumped by the same amount:** the base or its antenna moved. Put it back or fix it in place, press the base's reset button to [survey it again](/hardware/grillo-slide/installation#survey-the-base), then reset the baseline for the sensor group.
- **One rover jumped:** check its mount and antenna, then reset that rover's baseline.
- **Readings scatter by a centimetre or two:** this is normal for single readings. Look at the trend over several days.

## Contact support

[Contact Grillo Support](/support/contact) with:

- The `slide-…` ID on the device label
- Your site and sensor group names
- The time of the last report on the dashboard
- Your SIM provider and APN, for base problems
- Photographs of the installation
