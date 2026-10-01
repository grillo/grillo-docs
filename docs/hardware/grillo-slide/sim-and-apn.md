---
title: Fit the SIM and Set the APN
---

# Fit the SIM and Set the APN

The base uploads readings over LTE. Kits ship without a SIM, so you fit your own and tell the base which APN to use. Only the base needs this; rovers have no SIM.

Do this before you go to site, somewhere with mobile coverage. A wrong APN cannot be fixed remotely.

## Before you begin

- An activated nano-SIM with a data plan
- The APN from your SIM provider. An APN is the mobile-network setting the base uses to reach the internet.
- An Android phone with Bluetooth and internet access
- The **Grillo Field** app. Grillo sends you the install link with your sign-in.
- Your Grillo account email and password

## Fit the SIM

1. Make sure the base is powered off.
2. Remove the base's cover and insert the nano-SIM into the SIM holder, following the install card supplied with the kit.

Leave the cover off for the next steps. You need the **SETUP** button: one of two small buttons on the circuit board, just under the battery holder. The other one is **RESET**.

## Set the APN with Grillo Field

1. Open Grillo Field and sign in with your Grillo account email and password.
2. Power on the base. Within 10 seconds, press and hold **SETUP** for 2 seconds. The base keeps Bluetooth open for 2 minutes.
3. In the app, select **Scan your Slide** and scan the QR code on the base's label. If the camera is unavailable, select **Enter code manually** and type the `slide-…` ID printed on the label.
4. Keep the phone next to the base. The app connects over Bluetooth by itself; there is nothing to pair in your phone's Bluetooth settings.
5. Open **Network setup** and enter the APN.
6. Wait for the app to show **APN saved on the base** followed by the APN you entered.

If the 2 minutes run out, power the base off and on and hold **SETUP** again.

## Check the connection

The base uses the new APN at its next upload. Leave it powered through one cycle and confirm that a fresh report appears on the [dashboard](/slide-cloud/sites-and-devices).

Refit the cover when you are done, checking that the seal is seated and no cable is trapped.

## Change the APN later

Repeat the steps above. Leaving the APN field empty keeps the APN the base already has.
