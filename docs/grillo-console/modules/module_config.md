---
sidebar_position: 2
sidebar_label: 'Module configuration'
---

# Module configuration
Before you add a `Module`, you will be able to edit its configuration. Some configuration items are unique to the `Module`, some items are same for all. Here is a description of the common configuration items.

<details><summary><b>Flow</b></summary><p>

- `Flow`: A variable that enables you to set up multiple processing flows that are independent of each other. In such case, you set the same flow name for all the modules that belong to the same flow.

Warning: This feature is still in development and may produce unexpected results. We recomment leaving the `flow` set to `default` for now. Please let us know if you are interested in this feature.
</p></details>

<details><summary><b>Publisher</b></summary><p>

- `Verbose`: When set to `true` the publisher works in verbose mode and prints out info messages in the Log section

</p></details>

<details><summary><b>Subscriber</b></summary><p>

- `Poll interval` [float, seconds]: Defines how often new `Objects` are polled into the `module`. The longer the interval, the less often new `Obejcts` are processed.
- `Verbose`: When set to `true` the publisher works in verbose mode and prints out info messages in the Log section

</p></details>

<details><summary><b>Real-time stream</b></summary><p>

- `Poll interval` [float, seconds]: Defines how often new data are polled in the `module`. The longer the interval, the less often new data are processed.
- `Remove sensitivity` [boolean]: If sensor response information is present, removes the sensor sensitivity
- `Remove response` [boolean]: If sensor response information is present, removes the sensor response
- `Tracelength`[float, seconds]: Defines the maximum length of the real-time trace. The trace is always timmed at now-`Tracelength` horizon
- `Verbose` [boolean]: When set to `true` the stream works in verbose mode and prints out info messages in the Log section        

</p></details>

<details><summary><b>Inventory</b></summary><p>

- `Sensor_type`: Select only stations equipped with the given type of a sensor. At this point, the options include `grillo` and `seedlink`.
- `Network`: Select only stations belongint to a network
- `Station`: Select only stations with the given code
- `Location`: Select only channels with the given location code
- `Channel`: Select only channels of the given code
- `Component` [vertical/horizontal]: Select only channels of a given component
- `Verbose` [boolean]: When set to `true` the publisher works in verbose mode and prints out info messages in the Log section 

</p></details>