---
sidebar_position: 5
title: Limites de débit
---

# Limites de débit

Comprendre et travailler avec les limites de débit de l'API Grillo.

## Aperçu

Les limites de débit protègent l'API contre les abus et assurent une utilisation équitable pour tous les utilisateurs.

## Limites par niveau

<!-- TODO: Confirm actual rate limits -->

| Niveau | Requêtes/minute | Requêtes/jour | Simultanées |
|--------|-----------------|---------------|-------------|
| Gratuit | 60 | 10 000 | 5 |
| Standard | 300 | 100 000 | 20 |
| Premium | 1 000 | Illimité | 50 |
| Entreprise | Personnalisé | Personnalisé | Personnalisé |

## En-têtes de limite de débit

Chaque réponse inclut des informations sur les limites de débit :

```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1610000000
```

| En-tête | Description |
|---------|-------------|
| X-RateLimit-Limit | Requêtes autorisées par fenêtre |
| X-RateLimit-Remaining | Requêtes restantes |
| X-RateLimit-Reset | Timestamp Unix de réinitialisation de la limite |

## Dépassement des limites

Lorsque vous dépassez la limite de débit :

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Try again in 30 seconds.",
    "retry_after": 30
  }
}
```

## Gérer les limites de débit

### Vérifier les en-têtes

Surveillez votre utilisation via les en-têtes de réponse :

```javascript
const response = await fetch(url, { headers });
const remaining = response.headers.get('X-RateLimit-Remaining');

if (remaining < 10) {
  console.warn('Approche de la limite de débit');
}
```

### Implémenter le backoff

En cas de limitation, attendez avant de réessayer :

```javascript
async function requestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);

    if (response.status !== 429) {
      return response;
    }

    const retryAfter = response.headers.get('Retry-After') || 30;
    await sleep(retryAfter * 1000);
  }

  throw new Error('Nombre maximum de tentatives dépassé');
}
```

### Backoff exponentiel

Pour les échecs répétés :

```javascript
async function exponentialBackoff(fn, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.status !== 429 || i === maxRetries - 1) {
        throw error;
      }
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s, 8s, 16s
      await sleep(delay);
    }
  }
}
```

## Bonnes pratiques

### Réduire les requêtes

**Mettre en cache les réponses :**
- Mettre en cache les données qui ne changent pas fréquemment
- Définir des TTL de cache appropriés

**Regrouper les requêtes :**
- Utiliser les endpoints par lots quand disponibles
- Récupérer plusieurs éléments en une requête

**Ne demander que ce dont vous avez besoin :**
- Utiliser des filtres pour limiter les résultats
- Sélectionner des champs spécifiques si supporté

### Étaler les requêtes

**Éviter les rafales :**
- Distribuer les requêtes dans le temps
- Ne pas tout demander au démarrage

**Implémenter une file d'attente :**
- Mettre en file d'attente les requêtes pendant les charges élevées
- Traiter à un rythme soutenable

### Surveiller l'utilisation

**Suivre la consommation :**
- Journaliser les en-têtes de limite de débit
- Alerter quand on approche des limites

**Analyser les patterns :**
- Identifier les pics d'utilisation
- Optimiser les requêtes haute fréquence

## Exemples de code

### Python avec gestion des limites de débit

```python
import time
import requests

class RateLimitedClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.grillo.io/v1"

    def request(self, endpoint, method="GET", **kwargs):
        url = f"{self.base_url}{endpoint}"
        headers = {"Authorization": f"Bearer {self.api_key}"}

        for attempt in range(3):
            response = requests.request(
                method, url, headers=headers, **kwargs
            )

            if response.status_code != 429:
                return response

            retry_after = int(response.headers.get("Retry-After", 30))
            print(f"Limité, attente de {retry_after}s")
            time.sleep(retry_after)

        response.raise_for_status()
```

### JavaScript avec réessai automatique

```javascript
class GrilloClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.grillo.io/v1';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      ...options.headers
    };

    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await fetch(url, { ...options, headers });

      if (response.status !== 429) {
        return response.json();
      }

      const retryAfter = response.headers.get('Retry-After') || 30;
      await new Promise(r => setTimeout(r, retryAfter * 1000));
    }

    throw new Error('Limite de débit dépassée après les tentatives');
  }
}
```

## Augmenter les limites

### Passer à un niveau supérieur

Les niveaux supérieurs ont des limites plus élevées :
- Contacter les ventes pour une mise à niveau
- Les plans entreprise ont des limites personnalisées

### Demander une augmentation

Pour des besoins spécifiques :
- Contacter le support
- Expliquer le cas d'utilisation
- Des augmentations temporaires peuvent être disponibles

## Guides connexes

- [Authentification](/api/authentication)
- [Endpoints API](/api/endpoints)
