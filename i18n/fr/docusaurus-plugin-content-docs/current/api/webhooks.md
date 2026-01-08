---
sidebar_position: 4
title: Webhooks
---

# Webhooks

Recevez des notifications en temps réel lorsque des événements se produisent dans votre réseau Grillo.

## Aperçu

Les webhooks envoient des données à votre serveur quand :
- Des séismes sont détectés
- Le statut d'un capteur change
- D'autres événements configurables

Pas de polling nécessaire — les données viennent à vous.

## Configurer les webhooks

### Via le tableau de bord

1. Allez dans Paramètres → Notifications → Webhooks
2. Cliquez sur **"Ajouter un Webhook"**
3. Entrez l'URL de votre endpoint
4. Sélectionnez les événements à recevoir
5. Enregistrez

### Via l'API

```http
POST /v1/webhooks
```

```json
{
  "url": "https://votre-serveur.com/grillo-webhook",
  "events": ["event.detected", "sensor.offline"],
  "secret": "votre_secret_partage"
}
```

## Événements webhook

### Détection d'événement

**Événement :** `event.detected`

Déclenché quand un séisme est détecté.

```json
{
  "type": "event.detected",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "event_id": "evt_abc123",
    "origin_time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "magnitude": 4.2,
    "magnitude_type": "ML",
    "location_description": "5 km NE of San Francisco, CA",
    "network_id": "net_xyz789"
  }
}
```

### Événement mis à jour

**Événement :** `event.updated`

Déclenché quand les paramètres d'un événement sont révisés.

```json
{
  "type": "event.updated",
  "timestamp": "2024-01-15T14:35:00Z",
  "data": {
    "event_id": "evt_abc123",
    "changes": {
      "magnitude": {
        "old": 4.2,
        "new": 4.4
      }
    }
  }
}
```

### Capteur hors ligne

**Événement :** `sensor.offline`

Déclenché quand un capteur passe hors ligne.

```json
{
  "type": "sensor.offline",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "sensor_id": "sen_abc123",
    "station_code": "GRIL01",
    "last_seen": "2024-01-15T14:30:00Z",
    "network_id": "net_xyz789"
  }
}
```

### Capteur en ligne

**Événement :** `sensor.online`

Déclenché quand un capteur revient en ligne.

```json
{
  "type": "sensor.online",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "sensor_id": "sen_abc123",
    "station_code": "GRIL01",
    "offline_duration_seconds": 3600,
    "network_id": "net_xyz789"
  }
}
```

## Format webhook

### Requête HTTP

Les webhooks sont envoyés comme requêtes HTTP POST :

```http
POST /votre-endpoint HTTP/1.1
Host: votre-serveur.com
Content-Type: application/json
X-Grillo-Signature: sha256=abc123...
X-Grillo-Event: event.detected
X-Grillo-Delivery: dlv_xyz789
```

### En-têtes

| En-tête | Description |
|---------|-------------|
| Content-Type | Toujours `application/json` |
| X-Grillo-Signature | Signature HMAC pour vérification |
| X-Grillo-Event | Type d'événement |
| X-Grillo-Delivery | ID de livraison unique |

## Vérifier les webhooks

Utilisez la signature pour vérifier que les requêtes viennent de Grillo.

### Format de signature

```
X-Grillo-Signature: sha256=<signature>
```

### Vérification (Node.js)

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

// Dans votre handler
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-grillo-signature'];
  const payload = JSON.stringify(req.body);

  if (!verifyWebhook(payload, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Signature invalide');
  }

  // Traiter le webhook
  res.status(200).send('OK');
});
```

### Vérification (Python)

```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = 'sha256=' + hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected)
```

## Répondre aux webhooks

### Réponse de succès

Retournez un statut 2xx pour accuser réception :

```http
HTTP/1.1 200 OK
```

### Gestion des échecs

Les réponses non-2xx déclenchent un réessai :
- Réessai 1 : Après 1 minute
- Réessai 2 : Après 5 minutes
- Réessai 3 : Après 30 minutes
- Puis marqué comme échoué

## Gérer les webhooks

### Lister les webhooks

```http
GET /v1/webhooks
```

### Obtenir les détails d'un webhook

```http
GET /v1/webhooks/{webhook_id}
```

### Mettre à jour un webhook

```http
PATCH /v1/webhooks/{webhook_id}
```

```json
{
  "events": ["event.detected"],
  "active": true
}
```

### Supprimer un webhook

```http
DELETE /v1/webhooks/{webhook_id}
```

### Voir l'historique des livraisons

```http
GET /v1/webhooks/{webhook_id}/deliveries
```

## Tester les webhooks

### Endpoint de test

Envoyer un webhook de test :

```http
POST /v1/webhooks/{webhook_id}/test
```

### Utiliser webhook.site

Pour le développement :
1. Allez sur [webhook.site](https://webhook.site)
2. Copiez votre URL unique
3. Configurez-la comme endpoint webhook
4. Voyez les requêtes entrantes

## Bonnes pratiques

### Conception de l'endpoint

- Répondre rapidement (< 5 secondes)
- Traiter de manière asynchrone si nécessaire
- Retourner 200 immédiatement, traiter après

### Gestion des erreurs

- Implémenter l'idempotence (les livraisons peuvent être réessayées)
- Utiliser l'ID de livraison pour détecter les doublons
- Journaliser les échecs pour le débogage

### Sécurité

- Toujours vérifier les signatures
- Utiliser des endpoints HTTPS
- Faire une rotation des secrets périodiquement

## Dépannage

### Webhooks non reçus

1. Vérifier que le webhook est actif
2. Vérifier que l'URL est correcte
3. S'assurer que l'endpoint est accessible publiquement
4. Vérifier les règles de pare-feu
5. Examiner l'historique des livraisons

### Échec de vérification de signature

1. Vérifier que le secret correspond
2. Vérifier le format du payload (JSON brut)
3. Vérifier les problèmes d'encodage de caractères

### Latence élevée

1. Retourner 200 immédiatement
2. Traiter en arrière-plan
3. Utiliser une file de messages si nécessaire

## Guides connexes

- [Configuration des alertes](/events/alerts/alert-configuration)
- [Intégration API](/events/alerts/api-integration)
