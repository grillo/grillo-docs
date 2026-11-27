---
title: Trigger Alerts
---

# Trigger Alerts

On the Structural plan, Grillo Cloud can tell your team when a [trigger](/dashboard/triggers) reaches an alert level: by email, by SMS, and to your own systems or chat channels through webhooks. The level is measured as horizontal peak ground acceleration (PGA), in mg.

The alert level is separate from the [trigger threshold](/dashboard/sensors/recording-mode). The threshold decides when a sensor records; the alert level decides which of those recordings are worth an alert. For example, with a 5 mg threshold and a 50 mg alert level, Grillo records every disturbance above 5 mg and alerts you only when shaking reaches 50 mg.

## Set up alerts

Open **Project settings → Trigger alerts**. Project owners and admins can change it.

1. Set **Alerts** to **On**.
2. Enter the **Alert level (mg)**, between 1 and 2000 mg. 1000 mg is 1 g.
3. To give some sensors their own level, open **Sensor alert levels** and enter a level next to each one. Leave a sensor empty to use the project's level.
4. Set **Email alerts** to **On** and choose the **Recipients**: pick members from the list and select **Add**, or type any address and select **Add address**. Up to 25 recipients; they do not need a Grillo Cloud account. With no one chosen, the project's owners and admins get them.
5. Select **Save**.

Then add [webhooks](#webhooks) and [SMS numbers](#sms) if you want them, and select **Send test alert** to check that everything arrives.

To stop alerts, set **Alerts** to **Off** and save. The level and the recipients are kept for when you turn them back on.

## What is sent

1. **Alert.** Sent as soon as a trigger's horizontal PGA reaches the alert level. It gives the sensor, the peak so far, and a link to the trigger in Grillo Cloud.
2. **Summary.** Sent when the trigger ends, with its final values and how many alerts were held since the alert. Summaries go by email and webhook, not by SMS.

Only shaking from the last 10 minutes alerts. Old, imported, or replayed triggers never do.

## Limits

To keep a busy sensor from flooding anyone:

- **Per sensor:** at most one alert every 10 minutes. Alerts held in that time are counted in the next summary.
- **Trigger storm:** a sensor that triggers more than 15 times in an hour sends one storm notice with a suggested threshold, then no more alerts until it has been quiet for 6 hours.
- **Per project:** at most 20 alerts a day. After that, one digest.

If a sensor keeps storming, raise its [threshold](/dashboard/sensors/recording-mode#choose-a-threshold).

## Webhooks

A webhook sends each alert to a URL: your own system, a Slack channel, or a Microsoft Teams channel. A project can have up to 5.

1. Under **Webhooks**, select **Add webhook…**.
2. Choose the format:
   - **Grillo JSON**: a signed JSON `POST` for your own systems.
   - **Slack**: a short message in a channel, through a Slack incoming webhook (Slack app → Incoming Webhooks).
   - **Microsoft Teams**: a card in a channel, through a Teams Workflows webhook ("When a Teams webhook request is received").
3. Paste the **Webhook URL**. It must start with `https://`.
4. Select **Add webhook**. For a Grillo JSON webhook, Grillo shows its secret once: select **Copy** and keep it somewhere safe, then **Done**. Afterwards only its last four characters are shown.

A Slack or Teams URL is its own secret: after you add it, Grillo shows only a hint of it.

Use **Test send** next to a webhook to send it a test payload; the answer shows the HTTP status. **Remove** deletes it.

### Check the signature

Each Grillo JSON request has a `Grillo-Signature` header:

```text
Grillo-Signature: t=<unix time>,v1=<hex HMAC-SHA256 of "<t>.<body>">
```

To check it, compute HMAC-SHA256 over `t`, a dot, and the raw request body, using the webhook's secret as the key, and compare it with `v1`. Refuse a request whose `t` is more than 5 minutes off.

Each request also has a `Grillo-Delivery` id. A failed delivery is retried for 30 minutes with the same id, so your system can drop a repeat it has already seen.

## SMS

Grillo can text each alert, with a link, to phone numbers you add. A number gets alerts only once its owner has confirmed it.

1. Under **SMS**, set **SMS alerts** to **On**.
2. Choose the country, enter the number, and optionally a label such as **Duty phone** or the member it belongs to.
3. Select **Add and send code**. Grillo texts the number a 6-digit code, valid for 10 minutes.
4. Ask the number's owner to read the code out, type it in, and select **Verify**. The number shows **Verified**.

Use **Send code again** if the code does not arrive, **Test SMS** to send a test, and **Remove** to delete a number. Anyone can reply STOP to stop receiving SMS; the number then shows **Opted out** until it texts START.

**This month** shows how many SMS and segments the project has sent against its monthly limit. Owners and admins can change the limit; it is shared by trigger and earthquake alerts. Once it is reached, further SMS wait for the next month.

## Send test alert

**Send test alert** sends a made-up alert, marked as a test, to every webhook, every email recipient (with email on), and every verified number (with SMS on). Its deliveries show in the alert log.

## Alert log

The **Alert log** at the bottom of **Project settings → Trigger alerts** lists every decision, newest first: alerts, summaries, storm notices, digests, and tests, each **sent** or **held** with the reason, the sensor, its peak against the level, and each delivery with its status. Select **Older** to see more.

The [Triggers page](/dashboard/triggers) also marks each shaking event's alert as **sent** or **held**:

| Held because | Meaning |
|---|---|
| within 10 min of this sensor's last alert | The per-sensor limit applied |
| the sensor is in a trigger storm | The sensor triggered more than 15 times in an hour |
| the project reached its daily alert limit | The project had 20 alerts today |

## If an alert did not arrive

1. Check the trigger's alert on the [Triggers page](/dashboard/triggers), and the **Alert log**.
2. Confirm the trigger's horizontal PGA reached the alert level, using the sensor's own level if it has one.
3. For email, check spam or junk folders, and ask your email administrator whether mail from Grillo is being blocked.
4. Use **Send test alert**, or **Test send** on a webhook, to check delivery.

:::warning Not a safety system
Alerts can be delayed by email providers, mobile networks, and the receiving system. Do not rely on them alone for life-safety decisions.
:::
