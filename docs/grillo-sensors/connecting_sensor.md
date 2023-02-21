---
sidebar_position: 5
---

# Connecting your Sensor
To connect your Grillo sensor to Grillo Console please follow the relevant steps for your sensor type:

:::info
If connecting by Wi-Fi or Ethernet, your local area network (LAN) must be able to dynamically assign your device an IP address by DHCP. If your network only permits for static IP addresses, please speak with your network manager to resolve this.
:::

<details><summary><b>Cellular</b></summary><p>

The sensor can be connected to CAT-M LTE, NB IoT or GSM networks. Please ensure your sensor is in a location with cellular connectivity and your SIM and data plan enables at least one of these connectivity options. Based on the station setup (sampling rate, on trigger vs. continuous mode) you may need a data plan up to 5 GB/month.

1. Make sure SIM is inserted in the device and cellular antenna is connected.
2. Power-up your sensor.
3. Wait a minute or so its LED should start blinking. This means it is successfully sending data to the cloud.

If the sensor does not start blinking, the connection was not successful. In such a case, follow these instructions.

1. Make sure SIM is inserted in the device and cellular antenna is connected.
2. Power-up your sensor.
3. Wait a few seconds until a Wi-Fi network appears with an SSID that starts with `Grillo-` (eg. `Grillo-XXXXXX`). Connect your phone to this network, a startup page should show up automatically.
4. Choose `Setup`. Fill your APN details, and (optionally) the Network mode and Data Trasfer mode (1 if you wish to choose it, 0 if you don't).
4. Click `Save` and wait for a success confirmation message.
5. Wait a minute or so, the sensor's LED should start blinking. This means it is successfully sending data to the cloud.

</p></details>

<details><summary><b>Wi-Fi</b></summary><p>

The local Wi-Fi network must be 2.4Ghz (5Ghz will not work). Please ensure that 2.4Ghz is available before installing the Grillo Connect sensor in this location.

1. Power-up your sensor.
2. Wait a few seconds until a Wi-Fi network appears with an SSID that starts with `Grillo-` (eg. `Grillo-XXXXXX`). Connect your phone to this network, a startup page should show up automatically.
3. On the `Configure Wi-Fi` page, choose the SSID and enter Password for the local Wi-Fi network you want the sensor to connect to.
4. Enter `Save` and wait for a success confirmation message.
3. Wait a minute or so, the sensor's LED should start blinking. This means it is successfully sending data to the cloud.
  
</p></details>

<details><summary><b>Ethernet LAN</b></summary><p>

1. Plug an ethernet cable to your sensor.
2. Power-up your sensor.
3. Wait a minute or so its LED should start blinking. This means it is successfully sending data to the cloud.
  
</p></details>

## Add Station to Grillo Console
Once your sensor is connected to the cloud, you need to [add it as a station](/docs/grillo-console/stations/add-grillo-sensors) in Grillo Console.

## Problems?
If you have issues connecting your sensor, please check out [FAQ](/docs/faq/stations.md). If you don't find the answer there, please contact us.

