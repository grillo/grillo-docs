---
sidebar_position: 6
title: Référence API
---

# Référence API

L'API Grillo fournit un accès programmatique aux données des capteurs, aux informations sur les événements et aux fonctionnalités de la plateforme.

:::info Accès API
L'accès à l'API nécessite une clé API. [Générer votre clé API →](/dashboard/settings/api-keys)
:::

## Aperçu

L'API Grillo vous permet de :
- Interroger les informations et le statut des capteurs
- Accéder aux catalogues et détails des événements
- Exporter des données de manière programmatique
- Recevoir des notifications d'événements en temps réel
- Gérer les configurations réseau

## URL de base

```
https://api.grillo.io/v1
```

## Authentification

Toutes les requêtes API nécessitent une authentification via clé API.

Incluez votre clé dans l'en-tête Authorization :

```http
Authorization: Bearer VOTRE_CLE_API
```

[Guide d'authentification détaillé →](/api/authentication)

## Démarrage rapide

### Obtenir vos capteurs

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" \
  https://api.grillo.io/v1/sensors
```

### Obtenir les événements récents

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" \
  https://api.grillo.io/v1/events?limit=10
```

## Sections de l'API

### Capteurs

Gérer et interroger les informations des capteurs :
- Lister les capteurs de vos réseaux
- Obtenir les détails et le statut des capteurs
- Interroger les données des capteurs

### Événements

Accéder aux données des séismes :
- Interroger le catalogue d'événements
- Obtenir les détails des événements
- Exporter les données d'événements

### Réseaux

Gérer les réseaux sismiques :
- Lister les réseaux
- Obtenir les informations réseau
- Interroger les statistiques réseau

### Webhooks

Configurer les notifications en temps réel :
- Configurer les endpoints webhook
- Gérer les abonnements
- Voir l'historique des livraisons

## Format de réponse

Toutes les réponses sont en JSON :

```json
{
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2024-01-15T14:32:45Z"
  }
}
```

### Réponses d'erreur

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Description de l'erreur",
    "details": { ... }
  },
  "meta": {
    "request_id": "req_abc123"
  }
}
```

## Limites de débit

<!-- TODO: Confirm actual limits -->

| Niveau | Requêtes/minute | Requêtes/jour |
|--------|-----------------|---------------|
| Gratuit | 60 | 10 000 |
| Standard | 300 | 100 000 |
| Premium | 1 000 | Illimité |

En-têtes de limite de débit dans la réponse :
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1610000000
```

## Pagination

Les endpoints de liste supportent la pagination :

```http
GET /v1/sensors?page=2&limit=50
```

La réponse inclut les informations de pagination :
```json
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 50,
    "total": 150,
    "pages": 3
  }
}
```

## Guides de cette section

- [Authentification](/api/authentication)
- [Endpoints](/api/endpoints)
- [Webhooks](/api/webhooks)
- [Limites de débit](/api/rate-limits)

## SDKs et bibliothèques

<!-- TODO: Add SDKs when available -->

SDKs officiels bientôt disponibles pour :
- Python
- JavaScript/Node.js
- Et plus

## Support

Pour le support API :
- [Documentation API](/api)
- [Contacter le support](/support/contact)
