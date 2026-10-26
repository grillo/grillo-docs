---
title: Frequently Asked Questions
---

# Frequently Asked Questions

## Accounts and access

### Where do I sign in?

- Grillo Pulse and Grillo One: [cloud.grillo.io](https://cloud.grillo.io)
- Grillo Slide: [slide.grillo.io](https://slide.grillo.io)

The two use separate accounts.

### How do I get an account?

By invitation. Grillo creates your project and invites you by email; sign up with the address the invitation was sent to. See [Create an Account](/dashboard/account/creating-account). For Slide, Grillo creates your sign-in.

### How do I add a colleague or change someone's role?

Project owners and admins do it in **Settings → Members**. If you are a viewer or member, ask your project's admin. See [Add Colleagues](/dashboard/organizations/managing-members).

### Which plan do I need?

**Structural** for buildings and infrastructure: sensors record when shaking crosses a threshold, and Grillo emails you when it reaches an alert level. **Network** for seismic networks that run their own processing: continuous data, waveform download, and a real-time feed. **Seismic** adds automatic earthquake detection and an event catalog. **Enterprise** is scoped for national systems and early warning. See [Plans](/dashboard/plans).

## Setting up sensors

### What is a Device ID?

For Pulse and One, the 12-character uppercase hexadecimal identifier on the sensor's label, for example `A0B1C2D3E4F5`. The label's QR code holds the same ID. Slide devices are labelled with an ID that starts with `slide-`.

### What is the difference between claiming and connecting?

**Claiming** adds a sensor to your project in Grillo Cloud, using its Device ID or QR code. **Connecting** gives the sensor its Ethernet, Wi-Fi, or cellular link. A claimed sensor shows offline until it is powered and connected.

### Do I need to set an APN?

- **Grillo Pulse Cellular:** not if your order includes a Grillo SIM; Grillo fits and sets it up. Otherwise, contact Grillo Support before you fit your own.
- **Grillo Slide:** yes, on the base, using the Grillo Field app. See [Fit the SIM and Set the APN](/hardware/grillo-slide/sim-and-apn).

### How do I power each sensor?

- **Grillo Pulse:** 12 V DC through its M12 power connector. It has no built-in solar or battery; at an off-grid site, power it from a Grillo solar kit, or from your own solar charge controller and battery that supply 12 V DC. Do not connect USB; it cannot power the sensor and a powered USB cable can damage it.
- **Grillo One:** USB-C, 5 V. This is its only power input.
- **Grillo Slide:** internal battery with a solar input.

### Is the Grillo Field app on iPhone?

Not yet. Grillo Field is on Android now, and the iPhone version is coming soon.

## Troubleshooting

### Why is my sensor offline?

A sensor is online when Grillo Cloud has had a health report from it in the last 2.5 minutes. Check you are in the right project, then check power and the connection. Follow [Verify Sensor Status](/dashboard/sensors/sensor-status).

### My Grillo One is online but sends no data

A Grillo One only sends seismic data after it is claimed and has received its station code. Check it is [claimed](/dashboard/sensors/adding-sensor) in the right project, then wait a minute.

### Can I see the Pulse status lights?

Not with the enclosure closed. Use Grillo Cloud to check a Pulse. See [Troubleshooting](/hardware/grillo-pulse/troubleshooting).

### I have an old Grillo One that will not connect

It may run older firmware. See [Older sensors](/hardware/grillo-one/setup#older-sensors).

### How do I re-survey a Slide base?

Remove the base's cover and press **RESET**. The base also surveys every time it powers on. See [Survey the base](/hardware/grillo-slide/installation#survey-the-base).

## Data and firmware

### Can I download my seismic data?

On the Network, Seismic, and Enterprise plans, yes: open the waveform archive and select **Download (miniSEED + CSV)**. See [View and Download Waveforms](/dashboard/data/waveforms). For a continuous feed into SeisComP, Swarm, or ObsPy, [stream it to your own ringserver](/dashboard/data/realtime-export). For Earthworm, you can also ask Grillo to [send the data to your own server](/dashboard/data/data-server) and receive it with the open-source [coap2seis](https://github.com/grillo/coap2seis).

For Slide, use [Exports](/slide-cloud/exports).

### Can I update firmware remotely?

- **Grillo One** and earlier **Pulse** units on firmware 1.x: yes, from [Grillo Cloud](/dashboard/sensors/firmware-updates).
- **Current Grillo Pulse:** not yet; Grillo updates it for you.
- **Grillo Slide:** yes, over the air: the base over LTE and the rovers through the base. See [Firmware updates](/slide-cloud/firmware-and-api#firmware-updates).

### Is there a public API?

Yes. Grillo Cloud has a read-only [Data API](/dashboard/data/api) for sensors, health reports, events, and triggers, with keys issued by Grillo Support. Grillo Cloud for Slide has its own read-only [API tokens](/slide-cloud/firmware-and-api#api-tokens).

### Is the Live map an official earthquake warning?

No. In Live mode it shows your project's real detections, and in Simulation mode a made-up earthquake. Neither is a public warning service. See [Live Map](/events/live-map).

### Does Grillo Slide send landslide alerts?

Not yet. Read movement on the dashboard and interpret it with a geotechnical specialist. See [Landslide Monitoring with GNSS](/concepts/landslide-monitoring).

## Getting help

Use the chat messenger on this site, or see [Contact Support](/support/contact).
