---
sidebar_position: 3
title: Clés API
---

# Clés API

Générez et gérez des clés API pour accéder aux données Grillo Cloud de manière programmatique.

## Aperçu

Les clés API vous permettent de :
- Accéder aux données des capteurs via l'API
- Intégrer avec des systèmes externes
- Construire des applications personnalisées
- Automatiser l'export de données

## Accéder à la gestion des clés API

1. Accédez à Paramètres → Clés API
2. Ou Profil → Paramètres développeur → Clés API

## Créer une clé API

### Étape 1 : Démarrer la création de clé

1. Cliquez sur **« Créer une clé API »** ou le bouton **« + »**
2. Le formulaire de création de clé s'ouvre

### Étape 2 : Configurer la clé

| Champ | Description |
|-------|-------------|
| Nom | Nom descriptif (ex. « Application Production ») |
| Description | Objectif de cette clé |
| Permissions | Ce à quoi la clé peut accéder |
| Expiration | Quand la clé expire (optionnel) |

### Étape 3 : Définir les permissions

Choisissez ce que la clé peut faire :

| Permission | Description |
|------------|-------------|
| Lire les capteurs | Voir la liste et les données des capteurs |
| Lire les événements | Voir les événements détectés |
| Écrire la configuration | Modifier les paramètres des capteurs |
| Admin | Accès API complet |

:::warning
Suivez le principe du moindre privilège - n'accordez que les permissions réellement nécessaires.
:::

### Étape 4 : Générer la clé

1. Vérifiez les paramètres
2. Cliquez sur **« Créer »**
3. **Copiez la clé immédiatement** - elle ne sera plus affichée

![Clé API créée](/img/placeholder-api-key.svg)
<!-- TODO: Replace with actual screenshot -->

## Gérer les clés API

### Consulter les clés

La liste des clés API affiche :
- Nom de la clé
- Date de création
- Dernière utilisation
- Permissions
- Statut (active/révoquée)

### Détails de la clé

Cliquez sur une clé pour voir :
- Configuration complète
- Statistiques d'utilisation
- Journal d'activité

### Modifier les clés

Vous pouvez modifier :
- Nom et description
- Permissions (peut nécessiter une régénération)
- Date d'expiration

Vous ne pouvez pas modifier :
- La valeur de la clé elle-même
- Date de création

### Révoquer les clés

Pour désactiver une clé :

1. Trouvez la clé dans la liste
2. Cliquez sur **« Révoquer »** ou le menu → Révoquer
3. Confirmez l'action

**Effets de la révocation :**
- La clé cesse immédiatement de fonctionner
- Les appels API avec cette clé échoueront
- Ne peut pas être annulé (créez une nouvelle clé à la place)

### Supprimer les clés

Pour supprimer définitivement une clé :

1. Trouvez la clé dans la liste
2. Cliquez sur **« Supprimer »** ou menu → Supprimer
3. Confirmez la suppression

## Sécurité des clés API

### Bonnes pratiques

1. **Ne jamais partager les clés publiquement**
   - Ne pas commiter dans le contrôle de version
   - Ne pas partager dans les forums publics
   - Utiliser des variables d'environnement

2. **Utiliser des clés séparées pour différents usages**
   - Développement vs production
   - Différentes applications
   - Différents membres de l'équipe

3. **Définir des dates d'expiration**
   - Rotation régulière des clés
   - Expiration automatique des clés inutilisées

4. **Limiter les permissions**
   - N'accorder que ce qui est nécessaire
   - Utiliser lecture seule quand possible

5. **Surveiller l'utilisation**
   - Examiner les journaux d'activité
   - Surveiller les modèles inhabituels
   - Configurer des alertes d'utilisation

### Stocker les clés en sécurité

**À faire :**
- Stocker dans des variables d'environnement
- Utiliser des systèmes de gestion de secrets
- Chiffrer au repos

**À ne pas faire :**
- Coder en dur dans le code source
- Stocker dans des fichiers texte brut
- Partager par email ou chat

### Si une clé est compromise

1. **Révoquer immédiatement** - Désactiver la clé
2. **Créer une nouvelle clé** - Générer un remplacement
3. **Mettre à jour les applications** - Déployer la nouvelle clé
4. **Examiner les journaux** - Vérifier les utilisations non autorisées
5. **Enquêter** - Déterminer comment elle a été exposée

## Limites de débit

Les clés API ont des limites d'utilisation :

<!-- TODO: Confirm actual rate limits -->

| Niveau | Requêtes/minute | Requêtes/jour |
|--------|-----------------|---------------|
| Gratuit | 60 | 10 000 |
| Standard | 300 | 100 000 |
| Premium | 1 000 | Illimité |

### Gérer les limites de débit

Quand les limites sont dépassées :
- L'API renvoie le code de statut 429
- L'en-tête Retry-After indique le temps d'attente
- Implémentez un backoff exponentiel

## Utiliser les clés API

### Authentification

Incluez la clé API dans les requêtes :

**Méthode par en-tête (recommandée) :**
```
Authorization: Bearer VOTRE_CLE_API
```

**Méthode par paramètre de requête :**
```
?api_key=VOTRE_CLE_API
```

### Exemple de requête

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" \
  https://api.grillo.io/v1/sensors
```

[Documentation API complète →](/api)

## Dépannage

### La clé ne fonctionne pas

1. Vérifiez que la clé n'est pas révoquée
2. Vérifiez les permissions de la clé
3. Vérifiez le format correct de l'en-tête
4. Vérifiez les fautes de frappe
5. Assurez-vous que la clé n'a pas expiré

### Erreurs de permission refusée

1. Vérifiez que la clé a la permission requise
2. Vérifiez que la ressource est dans votre organisation
3. Consultez la documentation API pour les permissions requises

### Erreurs de limite de débit

1. Réduisez la fréquence des requêtes
2. Implémentez la mise en cache
3. Utilisez les endpoints par lots
4. Passez au niveau supérieur si nécessaire

## Guides connexes

- [Aperçu de l'API](/api)
- [Authentification API](/api/authentication)
- [Webhooks](/api/webhooks)
