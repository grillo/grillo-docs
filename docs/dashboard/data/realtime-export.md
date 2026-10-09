---
title: Stream Data to Your Own Ringserver
---

# Stream Data to Your Own Ringserver

Grillo Cloud can stream your project's live waveforms to a [ringserver](https://github.com/EarthScope/ringserver) that you run. The data arrives as miniSEED over DataLink. Your ringserver then serves it over SeedLink to SeisComP, Swarm, ObsPy, or any other SeedLink client.

Your sensors keep sending their data to Grillo, so everything in Grillo Cloud keeps working, and you get a live copy on your own network.

## Which option to use

| | Stream to your ringserver (this page) | [Send data to your own server](/dashboard/data/data-server) |
|---|---|---|
| Where sensors send data | Grillo | Your server |
| Data on your side | miniSEED over DataLink, served by your ringserver over SeedLink | Grillo's packets, received by coap2seis into Earthworm or miniSEED files |
| Waveforms and SISTEM in Grillo Cloud | Keep working | No new data |
| Who sets it up | A project owner or admin, in Grillo Cloud | Grillo Support |

If your project already [sends its data to your own server](/dashboard/data/data-server), Grillo has no live data to stream.

## What you need

- A ringserver reachable from the internet at a public hostname or IPv4 address. Private, local, and Tailscale addresses are refused.
- Its DataLink port open to Grillo. The port must be between 1024 and 65535; ringserver's usual DataLink port is 16000.
- The **Owner** or **Admin** [role](/dashboard/organizations#roles) in the project.

One project streams to one ringserver.

## Set up your ringserver

DataLink has no passwords. Ringserver decides who may write by IP address, so allow Grillo's address with `WriteIP`:

```text
# ring.conf
DataLinkPort 16000
SeedLinkPort 18000
WriteIP 52.1.18.193
```

The **Real-time data export** panel in Grillo Cloud always shows the current address to allow. Restart ringserver after changing its configuration, and open the DataLink port to that address in your firewall.

## Turn on the export

1. Open **Project Settings** in the sidebar.
2. Under **Real-time data export**, enter your **Ringserver host**, for example `ring.example.org`, without a port.
3. Enter the **DataLink port**. It defaults to 16000.
4. Leave **Streaming enabled** on and select **Save**.

Streaming starts within about 30 seconds. Members without the owner or admin role see where the project streams to, but cannot change it.

## What is streamed

Grillo streams every sensor claimed in the project, including sensors you claim later.

| Channel | Sensor |
|---|---|
| `EHZ` | Vertical geophone (Grillo Pulse) |
| `HNZ`, `HNN`, `HNE` | Accelerometer: vertical, north, east |

Each stream is named `NET_STA__CHA`: the project's network code, the sensor's station code, an empty location code, and the channel. Ringserver 4 shows these as FDSN source IDs.

The data is sent as 512-byte miniSEED 2 records with 32-bit integer samples in raw counts. A record is sent when it is full (112 samples, about 0.9 seconds at 125 Hz) or after at most 2 seconds. A new record starts wherever there is a gap.

Every record is flagged "time tag questionable", because sensor timestamps are approximate. See the `timeBasis` notes in [View and Download Waveforms](/dashboard/data/waveforms#download-data).

### Station codes

miniSEED 2 allows network codes of 1–2 characters and station codes of 1–5, using capital letters and digits. Grillo never shortens a code. A sensor whose station code is too long is skipped and listed in the panel; [edit its station code](/dashboard/sensors/configuring-sensor) to include it.

## Check that it worked

The panel shows the export's status:

| Status | Meaning |
|---|---|
| **Streaming** | Connected and delivering records |
| **Connecting** | Grillo is connecting, or reconnecting after an error |
| **Waiting for export service** | The destination was just saved. This normally clears in under a minute |
| **Paused** | **Streaming enabled** is off |
| **Nothing to export** | No claimed sensor has a valid station code, or the project's network code is not valid miniSEED |
| **Over capacity** | Grillo's export service is full. [Contact Grillo Support](/support/contact) |
| **Error** | The panel shows the reason. See below |

Below the status, the panel shows how many channels are exported, when the last record was delivered and the last connection made, and how many records were delivered and dropped.

On your side, list the streams your ringserver holds, for example with `slinktool -Q your-ringserver:18000`.

## Troubleshooting

| Error | What to do |
|---|---|
| Server does not allow writes from this address (add our IP to WriteIP) | Add Grillo's address to `WriteIP` and restart ringserver |
| Not a DataLink server | The port is not ringserver's DataLink port. Check you did not enter the SeedLink port |
| Refusing non-public address | The host resolves to a private address. Use a public hostname or IP |
| Server stopped acknowledging records | Your ringserver stopped responding. Check that it is running and not overloaded |
| Connection refused or timed out | Check the host, the port, and your firewall |

After an error, Grillo retries automatically, waiting between 2 seconds and 1 minute between attempts.

### Gaps

Records that cannot be delivered while your ringserver is slow or unreachable are dropped, not resent later, and are counted as **dropped** in the panel. With the [SISTEM add-on](/events), you can download the missing interval from the [waveform archive](/dashboard/data/waveforms).

## Pause, change, or remove the export

- **Pause:** turn off **Streaming enabled** and select **Save**. Turn it back on to resume.
- **Change the destination:** enter the new host or port and select **Save**. The counters start again from zero.
- **Remove:** select **Remove** and confirm. Grillo stops streaming within about 30 seconds.
