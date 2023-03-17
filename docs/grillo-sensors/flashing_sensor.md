---
sidebar_position: 6
---
# Flashing a Grillo Sensor
If you need to upgrade to a new firmware version you can do this [via the Grillo Console](docs/stations/configure-grillo-sensors.md). However if you need to use a specialized firmware version, you may need to do this locally.

:::caution

Only use if you know which firmware you wish to use. Using this may break your device and lose connection.

:::

## Local Firmware Flashing
There are a few steps:
- Obtain the necessary `.bin` file from Grillo. 
- Download the [ESPHome Flasher software](https://github.com/esphome/esphome-flasher/releases/tag/1.4.0) for your OS.
- Connect your sensor via USB to your computer. If you are using a Grillo Air, please make sure you have also disconnected it from power, or it may become damaged.
- Flash your device with ESPHome Flasher

To use ESPHome Flasher just select the firmware file, select the sensor USB port, and press upload. 