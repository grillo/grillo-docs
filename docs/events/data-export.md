---
sidebar_position: 5
title: Data Export
---

# Data Export

Export event data and sensor recordings from Grillo Cloud for analysis, archiving, or integration.

## Export options

### Event catalog export

Export detected earthquake information:
- Event parameters (location, magnitude, time)
- Quality metrics
- Station data

### Waveform export

Export raw sensor recordings:
- Time series data
- Multiple formats available
- Selected time windows

## Exporting from event catalog

### Step 1: Filter events

1. Navigate to the Event Catalog
2. Apply filters:
   - Date range
   - Magnitude range
   - Geographic area
3. Review filtered events

### Step 2: Start export

1. Click **"Export"** button
2. Choose export scope:
   - All filtered events
   - Selected events only

### Step 3: Configure export

| Option | Description |
|--------|-------------|
| Format | File format (CSV, JSON, QuakeML) |
| Fields | Which parameters to include |
| Include waveforms | Add waveform data |
| Compression | ZIP the output |

### Step 4: Download

1. Click **"Export"**
2. Wait for processing
3. Download the file

For large exports, you may receive an email with download link.

## Export formats

### CSV (Comma-Separated Values)

Best for: Spreadsheets, simple analysis

```csv
event_id,time,latitude,longitude,depth_km,magnitude,magnitude_type
evt_001,2024-01-15T14:32:45Z,37.7749,-122.4194,8.5,4.2,ML
evt_002,2024-01-16T08:15:22Z,37.8044,-122.2712,5.2,3.8,ML
```

### JSON (JavaScript Object Notation)

Best for: Programming, APIs, structured data

```json
{
  "events": [
    {
      "event_id": "evt_001",
      "origin": {
        "time": "2024-01-15T14:32:45Z",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "depth_km": 8.5
      },
      "magnitude": {
        "value": 4.2,
        "type": "ML"
      }
    }
  ]
}
```

### QuakeML

Best for: Seismological software, FDSN compatibility

```xml
<?xml version="1.0" encoding="UTF-8"?>
<q:quakeml xmlns="http://quakeml.org/xmlns/bed/1.2"
           xmlns:q="http://quakeml.org/xmlns/quakeml/1.2">
  <eventParameters>
    <event publicID="smi:grillo.io/event/evt_001">
      <origin publicID="smi:grillo.io/origin/orig_001">
        <time><value>2024-01-15T14:32:45Z</value></time>
        <latitude><value>37.7749</value></latitude>
        <longitude><value>-122.4194</value></longitude>
        <depth><value>8500</value></depth>
      </origin>
      <magnitude publicID="smi:grillo.io/magnitude/mag_001">
        <mag><value>4.2</value></mag>
        <type>ML</type>
      </magnitude>
    </event>
  </eventParameters>
</q:quakeml>
```

### KML (Keyhole Markup Language)

Best for: Google Earth, mapping applications

## Waveform export

### Selecting waveforms

1. Go to Event Details
2. Click **"Export Waveforms"**
3. Select stations to include
4. Set time window

### Time window options

| Option | Description |
|--------|-------------|
| Auto | Automatic window around event |
| Custom | Specify start/end times |
| Fixed | Fixed duration (e.g., 60 seconds) |

### Waveform formats

**miniSEED**
- Standard seismological format
- Compatible with most seismic software
- Compressed binary format

**SAC (Seismic Analysis Code)**
- Common analysis format
- Header with metadata
- Binary or ASCII

**ASCII**
- Plain text format
- One sample per line
- Easy to read, large file size

## Automated exports

### Scheduled exports

Set up recurring exports:

1. Go to Settings → Data Export
2. Click **"Create Schedule"**
3. Configure:
   - Frequency (daily, weekly, monthly)
   - Filter criteria
   - Export format
   - Delivery method

### Delivery options

| Method | Description |
|--------|-------------|
| Email | Download link sent via email |
| Cloud storage | Upload to S3, GCS, Azure |
| SFTP | Push to your server |
| API | Fetch via API endpoint |

## API export

### Query endpoint

```http
GET /api/v1/events/export
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| start | Start date (ISO 8601) |
| end | End date (ISO 8601) |
| min_magnitude | Minimum magnitude |
| format | csv, json, quakeml |

### Example request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.grillo.io/v1/events/export?start=2024-01-01&end=2024-01-31&format=csv"
```

[Full API documentation →](/api)

## Data retention

<!-- TODO: Confirm actual retention -->

| Data type | Retention |
|-----------|-----------|
| Event catalog | Indefinite |
| Event details | Indefinite |
| Waveforms | 90 days standard |
| Extended waveforms | Premium feature |

## Usage limits

<!-- TODO: Confirm actual limits -->

| Tier | Export limits |
|------|---------------|
| Standard | 1000 events/export |
| Premium | 10,000 events/export |
| Enterprise | Unlimited |

## Best practices

### Efficient exports

- Filter to only needed events
- Request only needed fields
- Use compressed formats
- Schedule large exports off-peak

### Data management

- Document your exports
- Maintain local backups
- Verify data integrity
- Follow data retention policies

### Integration

- Use API for automation
- Set up scheduled exports
- Implement error handling
- Monitor export jobs

## Troubleshooting

### Export takes too long

1. Reduce number of events
2. Narrow date range
3. Exclude waveforms
4. Try off-peak hours

### Download fails

1. Check internet connection
2. Try smaller export
3. Use email delivery option
4. Contact support

### Data looks wrong

1. Verify filter settings
2. Check timezone settings
3. Verify format selection
4. Review export preview

## Related guides

- [Event catalog](/events/event-catalog)
- [API documentation](/api)
