---
sidebar_position: 3
title: Event Catalog
---

# Event Catalog

The event catalog is a searchable database of all earthquakes detected by your network.

## Accessing the catalog

1. Navigate to your network
2. Click **"Events"** in the sidebar
3. The event catalog opens

![Event catalog](/img/placeholder-event-catalog.svg)
<!-- TODO: Replace with actual screenshot -->

## Catalog interface

### Event list

Events are displayed in a table with:

| Column | Description |
|--------|-------------|
| Date/Time | When the event occurred |
| Magnitude | Event magnitude |
| Location | Epicenter location |
| Depth | Hypocenter depth |
| Status | Confirmed/Preliminary |

### Sorting

Click column headers to sort:
- By date (newest/oldest)
- By magnitude (largest/smallest)
- By location (alphabetically)

### Filtering

Filter events by:
- Date range
- Magnitude range
- Location area
- Event status

## Searching events

### Date range

1. Click the date picker
2. Select start date
3. Select end date
4. Apply filter

### Magnitude range

1. Set minimum magnitude
2. Set maximum magnitude (optional)
3. Apply filter

### Geographic area

1. Click "Map filter"
2. Draw a rectangle or polygon
3. Only events in the area are shown

### Quick filters

Preset filters for common queries:
- **Today** - Events from current day
- **This week** - Last 7 days
- **This month** - Last 30 days
- **M3+** - Magnitude 3 and above
- **M5+** - Magnitude 5 and above

## Event details

Click an event to view details:
- Full event parameters
- Station data
- Waveforms
- Location map

[Event details guide →](/events/event-details)

## Event parameters

### Origin information

| Parameter | Description |
|-----------|-------------|
| Origin time | When the earthquake occurred |
| Latitude | Epicenter latitude |
| Longitude | Epicenter longitude |
| Depth | Depth below surface |
| Location name | Nearest geographic reference |

### Magnitude

| Parameter | Description |
|-----------|-------------|
| Magnitude value | Size of the earthquake |
| Magnitude type | How magnitude was calculated |
| Uncertainty | Margin of error |

### Quality metrics

| Parameter | Description |
|-----------|-------------|
| Stations used | Number of sensors in solution |
| Azimuthal gap | Angular coverage around event |
| RMS | Residual fit quality |
| Status | Automatic vs reviewed |

## Catalog statistics

View summary statistics:
- Total events in period
- Magnitude distribution
- Events over time (histogram)
- Geographic distribution

## Export options

### Export formats

| Format | Best for |
|--------|----------|
| CSV | Spreadsheets, general analysis |
| JSON | Programming, APIs |
| QuakeML | Seismological software |
| KML | Google Earth, mapping |

### Exporting data

1. Set your filters
2. Click **"Export"**
3. Choose format
4. Download file

### Export contents

Exports include:
- All events matching current filters
- Full event parameters
- Configurable columns

## Automatic catalog updates

The catalog updates automatically:
- New events appear when detected
- Existing events update if revised
- Real-time refresh option available

### Refresh settings

| Option | Behavior |
|--------|----------|
| Auto-refresh | Updates every N seconds |
| Manual refresh | Click to update |
| Notifications | Alert on new events |

## Working with the catalog

### Reviewing events

For quality control:
1. Sort by most recent
2. Review each new event
3. Check location and magnitude
4. Flag questionable events

### Research queries

For analysis:
1. Set date range for study period
2. Filter to area of interest
3. Export data
4. Analyze externally

### Reporting

For regular reports:
1. Set up recurring filters
2. Export at regular intervals
3. Include in reports

## Catalog retention

<!-- TODO: Confirm actual retention periods -->

| Tier | Retention |
|------|-----------|
| Standard | 1 year |
| Premium | 5 years |
| Archive | Available on request |

## Integration

### API access

Query the catalog programmatically:
- RESTful API endpoints
- Real-time event feed
- Historical queries

[API documentation →](/api)

### Webhook delivery

Receive events automatically:
- Configure webhook endpoint
- New events pushed immediately
- Full event data in payload

## Related guides

- [Event details](/events/event-details)
- [Data export](/events/data-export)
- [API integration](/events/alerts/api-integration)
