---
sidebar_position: 3
title: Intégration API
---

# Intégration API pour les alertes

Intégrez les alertes d'événements Grillo avec vos systèmes en utilisant des webhooks et des APIs.

## Options d'intégration

### Webhooks (Push)

Grillo pousse les événements vers votre endpoint :
- Livraison en temps réel
- Pas de polling requis
- Configurez une fois, recevez automatiquement

### API (Pull)

Interrogez Grillo pour les événements :
- Accès à la demande
- Requêtes historiques
- Contrôle total sur le timing

## Intégration Webhook

### Configurer un webhook

1. Accédez à la Configuration des alertes
2. Créez ou modifiez une règle d'alerte
3. Activez le canal **« Webhook »**
4. Entrez l'URL de votre endpoint
5. Configurez l'authentification
6. Enregistrez la règle

### Exigences du endpoint webhook

Votre endpoint doit :
- Accepter les requêtes HTTP POST
- Gérer les charges utiles JSON
- Répondre dans les 30 secondes
- Retourner un statut 2xx pour succès

### Format de la charge utile

Charge utile du webhook d'événement :

```json
{
  "event_type": "earthquake",
  "event_id": "evt_abc123xyz",
  "timestamp": "2024-01-15T14:32:45.123Z",
  "network_id": "net_123",
  "network_name": "Mon réseau sismique",
  "origin": {
    "time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "depth_uncertainty_km": 2.0,
    "location_uncertainty_km": 3.5
  },
  "magnitude": {
    "value": 4.2,
    "type": "ML",
    "uncertainty": 0.2
  },
  "location_description": "5 km NE de San Francisco, CA",
  "quality": {
    "stations_used": 12,
    "azimuthal_gap": 85,
    "rms_residual": 0.45,
    "status": "automatic"
  },
  "alert_rule_id": "rule_xyz789",
  "alert_rule_name": "Événements M4+"
}
```

### Champs de la charge utile

| Champ | Type | Description |
|-------|------|-------------|
| event_type | string | Toujours "earthquake" |
| event_id | string | Identifiant unique de l'événement |
| timestamp | string | Quand l'alerte a été envoyée (ISO 8601) |
| network_id | string | ID de votre réseau |
| origin.time | string | Heure d'origine du séisme |
| origin.latitude | number | Latitude de l'épicentre |
| origin.longitude | number | Longitude de l'épicentre |
| origin.depth_km | number | Profondeur en kilomètres |
| magnitude.value | number | Valeur de magnitude |
| magnitude.type | string | Type de magnitude (ML, Mw, etc.) |

### Authentification

**Option 1 : En-tête de clé API**
```http
POST /votre-endpoint HTTP/1.1
X-Grillo-API-Key: votre-secret-partage
Content-Type: application/json
```

**Option 2 : Bearer token**
```http
POST /votre-endpoint HTTP/1.1
Authorization: Bearer votre-token
Content-Type: application/json
```

**Option 3 : Auth basique**
```http
POST /votre-endpoint HTTP/1.1
Authorization: Basic base64(utilisateur:motdepasse)
Content-Type: application/json
```

### Vérifier les requêtes

Pour vérifier que les requêtes viennent de Grillo :

**Vérifier la signature (si disponible) :**
```http
X-Grillo-Signature: sha256=abc123...
```

Calculez le HMAC-SHA256 du corps avec votre secret et comparez.

### Exemple d'endpoint (Node.js)

```javascript
const express = require('express');
const app = express();

app.post('/grillo-webhook', express.json(), (req, res) => {
  const event = req.body;

  // Vérifier la clé API
  if (req.headers['x-grillo-api-key'] !== process.env.GRILLO_SECRET) {
    return res.status(401).send('Non autorisé');
  }

  // Traiter l'événement
  console.log(`Séisme détecté : M${event.magnitude.value}`);
  console.log(`Localisation : ${event.location_description}`);

  // Répondre avec succès
  res.status(200).send('OK');
});

app.listen(3000);
```

### Exemple d'endpoint (Python)

```python
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/grillo-webhook', methods=['POST'])
def handle_event():
    # Vérifier la clé API
    api_key = request.headers.get('X-Grillo-API-Key')
    if api_key != os.environ.get('GRILLO_SECRET'):
        return 'Non autorisé', 401

    event = request.json

    # Traiter l'événement
    print(f"Séisme : M{event['magnitude']['value']}")
    print(f"Localisation : {event['location_description']}")

    return 'OK', 200

if __name__ == '__main__':
    app.run(port=3000)
```

### Comportement de réessai

Si votre endpoint échoue :
1. Tentative initiale
2. Réessai après 1 minute
3. Réessai après 5 minutes
4. Réessai après 30 minutes
5. Alerte marquée comme échouée

Les échecs sont enregistrés et visibles dans l'historique des alertes.

## Intégration API

### Authentification

Incluez votre clé API dans les requêtes :
```http
Authorization: Bearer VOTRE_CLE_API
```

[Gestion des clés API →](/dashboard/settings/api-keys)

### Requêter les événements

**Obtenir les événements récents :**
```http
GET /api/v1/events?limit=10
```

**Filtrer par magnitude :**
```http
GET /api/v1/events?min_magnitude=4.0
```

**Filtrer par date :**
```http
GET /api/v1/events?start=2024-01-01&end=2024-01-31
```

**Filtrer par localisation :**
```http
GET /api/v1/events?lat=37.77&lon=-122.42&radius=100
```

### Format de réponse

```json
{
  "events": [
    {
      "event_id": "evt_abc123",
      "origin": { ... },
      "magnitude": { ... },
      ...
    }
  ],
  "total": 42,
  "page": 1,
  "limit": 10
}
```

[Documentation API complète →](/api)

## Exemples d'intégration

### Notification Slack

```javascript
const axios = require('axios');

async function sendToSlack(event) {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `🌍 Séisme détecté !`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*M${event.magnitude.value}* séisme détecté\n` +
                `📍 ${event.location_description}\n` +
                `🕐 ${event.origin.time}`
        }
      }
    ]
  });
}
```

### Journalisation en base de données

```python
def log_to_database(event):
    cursor.execute("""
        INSERT INTO earthquakes
        (event_id, time, lat, lon, depth, magnitude)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        event['event_id'],
        event['origin']['time'],
        event['origin']['latitude'],
        event['origin']['longitude'],
        event['origin']['depth_km'],
        event['magnitude']['value']
    ))
    connection.commit()
```

### Alerte SMS (Twilio)

```javascript
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

async function sendSMS(event) {
  await client.messages.create({
    body: `ALERTE SÉISME : M${event.magnitude.value} - ${event.location_description}`,
    from: '+1234567890',
    to: '+0987654321'
  });
}
```

## Tests

### Outils de test de webhook

Utilisez-les pour tester votre endpoint :
- [Webhook.site](https://webhook.site)
- [RequestBin](https://requestbin.com)
- Tunnels locaux (ngrok)

### Tester depuis Grillo

1. Configurez le webhook avec une URL de test
2. Allez dans Configuration des alertes
3. Cliquez sur **« Envoyer un test »**
4. Vérifiez la charge utile reçue

### Exemple de charge utile de test

```bash
curl -X POST https://votre-endpoint.com/grillo-webhook \
  -H "Content-Type: application/json" \
  -H "X-Grillo-API-Key: votre-secret" \
  -d '{
    "event_type": "earthquake",
    "event_id": "test_123",
    "magnitude": {"value": 4.5, "type": "ML"},
    "origin": {
      "latitude": 37.77,
      "longitude": -122.42,
      "depth_km": 10
    },
    "location_description": "Événement de test"
  }'
```

## Dépannage

### Le webhook ne reçoit pas d'événements

1. Vérifiez que l'URL de l'endpoint est correcte
2. Vérifiez que l'endpoint est accessible publiquement
3. Vérifiez que le pare-feu autorise les IPs Grillo
4. Examinez les journaux du serveur
5. Testez avec webhook.site

### Échec d'authentification

1. Vérifiez que les identifiants correspondent
2. Vérifiez le nom/format de l'en-tête
3. Assurez-vous qu'il n'y a pas d'espaces supplémentaires
4. Essayez de régénérer le secret

### Événements retardés

1. Vérifiez le temps de réponse de l'endpoint
2. Vérifiez qu'il n'y a pas de limitation de débit
3. Examinez l'historique des réessais
4. Vérifiez les problèmes de réseau

## Guides connexes

- [Configuration des alertes](/events/alerts/alert-configuration)
- [Documentation API](/api)
- [Clés API](/dashboard/settings/api-keys)
