---
sidebar_position: 2
title: Notifications
---

# Notification Settings

Configure alerts and notifications to stay informed about your sensors and detected events.

## Notification types

### Sensor status notifications

Alerts about sensor health:

| Alert | Description |
|-------|-------------|
| Sensor offline | When a sensor loses connection |
| Sensor online | When a sensor reconnects |
| Sensor warning | When issues are detected |
| Sensor error | Critical problems |

### Event notifications

Alerts about detected earthquakes (requires Events subscription):

| Alert | Description |
|-------|-------------|
| New event | When an earthquake is detected |
| Large event | Events above magnitude threshold |
| Nearby event | Events within distance threshold |

### System notifications

Platform and account alerts:

| Alert | Description |
|-------|-------------|
| Security alerts | Login attempts, password changes |
| Maintenance | Scheduled downtime notices |
| Feature updates | New features and changes |

## Notification channels

### Email

Receive notifications via email:

1. Go to Settings → Notifications
2. Find "Email notifications" section
3. Toggle notification types on/off
4. Verify your email address

**Email settings:**
- Immediate delivery or digest
- Per-network or all networks
- Severity filtering

### Dashboard

In-app notifications:

- Bell icon shows notification count
- Click to view recent notifications
- Mark as read or dismiss

### Webhook

For integration with external systems:

1. Go to Settings → Notifications → Webhooks
2. Add webhook URL
3. Select events to send
4. Test the webhook

[API integration guide →](/events/alerts/api-integration)

## Configuring notifications

### Basic setup

1. Navigate to Settings → Notifications
2. Choose notification category
3. Toggle individual alerts on/off
4. Configure thresholds
5. Save changes

### Per-network settings

Configure different alerts for different networks:

1. Select the network
2. Navigate to Network Settings → Notifications
3. Override default notification settings
4. Save changes

### Alert thresholds

For event notifications, set thresholds:

| Threshold | Description |
|-----------|-------------|
| Minimum magnitude | Only alert above this magnitude |
| Maximum distance | Only alert within this distance |
| Confidence level | Only alert above this confidence |

## Notification schedules

### Quiet hours

Suppress non-critical notifications during certain hours:

1. Go to Notification settings
2. Enable "Quiet hours"
3. Set start and end times
4. Choose which alerts are suppressed

:::note
Critical alerts (errors, large events) may bypass quiet hours.
:::

### Digest mode

Receive batched notifications instead of individual alerts:

1. Enable "Digest mode"
2. Choose frequency (hourly, daily)
3. Select what to include
4. Save preferences

## Managing notifications

### Viewing notifications

1. Click the bell icon in navigation
2. View recent notifications
3. Click to see details
4. Mark as read

### Clearing notifications

- Click "Mark all as read"
- Or dismiss individual notifications
- Or clear all notifications

### Notification history

View past notifications:

1. Go to Settings → Notification History
2. Filter by type, date, or status
3. Search for specific notifications

## Troubleshooting

### Not receiving email notifications

1. Check spam/junk folder
2. Verify email address in profile
3. Check notification settings are enabled
4. Add Grillo to email whitelist

### Too many notifications

1. Adjust alert thresholds
2. Enable digest mode
3. Configure quiet hours
4. Reduce enabled notification types

### Webhook not working

1. Verify URL is correct
2. Check endpoint is accessible
3. Review webhook logs
4. Test with simple endpoint first

## Best practices

### Alert fatigue

Avoid notification overload:
- Start with fewer notifications
- Adjust thresholds over time
- Use digest mode for non-critical
- Reserve immediate alerts for critical events

### Team coordination

For organizations:
- Coordinate who receives which alerts
- Avoid duplicate notifications to team
- Set up on-call rotations
- Document notification procedures

### Testing

When setting up notifications:
1. Enable a test notification
2. Verify delivery works
3. Test each channel
4. Document the setup

## Related guides

- [Sensor status monitoring](/dashboard/sensors/sensor-status)
- [Event alerts](/events/alerts)
- [API integration](/events/alerts/api-integration)
