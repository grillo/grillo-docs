---
sidebar_position: 2
title: Authentification
---

# Authentification API

Comment s'authentifier avec l'API Grillo.

## Aperçu

L'API Grillo utilise des clés API pour l'authentification. Chaque requête doit inclure une clé API valide.

## Obtenir une clé API

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Naviguez vers Paramètres → Clés API
3. Cliquez sur **"Créer une clé API"**
4. Configurez les permissions de la clé
5. Copiez et stockez la clé de manière sécurisée

[Gestion détaillée des clés API →](/dashboard/settings/api-keys)

:::warning
Les clés API ne sont affichées qu'une seule fois lors de leur création. Stockez-les de manière sécurisée.
:::

## Utiliser votre clé API

### Token Bearer (recommandé)

Incluez la clé API dans l'en-tête Authorization :

```http
GET /v1/sensors HTTP/1.1
Host: api.grillo.io
Authorization: Bearer VOTRE_CLE_API
```

Exemple avec curl :

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" \
  https://api.grillo.io/v1/sensors
```

### Paramètre de requête

Alternativement, passez-la comme paramètre de requête :

```http
GET /v1/sensors?api_key=VOTRE_CLE_API HTTP/1.1
Host: api.grillo.io
```

:::note
La méthode par en-tête est préférée car elle garde les clés hors des URLs et des journaux.
:::

## Permissions des clés API

Les clés peuvent avoir différents niveaux de permission :

| Permission | Autorise |
|------------|----------|
| read:sensors | Voir les informations des capteurs |
| read:events | Voir les données d'événements |
| read:networks | Voir les informations réseau |
| write:sensors | Modifier la configuration des capteurs |
| write:networks | Modifier les paramètres réseau |
| admin | Accès complet |

Demandez uniquement les permissions dont votre application a besoin.

## Exemples de code

### Python

```python
import requests

API_KEY = "votre_cle_api"
BASE_URL = "https://api.grillo.io/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}"
}

response = requests.get(f"{BASE_URL}/sensors", headers=headers)
sensors = response.json()
```

### JavaScript/Node.js

```javascript
const API_KEY = 'votre_cle_api';
const BASE_URL = 'https://api.grillo.io/v1';

const response = await fetch(`${BASE_URL}/sensors`, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

const sensors = await response.json();
```

### cURL

```bash
API_KEY="votre_cle_api"

curl -H "Authorization: Bearer $API_KEY" \
  https://api.grillo.io/v1/sensors
```

## Réponses d'erreur

### 401 Non autorisé

La clé API est manquante ou invalide :

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}
```

**Solutions :**
- Vérifiez que la clé API est incluse
- Vérifiez que la clé n'est pas révoquée
- Vérifiez les fautes de frappe

### 403 Interdit

La clé API n'a pas les permissions requises :

```json
{
  "error": {
    "code": "forbidden",
    "message": "Insufficient permissions for this action"
  }
}
```

**Solutions :**
- Vérifiez que la clé a les permissions requises
- Demandez des permissions supplémentaires
- Utilisez une clé différente

## Bonnes pratiques de sécurité

### À faire

- Stocker les clés dans des variables d'environnement
- Utiliser des systèmes de gestion de secrets
- Faire une rotation des clés périodiquement
- Utiliser des clés séparées par application
- Accorder le minimum de permissions requises

### À ne pas faire

- Commiter les clés dans le contrôle de version
- Inclure les clés dans le code côté client
- Partager les clés en texte clair
- Utiliser les clés de production pour les tests
- Ignorer la compromission d'une clé

## Rotation des clés

Faites périodiquement une rotation des clés pour la sécurité :

1. Créer une nouvelle clé API
2. Mettre à jour votre application avec la nouvelle clé
3. Vérifier que l'application fonctionne
4. Révoquer l'ancienne clé

## Si une clé est compromise

1. **Révoquer immédiatement** - Aller dans les paramètres des clés API
2. **Créer une nouvelle clé** - Générer un remplacement
3. **Mettre à jour les applications** - Déployer la nouvelle clé
4. **Vérifier les journaux** - Examiner les accès non autorisés
5. **Enquêter** - Déterminer la cause de l'exposition

## Guides connexes

- [Gestion des clés API](/dashboard/settings/api-keys)
- [Endpoints API](/api/endpoints)
