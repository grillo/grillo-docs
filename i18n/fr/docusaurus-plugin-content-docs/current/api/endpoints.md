---
sidebar_position: 3
title: Endpoints
---

# Endpoints API

Documentation de référence pour les endpoints de l'API Grillo.

## URL de base

```
https://api.grillo.io/v1
```

## Capteurs

### Lister les capteurs

Obtenir tous les capteurs de vos réseaux.

```http
GET /v1/sensors
```

**Paramètres de requête :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| network_id | string | Filtrer par réseau |
| status | string | Filtrer par statut (online, offline) |
| page | integer | Numéro de page |
| limit | integer | Résultats par page (max 100) |

**Réponse :**

```json
{
  "data": [
    {
      "id": "sen_abc123",
      "serial_number": "GR001234",
      "type": "grillo-one",
      "station_code": "GRIL01",
      "network_id": "net_xyz789",
      "status": "online",
      "location": {
        "latitude": 37.7749,
        "longitude": -122.4194,
        "elevation": 10
      },
      "last_seen": "2024-01-15T14:32:45Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}
```

### Obtenir un capteur

Obtenir les détails d'un capteur spécifique.

```http
GET /v1/sensors/{sensor_id}
```

**Réponse :**

```json
{
  "data": {
    "id": "sen_abc123",
    "serial_number": "GR001234",
    "type": "grillo-one",
    "station_code": "GRIL01",
    "network_code": "GR",
    "location_code": "00",
    "network_id": "net_xyz789",
    "status": "online",
    "location": {
      "latitude": 37.7749,
      "longitude": -122.4194,
      "elevation": 10,
      "site_name": "Main Office"
    },
    "firmware_version": "1.2.3",
    "last_seen": "2024-01-15T14:32:45Z",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### Obtenir les données d'un capteur

Obtenir les données récentes d'un capteur.

```http
GET /v1/sensors/{sensor_id}/data
```

**Paramètres de requête :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| start | string | Heure de début (ISO 8601) |
| end | string | Heure de fin (ISO 8601) |
| channel | string | Code de canal (HNZ, HNE, HNN) |
| format | string | Format de réponse (json, miniseed) |

**Réponse (JSON) :**

```json
{
  "data": {
    "sensor_id": "sen_abc123",
    "channel": "HNZ",
    "start_time": "2024-01-15T14:30:00Z",
    "end_time": "2024-01-15T14:35:00Z",
    "sample_rate": 100,
    "samples": [0.001, 0.002, -0.001, ...]
  }
}
```

## Événements

### Lister les événements

Obtenir les événements sismiques détectés.

```http
GET /v1/events
```

**Paramètres de requête :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| network_id | string | Filtrer par réseau |
| start | string | Heure de début (ISO 8601) |
| end | string | Heure de fin (ISO 8601) |
| min_magnitude | number | Magnitude minimum |
| max_magnitude | number | Magnitude maximum |
| lat | number | Latitude pour recherche par rayon |
| lon | number | Longitude pour recherche par rayon |
| radius | number | Rayon en km |
| page | integer | Numéro de page |
| limit | integer | Résultats par page |

**Réponse :**

```json
{
  "data": [
    {
      "id": "evt_abc123",
      "origin_time": "2024-01-15T14:32:41.500Z",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "depth_km": 8.5,
      "magnitude": 4.2,
      "magnitude_type": "ML",
      "location_description": "5 km NE of San Francisco, CA",
      "status": "automatic",
      "network_id": "net_xyz789"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

### Obtenir un événement

Obtenir les détails d'un événement spécifique.

```http
GET /v1/events/{event_id}
```

**Réponse :**

```json
{
  "data": {
    "id": "evt_abc123",
    "origin_time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "depth_uncertainty_km": 2.0,
    "horizontal_uncertainty_km": 3.5,
    "magnitude": 4.2,
    "magnitude_type": "ML",
    "magnitude_uncertainty": 0.2,
    "location_description": "5 km NE of San Francisco, CA",
    "status": "automatic",
    "network_id": "net_xyz789",
    "quality": {
      "stations_used": 12,
      "azimuthal_gap": 85,
      "rms_residual": 0.45
    },
    "stations": [
      {
        "station_code": "GRIL01",
        "distance_km": 15.3,
        "p_arrival": "2024-01-15T14:32:44.200Z",
        "s_arrival": "2024-01-15T14:32:46.800Z"
      }
    ],
    "created_at": "2024-01-15T14:32:50Z"
  }
}
```

## Réseaux

### Lister les réseaux

Obtenir tous les réseaux de votre organisation.

```http
GET /v1/networks
```

**Réponse :**

```json
{
  "data": [
    {
      "id": "net_xyz789",
      "name": "San Francisco Network",
      "description": "Bay Area monitoring network",
      "organization_id": "org_123",
      "sensor_count": 45,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### Obtenir un réseau

Obtenir les détails d'un réseau spécifique.

```http
GET /v1/networks/{network_id}
```

### Obtenir les statistiques réseau

Obtenir les statistiques résumées d'un réseau.

```http
GET /v1/networks/{network_id}/stats
```

**Réponse :**

```json
{
  "data": {
    "network_id": "net_xyz789",
    "total_sensors": 45,
    "online_sensors": 42,
    "offline_sensors": 3,
    "events_30d": 23,
    "data_completeness": 0.95
  }
}
```

## Codes de réponse courants

| Code | Description |
|------|-------------|
| 200 | Succès |
| 400 | Mauvaise requête (paramètres invalides) |
| 401 | Non autorisé (clé API invalide) |
| 403 | Interdit (permissions insuffisantes) |
| 404 | Non trouvé |
| 429 | Limite de débit dépassée |
| 500 | Erreur serveur |

## Format de réponse d'erreur

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Description de l'erreur lisible",
    "details": {
      "field": "Contexte supplémentaire"
    }
  },
  "meta": {
    "request_id": "req_abc123"
  }
}
```

## Guides connexes

- [Authentification](/api/authentication)
- [Webhooks](/api/webhooks)
- [Limites de débit](/api/rate-limits)
