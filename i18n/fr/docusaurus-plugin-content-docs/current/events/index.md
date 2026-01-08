---
sidebar_position: 4
title: Événements
---

# Événements et détection

Le système d'Événements est la fonctionnalité avancée de Grillo Cloud pour la détection automatique des séismes, le catalogage et les alertes.

:::info Fonctionnalité Premium
La détection d'événements est disponible en complément de l'abonnement standard Grillo Cloud. [Contactez les ventes](https://grillo.io) pour les tarifs.
:::

## Aperçu

Le système d'Événements fournit :
- **Détection automatique** - Séismes détectés à partir des données de votre réseau
- **Catalogue d'événements** - Base de données consultable des événements détectés
- **Alertes en temps réel** - Notification immédiate des événements significatifs
- **Accès API** - Accès programmatique aux données d'événements

## Comment ça fonctionne

```
Données capteur → Algorithme de détection → Traitement des événements → Alertes/Catalogue
```

1. **Collecte de données** - Les capteurs transmettent les données à Grillo Cloud
2. **Détection** - Les algorithmes analysent les données pour détecter les signaux sismiques
3. **Traitement** - Les événements sont caractérisés (localisation, magnitude)
4. **Sortie** - Alertes envoyées et événements ajoutés au catalogue

## Fonctionnalités clés

### Détection automatique

Le système surveille en continu votre réseau :
- Détection des ondes P pour l'alerte précoce
- Confirmation multi-stations
- Filtrage des faux positifs
- Fonctionnement automatique 24h/24 et 7j/7

[Comment fonctionne la détection →](/events/how-detection-works)

### Catalogue d'événements

Une base de données consultable des séismes détectés :
- Date, heure, localisation, magnitude
- Détails et paramètres des événements
- Capacités d'export
- Archives historiques

[Utiliser le catalogue d'événements →](/events/event-catalog)

### Alertes en temps réel

Soyez notifié immédiatement quand des événements se produisent :
- Notifications par email
- Livraison Webhook/API
- Seuils configurables
- Canaux de livraison multiples

[Configuration des alertes →](/events/alerts)

### Intégration API

Accédez aux données d'événements de manière programmatique :
- Flux d'événements en temps réel
- Requêtes historiques
- Livraison par webhook
- Formats standards

[Intégration API →](/events/alerts/api-integration)

## Démarrer avec les Événements

### 1. S'abonner aux Événements

Contactez Grillo pour ajouter les Événements à votre abonnement :
- [Contactez les ventes](https://grillo.io)
- Événements activés par réseau

### 2. Configurer votre réseau

Assurez-vous que votre réseau est prêt :
- Nombre minimum de capteurs (généralement 4+)
- Localisations précises des capteurs
- Capteurs en ligne et en streaming

### 3. Activer la détection

Une fois abonné :
1. Accédez aux Paramètres du réseau
2. Activez « Détection d'événements »
3. Configurez les paramètres de détection

### 4. Configurer les alertes

Configurez comment vous recevez les notifications d'événements :
1. Allez dans Configuration des alertes
2. Définissez les seuils de magnitude
3. Choisissez les canaux de notification
4. Testez votre configuration

## Exigences

### Exigences minimales du réseau

<!-- TODO: Confirm actual requirements -->

| Exigence | Minimum | Recommandé |
|----------|---------|------------|
| Capteurs | 4 | 10+ |
| Couverture | Rayon de 10 km | Rayon de 50+ km |
| Capteurs en ligne | 3+ | 80%+ |
| Précision de localisation | 100m | 10m |

### Capacités de détection

La qualité de détection dépend de :
- Nombre de capteurs
- Distribution des capteurs
- Qualité des données
- Couverture du réseau

## Guides de cette section

- [Comment fonctionne la détection](/events/how-detection-works)
- [Catalogue d'événements](/events/event-catalog)
- [Détails des événements](/events/event-details)
- [Alertes](/events/alerts)
- [Export de données](/events/data-export)

## Cas d'utilisation

### Alerte précoce

Utilisez la détection d'événements pour :
- Systèmes d'alerte publique
- Systèmes de sécurité automatiques
- Activation de la réponse d'urgence

### Surveillance sismique

Créez des catalogues de séismes pour :
- Recherche et analyse
- Conformité réglementaire
- Archives historiques

### Protection des infrastructures

Intégrez les alertes avec :
- Systèmes de gestion de bâtiments
- Systèmes de sécurité industrielle
- Réseaux de transport
