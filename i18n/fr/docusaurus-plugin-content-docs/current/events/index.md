---
sidebar_position: 4
title: Événements
---

# Événements et détection

Le système de détection sismique de Grillo Cloud identifie automatiquement les événements sismiques de votre réseau et vous alerte en temps réel.

:::info Fonctionnalité Premium
La détection d'événements est disponible en option. [Contactez les ventes](https://grillo.io) pour les tarifs.
:::

## Carte en direct

Observez les séismes se dérouler en temps réel avec la Carte en direct. Voyez les détections des stations au moment où elles se produisent et visualisez la propagation des ondes P et S sous forme de cercles en expansion depuis l'épicentre.

![Carte en direct](/img/screenshots/11-live-map.png)

[Guide de la Carte en direct →](/events/live-map)

## Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| [Carte en direct](/events/live-map) | Visualisation en temps réel des détections et propagation des ondes |
| [Catalogue des événements](/events/event-catalog) | Base de données consultable de tous les séismes détectés |
| [Détails des événements](/events/event-details) | Magnitude, localisation, profondeur et données sismiques |
| [Alertes](/events/alerts) | Notifications par email, webhook et API |
| [Export de données](/events/data-export) | Formats CSV, JSON, QuakeML et KML |

## Fonctionnement

```
Données capteurs → Algorithme de détection → Traitement → Alertes et catalogue
```

[Fonctionnement de la détection →](/events/how-detection-works)

## Prérequis

| Prérequis | Minimum | Recommandé |
|-----------|---------|------------|
| Capteurs | 4 | 10+ |
| Couverture | Rayon de 10 km | Rayon de 50+ km |
| Capteurs en ligne | 3+ | 80%+ |
| Précision de localisation | 100 m | 10 m |

## Démarrage

1. [Contactez les ventes](https://grillo.io) pour activer les Événements sur votre réseau
2. Assurez-vous que les capteurs ont des localisations précises configurées
3. Activez la détection dans les Paramètres du réseau
4. Configurez les [seuils d'alerte](/events/alerts/alert-configuration)
