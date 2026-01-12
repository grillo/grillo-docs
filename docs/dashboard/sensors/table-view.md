---
sidebar_position: 4
title: Table View
---

# Table View

The table view displays your sensors in a sortable, filterable list format, ideal for managing many sensors.

## Accessing table view

1. Navigate to your network
2. Click the **"Table"** tab or list icon
3. Sensors are displayed in a table format

![Table view](/img/screenshots/05-sensors.png)

## Table columns

### Default columns

| Column | Description |
|--------|-------------|
| Status | Online/Offline/Warning indicator |
| Station | Station code (FDSN format) |
| Name | Sensor display name |
| Type | Grillo One or Grillo Pulse |
| Last seen | Last data received timestamp |
| Location | Coordinates or location name |

### Additional columns

Click "Columns" to show/hide:
- Serial number
- Network name
- Installation date
- Firmware version
- Signal strength
- Battery level (Pulse only)

## Sorting

### Single column sort

Click a column header to sort:
- First click: Sort ascending (A-Z, oldest first)
- Second click: Sort descending (Z-A, newest first)
- Third click: Clear sort

### Multi-column sort

<!-- TODO: Confirm if multi-sort is available -->

Hold Shift and click additional columns to add secondary sorts.

## Filtering

### Quick filters

Use preset filters at the top:
- **All** - Show all sensors
- **Online** - Only online sensors
- **Offline** - Only offline sensors
- **Issues** - Sensors with warnings/errors

### Column filters

Filter by specific column values:
1. Click the filter icon in a column header
2. Select or enter filter criteria
3. Apply the filter

### Search

Use the search box to find sensors:
- Search by station name
- Search by serial number
- Search by location

## Selecting sensors

### Single selection

Click a row to select a sensor:
- Opens the sensor detail pane
- Or highlights for action

### Multi-selection

<!-- TODO: Confirm if multi-select is available -->

Select multiple sensors for bulk operations:
1. Click the checkbox in the first column
2. Or use Shift+Click for a range
3. Or use Ctrl+Click for individual selections

## Bulk operations

When multiple sensors are selected:

| Action | Description |
|--------|-------------|
| Export | Export data for selected sensors |
| Update | Apply settings to multiple sensors |
| Remove | Remove selected from network |

## Pagination

For networks with many sensors:

### Page controls

- Navigate between pages with arrows
- Jump to specific page number
- Change items per page (25, 50, 100)

### Showing count

The table shows:
- "Showing X-Y of Z sensors"
- Total count updates with filters

## Exporting data

### Export table

Export the current table view:
1. Apply desired filters/sorts
2. Click **"Export"** button
3. Choose format (CSV, Excel)
4. Download the file

### Export contents

The export includes:
- All visible columns
- Applied filters
- Current sort order

## Customizing the table

### Column order

Drag column headers to reorder:
1. Click and hold a column header
2. Drag to new position
3. Release to place

### Column width

Resize columns:
1. Hover over column border
2. Drag to resize
3. Double-click border to auto-fit

### Save layout

<!-- TODO: Confirm if layout saving is available -->

Save your custom table configuration:
1. Set up preferred columns and order
2. Click **"Save layout"**
3. Layout persists for future sessions

## Status indicators

### Status column icons

| Icon | Meaning |
|------|---------|
| Green dot | Online and streaming |
| Gray dot | Offline |
| Yellow triangle | Warning condition |
| Red circle | Error condition |

### Last seen column

Shows when data was last received:
- "Just now" - Within last minute
- "5 min ago" - Recent data
- "2 hours ago" - May indicate issue
- "1 day ago" - Likely offline

## Keyboard navigation

| Key | Action |
|-----|--------|
| Up/Down | Navigate rows |
| Enter | Open selected sensor |
| Escape | Clear selection |
| Ctrl+F | Focus search box |

## Mobile view

On mobile devices:
- Table scrolls horizontally
- Fewer columns shown by default
- Tap row to view details
- Use responsive menu for actions

## Troubleshooting

### Table not loading

1. Check internet connection
2. Refresh the page
3. Try a different browser
4. Clear browser cache

### Filters not working

1. Check filter syntax
2. Clear all filters and reapply
3. Refresh the page

### Columns missing

1. Check "Columns" menu
2. Enable desired columns
3. Reset to default if needed

## Related guides

- [Map view](/dashboard/sensors/map-view)
- [Sensor details](/dashboard/sensors/sensor-details)
- [Configuring sensors](/dashboard/sensors/configuring-sensor)
