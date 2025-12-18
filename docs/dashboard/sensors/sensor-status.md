---
sidebar_position: 9
title: Sensor Status
---

# Sensor Status

Monitor the health and connectivity of your Grillo sensors through the dashboard.

## Status overview

Each sensor displays a status indicating its current condition:

| Status | Icon | Description |
|--------|------|-------------|
| **Online** | Green | Connected and streaming data normally |
| **Offline** | Gray | Not currently connected to cloud |
| **Warning** | Yellow | Connected but with potential issues |
| **Error** | Red | Problem requiring immediate attention |

## Status details

### Online

When a sensor is online:
- Connected to Grillo Cloud
- Actively streaming data
- Last data received within expected timeframe
- No significant issues detected

**Indicators:**
- Green status dot
- Recent "Last seen" timestamp
- Live data available

### Offline

When a sensor is offline:
- Not connected to Grillo Cloud
- No recent data received
- Connection lost or sensor powered off

**Possible causes:**
- Power outage
- Network connectivity loss
- Sensor hardware issue
- Firewall blocking connection

**Indicators:**
- Gray status dot
- "Last seen" shows past timestamp
- No live data

### Warning

When a sensor shows warning status:
- Connected but with issues
- Data quality concerns
- Resource warnings

**Possible causes:**
- Weak signal (WiFi or cellular)
- Low battery (Pulse only)
- Intermittent connectivity
- Data quality issues

**Indicators:**
- Yellow/amber status dot
- Warning message in details
- May have intermittent data

### Error

When a sensor shows error status:
- Critical issue detected
- Requires immediate attention
- May not be functioning properly

**Possible causes:**
- Hardware failure
- Configuration error
- Authentication issue
- Severe connectivity problem

**Indicators:**
- Red status dot
- Error message in details
- Action required

## Monitoring sensor health

### Dashboard overview

View all sensor statuses at once:
1. Navigate to your network
2. View the status summary at top
3. See counts for each status type

### Status column

In table view:
- Status column shows icon
- Sort by status to group issues
- Filter to show only offline/warning

### Status notifications

Configure alerts for status changes:
1. Go to Settings → Notifications
2. Enable status change alerts
3. Choose notification methods

[Notification settings →](/dashboard/settings/notifications)

## Health metrics

### Connectivity

| Metric | Description |
|--------|-------------|
| Signal strength | WiFi/cellular signal level |
| Connection type | WiFi or cellular |
| Latency | Delay to cloud servers |
| Uptime | Time since last restart |

### Power (Pulse only)

| Metric | Description |
|--------|-------------|
| Battery level | Current charge percentage |
| Power source | AC or battery |
| Charging status | Charging/not charging |

### Data quality

| Metric | Description |
|--------|-------------|
| Sample rate | Current sampling frequency |
| Data gaps | Missing data periods |
| Noise level | Background noise indicator |

## Common status issues

### Sensor frequently offline

**Symptoms:** Sensor goes offline repeatedly

**Solutions:**
1. Check network stability
2. Verify power is consistent
3. Check signal strength
4. Review firewall settings
5. Consider Ethernet (One) or cellular (Pulse)

### Weak signal warning

**Symptoms:** Warning about low signal strength

**Solutions:**
1. Move sensor closer to router
2. Add WiFi extender
3. Use Ethernet instead
4. For Pulse: reposition antenna
5. Consider cellular connectivity

### Low battery warning (Pulse)

**Symptoms:** Battery level below threshold

**Solutions:**
1. Verify AC power is connected
2. Check power adapter connection
3. Inspect power cable for damage
4. Battery may need replacement (older units)

### Data quality warning

**Symptoms:** Alert about data quality issues

**Solutions:**
1. Check sensor mounting
2. Verify sensor is level
3. Investigate vibration sources
4. Review installation location

## Responding to issues

### Offline sensors

1. **Check immediately** - Power and network at site
2. **Remote restart** - If available in dashboard
3. **Site visit** - Physical inspection if needed
4. **Document** - Record issue and resolution

### Warning conditions

1. **Review details** - Check warning message
2. **Assess urgency** - Some warnings are informational
3. **Take action** - Address underlying cause
4. **Monitor** - Verify warning clears

### Error conditions

1. **Immediate attention** - Errors need prompt action
2. **Review error** - Understand the specific issue
3. **Troubleshoot** - Follow error-specific guidance
4. **Contact support** - If unable to resolve

## Status history

### Viewing history

1. Open sensor details
2. Navigate to History tab
3. View status change timeline

### Understanding patterns

Look for:
- Recurring offline periods
- Time-of-day patterns
- Correlation with external events
- Gradual degradation

## Automated monitoring

### Alert rules

Set up automated monitoring:

| Rule | Trigger | Action |
|------|---------|--------|
| Offline alert | Offline > 5 minutes | Email notification |
| Warning alert | Warning status | Dashboard notification |
| Error alert | Error status | Immediate email |

### Integration options

Connect to external monitoring:
- Webhook notifications
- API status endpoints
- Third-party monitoring tools

## Best practices

### Regular monitoring

- Check dashboard daily
- Review offline sensors promptly
- Address warnings before they become errors
- Document recurring issues

### Proactive maintenance

- Monitor signal strength trends
- Watch battery levels (Pulse)
- Address issues early
- Plan maintenance visits

### Documentation

- Keep installation records
- Document troubleshooting steps
- Track repeat issues
- Record resolutions

## Related guides

- [Troubleshooting - Grillo One](/hardware/grillo-one/troubleshooting)
- [Troubleshooting - Grillo Pulse](/hardware/grillo-pulse/troubleshooting)
- [Notification settings](/dashboard/settings/notifications)
