---
sidebar_position: 1
title: Capteurs
---

# Capteurs

La section Capteurs de Grillo Cloud vous permet de surveiller, configurer et gérer vos appareils Grillo.

## Aperçu

Après avoir ajouté des capteurs à un réseau, vous pouvez :
- Voir les capteurs sur une carte ou dans un tableau
- Surveiller le statut des capteurs en temps réel
- Configurer les paramètres des capteurs à distance
- Voir les informations détaillées des capteurs
- Exporter les données des capteurs

## Accéder aux capteurs

1. Accédez à votre réseau
2. Les capteurs sont affichés dans la zone principale du tableau de bord
3. Basculez entre les vues Carte et Tableau

## Vues des capteurs

### Vue carte

Visualisez les emplacements des capteurs géographiquement :
- Capteurs affichés comme marqueurs sur la carte
- Codés par couleur selon le statut
- Cliquez pour une info rapide
- Zoomez et déplacez-vous pour explorer

[Guide de la vue carte →](/dashboard/sensors/map-view)

### Vue tableau

Voir les capteurs dans un format tabulaire :
- Colonnes triables
- Filtrable par statut
- Accès rapide aux détails
- Opérations en masse

[Guide de la vue tableau →](/dashboard/sensors/table-view)

### Panneau de détails du capteur

Voir des informations complètes pour un seul capteur :
- Statut en temps réel
- Détails de configuration
- Données récentes
- Métriques de santé

[Guide des détails du capteur →](/dashboard/sensors/sensor-details)

## Cycle de vie du capteur

```
1. Provisionner → 2. Ajouter au réseau → 3. Configurer → 4. Surveiller → 5. Maintenir
```

| Étape | Description |
|-------|-------------|
| **Provisionner** | Connecter le capteur à Grillo Cloud |
| **Ajouter au réseau** | Enregistrer le capteur dans un réseau spécifique |
| **Configurer** | Définir le nom de station, l'emplacement, les métadonnées |
| **Surveiller** | Voir le statut et les données dans le tableau de bord |
| **Maintenir** | Mettre à jour les paramètres, dépanner les problèmes |

## Statut du capteur

Les capteurs peuvent avoir les statuts suivants :

| Statut | Icône | Description |
|--------|-------|-------------|
| En ligne | Vert | Connecté et en streaming de données |
| Hors ligne | Gris | Actuellement non connecté |
| Avertissement | Jaune | Connecté mais avec des problèmes |
| Erreur | Rouge | Problème nécessitant une attention |

## Guides de cette section

- [Ajouter un capteur](/dashboard/sensors/adding-sensor)
- [Vue carte](/dashboard/sensors/map-view)
- [Vue tableau](/dashboard/sensors/table-view)
- [Détails du capteur](/dashboard/sensors/sensor-details)
- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
- [Nommage des stations (FDSN)](/dashboard/sensors/station-naming)
- [Informations de localisation](/dashboard/sensors/location-info)
- [Statut du capteur](/dashboard/sensors/sensor-status)

## Actions rapides

Tâches courantes des capteurs :

| Tâche | Comment faire |
|-------|---------------|
| Ajouter un capteur | Cliquez sur « Ajouter un capteur » dans la vue réseau |
| Trouver un capteur | Utilisez la recherche ou le filtre dans la vue tableau |
| Vérifier le statut | Voir la colonne/icône de statut |
| Modifier les paramètres | Cliquez sur le capteur → Onglet Paramètres |
| Supprimer un capteur | Paramètres du capteur → Supprimer |

## Permissions

| Action | Propriétaire | Admin | Membre | Lecteur |
|--------|--------------|-------|--------|---------|
| Voir les capteurs | Oui | Oui | Oui | Oui |
| Ajouter des capteurs | Oui | Oui | Oui | Non |
| Configurer les capteurs | Oui | Oui | Oui | Non |
| Supprimer des capteurs | Oui | Oui | Oui | Non |
| Exporter les données | Oui | Oui | Oui | Non |
