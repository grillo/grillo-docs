---
sidebar_position: 1
title: On-Premise Seismic Integration
---

# On-Premise Seismic Integration with coap2seis

**coap2seis** is Grillo's open-source tool for receiving seismic waveform data from Grillo sensors and converting it to standard seismological formats. It acts as a bridge between the Grillo CoAP protocol and your existing seismic processing infrastructure.

## Overview

coap2seis runs on your server, listens for CoAP seismic packets from Grillo sensors, and outputs data in one of two formats:

- **Earthworm (TRACEBUF2)** — Writes directly to an Earthworm shared memory ring for real-time processing
- **MiniSEED** — Writes standard MiniSEED files for archiving, research, or feeding into other tools

```
Grillo Sensors ──CoAP/UDP:5684──→ [Your Server: coap2seis] ──→ Earthworm Ring / MiniSEED files
```

## Prerequisites

- **Python 3.10+**
- **A server** with UDP port 5684 accessible from your Grillo sensors
- **For Earthworm output:** A working [Earthworm](http://www.earthwormcentral.org/) installation with PyEW
- **For MiniSEED output:** The ObsPy library

## Installation

```bash
# Clone the repository
git clone <coap2seis-repo-url>
cd coap2seis

# Install the package
pip install -e .

# For MiniSEED output, also install ObsPy
pip install obspy "setuptools<82"
```

## Quick start

### Interactive mode

```bash
python -m coap2seis
```

This prompts you to choose your output backend and configure settings interactively.

### With a config file

```bash
python -m coap2seis -c /path/to/coap2seis.yaml
```

### With command-line flags

```bash
# MiniSEED output
python -m coap2seis --output miniseed

# Earthworm output
python -m coap2seis --output pyew
```

## Configuration

### Config file format

Create a YAML configuration file (see `config/coap2seis.yaml.example`):

```yaml
# Output backend: "pyew" (Earthworm) or "miniseed"
output: pyew

# CoAP server settings
coap:
  port: 5684

# Earthworm settings (when output: pyew)
earthworm:
  ring_name: "WAVE_RING"
  module_id: 150
  installation_id: 141
  heartbeat_interval: 30

# MiniSEED settings (when output: miniseed)
miniseed:
  output_dir: "./mseed_out"

# FDSN codes — leave network empty to use the sensor's configured value
network: ""
location: "00"

# Buffer settings
buffer:
  target_samples: 250      # Flush after this many samples (~2 sec at 125 Hz)
  max_age_seconds: 1.0     # Maximum time before flushing buffer

# Logging
logging:
  level: "INFO"
```

### Key settings

| Setting | Default | Description |
|---------|---------|-------------|
| `coap.port` | 5684 | UDP port to listen on (must match what sensors are configured to send to) |
| `output` | — | `pyew` for Earthworm, `miniseed` for MiniSEED files |
| `network` | `""` | FDSN network code override. Empty uses the sensor's value |
| `location` | `00` | FDSN location code (max 2 characters) |
| `buffer.target_samples` | 250 | Samples per TRACEBUF2/MiniSEED record (~2 seconds at 125 Hz) |
| `buffer.max_age_seconds` | 1.0 | Force flush if buffer age exceeds this |

### Earthworm settings

| Setting | Default | Description |
|---------|---------|-------------|
| `earthworm.ring_name` | `WAVE_RING` | Name of the Earthworm shared memory ring to write to |
| `earthworm.module_id` | 150 | Module ID for this instance |
| `earthworm.installation_id` | 141 | Earthworm installation ID |
| `earthworm.heartbeat_interval` | 30 | Seconds between heartbeat messages |

### MiniSEED settings

| Setting | Default | Description |
|---------|---------|-------------|
| `miniseed.output_dir` | `./mseed_out` | Directory where MiniSEED files are written |

MiniSEED files are named `{network}.{station}.{location}.{channel}.{YYYYMMDD}.mseed` with one file per day per channel.

## Deployment as a systemd service

For production deployments, run coap2seis as a systemd service:

```bash
# Copy config file
sudo mkdir -p /etc/coap2seis
sudo cp config/coap2seis.yaml.example /etc/coap2seis/coap2seis.yaml
# Edit the config for your environment
sudo nano /etc/coap2seis/coap2seis.yaml

# Install systemd unit
sudo cp systemd/coap2seis.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now coap2seis
```

The service:
- Runs as the `ew` user (for Earthworm shared memory access)
- Sources `/etc/earthworm/ew_env.sh` if present
- Restarts automatically on failure (5-second delay)
- Has `CAP_NET_BIND_SERVICE` for binding to privileged ports if needed

Check status:
```bash
sudo systemctl status coap2seis
sudo journalctl -u coap2seis -f
```

## Network requirements

Your server must accept incoming UDP traffic on port 5684 from your Grillo sensors. Ensure your firewall allows this:

```bash
# Example: UFW
sudo ufw allow 5684/udp

# Example: iptables
sudo iptables -A INPUT -p udp --dport 5684 -j ACCEPT
```

If your sensors are on a different network (e.g., cellular), the server must be reachable from the public internet or via VPN.

## Configuring sensors to send data to your server

Once coap2seis is running, configure your Grillo sensors to send seismic data to your server:

1. Log in to [cloud.grillo.io](https://cloud.grillo.io)
2. Navigate to your sensor's configuration page
3. In the **Data Server** section, set the endpoint to your server:
   ```
   coap://<your-server-ip>:5684
   ```
4. Save the configuration

The sensor will receive the new data server address in its next SOH response and begin sending seismic data to your server. SOH messages continue going to Grillo Cloud for device monitoring.

See [Configuring the data server](/dashboard/sensors/configuring-sensor#data-server) for detailed instructions.

## Data format details

### What coap2seis receives

Each Grillo sensor sends CoAP POST messages containing seismic waveform data:

- **3 channels** (HNE, HNN, HNZ) for Grillo One — 3-axis accelerometer
- **4 channels** (EHZ, HNE, HNN, HNZ) for Grillo Pulse — geophone + 3-axis accelerometer
- **32 samples per channel** per message at 125 Hz (~256ms per message)
- **~4 messages per second** per sensor

### Channel codes (FDSN)

| Code | Description | Sensor |
|------|-------------|--------|
| HNE | Accelerometer East-West | One, Pulse |
| HNN | Accelerometer North-South | One, Pulse |
| HNZ | Accelerometer Vertical | One, Pulse |
| EHZ | Geophone Vertical | Pulse only |

### What coap2seis outputs

**Earthworm TRACEBUF2:** Standard Earthworm trace buffer messages containing ~250 samples (~2 seconds) per message, written to the configured shared memory ring. Any Earthworm module (e.g., pick_ew, carlstatrig, wave_serverV) can read from this ring.

**MiniSEED:** Standard MiniSEED records written to daily files. Compatible with ObsPy, IRIS tools, SeisComP, and any software that reads MiniSEED.

## Architecture

```
                    ┌──────────────────────────────────┐
                    │          coap2seis                │
                    │                                    │
  CoAP/UDP:5684 ──→│  CoAP Server (aiocoap)            │
                    │       │                            │
                    │       ▼                            │
                    │  Payload Parser                    │
                    │  (validate JSON, extract samples)  │
                    │       │                            │
                    │       ▼                            │
                    │  Channel Buffers                   │
                    │  (per device+channel, gap detect)  │
                    │       │                            │
                    │       ▼                            │
                    │  Writer Backend ──→ Earthworm Ring │
                    │                 ──→ MiniSEED Files │
                    └──────────────────────────────────┘
```

## Troubleshooting

### No data arriving

1. Verify coap2seis is running and listening: `sudo ss -ulnp | grep 5684`
2. Check the sensor's data server is configured correctly in the dashboard
3. Verify firewall allows UDP 5684 from the sensor's IP
4. Check coap2seis logs: `journalctl -u coap2seis -f`

### Data gaps

- Check network connectivity between sensors and your server
- Gaps > 1.5x the sample interval trigger a buffer flush to avoid mixing discontinuous data
- Monitor buffer usage in the sensor's SOH data on the dashboard

### Earthworm ring not receiving data

1. Verify Earthworm is running and the ring exists: `status` in startstop
2. Check the ring name, module ID, and installation ID in your config match your Earthworm setup
3. Ensure the coap2seis process user has access to Earthworm shared memory

### MiniSEED files not being created

1. Check the output directory exists and is writable
2. Verify ObsPy is installed: `python -c "import obspy"`
3. Check logs for parsing or writing errors
