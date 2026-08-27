---
title: Connectivity
---

# Connect a Grillo Pulse

Determine whether the sensor is cellular or Ethernet from its order or enclosure label.

## Cellular

Before deployment:

1. Confirm that cellular service is active.
2. Attach the supplied antennas to the matching labelled enclosure connectors.
3. Check coverage at the exact installation site.
4. Bench-test the sensor before traveling to a remote site.
5. Ask Grillo Support before replacing the SIM or changing cellular settings.

[Cellular and SIM guidance →](/hardware/grillo-pulse/sim-card-setup)

## Ethernet

1. Ask the network administrator for an active Ethernet connection with internet access.
2. Connect Ethernet using the enclosure-specific weatherproof procedure.
3. Connect the supplied power adapter through the barrel jack.
4. Allow the sensor time to start and obtain network access.
5. Verify a current Last seen value in Grillo Platform.

No inbound port forwarding should be required for normal operation. If the sensor remains Offline on a restricted network, ask Grillo Support for the current outbound firewall requirements.

## Wi-Fi

Wi-Fi availability depends on the sensor configuration supplied for the deployment. Do not assume that a cellular or Ethernet sensor will automatically switch to Wi-Fi. Follow the order-specific instructions or contact support.

## Acceptance test

Connectivity is accepted only after Platform shows the correct sensor Online with a current Last seen value and the expected connection type. Local network indicators alone do not prove that data reached Grillo Platform.
